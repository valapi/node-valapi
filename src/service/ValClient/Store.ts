//import
import { AxiosClient } from "../../client/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";

import ItemTypeId from "../../resources/data/ItemTypeId";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Store
 */
class Store {
    classId:string
    AxiosClient:AxiosClient;
    Region:IValRegion;
    
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Store';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} puuid Player UUID
    * @param {String} itemType Item Type
    * @returns {Promise<IAxiosClient>}
    */
     async GetEntitlements(puuid:string, itemType:keyof typeof ItemTypeId.data):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/entitlements/${puuid}/${ItemTypeId.data[itemType]}`);
    }

    /**
     * @returns {Promise<IAxiosClient>}
    */
     async GetOffers():Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/offers/`);
    }

    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
     async GetStorefront(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v2/storefront/${puuid}`);
    }

    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
     async GetWallet(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/wallet/${puuid}`);
    }
}

export { Store };