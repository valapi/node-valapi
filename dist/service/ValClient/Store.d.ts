import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
import ItemTypeId from "../../resources/data/ItemTypeId";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Store
 */
declare class Store {
    classId: string;
    AxiosClient: AxiosClient;
    Region: IValRegion;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} itemType ItemType
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetEntitlements(puuid: string, itemType: keyof typeof ItemTypeId.data): Promise<IAxiosClient_Out>;
    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
    GetOffers(): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetStorefront(puuid: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetWallet(puuid: string): Promise<IAxiosClient_Out>;
}
export { Store };
//# sourceMappingURL=Store.d.ts.map