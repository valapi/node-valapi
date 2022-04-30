import { CookieJar as toughCookie } from "tough-cookie";
import type { IValClient_Auth } from "../../resources/interface/IValClient";
import { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
/**
 * * Class ID: @ing3kth/val-api/AuthFlow
 */
declare class AuthFlow {
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
    /**
    * @param {IValClient_Auth} data Account toJSON data
    */
    constructor(data?: IValClient_Auth);
    /**
     * @param {IAxiosClient_Out} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    execute(auth_response: IAxiosClient_Out): Promise<IValClient_Auth>;
    /**
     *
     * @returns {IValClient_Auth}
     */
    toJSON(): IValClient_Auth;
    /**
     * @param {IValClient_Auth} data Account toJSON data
     * @param {String} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    static execute(data: IValClient_Auth, auth_response: IAxiosClient_Out): Promise<IValClient_Auth>;
}
export { AuthFlow };
//# sourceMappingURL=AuthFlow.d.ts.map