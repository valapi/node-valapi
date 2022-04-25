//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Coregame
 */
class CurrentGame {
    classId:string
    AxiosClient:AxiosClient;
    Region:IValRegion;
    
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Coregame';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    async FetchMatch(matchId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async FetchMatchLoadouts(matchId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async FetchPlayer(puuid:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/players/${puuid}`);
    }

    /**
    * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async DisassociatePlayer(puuid:string, matchId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/core-game/v1/players/${puuid}/disassociate/${matchId}`);
    }
}

export { CurrentGame };