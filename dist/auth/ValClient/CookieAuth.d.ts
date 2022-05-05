import type { IValClient_Auth } from "../../resources/interface/IValClient";
/**
 * *Not Recommend*
 *
 * * Class ID: @ing3kth/val-api/ValClient/CookieAuth
 */
declare class CookieAuth {
    classId: string;
    private cookie;
    private access_token;
    private id_token;
    private expires_in;
    private token_type;
    private entitlements_token;
    private region;
    multifactor: boolean;
    /**
    * @param {IValClient_Auth} data Account toJSON data
    */
    constructor(data: IValClient_Auth);
    /**
    * @returns {Promise<any>}
    */
    execute(): Promise<any>;
    /**
     *
     * @returns {IValClient_Auth}
     */
    toJSON(): IValClient_Auth;
    /**
    * @param {IValClient_Auth} data ValAuth_Account toJSON data
    * @returns {Promise<IValClient_Auth>}
    */
    static reauth(data: IValClient_Auth): Promise<IValClient_Auth>;
}
export { CookieAuth };
//# sourceMappingURL=CookieAuth.d.ts.map