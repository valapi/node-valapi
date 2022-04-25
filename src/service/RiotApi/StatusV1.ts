//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

//class

/**
 * * Class ID: @ing3kth/val-api/RiotApi/StatusV1
 */
class StatusV1 {
    classId:string;
    apiKey:string;
    region:IValRegion;
    AxiosClient:AxiosClient;

    /**
    * @param {JSON} data Services Data
    */
    constructor(data:IRiotApi_Service) {
        this.classId = '@ing3kth/val-api/RiotApi/StatusV1';
        this.apiKey = data.key;
        this.region = data.region;

        this.AxiosClient = new AxiosClient(data.AxiosData);
    }

    /**
     * @returns {Promise<IAxiosClient_Out>}
     */
    async PlatformData():Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.region.riot.server + `/val/status/v1/platform-data` + `?api_key=${this.apiKey}`);
    }
}

//export
export { StatusV1 };