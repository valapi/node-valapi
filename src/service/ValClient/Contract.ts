//import
import { AxiosClient } from "../../client/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Contract
 */
class Contract {
    public classId:string
    private AxiosClient:AxiosClient;
    private Region:IValRegion;

    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Contract';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
     * @returns {Promise<IAxiosClient>}
    */
     public async DefinitionsFetch():Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/contract-definitions/v3/item-upgrades`);
    }

    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
     public async Fetch(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}`);
    }

    /**
    * @param {String} puuid Player UUID
    * @param {String} contractId Contract ID
    * @returns {Promise<IAxiosClient>}
    */
     public async Activate(puuid:string, contractId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}/special/${contractId}`);
    }
}

export { Contract };