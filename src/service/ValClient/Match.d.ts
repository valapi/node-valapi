export = Match;
declare class Match {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    AxiosClient: AxiosClient;
    Region: any;
    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    */
    FetchMatchDetails(matchId: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    */
    FetchMatchHistory(puuid: string, queueId?: string, startIndex?: number, endIndex?: number): Promise<any>;
}
import AxiosClient = require("../../resources/AxiosClient");
