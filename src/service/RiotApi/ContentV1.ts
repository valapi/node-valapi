//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

import _Locale from "../../resources/data/Locale";

//class

/**
 * * Class ID: @ing3kth/val-api/RiotApi/ContentV1
 */
class ContentV1 {
    classId:string;
    apiKey:string;
    region:IValRegion;
    AxiosClient:AxiosClient;

    /**
    * @param {JSON} data Services Data
    */
    constructor(data:IRiotApi_Service) {
        this.classId = '@ing3kth/val-api/RiotApi/ContentV1';
        this.apiKey = data.key;
        this.region = data.region;

        this.AxiosClient = new AxiosClient(data.AxiosData);
    }

    /**
     * 
     * @param {String} locale Locale
     * @returns {Promise<IAxiosClient_Out>}
     */
    async Contents(locale:keyof typeof _Locale.data = 'English_United_States'):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${_Locale.data[locale]}` + `&api_key=${this.apiKey}`);
    }
}

//export
export { ContentV1 };