//import
const AxiosClient = require('../resources/request');

class Store {
    constructor(data) {
        this.Account = data
    }

    /**
    * @description Get contract definitions
    * @param {string} puuid PlayerUUID
    * @param {string} itemTypeId ItemTypeID
    * @return {Promise<any>}
    */
     async GetEntitlements(puuid, itemTypeId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/store/v1/entitlements/${puuid}`);

        return response.data;
    }

    /**
    * @description Get contract definitions
    * @return {Promise<any>}
    */
     async GetOffers() {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/store/v1/offers/`);

        return response.data;
    }

    /**
    * @description Get contract definitions
    * @param {string} puuid PlayerUUID
    * @return {Promise<any>}
    */
     async GetStorefront(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/store/v2/storefront/${puuid}`);

        return response.data;
    }

    /**
    * @description Get contract definitions
    * @param {string} puuid PlayerUUID
    * @return {Promise<any>}
    */
     async GetWallet(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/store/v1/wallet/${puuid}`);

        return response.data;
    }
}

module.exports = Store;