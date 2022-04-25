//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

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
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async GetSession(puuid:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/session/v1/sessions/${puuid}`);
    }

    //PVP Endpoints
    
    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
     async FetchContent():Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.sharedData + `/content-service/v3/content`);
    }

    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
     async FetchConfig():Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.sharedData + `/v1/config/${this.Region.data.api}`);
    }
}

export { Client };