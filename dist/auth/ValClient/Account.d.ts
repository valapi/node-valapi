import { CookieJar as toughCookie } from "tough-cookie";
import type { IValClient_Auth } from "../../resources/interface/IValClient";
/**
 * * Class ID: @ing3kth/val-api/Account
 */
declare class Account {
    classId: string;
    cookie: toughCookie;
    accessToken: string;
    id_token: string;
    expires_in: number;
    token_type: string;
    entitlements: string;
    region: {
        pbe: string;
        live: string;
    };
    multifactor: boolean;
    constructor();
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    execute(username: string, password: string): Promise<IValClient_Auth>;
    /**
     *
     * @returns {IValClient_Auth}
     */
    toJSON(): IValClient_Auth;
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    static login(username: string, password: string): Promise<IValClient_Auth>;
}
export { Account };
//# sourceMappingURL=Account.d.ts.map