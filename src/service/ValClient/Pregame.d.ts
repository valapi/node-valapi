export = Pregame;
declare class Pregame {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    AxiosClient: AxiosClient;
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
import AxiosClient = require("../../resources/AxiosClient");
