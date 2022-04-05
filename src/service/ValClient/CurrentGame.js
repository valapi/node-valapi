//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//service
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
    */
    async FetchMatch(matchId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId MatchID
    */
     async FetchMatchLoadouts(matchId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async FetchPlayer(puuid) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/players/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    */
     async DisassociatePlayer(puuid, matchId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/core-game/v1/players/${puuid}/disassociate/${matchId}`);
    }
}

module.exports = CurrentGame;