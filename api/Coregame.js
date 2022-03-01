//import
const AxiosClient = require('../resources/request');

class Coregame {
    constructor(data) {
        this.Account = data
    }

    /**
    * @param {string} matchId MatchID
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
    * @param {string} matchId MatchID
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
    * @param {string} puuid PlayerUUID
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