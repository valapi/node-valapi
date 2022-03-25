export = AccountV1;
declare class AccountV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    apiKey: any;
    region: any;
    AxiosClient: AxiosClient;
    /**
     *
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     */
    ByRiotId(gameName: string, tagLine: string): Promise<any>;
    /**
     *
     * @param {String} puuid Player UUID
     */
    ByPuuid(puuid: string): Promise<any>;
    /**
     *
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @example game = 'val' && 'lor'
     */
    ByGame(puuid: string, game?: string): Promise<any>;
}
import AxiosClient = require("../../resources/AxiosClient");
