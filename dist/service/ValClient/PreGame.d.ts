import { AxiosClient } from "../../client/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Pregame
 */
declare class PreGame {
    classId: string;
    AxiosClient: AxiosClient;
    Region: IValRegion;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient>}
    */
    GetMatch(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient>}
    */
    GetMatchLoadouts(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
    GetPlayer(puuid: string): Promise<IAxiosClient>;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient>}
    */
    LockCharacter(matchId: string, agentId: string): Promise<IAxiosClient>;
    /**
     * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient>}
    */
    QuitMatch(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient>}
    */
    SelectCharacter(matchId: string, agentId: string): Promise<IAxiosClient>;
}
export { PreGame };
//# sourceMappingURL=PreGame.d.ts.map