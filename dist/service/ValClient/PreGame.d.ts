import type { ValClient_Service } from "../../client/ValClient";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Pregame
 */
declare class PreGame {
    classId: string;
    private AxiosClient;
    private Region;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
    GetMatch(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
    GetMatchLoadouts(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
    GetPlayer(puuid: string): Promise<IAxiosClient>;
    /**
    * @param {String} matchId Match ID
    * @param {String} agentId Character ID
    * @returns {Promise<IAxiosClient>}
    */
    LockCharacter(matchId: string, agentId: string): Promise<IAxiosClient>;
    /**
     * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
    QuitMatch(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} matchId Match ID
    * @param {String} agentId Character ID
    * @returns {Promise<IAxiosClient>}
    */
    SelectCharacter(matchId: string, agentId: string): Promise<IAxiosClient>;
}
export { PreGame };
//# sourceMappingURL=PreGame.d.ts.map