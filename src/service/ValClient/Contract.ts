//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Contract
 */
class Contract {
    classId:string
    AxiosClient:AxiosClient;
    Region:IValRegion;

    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Contract';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
    async DefinitionsFetch():Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/contract-definitions/v3/item-upgrades`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    async Fetch(puuid:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    * @returns {Promise<IAxiosClient_Out>}
    */
    async Activate(puuid:string, contractId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}/special/${contractId}`);
    }
}

export { Contract };