//import
const AxiosClient = require('../resources/request');

class Pregame {
    constructor(data) {
        this.Account = data
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async GetPlayer(puuid) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/pregame/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @param {string} matchId MatchID
    */
     async GetMatch(matchId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/pregame/v1/matches/${matchId}`);

        return response.data;
    }

    /**
    * @param {string} matchId MatchID
    */
     async GetMatchLoadouts(matchId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.partyService + `/pregame/v1/matches/${matchId}/loadouts`);

        return response.data;
    }

    /**
    * @param {string} matchId MatchID
    */
     async QuitMatch(matchId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.post(Account.url.partyService + `/pregame/v1/matches/${matchId}/quit`);

        return response.data;
    }

    /**
    * @param {string} matchId MatchID
    * @param {string} agentId CharacterID
    */
     async SelectCharacter(matchId, agentId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.post(Account.url.partyService + `/pregame/v1/matches/${matchId}/select/${agentId}`);

        return response.data;
    }

    /**
    * @param {string} matchId MatchID
    * @param {string} agentId CharacterID
    */
     async LockCharacter(matchId, agentId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.post(Account.url.partyService + `/pregame/v1/matches/${matchId}/lock/${agentId}`);

        return response.data;
    }
}

module.exports = Pregame;