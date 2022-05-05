import type { ValClient_Service } from "../../client/ValClient";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
import QueueId from "../../resources/data/QueueId";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Player
 */
declare class Player {
    classId: string;
    private AxiosClient;
    private Region;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
    GetUsername(puuid: string): Promise<IAxiosClient>;
    /**
     * @returns {Promise<IAxiosClient>}
    */
    GetUserInfo(): Promise<IAxiosClient>;
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
    FetchPlayer(puuid: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid Player UUID
    * @param {String} queue Queue
    * @param {Number} startIndex Start Index
    * @param {Number} endIndex End Index
    * @returns {Promise<IAxiosClient>}
    */
    FetchCompetitiveUpdates(puuid: string, queue?: keyof typeof QueueId.data, startIndex?: number, endIndex?: number): Promise<IAxiosClient>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
    Loadout(puuid: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
    AccountXP(puuid: string): Promise<IAxiosClient>;
    /**
     * @returns {Promise<IAxiosClient>}
    */
    FetchPlayerRestrictions(): Promise<IAxiosClient>;
}
export { Player };
//# sourceMappingURL=Player.d.ts.map