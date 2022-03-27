export = Pregame;
declare class Pregame {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    */
    GetPlayer(puuid: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    */
    GetMatch(matchId: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    */
    GetMatchLoadouts(matchId: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    */
    QuitMatch(matchId: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    */
    SelectCharacter(matchId: string, agentId: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    */
    LockCharacter(matchId: string, agentId: string): Promise<any>;
}
//# sourceMappingURL=Pregame.d.ts.map