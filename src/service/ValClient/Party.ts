//import
import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";

import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

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
     async FetchCustomGameConfigs():Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/customgameconfigs`);
    }

    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async FetchParty(partyId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/${partyId}`);
    }

    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async FetchPlayer(puuid:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} queue Queue
    * @returns {Promise<IAxiosClient_Out>}
    */
     async ChangeQueue(partyId:string, queue:keyof typeof QueueId.data):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/queue`, {
            "queueID": `${QueueId.data[queue]}`
        });
    }

    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async EnterMatchmakingQueue(partyId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/join`);
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {Promise<IAxiosClient_Out>}
    */
     async InviteToPartyByDisplayName(partyId:string, gameName:string, tagLine:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
    }

    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async LeaveMatchmakingQueue(partyId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
    }

    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @returns {Promise<IAxiosClient_Out>}
    */
     async SetAccessibility(partyId:string, accessibility:Party_SetAccessibility_accessibility):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/accessibility`, {
            "accessibility": `${accessibility}`
        });
    }
    
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async StartCustomGame(partyId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/startcustomgame`);
    }
    
    //Not Sort Yet

    /**
     * 
     * @param {String} puuid PlayerUUID
     * @returns {Promise<IAxiosClient_Out>}
     */
    async RemovePlayer(puuid:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.delete(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
    }

    /**
     * @param {String} partyId PartyID
     * @param {String} requestId RequestID
     * @returns {Promise<IAxiosClient_Out>}
     */
    async DeclineRequest(partyId:string, requestId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/request/${requestId}/decline`);
    }

    //NOT IN DOCS

    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async LeaveParty(puuid:string, partyId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/players/${puuid}/leaveparty/${partyId}`);
    }

    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
     async LeaveQueue(partyId:string):Promise<IAxiosClient_Out> {
        return await this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
    }
}

export { Party, type Party_SetAccessibility_accessibility }