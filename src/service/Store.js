//import
const AxiosClient = require('../resources/AxiosClient');

//service
class Store {
    constructor(data) {
        this.AxiosData = data.AxiosData;
        this.AxiosClient = new AxiosClient(this.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {string} puuid PlayerUUID
    * @param {string} itemTypeId ItemTypeID
    */
     async GetEntitlements(puuid, itemTypeId) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/entitlements/${puuid}/${itemTypeId}`);

        return response.data;
    }

    /**

    */
     async GetOffers() {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/offers/`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async GetStorefront(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/store/v2/storefront/${puuid}`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async GetWallet(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/wallet/${puuid}`);

        return response.data;
    }
}

module.exports = Store;