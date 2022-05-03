import { AxiosClient } from "../../client/AxiosClient";
import type { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
declare type AccountV1_ByGame_Game = 'val' | 'lor';
/**
 * * Class ID: @ing3kth/val-api/RiotApi/AccountV1
 */
declare class AccountV1 {
    classId: string;
    apiKey: string;
    region: IValRegion;
    AxiosClient: AxiosClient;
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: IRiotApi_Service);
    /**
     *
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {Promise<IAxiosClient>}
     */
    ByRiotId(gameName: string, tagLine: string): Promise<IAxiosClient>;
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {Promise<IAxiosClient>}
     */
    ByPuuid(puuid: string): Promise<IAxiosClient>;
    /**
     *
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @returns {Promise<IAxiosClient>}
     */
    ByGame(puuid: string, game?: AccountV1_ByGame_Game): Promise<IAxiosClient>;
}
export { AccountV1, type AccountV1_ByGame_Game };
//# sourceMappingURL=AccountV1.d.ts.map