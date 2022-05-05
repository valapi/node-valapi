//import
import { AxiosClient } from "../../client/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Coregame
 */
class CurrentGame {
    public classId:string
    private AxiosClient:AxiosClient;
    private Region:IValRegion;
    
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Coregame';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
     public async FetchMatch(matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
     public async FetchMatchLoadouts(matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
     public async FetchPlayer(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/players/${puuid}`);
    }

    /**
    * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} puuid Player UUID
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
     public async DisassociatePlayer(puuid:string, matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/core-game/v1/players/${puuid}/disassociate/${matchId}`);
    }
}

export { CurrentGame };