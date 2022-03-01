//import
const AxiosClient = require('../resources/request');

class Contract {
    constructor(data) {
        this.Account = data
    }

    /**
    * @description Get contract definitions
    * @return {Promise<any>}
    */
    async DefinitionsFetch() {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/contract-definitions/v3/item-upgrades`);

        return response.data;
    }

    /**
    * @description Get active story contracts
    * @param {string} puuid PlayerUUID
    * @return {Promise<any>}
    */
    async Fetch(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/contracts/v1/contracts/${puuid}`);

        return response.data;
    }

    /**
    * @description Active story contracts
    * @param {string} puuid PlayerUUID
    * @param {string} contractId ContractID
    * @return {Promise<any>}
    */
    async Activate(puuid, contractId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.post(Account.url.playerData + `/contracts/v1/contracts/${puuid}/special/${contractId}`);

        return response.data;
    }
}

module.exports = Contract;