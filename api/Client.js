//import
const AxiosClient = require('../resources/request');

class Client {
    constructor(data) {
        this.Account = data
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async GetSession(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/session/v1/sessions/${puuid}`);

        return response.data;
    }

    /**
    */
     async FetchContent() {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.sharedData + `/content-service/v3/content`);

        return response.data;
    }
}

module.exports = Client;