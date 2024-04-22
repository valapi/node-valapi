import { ValError } from "@valapi/lib";
import type { Region } from "@valapi/lib";

import { AuthRequest } from "./AuthRequest";
import type { AuthPromiseResponse, AuthResponse, AuthRequestConfig } from "./AuthRequest";
import { AuthInstance } from "./AuthInstance";

export type AuthRequestResponse =
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

export interface EntitlementsTokenResponse {
    entitlements_token?: string;
}

export interface RegionTokenResponse {
    token: string;
    affinities: {
        pbe: Region.ID;
        live: Region.ID;
    };
}

export type AuthConfig = Omit<AuthRequestConfig, "cookie">;

export class Auth extends AuthInstance {
    public readonly request: AuthRequest;

    constructor(config: AuthConfig = {}) {
        super();

        this.request = new AuthRequest({
            ...config,
            ...{
                cookie: this.cookie
            }
        });
    }

    protected async authorize(ignoreCookie: boolean = false): AuthPromiseResponse<AuthRequestResponse> {
        const response = await this.request.post<AuthRequestResponse>("https://auth.riotgames.com/api/v1/authorization", {
            client_id: "play-valorant-web-prod",
            nonce: "1",
            redirect_uri: "https://playvalorant.com/opt_in",
            response_mode: "query",
            response_type: "token id_token",
            scope: "account openid"
        });

        // RESPONSE
        if (!response.data || response.data.type === "error" || (response.data.type === "auth" && response.data.error)) {
            throw new ValError({
                name: "Auth_Request_Error",
                message: "Request Error",
                data: response
            });
        }

        // COOKIE
        if (!ignoreCookie && !this.cookie.getCookiesSync("https://auth.riotgames.com").find(x => x.key === "asid")) {
            throw new ValError({
                name: "Auth_Cookie_Error",
                message: "Cookie not found",
                data: this.cookie.getSetCookieStringsSync("https://auth.riotgames.com")
            });
        }

        return response;
    }

    public async reauthorize() {
        this.cookie.removeAllCookiesSync();

        const response = await this.authorize();

        // URI
        if (response.data.type === "response") {
            this.uriTokenization(response.data.response.parameters.uri);

            return;
        }

        throw new ValError({
            name: "Auth_ReAuth_Error",
            message: "Unknown response",
            data: response
        });
    }

    public async login(username: string, password: string) {
        const response = await this.authorize();

        this.request.headers.set("Cookie", this.cookie.getSetCookieStringsSync("https://auth.riotgames.com"));

        const TokenResponse: AuthResponse<AuthRequestResponse> = await this.request.put("https://auth.riotgames.com/api/v1/authorization", {
            type: "auth",
            username: username,
            password: password,
            remember: true
        });

        // MFA
        if (TokenResponse.data.type === "multifactor") {
            this.isMultifactor = true;

            return;
        }

        // URI
        if (TokenResponse.data.type === "response") {
            this.uriTokenization(TokenResponse.data.response.parameters.uri);
            await this.entitlementsTokenization();

            return;
        }

        throw new ValError({
            name: "Auth_Login_Error",
            message: "Unknown response",
            data: response
        });
    }

    protected uriTokenization(uri: string) {
        const url: URL = new URL(uri);

        this.access_token = <string>url.searchParams.get("access_token");
        this.id_token = <string>url.searchParams.get("id_token");
        const token_type = <string>url.searchParams.get("token_type");
        this.session_state = <string>url.searchParams.get("session_state");

        this.request.headers.setAuthorization(`${token_type} ${this.access_token}`);

        super.getTokenInfo();
    }

    protected async entitlementsTokenization() {
        const response: AuthResponse<EntitlementsTokenResponse> = await this.request.post("https://entitlements.auth.riotgames.com/api/token/v1");

        if (!response.data.entitlements_token) {
            throw new ValError({
                name: "Auth_Entitlement_Error",
                message: "Unknown response",
                data: response
            });
        }

        this.entitlements_token = response.data.entitlements_token;

        this.request.headers.set("X-Riot-Entitlements-JWT", this.entitlements_token);
    }

    public async regionTokenization(): Promise<Region.ID> {
        const response: AuthResponse<RegionTokenResponse> = await this.request.put("https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant", {
            id_token: this.id_token
        });

        return response.data.affinities.live;
    }
}
