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
    public classId:string
    private AxiosClient:AxiosClient;
    private Region:IValRegion;
    
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Pregame';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
     public async GetMatch(matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
     public async GetMatchLoadouts(matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
     public async GetPlayer(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/players/${puuid}`);
    }

    /**
    * @param {String} matchId Match ID
    * @param {String} agentId Character ID
    * @returns {Promise<IAxiosClient>}
    */
     public async LockCharacter(matchId:string, agentId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/lock/${agentId}`);
    }

    /**
     * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
     public async QuitMatch(matchId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/quit`);
    }

    /**
    * @param {String} matchId Match ID
    * @param {String} agentId Character ID
    * @returns {Promise<IAxiosClient>}
    */
     public async SelectCharacter(matchId:string, agentId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/select/${agentId}`);
    }
}

export { PreGame };