//import
const AxiosClient = require('../resources/AxiosClient');

//service
class Party {
    constructor(data) {
        this.AxiosData = data.AxiosData;
        this.AxiosClient = new AxiosClient(this.AxiosData);
        this.Region = data.Region;
    }

    /**
    * @param {string} puuid PlayerUUID
    */
     async FetchPlayer(puuid) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/players/${puuid}`);

        return response.data;
    }

    /**
    * @param {string} partyId PartyID
    */
     async FetchParty(partyId) {
        const response = await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/${partyId}`);

        return response.data;
    }

    /**
    * @param {string} partyId PartyID
    * @param {string} accessibility Accessibility
    * @example "OPEN", "CLOSED"
    */
     async SetAccessibility(partyId, accessibility) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/accessibility`, {
            "accessibility": `${accessibility}`
        });

        return response.data;
    }

    /**
    * @param {string} partyId PartyID
    * @param {string} queueId QueueID
    */
     async ChangeQueue(partyId, queueId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/queue`, {
            "queueID": `${queueId}`
        });

        return response.data;
    }

    /**
    * @param {string} partyId PartyID
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
    * @param {string} partyId PartyID
    */
     async StartCustomGame(partyId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/startcustomgame`);

        return response.data;
    }

    /**
    * @param {string} partyId PartyID
    */
     async EnterMatchmakingQueue(partyId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/join`);

        return response.data;
    }

    /**
    * @param {string} partyId PartyID
    */
     async LeaveMatchmakingQueue(partyId) {
        const response = await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);

        return response.data;
    }
}

module.exports = Party;