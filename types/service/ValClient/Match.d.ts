export = Match;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Match
 */
declare class Match {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    FetchMatchDetails(matchId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {AxiosClientOut}
    */
    FetchMatchHistory(puuid: string, queueId?: string, startIndex?: number, endIndex?: number): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=Match.d.ts.map