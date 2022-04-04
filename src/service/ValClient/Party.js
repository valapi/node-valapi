//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//service
class Party {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Party';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async FetchPlayer(puuid) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
    }

    /**
    * @param {String} partyId PartyID
    */
     async FetchParty(partyId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/${partyId}`);
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    */
     async InviteToParty(partyId, gameName, tagLine) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    */
     async LeaveParty(puuid, partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/players/${puuid}/leaveparty/${partyId}`);
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @example "OPEN", "CLOSED"
    */
     async SetAccessibility(partyId, accessibility) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/accessibility`, {
            "accessibility": `${accessibility}`
        });
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} queueId QueueID
    */
     async ChangeQueue(partyId, queueId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/queue`, {
            "queueID": `${queueId}`
        });
    }

    /**
    * @param {String} partyId PartyID
    */
     async LeaveQueue(partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
    }

    /**
    */
     async FetchCustomGameConfigs() {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/customgameconfigs`);
    }

    /**
    * @param {String} partyId PartyID
    */
     async StartCustomGame(partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/startcustomgame`);
    }

    /**
    * @param {String} partyId PartyID
    */
     async EnterMatchmakingQueue(partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/join`);
    }

    /**
    * @param {String} partyId PartyID
    */
     async LeaveMatchmakingQueue(partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
    }
}

module.exports = Party;