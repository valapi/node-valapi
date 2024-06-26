import { ValError } from "@valapi/lib";
import type { Region } from "@valapi/lib";

import { AuthRequest } from "./AuthRequest";
import type { PromiseResponse, Response, RequestConfig } from "./AuthRequest";
import { AuthInstance } from "./AuthInstance";
import type { AuthUserInfo } from "./AuthInstance";

type AuthRequestResponse =
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

interface EntitlementsTokenResponse {
    entitlements_token?: string;
}

interface RegionTokenResponse {
    token: string;
    affinities: {
        pbe: Region.ID;
        live: Region.ID;
    };
}

export interface Config extends Omit<RequestConfig, "cookie"> {
    user?: AuthUserInfo;
}

export class Auth extends AuthInstance {
    public readonly request: AuthRequest;

    public constructor(config: Config = {}) {
        super(config.user);

        this.request = new AuthRequest({
            ...config,
            ...{
                cookie: this.cookie
            }
        });

        if (this.isAuthenticated) {
            this.request.headers.setAuthorization(`Bearer ${this.access_token}`);
            this.request.headers.set("X-Riot-Entitlements-JWT", this.entitlements_token);
        }
        this.request.headers.set("Cookie", this.cookie.getSetCookieStringsSync("https://auth.riotgames.com"));
    }

    private analyzeCookie(key: string) {
        if (!this.cookie.getCookiesSync("https://auth.riotgames.com").find(x => x.key === key)) {
            throw new ValError({
                name: "Auth_Cookie_Error",
                message: `${key} cookie not found`,
                data: this.cookie.getSetCookieStringsSync("https://auth.riotgames.com")
            });
        }

        this.request.headers.set("Cookie", this.cookie.getSetCookieStringsSync("https://auth.riotgames.com"));
    }

    protected async authorize(): PromiseResponse<AuthRequestResponse> {
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

        return response;
    }

    public async reauthorize() {
        this.cookie.removeAllCookiesSync();

        const response = await this.authorize();
        this.analyzeCookie("ssid");

        // URI
        if (response.data.type === "response") {
            this.uriTokenization(response.data.response.parameters.uri);
            await this.entitlementsTokenization();

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
        this.analyzeCookie("asid");

        const TokenResponse: Response<AuthRequestResponse> = await this.request.put("https://auth.riotgames.com/api/v1/authorization", {
            type: "auth",
            username: username,
            password: password,
            remember: true
        });
        this.analyzeCookie("ssid");

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
        this.session_state = <string>url.searchParams.get("session_state");

        this.request.headers.setAuthorization(`Bearer ${this.access_token}`);

        super.getTokenInfo();
    }

    protected async entitlementsTokenization() {
        const response: Response<EntitlementsTokenResponse> = await this.request.post("https://entitlements.auth.riotgames.com/api/token/v1");

        if (!response.data.entitlements_token) {
            throw new ValError({
                name: "Auth_Entitlement_Error",
                message: "Entitlement token is undefined",
                data: response
            });
        }

        this.entitlements_token = response.data.entitlements_token;

        this.request.headers.set("X-Riot-Entitlements-JWT", this.entitlements_token);
    }

    public async regionTokenization(): Promise<Region.ID> {
        const response: Response<RegionTokenResponse> = await this.request.put("https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant", {
            id_token: this.id_token
        });

        return response.data.affinities.live;
    }
}
