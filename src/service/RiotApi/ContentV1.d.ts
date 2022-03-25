export = ContentV1;
declare class ContentV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    apiKey: any;
    region: any;
    AxiosClient: AxiosClient;
    /**
     *
     * @param {String} locale Locale
     * @example locale = 'en-US' && 'th-TH'
     */
    Contents(locale?: string): Promise<any>;
}
import AxiosClient = require("../../resources/AxiosClient");
