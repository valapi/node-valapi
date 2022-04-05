export = RiotApi;
/**
 * Official Api From Riot Games
 */
declare class RiotApi {
    /**
    * @param {JSON} data toJSON data
    */
    static fromJSON(data: JSON): RiotApi;
    /**
    * @param {JSON} data Account toJSON data
    * @example data = { key: 'long-string', region: 'kr' }
    */
    constructor(data?: JSON);
    classId: string;
    apiKey: any;
    region: any;
    reload(): void;
    RegionServices: ValRegion | undefined;
    services: {
        key: any;
        region: ValRegion;
        AxiosData: {
            cookie: boolean;
            jar: any;
            headers: {};
        };
    } | undefined;
    AccountV1: AccountV1 | undefined;
    StatusV1: StatusV1 | undefined;
    ContentV1: ContentV1 | undefined;
    toJSON(): {
        key: any;
        region: any;
    };
    fromJSON(data: any): void;
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