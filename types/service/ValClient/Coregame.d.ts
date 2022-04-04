export = Coregame;
declare class Coregame {
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
    FetchMatch(matchId: string): Promise<any>;
    /**
    * @param {String} matchId MatchID
    */
    FetchMatchLoadouts(matchId: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    */
    FetchPlayer(puuid: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    */
    DisassociatePlayer(puuid: string, matchId: string): Promise<any>;
}
//# sourceMappingURL=Coregame.d.ts.map