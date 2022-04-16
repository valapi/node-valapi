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
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    GetMatch(matchId: string): AxiosClientOut;
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    GetMatchLoadouts(matchId: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetPlayer(puuid: string): AxiosClientOut;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {AxiosClientOut}
    */
    LockCharacter(matchId: string, agentId: string): AxiosClientOut;
    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    QuitMatch(matchId: string): AxiosClientOut;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {AxiosClientOut}
    */
    SelectCharacter(matchId: string, agentId: string): AxiosClientOut;
}
//# sourceMappingURL=PreGame.d.ts.map