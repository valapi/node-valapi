//import
const AxiosClient = require('../../resources/AxiosClient');

//service
class Pregame {
    constructor(data) {
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async GetPlayer(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @param {String} matchId MatchID
    */
     async GetMatch(matchId) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}`);

        return response.data;
    }

    /**
    * @param {String} matchId MatchID
    */
     async GetMatchLoadouts(matchId) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/loadouts`);

        return response.data;
    }

    /**
    * @param {String} matchId MatchID
    */
     async QuitMatch(matchId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/quit`);

        return response.data;
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    */
     async SelectCharacter(matchId, agentId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/select/${agentId}`);

        return response.data;
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    */
     async LockCharacter(matchId, agentId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/lock/${agentId}`);

        return response.data;
    }
}

module.exports = Pregame;