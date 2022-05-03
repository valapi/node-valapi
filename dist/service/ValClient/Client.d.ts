import { AxiosClient } from "../../client/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
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
    * @returns {Promise<IAxiosClient>}
    */
    GetSession(puuid: string): Promise<IAxiosClient>;
    /**
     * @returns {Promise<IAxiosClient>}
    */
    FetchContent(): Promise<IAxiosClient>;
    /**
     * @returns {Promise<IAxiosClient>}
    */
    FetchConfig(): Promise<IAxiosClient>;
}
export { Client };
//# sourceMappingURL=Client.d.ts.map