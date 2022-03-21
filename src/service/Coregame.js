//import
const AxiosClient = require('../resources/AxiosClient');

//service
class Coregame {
    constructor(data) {
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {string} matchId MatchID
    */
    async FetchMatch(matchId) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}`);

        return response.data;
    }

    /**
    * @param {string} matchId MatchID
    */
     async FetchMatchLoadouts(matchId) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/matches/${matchId}/loadouts`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async FetchPlayer(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/core-game/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @param {string} puuid PlayerUUID
    * @param {string} matchId MatchID
    */
     async DisassociatePlayer(puuid, matchId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/core-game/v1/players/${puuid}/disassociate/${matchId}`);

        return response.data;
    }
}

module.exports = Coregame;