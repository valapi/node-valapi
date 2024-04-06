import type { CreateAxiosDefaults } from "axios";
import { CookieJar } from "tough-cookie";
import { HttpCookieAgent, HttpsCookieAgent } from "http-cookie-agent/http";
import type { CookieAgent } from "http-cookie-agent/http";
import type { Agent as HttpAgent } from "http";
import type { Agent as HttpsAgent } from "https";

import { Region, ValEncryption } from "@valapi/lib";

export namespace AuthCore {
    export interface JsonRegion {
        pbe: Region.ID;
        live: Region.ID;
    }

    export type JsonAuthenticationInfoMessage = `${"load" | "fail" | "success"};${string};`;

    export interface JsonAuthenticationInfo {
        isError: boolean;
        isMultifactor: boolean;
        message: AuthCore.JsonAuthenticationInfoMessage;
    }

    /**
     * Account Data
     */
    export interface Json {
        cookie: CookieJar.Serialized;
        access_token: string;
        id_token: string;
        expires_in: number;
        token_type: string;
        session_state: string;
        entitlements_token: string;
        createAt: number;
        authenticationInfo: AuthCore.JsonAuthenticationInfo;
        region: AuthCore.JsonRegion;
    }

    /**
     * Client Platfrom
     */
    export interface ClientPlatfrom {
        platformType: string;
        platformOS: string;
        platformOSVersion: string;
        platformChipset: string;
    }

    /**
     * {@link AuthCore Client} Config
     */
    export interface Config {
        /**
         * User Agent
         */
        userAgent?: string;
        /**
         * Client Version
         */
        version?: string;
        /**
         * Client Platform
         */
        platform?: AuthCore.ClientPlatfrom;
        /**
         * Request Config
         */
        axiosConfig?: CreateAxiosDefaults;
        /**
         * Region
         */
        region?: Region.ID;
    }
}

/**
 * Authentication Core
 */
export class AuthCore {
    private static readonly DEFAULT_Region: Required<AuthCore.JsonRegion> = {
        pbe: "na",
        live: "na"
    };
    private static readonly DEFAULT_UserAgent: string = `RiotClient/53.0.0.4494832.4470164 %s (Windows;10;;Professional, x64)`;
    private static readonly DEFAULT_Ciphers: Array<string> = [
        "TLS_AES_128_GCM_SHA256",
        "TLS_CHACHA20_POLY1305_SHA256",
        "TLS_AES_256_GCM_SHA384",
        "TLS_AES_128_CCM_SHA256",
        "TLS_AES_128_CCM_8_SHA256",
        "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
    ];
    private static readonly DEFAULT_ClientVersion: string = `release-08.05-shipping-13-2404755`;
    private static readonly DEFAULT_ClientPlatform: Required<AuthCore.ClientPlatfrom> = {
        platformType: `PC`,
        platformOS: `Windows`,
        platformOSVersion: `10.0.19043.1.256.64bit`,
        platformChipset: `Unknown`
    };
    private static readonly DEFAULT_config: Required<AuthCore.Config> = {
        userAgent: AuthCore.DEFAULT_UserAgent,
        version: AuthCore.DEFAULT_ClientVersion,
        platform: AuthCore.DEFAULT_ClientPlatform,
        axiosConfig: {
            headers: {
                "Content-Type": "application/json",
                "User-Agent": AuthCore.DEFAULT_UserAgent
            }
        },
        region: AuthCore.DEFAULT_Region.live
    };
    public static readonly Default = {
        region: AuthCore.DEFAULT_Region,
        ciphers: AuthCore.DEFAULT_Ciphers.join(":"),
        config: AuthCore.DEFAULT_config
    };

    private _config: Required<AuthCore.Config> = AuthCore.Default.config;

    private _authenticationInfo: AuthCore.JsonAuthenticationInfo = {
        isError: false,
        isMultifactor: false,
        message: "load;client;"
    };

    private _createAt: number = Date.now();

    private _cookie: CookieJar = new CookieJar();
    private _access_token = "";
    private _id_token = "";
    private _expires_in = AuthCore.expires_in;
    private _token_type = AuthCore.token_type;
    private _session_state = "";
    private _entitlements_token = "";
    private _region: Required<AuthCore.JsonRegion> = AuthCore.Default.region;

    protected readonly _isRegionConfig: boolean = false;

    /**
     *
     * @param {AuthCore.Config} config Config
     */
    public constructor(config: AuthCore.Config = {}) {
        this.config = config;

        if (config.region) {
            this._isRegionConfig = true;
        }
    }

    // * settings

    // config

    protected set config(value: Partial<AuthCore.Config>) {
        if (value.region) {
            this.region = {
                live: value.region
            };
        }

        this._config = {
            ...this._config,
            ...value,
            ...{
                axiosConfig: {
                    ...this._config.axiosConfig,
                    ...value.axiosConfig,
                    ...{
                        headers: {
                            ...this._config.axiosConfig.headers,
                            ...value.axiosConfig?.headers,
                            ...{
                                "User-Agent": value.userAgent || this._config.userAgent,
                                "X-Riot-ClientVersion": value.version || this._config.version,
                                "X-Riot-ClientPlatform": ValEncryption.encryptJson(value.platform || this._config.platform)
                            }
                        }
                    }
                },
                region: this.region.live
            }
        };
    }

    public get config(): Required<AuthCore.Config> {
        return this._config;
    }

    // authenticationInfo

    protected set authenticationInfo(value: Partial<AuthCore.JsonAuthenticationInfo>) {
        this._authenticationInfo = {
            ...this._authenticationInfo,
            ...value
        };
    }

    public get authenticationInfo(): AuthCore.JsonAuthenticationInfo {
        return this._authenticationInfo;
    }

    // createAt

    protected set createAt(value: number) {
        this._createAt = value;
    }

    public get createAt(): number {
        return this._createAt;
    }

    // cookie

    protected generateHttpCookieAgent(cookie: CookieJar): CookieAgent<HttpAgent> {
        return new HttpCookieAgent({
            ...{
                cookies: {
                    jar: cookie
                },
                keepAlive: true,
                host: this.config.axiosConfig?.proxy ? this.config.axiosConfig?.proxy.host : undefined,
                port: this.config.axiosConfig?.proxy ? this.config.axiosConfig?.proxy.port : undefined,
                timeout: this.config.axiosConfig?.timeout
            },
            ...(this.config.axiosConfig && this.config.axiosConfig.proxy
                ? {
                      host: this.config.axiosConfig?.proxy.host,
                      port: this.config.axiosConfig?.proxy.port
                  }
                : {})
        });
    }

    protected generateHttpsCookieAgent(cookie: CookieJar): CookieAgent<HttpsAgent> {
        return new HttpsCookieAgent({
            ...{
                cookies: {
                    jar: cookie
                },
                keepAlive: true,
                ciphers: AuthCore.Default.ciphers,
                honorCipherOrder: true,
                minVersion: "TLSv1.2",
                maxVersion: "TLSv1.3",
                rejectUnauthorized: false,
                timeout: this.config.axiosConfig?.timeout
            },
            ...(this.config.axiosConfig?.socketPath
                ? {
                      path: this.config.axiosConfig?.socketPath
                  }
                : this.config.axiosConfig?.proxy
                  ? {
                        host: this.config.axiosConfig?.proxy.host,
                        port: this.config.axiosConfig?.proxy.port
                    }
                  : {})
        });
    }

    protected set cookie(value: CookieJar) {
        this._cookie = value;

        this.config = {
            axiosConfig: {
                headers: {
                    Cookie: value.getCookieStringSync("https://auth.riotgames.com")
                },
                httpAgent: this.generateHttpCookieAgent(value),
                httpsAgent: this.generateHttpsCookieAgent(value)
            }
        };
    }

    public get cookie(): CookieJar {
        return this._cookie;
    }

    // access_token

    protected set access_token(value: string) {
        this._access_token = value;

        this.config = {
            axiosConfig: {
                headers: {
                    Authorization: `${this.token_type} ${this._access_token}`
                }
            }
        };
    }

    public get access_token(): string {
        return this._access_token;
    }

    // id_token

    protected set id_token(value: string) {
        this._id_token = value;
    }

    public get id_token(): string {
        return this._id_token;
    }

    // expires_in

    protected set expires_in(value: number) {
        this._expires_in = value;
    }

    public get expires_in(): number {
        return this._expires_in;
    }

    public static get expires_in(): number {
        return 3600;
    }

    // token_type

    protected set token_type(value: string) {
        this._token_type = value;

        this.config = {
            axiosConfig: {
                headers: {
                    Authorization: `${this._token_type} ${this.access_token}`
                }
            }
        };
    }

    public get token_type(): string {
        return this._token_type;
    }

    public static get token_type(): string {
        return "Bearer";
    }

    // session_state

    protected set session_state(value: string) {
        this._session_state = value;
    }

    public get session_state(): string {
        return this._session_state;
    }

    // entitlements_token

    protected set entitlements_token(value: string) {
        this._entitlements_token = value;

        this.config = {
            axiosConfig: {
                headers: {
                    "X-Riot-Entitlements-JWT": this._entitlements_token
                }
            }
        };
    }

    public get entitlements_token(): string {
        return this._entitlements_token;
    }

    // region

    protected set region(value: Partial<AuthCore.JsonRegion>) {
        if (!this._isRegionConfig) {
            this._region = {
                pbe: value.pbe ? value.pbe : this._region.pbe,
                live: value.live ? value.live : this._region.live
            };
        }
    }

    public get region(): Required<AuthCore.JsonRegion> {
        return this._region;
    }

    // * data

    /**
     *
     * @param {string} token Access Token
     * @returns {string} Subject
     */
    public getSubject(token: string = this.access_token): string {
        const _token: { sub: string } = ValEncryption.decryptJson(token.split(".")[1]);

        return _token.sub;
    }

    /**
     *
     * @param {string} token Access Token
     * @returns {number} Expiration date
     */
    public getExpirationDate(token: string = this.access_token): number {
        const _token: { exp: number } = ValEncryption.decryptJson(token.split(".")[1]);

        return _token.exp * 1000;
    }

    /**
     *
     * @returns {AuthCore.Json} Account Data
     */
    public toJSON(): AuthCore.Json {
        return {
            cookie: this.cookie.serializeSync(),
            access_token: this.access_token,
            id_token: this.id_token,
            expires_in: this.expires_in,
            token_type: this.token_type,
            session_state: this.session_state,
            entitlements_token: this.entitlements_token,
            createAt: this.createAt,
            authenticationInfo: this.authenticationInfo,
            region: this.region
        };
    }

    /**
     *
     * @param {AuthCore.Json} account {@link AuthCore.Json JSON} Account Data
     * @returns {void}
     */
    public fromJSON(account: AuthCore.Json): void {
        this.cookie = CookieJar.deserializeSync(JSON.stringify(account.cookie));
        this.access_token = account.access_token;
        this.id_token = account.id_token || "";
        this.expires_in = account.expires_in || AuthCore.expires_in;
        this.token_type = account.token_type || AuthCore.token_type;
        this.session_state = account.session_state || "";
        this.entitlements_token = account.entitlements_token;
        this.createAt = account.createAt;
        this.authenticationInfo = account.authenticationInfo;
        this.region = account.region;
    }

    /**
     *
     * @param {AuthCore.Json} account {@link AuthCore.Json JSON} Account Data
     * @param {AuthCore.Config} config Config
     * @returns {AuthCore}
     */
    public static fromJSON(account: AuthCore.Json, config?: AuthCore.Config): AuthCore {
        const authCore = new AuthCore(config);
        authCore.fromJSON(account);

        return authCore;
    }
}
