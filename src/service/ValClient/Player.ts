//import
import { AxiosClient } from "../../client/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";

import QueueId from "../../resources/data/QueueId";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Player
 */
class Player {
    public classId:string
    private AxiosClient:AxiosClient;
    private Region:IValRegion;
    
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Player';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    //Mike - Username From ID
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
     public async GetUsername(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.put(this.Region.url.playerData + `/name-service/v2/players`, [
            `${puuid}`
        ]);
    }

    //Riot Auth

    /**
     * @returns {Promise<IAxiosClient>}
    */
     public async GetUserInfo():Promise<IAxiosClient> {
        return await this.AxiosClient.post(`https://auth.riotgames.com/userinfo`);
    }

    //PVP Endpoints

    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
     public async FetchPlayer(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/mmr/v1/players/${puuid}`);
    }

    /**
    * @param {String} puuid Player UUID
    * @param {String} queue Queue
    * @param {Number} startIndex Start Index
    * @param {Number} endIndex End Index
    * @returns {Promise<IAxiosClient>}
    */
     public async FetchCompetitiveUpdates(puuid:string, queue?:keyof typeof QueueId.data, startIndex:number = 0, endIndex:number = 10):Promise<IAxiosClient> {
        let _url = this.Region.url.playerData + `/mmr/v1/players/${puuid}/competitiveupdates?startIndex=${String(startIndex)}&endIndex=${String(endIndex)}`;
        if (queue) {
            _url += `&queue=${QueueId.data[queue]}`;
        }

        return await this.AxiosClient.get(_url);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
     public async Loadout(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/personalization/v2/players/${puuid}/playerloadout`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
     public async AccountXP(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/account-xp/v1/players/${puuid}`);
    }

    /**
     * @returns {Promise<IAxiosClient>}
    */
     public async FetchPlayerRestrictions():Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.playerData + `/restrictions/v3/penalties`);
    }
}

export { Player };