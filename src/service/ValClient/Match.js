//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;
const AxiosClientOut = require('@ing3kth/core').Interface.AxiosClientOut;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Match
 */
class Match {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Match';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    //PVP Endpoints

    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
     async FetchMatchDetails(matchId) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/match-details/v1/matches/${matchId}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {AxiosClientOut}
    */
     async FetchMatchHistory(puuid, queueId = null, startIndex = 0, endIndex = 10) {
        let _url = this.Region.url.playerData + `/match-history/v1/history/${puuid}?startIndex=${startIndex}&endIndex=${endIndex}` ;
        if(queueId != null) {
            _url += `&queue=${queueId}`;
        }

        return await this.AxiosClient.get(_url);
    }
}

module.exports = Match;