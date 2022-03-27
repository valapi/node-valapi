//import
const AxiosClient = require('@ing3kth/core').AxiosClient;

//service
class Coregame {
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
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}`);

        return response.data;
    }

    /**
    * @param {String} matchId MatchID
    */
     async FetchMatchLoadouts(matchId) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}/loadouts`);

        return response.data;
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async FetchPlayer(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} matchId MatchID
    */
     async DisassociatePlayer(puuid, matchId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/core-game/v1/players/${puuid}/disassociate/${matchId}`);

        return response.data;
    }
}

module.exports = Coregame;