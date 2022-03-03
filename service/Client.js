//import
const AxiosClient = require('../resources/AxiosClient');

//service
class Client {
    constructor(data) {
        this.AxiosData = data.AxiosData;
        this.AxiosClient = new AxiosClient(this.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async GetSession(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/session/v1/sessions/${puuid}`);

        return response.data;
    }

    /**
    */
     async FetchContent() {
        const response = await this.AxiosClient.get(this.Region.url.sharedData + `/content-service/v3/content`);

        return response.data;
    }
}

module.exports = Client;