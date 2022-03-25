export = RiotApi;
declare class RiotApi {
    /**
    * @param {JSON} data toJSON data
    */
    static fromJSONSync(data: JSON): RiotApi;
    /**
    * @param {JSON} data Account toJSON data
    * @example data = { key: 'long-string', region: 'kr' }
    */
    constructor(data?: JSON);
    apiKey: any;
    region: any;
    reload(): void;
    RegionServices: ValRegion;
    services: {
        key: any;
        region: ValRegion;
        AxiosData: {
            cookie: any;
            headers: {};
        };
    };
    AccountV1: AccountV1;
    StatusV1: StatusV1;
    ContentV1: ContentV1;
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
declare namespace RiotApi {
    import fromJSON = RiotApi.fromJSONSync;
    export { fromJSON };
}
import ValRegion = require("../resources/ValRegion");
import AccountV1 = require("../service/RiotApi/AccountV1");
import StatusV1 = require("../service/RiotApi/StatusV1");
import ContentV1 = require("../service/RiotApi/ContentV1");
