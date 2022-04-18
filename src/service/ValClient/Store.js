//import
const { AxiosClient } = require('@ing3kth/core').Core;
const { AxiosClientOut } = require('@ing3kth/core').Interface;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Store
 */
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
    * @returns {AxiosClientOut}
    */
     async GetEntitlements(puuid, itemTypeId) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/entitlements/${puuid}/${itemTypeId}`);
    }

    /**
     * @returns {AxiosClientOut}
    */
     async GetOffers() {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/offers/`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
     async GetStorefront(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v2/storefront/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
     async GetWallet(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/store/v1/wallet/${puuid}`);
    }
}

module.exports = Store;