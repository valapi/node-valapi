import { AxiosClient } from "../../client/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
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
    * @param {String} matchId Match ID
    * @returns {Promise<IAxiosClient>}
    */
    FetchMatchDetails(matchId: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid Player UUID
    * @param {String} queue Queue
    * @param {Number} startIndex Start Index
    * @param {Number} endIndex End Index
    * @returns {Promise<IAxiosClient>}
    */
    FetchMatchHistory(puuid: string, queue?: keyof typeof QueueId.data, startIndex?: number, endIndex?: number): Promise<IAxiosClient>;
}
export { Match };
//# sourceMappingURL=Match.d.ts.map