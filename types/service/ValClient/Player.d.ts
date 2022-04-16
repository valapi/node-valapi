export = Player;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Player
 */
declare class Player {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetUsername(puuid: string): AxiosClientOut;
    /**
     * @returns {AxiosClientOut}
    */
    GetUserInfo(): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    FetchPlayer(puuid: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {AxiosClientOut}
    */
    FetchCompetitiveUpdates(puuid: string, queueId?: string, startIndex?: number, endIndex?: number): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    Loadout(puuid: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    AccountXP(puuid: string): AxiosClientOut;
    /**
     * @returns {AxiosClientOut}
    */
    FetchPlayerRestrictions(): AxiosClientOut;
}
//# sourceMappingURL=Player.d.ts.map