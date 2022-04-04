//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//service
class Pregame {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Pregame';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async GetPlayer(puuid) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/players/${puuid}`);
    }

    /**
    * @param {String} matchId MatchID
    */
     async GetMatch(matchId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId MatchID
    */
     async GetMatchLoadouts(matchId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} matchId MatchID
    */
     async QuitMatch(matchId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/quit`);
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    */
     async SelectCharacter(matchId, agentId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/select/${agentId}`);
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    */
     async LockCharacter(matchId, agentId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/lock/${agentId}`);
    }
}

module.exports = Pregame;