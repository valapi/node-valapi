export = PreGame;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Pregame
 */
declare class PreGame {
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
    GetMatch(matchId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    GetMatchLoadouts(matchId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetPlayer(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {AxiosClientOut}
    */
    LockCharacter(matchId: string, agentId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    QuitMatch(matchId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {AxiosClientOut}
    */
    SelectCharacter(matchId: string, agentId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=PreGame.d.ts.map