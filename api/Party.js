//import
const AxiosClient = require('../resources/request');

class Party {
    constructor(data) {
        this.Account = data
    }

    /**
    * @description Get contract definitions
    * @param {string} puuid PlayerUUID
    * @return {Promise<any>}
    */
     async FetchPlayer(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/parties/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @description Get contract definitions
    * @param {string} partyId PartyID
    * @return {Promise<any>}
    */
     async FetchParty(partyId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/parties/v1/parties/${partyId}`);

        return response.data;
    }
}

module.exports = Party;