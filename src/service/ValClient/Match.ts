//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

import QueueId from "../../resources/data/QueueId";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Match
 */
class Match {
    classId:string
    AxiosClient:AxiosClient;
    Region:IValRegion;
    
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Match';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    //PVP Endpoints

    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async FetchMatchDetails(matchId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/match-details/v1/matches/${matchId}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queue Queue
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {Promise<IAxiosClient_Out>}
    */
     async FetchMatchHistory(puuid:string, queue?:keyof typeof QueueId.data, startIndex:number = 0, endIndex:number = 10):Promise<IAxiosClient_Out> {
        let _url = this.Region.url.playerData + `/match-history/v1/history/${puuid}?startIndex=${String(startIndex)}&endIndex=${String(endIndex)}` ;
        if(queue) {
            _url += `&queue=${QueueId.data[queue]}`;
        }

        return await this.AxiosClient.get(_url);
    }
}

export { Match };