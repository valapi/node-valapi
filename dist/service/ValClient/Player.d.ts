import { AxiosClient } from "../../client/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
import QueueId from "../../resources/data/QueueId";
/**
 * * Class ID: @ing3kth/val-api/ValClient/Player
 */
declare class Player {
    classId: string;
    AxiosClient: AxiosClient;
    Region: IValRegion;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
    GetUsername(puuid: string): Promise<IAxiosClient>;
    /**
     * @returns {Promise<IAxiosClient>}
    */
    GetUserInfo(): Promise<IAxiosClient>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
    FetchPlayer(puuid: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queue Queue
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
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