export = StatusV1;
declare class StatusV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    apiKey: any;
    region: any;
    AxiosClient: AxiosClient;
    /**
     *
     */
    PlatformData(): Promise<any>;
}
import AxiosClient = require("../../resources/AxiosClient");
