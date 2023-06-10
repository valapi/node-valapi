import { URLSearchParams } from "node:url";

import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import { HttpsCookieAgent, HttpCookieAgent } from "http-cookie-agent/http";

import { ValError } from "@valapi/lib";
import type { Region } from "@valapi/lib";

import { AuthCore } from "../client/AuthCore";

export namespace AuthService {
    export type TokenResponse =
        | {
              type: "error";
              error: string;
              country: string;
          }
        | {
              type: "response";
              response: {
                  mode: string;
                  parameters: {
                      uri: string;
                  };
              };
              country: string;
          }
        | {
              type: "multifactor";
              multifactor: {
                  email: string;
                  method: string;
                  methods: Array<string>;
                  multiFactorCodeLength: number;
                  mfaVersion: string;
              };
              country: string;
              securityProfile: string;
          }
        | {
              type: "auth";
              error?: string;
              country: string;
          };
}

export class AuthService extends AuthCore {
    protected readonly axios: AxiosInstance;

    /**
     *
     * @param {AuthCore.Config} config Config
     * @param {AuthCore.Json} account {@link AuthCore.Json JSON} Account Data
     */
    public constructor(config: AuthCore.Config, account: AuthCore.Json) {
        super(config);
        this.fromJSON(account);

        this.config = {
            ...config,
            ...{
                axiosConfig: {
                    ...config.axiosConfig,
                    ...{
                        headers: {
                            ...config.axiosConfig?.headers,
                            ...{
                                Cookie: this.cookie.getSetCookieStringsSync("https://auth.riotgames.com").find((element) => new RegExp(`^ssid`).test(element)),
                                Authorization: `${this.token_type} ${this.access_token}`,
                                "X-Riot-Entitlements-JWT": account.entitlements_token
                            }
                        },
                        httpAgent: new HttpCookieAgent({
                            ...{
                                cookies: {
                                    jar: this.cookie
                                },
                                keepAlive: true,
                                host: config.axiosConfig?.proxy ? config.axiosConfig?.proxy.host : undefined,
                                port: config.axiosConfig?.proxy ? config.axiosConfig?.proxy.port : undefined,
                                timeout: config.axiosConfig?.timeout
                            },
                            ...(config.axiosConfig && config.axiosConfig.proxy
                                ? {
                                      host: config.axiosConfig?.proxy.host,
                                      port: config.axiosConfig?.proxy.port
                                  }
                                : {})
                        }),
                        httpsAgent: new HttpsCookieAgent({
                            ...{
                                cookies: {
                                    jar: this.cookie
                                },
                                keepAlive: true,
                                ciphers: AuthCore.Default.ciphers,
                                honorCipherOrder: true,
                                minVersion: "TLSv1.3",
                                maxVersion: "TLSv1.3",
                                rejectUnauthorized: false,
                                timeout: config.axiosConfig?.timeout
                            },
                            ...(config.axiosConfig?.socketPath
                                ? {
                                      path: config.axiosConfig?.socketPath
                                  }
                                : config.axiosConfig?.proxy
                                ? {
                                      host: config.axiosConfig?.proxy.host,
                                      port: config.axiosConfig?.proxy.port
                                  }
                                : {})
                        })
                    }
                }
            }
        };

        this.axios = axios.create(this.config.axiosConfig);
    }

    // authentication

    /**
     *
     * @param {string} token Access Token
     * @returns {Promise<void>}
     */
    private async fromToken(token: string): Promise<void> {
        this.access_token = token;

        // ENTITLEMENTS

        const EntitlementsResponse: AxiosResponse<{
            entitlements_token?: string;
        }> = await this.axios.post(
            "https://entitlements.auth.riotgames.com/api/token/v1",
            {},
            {
                headers: {
                    Authorization: `${this.token_type} ${this.access_token}`
                }
            }
        );

        if (EntitlementsResponse.data.entitlements_token) {
            this.entitlements_token = EntitlementsResponse.data.entitlements_token;
        } else {
            this.isAuthenticationError = true;
        }
    }

    /**
     *
     * @param {string} TokenUrl Token URL
     * @returns {Promise<AuthCore.Json>} Account Data
     */
    public async fromUrl(TokenUrl: string): Promise<AuthCore.Json> {
        // TOKEN

        const Search_URL: URL = new URL(TokenUrl);
        let Search_Path: string = Search_URL.search;
        let Search_Token = "access_token";
        if (!Search_Path) {
            if (!Search_URL.hash) {
                this.isAuthenticationError = true;

                return this.toJSON();
            } else {
                Search_Path = Search_URL.hash;
                Search_Token = `#${Search_Token}`;
            }
        }
        const Search_Params = new URLSearchParams(Search_Path);

        this.access_token = String(Search_Params.get(Search_Token));
        this.id_token = Search_Params.get("id_token") || "";
        this.expires_in = Number(Search_Params.get("expires_in") || AuthCore.expires_in);
        this.token_type = Search_Params.get("token_type") || AuthCore.token_type;
        this.session_state = Search_Params.get("session_state") || "";

        await this.fromToken(this.access_token);

        // REGION

        if (this.id_token && this.isAuthenticationError === false) {
            const RegionResponse: AxiosResponse<{
                token: string;
                affinities: {
                    pbe: Region.Identify;
                    live: Region.Identify;
                };
            }> = await this.axios.put(
                "https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant",
                {
                    id_token: this.id_token
                },
                {
                    headers: {
                        Authorization: `${this.token_type} ${this.access_token}`,
                        "X-Riot-Entitlements-JWT": this.entitlements_token
                    }
                }
            );

            this.region.pbe = RegionResponse.data?.affinities?.pbe || AuthCore.Default.region.pbe;
            this.region.live = RegionResponse.data?.affinities?.live || AuthCore.Default.region.live;
        }

        // return

        return this.toJSON();
    }

    /**
     *
     * @param {AxiosResponse<AuthService.TokenResponse>} TokenResponse Token Response
     * @returns {Promise<AuthCore.Json>} Account Data
     */
    public async fromResponse(TokenResponse: AxiosResponse<AuthService.TokenResponse>): Promise<AuthCore.Json> {
        if (!TokenResponse.data || !TokenResponse.data.type || TokenResponse.data.type === "error") {
            this.isAuthenticationError = true;

            return this.toJSON();
        }

        // MFA

        if (TokenResponse.data.type && TokenResponse.data.type === "multifactor") {
            this.isMultifactorAccount = true;

            return this.toJSON();
        }

        // COOKIE

        if (!TokenResponse.headers["set-cookie"] || !TokenResponse.headers["set-cookie"].find((element: string) => new RegExp(`^ssid`).test(element))) {
            throw new ValError({
                name: "AuthService_Error",
                message: TokenResponse.data.type === "auth" && TokenResponse.data.error ? TokenResponse.data.error : "Cookie is undefined",
                data: TokenResponse.headers
            });
        }

        // URL

        if (TokenResponse.data.type !== "response" || !TokenResponse.data.response) {
            this.isAuthenticationError = true;

            return this.toJSON();
        }

        // return

        return await this.fromUrl(TokenResponse.data.response.parameters.uri);
    }
}
