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
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    FetchMatch(matchId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    FetchMatchLoadouts(matchId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    FetchPlayer(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    DisassociatePlayer(puuid: string, matchId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=CurrentGame.d.ts.map