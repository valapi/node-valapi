export = Client;
declare class Client {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    AxiosClient: AxiosClient;
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    */
    GetSession(puuid: string): Promise<any>;
    /**
    */
    FetchContent(): Promise<any>;
    /**
    */
    FetchConfig(): Promise<any>;
}
import AxiosClient = require("../../resources/AxiosClient");
