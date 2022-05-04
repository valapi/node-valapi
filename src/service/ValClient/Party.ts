//import
import { AxiosClient } from "../../client/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";

import QueueId from "../../resources/data/QueueId";

//service

type Party_SetAccessibility_accessibility = 'OPEN' | 'CLOSED'

/**
 * * Class ID: @ing3kth/val-api/ValClient/Party
 */
class Party {
    classId:string
    AxiosClient:AxiosClient;
    Region:IValRegion;
    
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data:ValClient_Service) {
        this.classId = '@ing3kth/val-api/ValClient/Party';
        this.AxiosClient = new AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }

    /**
    */
     async FetchCustomGameConfigs():Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/customgameconfigs`);
    }

    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
     async FetchParty(partyId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/${partyId}`);
    }

    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
     async FetchPlayer(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
    }

    /**
    * @param {String} partyId Party ID
    * @param {String} queue Queue
    * @returns {Promise<IAxiosClient>}
    */
     async ChangeQueue(partyId:string, queue:keyof typeof QueueId.data):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/queue`, {
            "queueID": `${QueueId.data[queue]}`
        });
    }

    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
     async EnterMatchmakingQueue(partyId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/join`);
    }

    /**
    * @param {String} partyId Party ID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {Promise<IAxiosClient>}
    */
     async InviteToPartyByDisplayName(partyId:string, gameName:string, tagLine:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
    }

    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
     async LeaveMatchmakingQueue(partyId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
    }

    /**
    * @param {String} partyId Party ID
    * @param {String} accessibility Accessibility
    * @returns {Promise<IAxiosClient>}
    */
     async SetAccessibility(partyId:string, accessibility:Party_SetAccessibility_accessibility):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/accessibility`, {
            "accessibility": `${accessibility}`
        });
    }
    
    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
     async StartCustomGame(partyId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/startcustomgame`);
    }

    /**
     * 
     * @param {String} puuid Player UUID
     * @returns {Promise<IAxiosClient>}
     */
    async RemovePlayer(puuid:string):Promise<IAxiosClient> {
        return await this.AxiosClient.delete(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
    }

    /**
     * @param {String} partyId Party ID
     * @param {String} requestId Request ID
     * @returns {Promise<IAxiosClient>}
     */
    async DeclineRequest(partyId:string, requestId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/request/${requestId}/decline`);
    }

    /**
    * @param {String} puuid Player UUID
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
     async LeaveParty(puuid:string, partyId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/players/${puuid}/leaveparty/${partyId}`);
    }

    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
     async LeaveQueue(partyId:string):Promise<IAxiosClient> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
    }
}

export { Party, type Party_SetAccessibility_accessibility };