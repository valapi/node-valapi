import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
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
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetUsername(puuid: string): Promise<IAxiosClient_Out>;
    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
    GetUserInfo(): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchPlayer(puuid: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queue Queue
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchCompetitiveUpdates(puuid: string, queue?: keyof typeof QueueId.data, startIndex?: number, endIndex?: number): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    Loadout(puuid: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    AccountXP(puuid: string): Promise<IAxiosClient_Out>;
    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
    FetchPlayerRestrictions(): Promise<IAxiosClient_Out>;
}
export { Player };
//# sourceMappingURL=Player.d.ts.map