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
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
    FetchMatch(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} matchId Match ID
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
    * @param {String} puuid Player UUID
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
    DisassociatePlayer(puuid: string, matchId: string): Promise<IAxiosClient>;
}
export { CurrentGame };
//# sourceMappingURL=CurrentGame.d.ts.map