//import
import * as IngCore from "@ing3kth/core";
import { _config } from "@ing3kth/core/dist/config";

import { ValRegion } from "../resources/ValRegion";
import _Region from "../resources/data/Region";

import type { IValRegion } from "../resources/interface/IValRegion";
import type { IAxiosClient } from "@ing3kth/core/dist/interface/IAxiosClient";
import type { IRiotApi, IRiotApi_Service } from  "../resources/interface/IRiotApi";

import { AccountV1 } from "../service/RiotApi/AccountV1";
import { StatusV1 } from "../service/RiotApi/StatusV1";
import { ContentV1 } from "../service/RiotApi/ContentV1";

//class

/**
 * Official Api From Riot Games
 * 
 * You Can Get API Key From https://developer.riotgames.com/
 * 
 * * Class ID: @ing3kth/val-api/RiotApi
 * * Use Anywhere: true
 */
class RiotApi {
    classId:string;
    apiKey:string;
    region:string | any;

    //reload
    RegionServices:IValRegion | undefined;
    AxiosData:IAxiosClient | undefined;
    services:IRiotApi_Service | undefined;

    //service
    AccountV1:AccountV1 | undefined;
    StatusV1:StatusV1 | undefined;
    ContentV1:ContentV1 | undefined;

    /**
    * @param {IRiotApi} data RiotApi toJSON Data
    */
    constructor(data:IRiotApi = {
        apiKey: '',
        region: 'Asia_Pacific',
    }) {
        this.classId = '@ing3kth/val-api/RiotApi';
        this.apiKey = data.apiKey;
        this.region = data.region;

        if(!this.apiKey){
            IngCore.Core.Logs.log(this.classId + " Missing API Key", 'error', true);
            return;
        }

        this.reload();
    }

    /**
     * @returns {void}
     */
    reload():void {
        this.RegionServices = new ValRegion(this.region).toJSON();

        //services
        this.services = {
            key: this.apiKey,
            region: this.RegionServices,
            AxiosData: {
                cookie: false,
                jar: null,
                headers: {}
            }
        };

        this.AccountV1 = new AccountV1(this.services);
        this.StatusV1 = new StatusV1(this.services);
        this.ContentV1 = new ContentV1(this.services);

        IngCore.Core.Logs.log(this.classId + " Reload");
    }

    /**
     * 
     * @returns {IRiotApi}
     */
    toJSON():IRiotApi {
        IngCore.Core.Logs.log("Export " + this.classId);
        return {
            apiKey: this.apiKey,
            region: this.region,
        };
    }

    /**
     * 
     * @param {IRiotApi} data RiotApi toJSON Data
     */
    fromJSON(data:IRiotApi):void {
        this.apiKey = data.apiKey;
        this.region = data.region;

        IngCore.Core.Logs.log("Import " + this.classId);
        this.reload();
    }

    //settings

    /**
    * @param {String} region Region
    */
    setRegion(region:string):void {
        this.region = region;

        IngCore.Core.Logs.log(this.classId + " SetRegion '" + this.region + "'");
        this.reload();
    }

    /**
    * @param {String} key API Key
    */
    setApiKey(key:string):void {
        this.apiKey = key;

        IngCore.Core.Logs.log(this.classId + " setApiKey '" + this.apiKey + "'");
        this.reload();
    }

    /**
    * @param {IRiotApi} data toJSON data
    */
    static fromJSON(data:IRiotApi):RiotApi {
        const RiotApiClient = new RiotApi();
        RiotApiClient.fromJSON(data);

        return RiotApiClient;
    }
}

//export
export { RiotApi };