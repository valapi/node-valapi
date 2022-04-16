export = CurrentGame;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Coregame
 */
declare class CurrentGame {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    FetchMatch(matchId: string): AxiosClientOut;
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    FetchMatchLoadouts(matchId: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    FetchPlayer(puuid: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    DisassociatePlayer(puuid: string, matchId: string): AxiosClientOut;
}
//# sourceMappingURL=CurrentGame.d.ts.map