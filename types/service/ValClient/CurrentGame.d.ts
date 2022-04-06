export = CurrentGame;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Coregame
 */
declare class CurrentGame {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} matchId MatchID
    * @returns {Object}
    */
    FetchMatch(matchId: string): Object;
    /**
    * @param {String} matchId MatchID
    * @returns {Object}
    */
    FetchMatchLoadouts(matchId: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    FetchPlayer(puuid: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    * @returns {Object}
    */
    DisassociatePlayer(puuid: string, matchId: string): Object;
}
//# sourceMappingURL=CurrentGame.d.ts.map