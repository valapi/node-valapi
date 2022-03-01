//import
const AxiosClient = require('../resources/request');

class Pregame {
    constructor(data) {
        this.Account = data
    }

    /**
    * @description Get contract definitions
    * @param {string} puuid PlayerUUID
    * @return {Promise<any>}
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
    * @description Get contract definitions
    * @param {string} matchId MatchID
    * @return {Promise<any>}
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
    * @description Get contract definitions
    * @param {string} matchId MatchID
    * @return {Promise<any>}
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
    * @description Get contract definitions
    * @param {string} matchId MatchID
    * @return {Promise<any>}
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
    * @description Get contract definitions
    * @param {string} matchId MatchID
    * @param {string} agentId CharacterID
    * @return {Promise<any>}
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
    * @description Get contract definitions
    * @param {string} matchId MatchID
    * @param {string} agentId CharacterID
    * @return {Promise<any>}
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