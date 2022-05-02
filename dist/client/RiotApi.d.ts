import type { IRiotApi } from "../resources/interface/IRiotApi";
import { AccountV1 } from "../service/RiotApi/AccountV1";
import { StatusV1 } from "../service/RiotApi/StatusV1";
import { ContentV1 } from "../service/RiotApi/ContentV1";
/**
 * Official Api From Riot Games
 *
 * You Can Get API Key From https://developer.riotgames.com/
 *
 * * Class ID: @ing3kth/val-api/RiotApi
 * * Use Anywhere: true
 */
declare class RiotApi {
    classId: string;
    private apiKey;
    private region;
    private RegionServices;
    private services;
    AccountV1: AccountV1 | undefined;
    StatusV1: StatusV1 | undefined;
    ContentV1: ContentV1 | undefined;
    /**
    * @param {IRiotApi} data RiotApi toJSON Data
    */
    constructor(data?: IRiotApi);
    /**
     * @returns {void}
     */
    private reload;
    /**
     *
     * @returns {IRiotApi}
     */
    toJSON(): IRiotApi;
    /**
     *
     * @param {IRiotApi} data RiotApi toJSON Data
     */
    fromJSON(data: IRiotApi): void;
    /**
    * @param {String} region Region
    */
    setRegion(region: string): void;
    /**
    * @param {String} key API Key
    */
    setApiKey(key: string): void;
    /**
    * @param {IRiotApi} data toJSON data
    */
    static fromJSON(data: IRiotApi): RiotApi;
}
export { RiotApi };
//# sourceMappingURL=RiotApi.d.ts.map