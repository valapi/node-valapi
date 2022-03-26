//import
const AxiosClient = require('@ing3kth/core').AxiosClient

//service
class Client {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} puuid PlayerUUID
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

    /**
    */
     async FetchConfig() {
        const response = await this.AxiosClient.get(this.Region.url.sharedData + `/v1/config/${this.Region.data.api}`);

        return response.data;
    }
}

module.exports = Client;