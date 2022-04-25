import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
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
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchMatch(matchId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchMatchLoadouts(matchId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchPlayer(puuid: string): Promise<IAxiosClient_Out>;
    /**
    * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    DisassociatePlayer(puuid: string, matchId: string): Promise<IAxiosClient_Out>;
}
export { CurrentGame };
//# sourceMappingURL=CurrentGame.d.ts.map