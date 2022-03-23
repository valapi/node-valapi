//import
const AxiosClient = require('../../resources/AxiosClient');

//service
class Contract {
    constructor(data) {
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    */
    async DefinitionsFetch() {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/contract-definitions/v3/item-upgrades`);

        return response.data;
    }

    /**
    * @param {String} puuid PlayerUUID
    */
    async Fetch(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}`);

        return response.data;
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    */
    async Activate(puuid, contractId) {
        const response = await this.AxiosClient.post(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}/special/${contractId}`);

        return response.data;
    }
}

module.exports = Contract;