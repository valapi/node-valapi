export = Match;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Match
 */
declare class Match {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    * @returns {Object}
    */
    FetchMatchDetails(matchId: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {Object}
    */
    FetchMatchHistory(puuid: string, queueId?: string, startIndex?: number, endIndex?: number): Object;
}
//# sourceMappingURL=Match.d.ts.map