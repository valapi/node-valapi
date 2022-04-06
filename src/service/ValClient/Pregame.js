//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Pregame
 */
class PreGame {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Pregame';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} matchId MatchID
    * @returns {Object}
    */
     async GetMatch(matchId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}`);
    }

    /**
    * @param {String} matchId MatchID
    * @returns {Object}
    */
     async GetMatchLoadouts(matchId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/loadouts`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
     async GetPlayer(puuid) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/players/${puuid}`);
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Object}
    */
     async LockCharacter(matchId, agentId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/lock/${agentId}`);
    }

    /**
    * @param {String} matchId MatchID
    * @returns {Object}
    */
     async QuitMatch(matchId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/quit`);
    }

    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Object}
    */
     async SelectCharacter(matchId, agentId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/select/${agentId}`);
    }
}

module.exports = PreGame;