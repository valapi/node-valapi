import { URLSearchParams } from "node:url";

import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";

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

        this.axios = axios.create(this.config.axiosConfig);
    }

    /**
     *
     * @param {AuthCore.Json} account {@link AuthCore.Json JSON} Account Data
     * @param {AuthCore.Config} config Config
     * @returns {AuthService}
     */
    public static fromJSON(account: AuthCore.Json, config: AuthCore.Config = {}): AuthService {
        const authService = new AuthService(config, account);
        authService.fromJSON(account);

        return authService;
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
            this.authenticationInfo = {
                isError: true,
                message: "fail;entitlements_token;"
            };
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
                this.authenticationInfo = {
                    isError: true,
                    message: "fail;access_token;"
                };

                return this.toJSON();
            } else {
                Search_Path = Search_URL.hash;
                Search_Token = `#${Search_Token}`;
            }
        }
        const Search_Params = new URLSearchParams(Search_Path);

        this.access_token = String(Search_Params.get(Search_Token));
        this.id_token = Search_Params.get("id_token") || "";
        this.expires_in = Number(Search_Params.get("expires_in")) || AuthCore.expires_in;
        this.token_type = Search_Params.get("token_type") || AuthCore.token_type;
        this.session_state = Search_Params.get("session_state") || "";

        await this.fromToken(this.access_token);

        // REGION

        if (this.id_token && !this.authenticationInfo.isError) {
            const RegionResponse: AxiosResponse<{
                token: string;
                affinities: {
                    pbe: Region.ID;
                    live: Region.ID;
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
            this.authenticationInfo = {
                isError: true,
                message: "fail;data;"
            };

            return this.toJSON();
        }

        // MFA

        if (TokenResponse.data.type && TokenResponse.data.type === "multifactor") {
            this.authenticationInfo = {
                isMultifactor: true,
                message: "load;verify;"
            };

            return this.toJSON();
        }

        // COOKIE

        const CookieSetStrings = this.cookie.getSetCookieStringsSync("https://auth.riotgames.com");

        if (!CookieSetStrings.find((element: string) => new RegExp(`^ssid`).test(element))) {
            throw new ValError({
                name: "AuthService_Error",
                message: TokenResponse.data.type === "auth" && TokenResponse.data.error ? TokenResponse.data.error : "Cookie is undefined",
                data: TokenResponse.headers
            });
        }

        // URL

        if (TokenResponse.data.type !== "response" || !TokenResponse.data.response) {
            this.authenticationInfo = {
                isError: true,
                message: "fail;response;"
            };

            return this.toJSON();
        }

        // return

        return this.fromUrl(TokenResponse.data.response.parameters.uri);
    }
}
