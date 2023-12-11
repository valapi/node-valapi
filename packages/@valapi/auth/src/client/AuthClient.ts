import { CookieJar } from "tough-cookie";

import { ValError } from "@valapi/lib";

import { AuthCore } from "./AuthCore";

import { User as UserAuthenticator } from "../service/User";
import { Multifactor as MultifactorAuthenticator } from "../service/Multifactor";
import { Cookie as CookieAuthenticator } from "../service/Cookie";

/**
 * Authentication Client
 */
export class AuthClient extends AuthCore {
    // authentication

    /**
     * Login to Riot Account
     * @param {string} username Username
     * @param {string} password Password
     * @returns {Promise<void>}
     */
    public async login(username: string, password: string): Promise<void> {
        const ValUser = new UserAuthenticator(this.config, this.toJSON());

        const ValUserAuth = await ValUser.loginform(username, password);
        if (ValUserAuth.authenticationInfo.isError === true) {
            throw new ValError({
                name: "AuthClient_Error",
                message: "Login Error",
                data: ValUserAuth
            });
        }

        this.fromJSON(ValUserAuth);
        this.authenticationInfo = {
            message: "success;login;"
        };
    }

    /**
     * Multi-Factor Authentication
     * @param {number} verificationCode Verification Code
     * @returns {Promise<void>}
     */
    public async verify(verificationCode: number): Promise<void> {
        const ValMultifactor = new MultifactorAuthenticator(this.config, this.toJSON());

        const ValMultifactorAuth = await ValMultifactor.twofactor(verificationCode);
        if (ValMultifactorAuth.authenticationInfo.isError === true) {
            throw new ValError({
                name: "AuthClient_Error",
                message: "Multifactor Error",
                data: ValMultifactorAuth
            });
        }

        this.fromJSON(ValMultifactorAuth);
        this.authenticationInfo = {
            message: "success;verify;"
        };
    }

    /**
     *
     * @param {CookieJar} cookie cookie
     * @returns {Promise<void>}
     */
    public async fromCookie(cookie: CookieJar): Promise<void> {
        this.cookie = cookie;

        await this.refresh();
    }

    /**
     * Reconnect to the server
     * @returns {Promise<void>}
     */
    public async refresh(): Promise<void> {
        const ValCookie = new CookieAuthenticator(this.config, this.toJSON());

        const ValReAuth = await ValCookie.reauthorize();
        if (ValReAuth.authenticationInfo.isError === true) {
            throw new ValError({
                name: "AuthClient_Error",
                message: "Cookie Reauth Error",
                data: ValReAuth
            });
        }

        this.fromJSON(ValReAuth);
        this.authenticationInfo = {
            message: "success;cookie;"
        };
    }

    // data

    /**
     *
     * @param {CookieJar} cookie CookieJar
     * @param {AuthCore.Config} config Config
     * @returns {Promise<AuthClient>}
     */
    public static async fromCookie(cookie: CookieJar, config?: AuthCore.Config): Promise<AuthClient> {
        const authClient = new AuthClient(config);
        await authClient.fromCookie(cookie);

        return authClient;
    }

    /**
     *
     * @param {AuthCore.Json} account {@link AuthCore.Json JSON} Account Data
     * @param {AuthCore.Config} config Config
     * @returns {AuthClient}
     */
    public static fromJSON(account: AuthCore.Json, config?: AuthCore.Config): AuthClient {
        const authClient = new AuthClient(config);
        authClient.fromJSON(account);

        return authClient;
    }
}
