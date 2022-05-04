import { AxiosClient } from "../../client/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Contract
 */
declare class Contract {
    classId: string;
    AxiosClient: AxiosClient;
    Region: IValRegion;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
     * @returns {Promise<IAxiosClient>}
    */
    DefinitionsFetch(): Promise<IAxiosClient>;
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
    Fetch(puuid: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid Player UUID
    * @param {String} contractId Contract ID
    * @returns {Promise<IAxiosClient>}
    */
    Activate(puuid: string, contractId: string): Promise<IAxiosClient>;
}
export { Contract };
//# sourceMappingURL=Contract.d.ts.map