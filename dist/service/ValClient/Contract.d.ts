import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
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
     * @returns {Promise<IAxiosClient_Out>}
    */
    DefinitionsFetch(): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    Fetch(puuid: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    * @returns {Promise<IAxiosClient_Out>}
    */
    Activate(puuid: string, contractId: string): Promise<IAxiosClient_Out>;
}
export { Contract };
//# sourceMappingURL=Contract.d.ts.map