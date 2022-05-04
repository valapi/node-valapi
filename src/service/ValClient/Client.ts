//import
import { AxiosClient } from "../../client/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Client
 */
class Client {
    classId:string
    AxiosClient:AxiosClient;
    Region:IValRegion;

    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Client';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    //SESSION
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
     async GetSession(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/session/v1/sessions/${puuid}`);
    }

    //PVP Endpoints
    
    /**
     * @returns {Promise<IAxiosClient>}
    */
     async FetchContent():Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.sharedData + `/content-service/v3/content`);
    }

    /**
     * @returns {Promise<IAxiosClient>}
    */
     async FetchConfig():Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.sharedData + `/v1/config/${this.Region.data.api}`);
    }
}

export { Client };