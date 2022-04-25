//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

//class

type AccountV1_ByGame_Game = 'val' | 'lor';

/**
 * * Class ID: @ing3kth/val-api/RiotApi/AccountV1
 */
class AccountV1 {
    classId:string;
    apiKey:string;
    region:IValRegion;
    AxiosClient:AxiosClient;

    /**
    * @param {JSON} data Services Data
    */
    constructor(data:IRiotApi_Service) {
        this.classId = '@ing3kth/val-api/RiotApi/AccountV1';
        this.apiKey = data.key;
        this.region = data.region;

        this.AxiosClient = new AxiosClient(data.AxiosData);
    }

    /**
     * 
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {Promise<IAxiosClient_Out>}
     */
    async ByRiotId(gameName:string, tagLine:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}` + `?api_key=${this.apiKey}`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @returns {Promise<IAxiosClient_Out>}
     */
     async ByPuuid(puuid:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @returns {Promise<IAxiosClient_Out>}
     */
    async ByGame(puuid:string, game:AccountV1_ByGame_Game = 'val'):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);
    }
}

//export
export { AccountV1, type AccountV1_ByGame_Game };