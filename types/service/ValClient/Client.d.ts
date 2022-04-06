export = Client;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Client
 */
declare class Client {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    GetSession(puuid: string): Object;
    /**
     * @returns {Object}
    */
    FetchContent(): Object;
    /**
     * @returns {Object}
    */
    FetchConfig(): Object;
}
//# sourceMappingURL=Client.d.ts.map