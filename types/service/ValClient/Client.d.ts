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
    * @returns {AxiosClientOut}
    */
    GetSession(puuid: string): AxiosClientOut;
    /**
     * @returns {AxiosClientOut}
    */
    FetchContent(): AxiosClientOut;
    /**
     * @returns {AxiosClientOut}
    */
    FetchConfig(): AxiosClientOut;
}
//# sourceMappingURL=Client.d.ts.map