import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
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
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetMatch(matchId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetMatchLoadouts(matchId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetPlayer(puuid: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient_Out>}
    */
    LockCharacter(matchId: string, agentId: string): Promise<IAxiosClient_Out>;
    /**
     * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    QuitMatch(matchId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient_Out>}
    */
    SelectCharacter(matchId: string, agentId: string): Promise<IAxiosClient_Out>;
}
export { PreGame };
//# sourceMappingURL=PreGame.d.ts.map