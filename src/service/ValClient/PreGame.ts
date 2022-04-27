//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Pregame
 */
class PreGame {
    classId:string
    AxiosClient:AxiosClient;
    Region:IValRegion;
    
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Pregame';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async GetMatch(matchId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async GetMatchLoadouts(matchId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async GetPlayer(puuid:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/players/${puuid}`);
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async LockCharacter(matchId:string, agentId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/lock/${agentId}`);
    }

    /**
     * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async QuitMatch(matchId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/quit`);
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async SelectCharacter(matchId:string, agentId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/select/${agentId}`);
    }
}

export { PreGame };