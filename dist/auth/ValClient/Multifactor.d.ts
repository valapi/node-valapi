import type { IValClient_Auth } from "../../resources/interface/IValClient";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Multifactor
 */
declare class Multifactor {
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