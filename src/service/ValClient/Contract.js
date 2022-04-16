//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;
const AxiosClientOut = require('@ing3kth/core').Interface.AxiosClientOut;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Contract
 */
class Contract {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Contract';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
     * @returns {AxiosClientOut}
    */
    async DefinitionsFetch() {
        return await this.AxiosClient.get(this.Region.url.playerData + `/contract-definitions/v3/item-upgrades`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    async Fetch(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    * @returns {AxiosClientOut}
    */
    async Activate(puuid, contractId) {
        return await this.AxiosClient.post(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}/special/${contractId}`);
    }
}

module.exports = Contract;