//import
const AxiosClient = require('../../resources/AxiosClient');

//service
class Store {
    constructor(data) {
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} itemTypeId ItemTypeID
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
    * @param {String} puuid PlayerUUID
    */
     async GetStorefront(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/store/v2/storefront/${puuid}`);

        return response.data;
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async GetWallet(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/wallet/${puuid}`);

        return response.data;
    }
}

module.exports = Store;