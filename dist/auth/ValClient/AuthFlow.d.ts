import type { IValClient_Auth } from "../../resources/interface/IValClient";
import type { IAxiosClient } from '../../resources/interface/IAxiosClient';
/**
 * * Class ID: @ing3kth/val-api/ValClient/AuthFlow
 */
declare class AuthFlow {
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
     * @param {IAxiosClient} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    execute(auth_response: IAxiosClient): Promise<IValClient_Auth>;
    /**
     *
     * @returns {IValClient_Auth}
     */
    toJSON(): IValClient_Auth;
    /**
     * @param {IValClient_Auth} data Account toJSON data
     * @param {IAxiosClient} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    static execute(data: IValClient_Auth, auth_response: IAxiosClient): Promise<IValClient_Auth>;
}
export { AuthFlow };
//# sourceMappingURL=AuthFlow.d.ts.map