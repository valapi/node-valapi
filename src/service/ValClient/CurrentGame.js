//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;
const AxiosClientOut = require('@ing3kth/core').Interface.AxiosClientOut;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Coregame
 */
class CurrentGame {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Coregame';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
    async FetchMatch(matchId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
     async FetchMatchLoadouts(matchId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
     async FetchPlayer(puuid) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/players/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    * @returns {AxiosClientOut}
    */
     async DisassociatePlayer(puuid, matchId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/core-game/v1/players/${puuid}/disassociate/${matchId}`);
    }
}

module.exports = CurrentGame;