import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
import QueueId from "../../resources/data/QueueId";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Match
 */
declare class Match {
    classId: string;
    AxiosClient: AxiosClient;
    Region: IValRegion;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchMatchDetails(matchId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queue Queue
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchMatchHistory(puuid: string, queue?: keyof typeof QueueId.data, startIndex?: number, endIndex?: number): Promise<IAxiosClient_Out>;
}
export { Match };
//# sourceMappingURL=Match.d.ts.map