//import
const AxiosClient = require('../../resources/AxiosClient');

//service
class Match {
    constructor(data) {
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    */
     async FetchMatchDetails(matchId) {
        const response = await this.AxiosClient.get(this.Region.url.playerData + `/match-details/v1/matches/${matchId}`);

        return response.data;
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    */
     async FetchMatchHistory(puuid, queueId = null, startIndex = 0, endIndex = 10) {
        let _url = this.Region.url.playerData + `/match-history/v1/history/${puuid}?startIndex=${startIndex}&endIndex=${endIndex}` ;
        if(queueId != null) {
            _url += `&queue=${queueId}`
        }

        const response = await this.AxiosClient.get(_url);

        return response.data;
    }
}

module.exports = Match;