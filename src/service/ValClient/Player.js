//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//service
class Player {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Player';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    */
    async GetUserInfo() {
        return await this.AxiosClient.post(`https://auth.riotgames.com/userinfo`);
    }

    /**
    * @param {String} puuid PlayerUUID
    */
    async FetchPlayer(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/mmr/v1/players/${puuid}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async GetUsername(puuid) {
        return await this.AxiosClient.put(this.Region.url.playerData + `/name-service/v2/players`, [
            `${puuid}`
        ]);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
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
    */
    async Loadout(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/personalization/v2/players/${puuid}/playerloadout`);
    }

    /**
    * @param {String} puuid PlayerUUID
    */
    async AccountXP(puuid) {
        return await this.AxiosClient.get(this.Region.url.playerData + `/account-xp/v1/players/${puuid}`);
    }

    /**
    */
     async FetchRestrictions() {
        return await this.AxiosClient.get(this.Region.url.playerData + `/restrictions/v3/penalties`);
    }
}

module.exports = Player;