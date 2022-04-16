//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;
const AxiosClientOut = require('@ing3kth/core').Interface.AxiosClientOut;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Player
 */
class Player {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Player';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    //Mike - Username From ID
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
     async GetUsername(puuid) {
        return await this.AxiosClient.put(this.Region.url.playerData + `/name-service/v2/players`, [
            `${puuid}`
        ]);
    }

    //Riot Auth

    /**
     * @returns {AxiosClientOut}
    */
    async GetUserInfo() {
        return await this.AxiosClient.post(`https://auth.riotgames.com/userinfo`);
    }

    //PVP Endpoints

    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
     async FetchPlayer(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/mmr/v1/players/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {AxiosClientOut}
    */
    async FetchCompetitiveUpdates(puuid, queueId = false, startIndex = 0, endIndex = 10) {
        let _url = this.Region.url.playerData + `/mmr/v1/players/${puuid}/competitiveupdates?startIndex=${startIndex}&endIndex=${endIndex}`;
        if (!queueId) {
            _url += `&queue=${queueId}`;
        }

        return await this.AxiosClient.get(_url);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    async Loadout(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/personalization/v2/players/${puuid}/playerloadout`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    async AccountXP(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/account-xp/v1/players/${puuid}`);
    }

    /**
     * @returns {AxiosClientOut}
    */
     async FetchPlayerRestrictions() {
        return await this.AxiosClient.get(this.Region.url.playerData + `/restrictions/v3/penalties`);
    }
}

module.exports = Player;