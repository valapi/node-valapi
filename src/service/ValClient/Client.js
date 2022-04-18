//import
const { AxiosClient } = require('@ing3kth/core').Core;
const { AxiosClientOut } = require('@ing3kth/core').Interface;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Client
 */
class Client {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Client';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    //SESSION
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
     async GetSession(puuid) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/session/v1/sessions/${puuid}`);
    }

    //PVP Endpoints
    
    /**
     * @returns {AxiosClientOut}
    */
     async FetchContent() {
        return await this.AxiosClient.get(this.Region.url.sharedData + `/content-service/v3/content`);
    }

    /**
     * @returns {AxiosClientOut}
    */
     async FetchConfig() {
        return await this.AxiosClient.get(this.Region.url.sharedData + `/v1/config/${this.Region.data.api}`);
    }
}

module.exports = Client;