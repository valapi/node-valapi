export = PreGame;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Pregame
 */
declare class PreGame {
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
    GetMatch(matchId: string): Object;
    /**
    * @param {String} matchId MatchID
    * @returns {Object}
    */
    GetMatchLoadouts(matchId: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    GetPlayer(puuid: string): Object;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Object}
    */
    LockCharacter(matchId: string, agentId: string): Object;
    /**
    * @param {String} matchId MatchID
    * @returns {Object}
    */
    QuitMatch(matchId: string): Object;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Object}
    */
    SelectCharacter(matchId: string, agentId: string): Object;
}
//# sourceMappingURL=PreGame.d.ts.map