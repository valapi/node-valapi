import { AxiosClient } from "../../client/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
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
    * @param {String} puuid Player UUID
    * @param {String} itemType Item Type
    * @returns {Promise<IAxiosClient>}
    */
    GetEntitlements(puuid: string, itemType: keyof typeof ItemTypeId.data): Promise<IAxiosClient>;
    /**
     * @returns {Promise<IAxiosClient>}
    */
    GetOffers(): Promise<IAxiosClient>;
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
    GetStorefront(puuid: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
    GetWallet(puuid: string): Promise<IAxiosClient>;
}
export { Store };
//# sourceMappingURL=Store.d.ts.map