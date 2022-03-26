//import
const AxiosClient = require('@ing3kth/core').AxiosClient;

//service
class Party {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {String} puuid PlayerUUID
    */
     async FetchPlayer(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @param {String} partyId PartyID
    */
     async FetchParty(partyId) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/${partyId}`);

        return response.data;
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    */
     async InviteToParty(partyId, gameName, tagLine) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);

        return response.data;
    }

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    */
     async LeaveParty(puuid, partyId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/players/${puuid}/leaveparty/${partyId}`);

        return response.data;
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @example "OPEN", "CLOSED"
    */
     async SetAccessibility(partyId, accessibility) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/accessibility`, {
            "accessibility": `${accessibility}`
        });

        return response.data;
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} queueId QueueID
    */
     async ChangeQueue(partyId, queueId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/queue`, {
            "queueID": `${queueId}`
        });

        return response.data;
    }

    /**
    * @param {String} partyId PartyID
    */
     async LeaveQueue(partyId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);

        return response.data;
    }

    /**
    */
     async FetchCustomGameConfigs() {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/customgameconfigs`);

        return response.data;
    }

    /**
    * @param {String} partyId PartyID
    */
     async StartCustomGame(partyId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/startcustomgame`);

        return response.data;
    }

    /**
    * @param {String} partyId PartyID
    */
     async EnterMatchmakingQueue(partyId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/join`);

        return response.data;
    }

    /**
    * @param {String} partyId PartyID
    */
     async LeaveMatchmakingQueue(partyId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);

        return response.data;
    }
}

module.exports = Party;