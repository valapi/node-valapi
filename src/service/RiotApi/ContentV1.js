//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//class

/**
 * * Class ID: @ing3kth/val-api/RiotApi/ContentV1
 */
class ContentV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/RiotApi/ContentV1';
        this.apiKey = data.key;
        this.region = data.region;

        this.AxiosClient = new AxiosClient(data.AxiosData);
    }

    /**
     * 
     * @param {String} locale Locale
     * @example locale = 'en-US' && 'th-TH'
     */
    async Contents(locale = 'en-US') {
        return await this.AxiosClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${locale}` + `&api_key=${this.apiKey}`);
    }
}

//export
module.exports = ContentV1;