export = PreGame;
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
    */
    GetMatch(matchId: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    */
    GetMatchLoadouts(matchId: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    */
    GetPlayer(puuid: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    */
    LockCharacter(matchId: string, agentId: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    */
    QuitMatch(matchId: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    */
    SelectCharacter(matchId: string, agentId: string): Promise<any>;
}
//# sourceMappingURL=PreGame.d.ts.map