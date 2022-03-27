//import
const AxiosClient = require('@ing3kth/core').AxiosClient;

//service
class Client {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/RiotLocal/Client';

        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.lockfile = data.lockfile;

        this.baseUrl = `${this.lockfile.protocol}://${data.ip}:${this.lockfile.port}`
    }

    /**
     */
     async help() {
        const response = await this.AxiosClient.get(this.baseUrl + `/help`);

        return response.data;
    }

    /**
     */
     async FetchSessions() {
        const response = await this.AxiosClient.get(this.baseUrl + `/product-session/v1/external-sessions`);

        return response.data;
    }

    /**
     */
     async GetSettings() {
        const response = await this.AxiosClient.get(this.baseUrl + `/player-preferences/v1/data-json/Ares.PlayerSettings`);

        return response.data;
    }
}

module.exports = Client;