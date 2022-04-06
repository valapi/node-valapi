//import
const AxiosClient = require('@ing3kth/core').Core.AxiosClient;

//service

/**
 * * Class ID: @ing3kth/val-api/ValClient/Party
 */
class Party {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Party';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    */
     async FetchCustomGameConfigs() {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/customgameconfigs`);
    }

    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
     async FetchParty(partyId) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/${partyId}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
     async FetchPlayer(puuid) {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} queueId QueueID
    * @returns {Object}
    */
     async ChangeQueue(partyId, queueId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/queue`, {
            "queueID": `${queueId}`
        });
    }

    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
     async EnterMatchmakingQueue(partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/join`);
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {Object}
    */
     async InviteToPartyByDisplayName(partyId, gameName, tagLine) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
    }

    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
     async LeaveMatchmakingQueue(partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @default accessibility = "OPEN" || "CLOSED"
    * @returns {Object}
    */
     async SetAccessibility(partyId, accessibility) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/accessibility`, {
            "accessibility": `${accessibility}`
        });
    }
    
    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
     async StartCustomGame(partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/startcustomgame`);
    }

    //NOT IN DOCS

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    * @returns {Object}
    */
     async LeaveParty(puuid, partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/players/${puuid}/leaveparty/${partyId}`);
    }

    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
     async LeaveQueue(partyId) {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
    }
}

module.exports = Party;