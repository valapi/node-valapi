export = Player;
declare class Player {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    AxiosClient: AxiosClient;
    Region: any;
    /**
    */
    GetUserInfo(): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    */
    FetchPlayer(puuid: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    */
    GetUsername(puuid: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    */
    FetchCompetitiveUpdates(puuid: string, queueId?: string, startIndex?: number, endIndex?: number): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    */
    Loadout(puuid: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    */
    AccountXP(puuid: string): Promise<any>;
    /**
    */
    FetchRestrictions(): Promise<any>;
}
import AxiosClient = require("../../resources/AxiosClient");
