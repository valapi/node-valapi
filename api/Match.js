//import
const AxiosClient = require('../resources/request');

class Match {
    constructor(data) {
        this.Account = data
    }

    /**
    * @description Get contract definitions
    * @param {string} matchId MatchID
    * @return {Promise<any>}
    */
     async FetchMatchDetails(matchId) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.get(Account.url.playerData + `/match-details/v1/matches/${matchId}`);

        return response.data;
    }

    /**
    * @description Get contract definitions
    * @param {string} puuid PlayerUUID
    * @param {string} queueId QueueID
    * @param {number} startIndex startIndex
    * @param {number} endIndex endIndex
    * @return {Promise<any>}
    */
     async FetchMatchHistory(puuid, queueId = null, startIndex = 0, endIndex = 10) {
        const Account = this.Account;
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        let _url = Account.url.playerData + `/match-history/v1/history/${puuid}?startIndex=${startIndex}&endIndex=${endIndex}` ;
        if(queueId != null) {
            _url += `&queue=${queueId}`
        }

        const response = await axiosClient.get(_url);

        return response.data;
    }
}

module.exports = Match;