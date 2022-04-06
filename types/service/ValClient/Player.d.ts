export = Player;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Player
 */
declare class Player {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    GetUsername(puuid: string): Object;
    /**
     * @returns {Object}
    */
    GetUserInfo(): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    FetchPlayer(puuid: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {Object}
    */
    FetchCompetitiveUpdates(puuid: string, queueId?: string, startIndex?: number, endIndex?: number): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    Loadout(puuid: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    AccountXP(puuid: string): Object;
    /**
     * @returns {Object}
    */
    FetchPlayerRestrictions(): Object;
}
//# sourceMappingURL=Player.d.ts.map