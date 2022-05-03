import { AxiosClient } from "../../client/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Coregame
 */
declare class CurrentGame {
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
    FetchMatch(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient>}
    */
    FetchMatchLoadouts(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
    FetchPlayer(puuid: string): Promise<IAxiosClient>;
    /**
    * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient>}
    */
    DisassociatePlayer(puuid: string, matchId: string): Promise<IAxiosClient>;
}
export { CurrentGame };
//# sourceMappingURL=CurrentGame.d.ts.map