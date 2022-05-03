//import
import { AxiosClient } from "../../client/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";

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
    * @returns {Promise<IAxiosClient>}
    */
     async GetMatch(matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient>}
    */
     async GetMatchLoadouts(matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
     async GetPlayer(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/players/${puuid}`);
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient>}
    */
     async LockCharacter(matchId:string, agentId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/lock/${agentId}`);
    }

    /**
     * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient>}
    */
     async QuitMatch(matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/quit`);
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient>}
    */
     async SelectCharacter(matchId:string, agentId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/select/${agentId}`);
    }
}

export { PreGame };