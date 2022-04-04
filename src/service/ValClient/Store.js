//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//service
class Store {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Store';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} itemTypeId ItemTypeID
    */
     async GetEntitlements(puuid, itemTypeId) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/entitlements/${puuid}/${itemTypeId}`);
    }

    /**

    */
     async GetOffers() {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/offers/`);
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async GetStorefront(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v2/storefront/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async GetWallet(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/wallet/${puuid}`);
    }
}

module.exports = Store;