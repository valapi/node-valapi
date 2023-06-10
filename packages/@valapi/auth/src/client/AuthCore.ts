import type { CreateAxiosDefaults } from "axios";
import { CookieJar } from "tough-cookie";

import { Region, ValBase64 } from "@valapi/lib";

export namespace AuthCore {
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
        isMultifactorAccount: boolean;
        isAuthenticationError: boolean;
        region: {
            pbe: Region.Identify;
            live: Region.Identify;
        };
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
         * Client Config
         */
        client?: {
            /**
             * Client Version
             */
            version?: string;
            /**
             * Client Platform
             */
            platform?: AuthCore.ClientPlatfrom;
        };
        /**
         * Request Config
         */
        axiosConfig?: CreateAxiosDefaults;
        /**
         * Region
         */
        region?: Region.Identify;
    }
}

/**
 * Authentication Core
 */
export class AuthCore {
    private _config: Required<AuthCore.Config> = AuthCore.Default.config;

    private _isMultifactorAccount = false;
    private _isAuthenticationError = false;

    private _createAt: number = Date.now();

    private _cookie: CookieJar = new CookieJar();
    private _access_token = "";
    private _id_token = "";
    private _expires_in = AuthCore.expires_in;
    private _token_type = AuthCore.token_type;
    private _session_state = "";
    private _entitlements_token = "";
    private _region: Required<AuthCore.Json["region"]>;

    protected readonly _isRegionConfig: boolean = false;

    // default

    private static readonly DEFAULT_Region: Required<AuthCore.Json["region"]> = {
        pbe: "na",
        live: "na"
    };
    private static readonly DEFAULT_UserAgent: string = `RiotClient/65.0.10.5130441.0 %s (Windows;10;;Professional, x64)`;
    private static readonly DEFAULT_Ciphers: Array<string> = [
        "ECDHE_ECDSA_AES128_GCM_SHA256",
        "ECDHE_ECDSA_CHACHA20_POLY1305",
        "ECDHE_RSA_AES128_GCM_SHA256",
        "ECDHE_RSA_CHACHA20_POLY1305",
        "ECDHE_ECDSA_AES256_GCM_SHA384",
        "ECDHE_RSA_AES256_GCM_SHA384",
        "AEAD_AES128_GCM_SHA256",
        "AEAD_AES256_GCM_SHA384",
        "AEAD_CHACHA20_POLY1305_SHA256",
        "TLS_AES_128_GCM_SHA256",
        "TLS_CHACHA20_POLY1305_SHA256",
        "TLS_AES_256_GCM_SHA384",
        "TLS_AES_128_CCM_SHA256",
        "TLS_AES_128_CCM_8_SHA256"
    ];
    private static readonly DEFAULT_ClientVersion: string = `release-06.11-shipping-10-893942`;
    private static readonly DEFAULT_ClientPlatform: Required<AuthCore.ClientPlatfrom> = {
        platformType: `PC`,
        platformOS: `Windows`,
        platformOSVersion: `10.0.19043.1.256.64bit`,
        platformChipset: `Unknown`
    };
    private static readonly DEFAULT_config: Required<AuthCore.Config> = {
        client: {
            version: AuthCore.DEFAULT_ClientVersion,
            platform: AuthCore.DEFAULT_ClientPlatform
        },
        axiosConfig: {
            headers: {
                "User-Agent": AuthCore.DEFAULT_UserAgent
            }
        },
        region: AuthCore.DEFAULT_Region.live
    };
    public static readonly Default = {
        region: AuthCore.DEFAULT_Region,
        userAgent: AuthCore.DEFAULT_UserAgent,
        ciphers: AuthCore.DEFAULT_Ciphers.join(":"),
        config: AuthCore.DEFAULT_config
    };

    /**
     *
     * @param {AuthCore.Config} config Config
     */
    public constructor(config: AuthCore.Config = {}) {
        this.config = config;

        if (config.region) {
            this._isRegionConfig = true;
        }

        this._region = {
            ...AuthCore.Default.region,
            ...{
                live: this.config.region ? this.config.region : AuthCore.Default.region.live
            }
        };
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
                client: {
                    ...this._config.client,
                    ...value.client
                },
                axiosConfig: {
                    ...this._config.axiosConfig,
                    ...value.axiosConfig,
                    ...{
                        headers: {
                            ...this._config.axiosConfig.headers,
                            ...value.axiosConfig?.headers,
                            ...{
                                "X-Riot-ClientVersion": this._config.client?.version || value.client?.version || AuthCore.Default.config.client.version,
                                "X-Riot-ClientPlatform": ValBase64.encrypt(JSON.stringify(this._config.client?.platform || value.client?.platform || AuthCore.Default.config.client.platform))
                            }
                        }
                    }
                },
                region: this._isRegionConfig === true ? this._config.region : value.region ? value.region : this._config.region
            }
        };
    }

    public get config(): Required<AuthCore.Config> {
        return this._config;
    }

    // isMultifactorAccount

    protected set isMultifactorAccount(value: boolean) {
        this._isMultifactorAccount = value;
    }

    public get isMultifactorAccount(): boolean {
        return this._isMultifactorAccount;
    }

    // isAuthenticationError

    protected set isAuthenticationError(value: boolean) {
        this._isAuthenticationError = value;
    }

    public get isAuthenticationError(): boolean {
        return this._isAuthenticationError;
    }

    // createAt

    protected set createAt(value: number) {
        this._createAt = value;
    }

    public get createAt(): number {
        return this._createAt;
    }

    // cookie

    protected set cookie(value: CookieJar) {
        this._cookie = value;

        this.config = {
            axiosConfig: {
                headers: {
                    Cookie: this.cookie.getSetCookieStringsSync("https://auth.riotgames.com").find((element) => new RegExp(`^ssid`).test(element))
                }
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

    protected set region(value: Partial<AuthCore.Json["region"]>) {
        this._region = {
            pbe: value.pbe ? value.pbe : this._region && this._region.pbe ? this._region.pbe : AuthCore.Default.region.pbe,
            live: this._isRegionConfig === true ? this.config.region : value.live ? value.live : this._region && this._region.live ? this._region.live : AuthCore.Default.region.live
        };
    }

    public get region(): Required<AuthCore.Json["region"]> {
        return this._region;
    }

    // * data

    /**
     *
     * @param {string} token Access Token
     * @returns {string} Subject
     */
    public getSubject(token: string = this.access_token): string {
        const _token: { sub: string } = JSON.parse(ValBase64.decrypt(token.split(".")[1]));

        return _token.sub;
    }

    /**
     *
     * @param {string} token Access Token
     * @returns {number} Expiration date
     */
    public getExpirationDate(token: string = this.access_token): number {
        const _token: { exp: number } = JSON.parse(ValBase64.decrypt(token.split(".")[1]));

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
            isMultifactorAccount: this.isMultifactorAccount,
            isAuthenticationError: this.isAuthenticationError,
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
        this.isMultifactorAccount = account.isMultifactorAccount;
        this.isAuthenticationError = account.isAuthenticationError;
        this.region =
            this._isRegionConfig === true
                ? {
                      pbe: account.region.pbe,
                      live: this.config.region
                  }
                : account.region;
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
