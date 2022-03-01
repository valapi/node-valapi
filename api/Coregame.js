//import
const AxiosClient = require('../resources/request');

class Coregame {
    constructor(data) {
        this.Account = data
    }

    /**
    * @description Get contract definitions
    * @param {string} matchId MatchID
    * @return {Promise<any>}
    */
    async FetchMatch(matchId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/core-game/v1/matches/${matchId}`);

        return response.data;
    }

    /**
    * @description Get contract definitions
    * @param {string} matchId MatchID
    * @return {Promise<any>}
    */
     async FetchMatchLoadouts(matchId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/core-game/v1/matches/${matchId}/loadouts`);

        return response.data;
    }

    /**
    * @description Get contract definitions
    * @param {string} puuid PlayerUUID
    * @return {Promise<any>}
    */
     async FetchPlayer(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/core-game/v1/players/${puuid}`);

        return response.data;
    }
}

module.exports = Coregame;