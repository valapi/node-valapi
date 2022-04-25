import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Client
 */
declare class Client {
    classId: string;
    AxiosClient: AxiosClient;
    Region: IValRegion;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetSession(puuid: string): Promise<IAxiosClient_Out>;
    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
    FetchContent(): Promise<IAxiosClient_Out>;
    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
    FetchConfig(): Promise<IAxiosClient_Out>;
}
export { Client };
//# sourceMappingURL=Client.d.ts.map