import { ValError, ValEncryption } from "@valapi/lib";
import type { Region } from "@valapi/lib";

import { AuthRequest } from "./AuthRequest";
import type { PromiseResponse, Response, RequestConfig } from "./AuthRequest";
import { AuthInstance } from "./AuthInstance";
import type { AuthUserInfo } from "./AuthInstance";
import { getResponseCookies } from "../utils/cookie";

interface ErrorResponse {
    type: "error";
    error: string;
    country: string;
}

type CookieRegisterResponse =
    | ErrorResponse
    | {
          type: "auth";
          country: string;
      };

interface CaptchaTokenResponse {
    type: "auth";
    auth: {
        auth_method: "riot_identity";
    };
    captcha: {
        type: "hcaptcha";
        hcaptcha: {
            key: string;
            data: string;
        };
    };
    suuid: string;
    cluster: string;
    country: string;
    platform: string;
}

type CaptchaResponse = CaptchaTokenResponse | ErrorResponse;

interface CaptchaTokenErrorResponse extends CaptchaTokenResponse {
    error: string;
}

type RiotIdentityResponse =
    | CaptchaTokenErrorResponse
    | {
          type: "success";
          success: {
              login_token: string;
              redirect_url: string;
              is_console_link_session: boolean;
              auth_method: "riot_identity";
              puuid: string;
          };
          country: string;
          timestamp: `${number}`;
          platform: string;
      }
    | {
          type: "multifactor";
          multifactor: {
              method: string;
              methods: Array<string>;
              email: string;
              mode: string;
              auth_method: "riot_identity";
          };
          country: string;
          timestamp: `${number}`;
          platform: string;
          error?: string;
      };

type UriResponse =
    | ErrorResponse
    | {
          type: "response";
          response: {
              mode: string;
              parameters: {
                  uri: string;
              };
          };
          country: string;
      };

interface EntitlementsTokenResponse {
    entitlements_token?: string;
}

interface GeoTokenResponse {
    token: string;
    affinities: {
        pbe: Region.ID;
        live: Region.ID;
    };
}

export interface hCaptcha {
    sitekey: string;
    rqdata: string;
}

export interface LoginData {
    username: string;
    password: string;
    captcha: string;
}

export interface Config extends Omit<RequestConfig, "cookie"> {
    user?: AuthUserInfo;
    sdk?: string;
}

export class Auth extends AuthInstance {
    public readonly request: AuthRequest;

    readonly sdk;

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

        // GET https://valorant-api.com/internal/ritoclientversion["riotGamesApiInfo"]["VS_FIXEDFILEINFO"]["FileVersion"]
        this.sdk = config.sdk || "24.6.1.3774";
    }

    private hasCookie(key: string): boolean {
        return this.cookie.getCookiesSync("https://auth.riotgames.com").find(x => x.key === key) !== undefined;
    }

    private analyzeCookie(key: string) {
        if (!this.hasCookie(key)) {
            throw new ValError({
                name: "Auth_Cookie_Error",
                message: `${key} cookie not found`,
                data: this.cookie.getSetCookieStringsSync("https://auth.riotgames.com")
            });
        }

        this.request.headers.set("Cookie", this.cookie.getSetCookieStringsSync("https://auth.riotgames.com"));
    }

    private analyzeResponseCookie(key: string, response: Response<any>) {
        if (!this.hasCookie(key)) {
            const cookies = getResponseCookies(response);

            for (const cookie of cookies) {
                this.cookie.setCookieSync(cookie, response.config.url ?? cookie.domain ?? "riotgames.com");
            }
        }

        this.analyzeCookie(key);
    }

    public async captcha(): Promise<hCaptcha> {
        const response = await this.request.post<CaptchaResponse>("https://authenticate.riotgames.com/api/v1/login", {
            clientId: "riot-client",
            language: "",
            platform: "windows",
            remember: false,
            riot_identity: {
                language: "en_US",
                state: "auth"
            },
            sdkVersion: this.sdk,
            type: "auth"
        });

        if (response.data.type === "error") {
            throw new ValError({
                name: "Auth_Captcha_Error",
                message: "Unaccept captcha token request",
                data: response
            });
        }

        return {
            sitekey: response.data.captcha.hcaptcha.key,
            rqdata: response.data.captcha.hcaptcha.data
        };
    }

    protected authorize<T>(): PromiseResponse<T> {
        return this.request.post<T>("https://auth.riotgames.com/api/v1/authorization", {
            client_id: "riot-client",
            nonce: ValEncryption.randomString(16),
            redirect_uri: "http://localhost/redirect",
            response_type: "token id_token",
            scope: "account openid"
        });
    }

    public async reauthorize() {
        this.cookie.removeAllCookiesSync();

        const uriResponse = await this.authorize<UriResponse>();

        this.analyzeResponseCookie("ssid", uriResponse);

        await this.uriTokenization(uriResponse);
    }

    public async login(data: LoginData) {
        // # register

        const response = await this.authorize<CookieRegisterResponse>();

        if (response.data.type === "error") {
            throw new ValError({
                name: "Auth_Cookie_Error",
                message: "Cookie Register Error",
                data: response
            });
        }

        this.analyzeResponseCookie("asid", response);

        // # login

        const loginResponse: Response<RiotIdentityResponse> = await this.request.put("https://authenticate.riotgames.com/api/v1/login", {
            riot_identity: {
                captcha: `hcaptcha ${data.captcha}`,
                language: "en_US",
                password: data.password,
                remember: true,
                username: data.username
            },
            type: "auth"
        });

        if (loginResponse.data.type === "auth") {
            throw new ValError({
                name: "Auth_Identity_Error",
                message: loginResponse.data.error,
                data: loginResponse
            });
        }

        // # mfa

        if (loginResponse.data.type === "multifactor") {
            this.isMultifactor = true;

            return;
        }

        // # token

        await this.loginTokenization(loginResponse.data.success.login_token);
    }

    public async multifactor(loginCode: number) {
        // # mfa

        const mfaResponse = await this.request.put<RiotIdentityResponse>("https://authenticate.riotgames.com/api/v1/login", {
            multifactor: {
                otp: `${loginCode}`,
                rememberDevice: true
            },
            type: "multifactor"
        });

        if (mfaResponse.data.type !== "success") {
            throw new ValError({
                name: "Auth_Identity_Error",
                message: mfaResponse.data.error ?? "Unknown MFA response",
                data: mfaResponse
            });
        }

        // # token

        await this.loginTokenization(mfaResponse.data.success.login_token);
    }

    protected async loginTokenization(loginToken: string) {
        this.login_token = loginToken;

        // # cookie login

        const cookieLoginResponse = await this.request.post("https://auth.riotgames.com/api/v1/login-token", {
            authentication_type: "RiotAuth",
            code_verifier: "",
            login_token: this.login_token,
            persist_login: true // remember
        });

        this.analyzeResponseCookie("ssid", cookieLoginResponse);

        // # uri

        const uriResponse = await this.authorize<UriResponse>();

        await this.uriTokenization(uriResponse);
    }

    protected async uriTokenization(uriResponse: Response<UriResponse>) {
        if (uriResponse.data.type !== "response") {
            throw new ValError({
                name: "Auth_Token_Error",
                message: "Unknown URI response",
                data: uriResponse
            });
        }

        this.uriParamsTokenization(uriResponse.data.response.parameters.uri);

        await this.entitlementsTokenization();
    }

    protected uriParamsTokenization(uri: string) {
        const url: URL = new URL(uri);

        let searchParams: URLSearchParams;
        if (url.search) {
            // access_token=eyJ....
            searchParams = new URLSearchParams(url.search);
        } else if (url.hash) {
            // #access_token=eyJ....
            searchParams = new URLSearchParams(url.hash.substring(1, url.hash.length));
        } else {
            throw new ValError({
                name: "Auth_Token_Error",
                message: "Unknown URI",
                data: uri
            });
        }

        this.access_token = <string>searchParams.get("access_token");
        this.id_token = <string>searchParams.get("id_token");
        this.session_state = <string>searchParams.get("session_state");

        this.request.headers.setAuthorization(`Bearer ${this.access_token}`);

        super.getTokenInfo();
    }

    protected async entitlementsTokenization() {
        const response: Response<EntitlementsTokenResponse> = await this.request.post("https://entitlements.auth.riotgames.com/api/token/v1");

        if (!response.data.entitlements_token) {
            throw new ValError({
                name: "Auth_Token_Error",
                message: "Entitlement token is undefined",
                data: response
            });
        }

        this.entitlements_token = response.data.entitlements_token;

        this.request.headers.set("X-Riot-Entitlements-JWT", this.entitlements_token);
    }

    public async regionTokenization(): Promise<Region.ID> {
        const response: Response<GeoTokenResponse> = await this.request.put("https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant", {
            id_token: this.id_token
        });

        return response.data.affinities.live;
    }
}
