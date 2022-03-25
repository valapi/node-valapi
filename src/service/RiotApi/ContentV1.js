//import
const AxiosClient = require('../../resources/AxiosClient');

//class
class ContentV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
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
        const response = await this.AxiosClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${locale}` + `&api_key=${this.apiKey}`);

        return response.data;
    }
}

//export
module.exports = ContentV1;