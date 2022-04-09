export = RiotApi;
/**
 * Official Api From Riot Games
 *
 * You Can Get API Key From https://developer.riotgames.com/
 *
 * * Class ID: @ing3kth/val-api/RiotApi
 * * Use Anywhere: true
 */
declare class RiotApi {
    /**
    * @param {JSON} data toJSON data
    */
    static fromJSON(data: JSON): RiotApi;
    /**
    * @param {IRiotApi} data RiotApi toJSON Data
    */
    constructor(data?: {
        apiKey: StringConstructor;
        region: StringConstructor;
    });
    classId: string | undefined;
    apiKey: StringConstructor | undefined;
    region: StringConstructor | undefined;
    /**
     * @returns {void}
     */
    reload(): void;
    RegionServices: ValRegion | undefined;
    services: {
        key: StringConstructor | undefined;
        region: ValRegion;
        AxiosData: {
            cookie: boolean;
            jar: Object;
            headers: {};
        };
    } | undefined;
    AccountV1: AccountV1 | undefined;
    StatusV1: StatusV1 | undefined;
    ContentV1: ContentV1 | undefined;
    /**
     *
     * @returns {IRiotApi}
     */
    toJSON(): {
        apiKey: StringConstructor;
        region: StringConstructor;
    };
    /**
     *
     * @param {IRiotApi} data RiotApi toJSON Data
     */
    fromJSON(data: {
        apiKey: StringConstructor;
        region: StringConstructor;
    }): void;
    /**
    * @param {String} region Region
    * @example region = 'na'
    */
    setRegion(region: string): void;
    /**
    * @param {String} key API Key
    */
    setApiKey(key: string): void;
}
import ValRegion = require("../resources/ValRegion");
import AccountV1 = require("../service/RiotApi/AccountV1");
import StatusV1 = require("../service/RiotApi/StatusV1");
import ContentV1 = require("../service/RiotApi/ContentV1");
//# sourceMappingURL=RiotApi.d.ts.map