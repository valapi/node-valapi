import { CookieJar as toughCookie } from "tough-cookie";
import type { IValClient_Auth } from "../resources/interface/IValClient";
import "axios-cookiejar-support";
/**
 * * Class ID: @ing3kth/val-api/RiotApi
 */
declare class Multifactor {
    classId: string;
    cookie: toughCookie;
    accessToken: string;
    entitlements: string;
    multifactor: boolean;
    /**
    * @param {IValClient_Auth} data Account toJSON data
    */
    constructor(data?: IValClient_Auth);
    /**
    * @param {Number} verificationCode Verification Code
    * @returns {Promise<IValClient_Auth>}
    */
    execute(verificationCode: number): Promise<IValClient_Auth>;
    /**
     *
     * @returns {IValClient_Auth}
     */
    toJSON(): IValClient_Auth;
    /**
    * @param {IValClient_Auth} data ValAuth_Account toJSON data
    * @param {Number} verificationCode Verification Code
    * @returns {Promise<IValClient_Auth>}
    */
    static verify(data: IValClient_Auth, verificationCode: number): Promise<IValClient_Auth>;
}
export { Multifactor };
//# sourceMappingURL=Multifactor.d.ts.map