//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//class
class AccountV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/RiotApi/AccountV1';
        this.apiKey = data.key;
        this.region = data.region;

        this.AxiosClient = new AxiosClient(data.AxiosData);
    }

    /**
     * 
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     */
    async ByRiotId(gameName, tagLine) {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}` + `?api_key=${this.apiKey}`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     */
     async ByPuuid(puuid) {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @example game = 'val' && 'lor'
     */
    async ByGame(puuid, game = 'val') {
        return await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);
    }
}

//export
module.exports = AccountV1;