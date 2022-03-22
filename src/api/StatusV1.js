//import
const AxiosClient = require('../resources/AxiosClient');

//class
class StatusV1 {
    constructor(data) {
        this.apiKey = data.key;
        this.region = data.region;

        this.AxiosClient = new AxiosClient(data.AxiosData);
    }

    /**
     * 
     */
    async PlatformData() {
        const response = await this.AxiosClient.get(this.region.riot.server + `/val/status/v1/platform-data` + `?api_key=${this.apiKey}`);

        return response.data;
    }
}

//export
module.exports = StatusV1;