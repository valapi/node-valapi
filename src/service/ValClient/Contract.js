//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Contract
 */
class Contract {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Contract';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
     * @returns {Object}
    */
    async DefinitionsFetch() {
        return await this.AxiosClient.get(this.Region.url.playerData + `/contract-definitions/v3/item-upgrades`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    async Fetch(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    */
    async Activate(puuid, contractId) {
        return await this.AxiosClient.post(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}/special/${contractId}`);
    }
}

module.exports = Contract;