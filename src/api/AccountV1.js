//import
const AxiosClient = require('../resources/AxiosClient');

//class
class AccountV1 {
    constructor(data) {
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
        const response = await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}` + `?api_key=${this.apiKey}`);

        return response.data;
    }

    /**
     * 
     * @param {String} puuid Player UUID
     */
     async ByPuuid(puuid) {
        const response = await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);

        return response.data;
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @example game = 'val' && 'lor'
     */
    async ByGame(puuid, game = 'val') {
        const response = await this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);

        return response.data;
    }
}

//export
module.exports = AccountV1;