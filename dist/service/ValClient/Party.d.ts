import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
import QueueId from "../../resources/data/QueueId";
declare type Party_SetAccessibility_accessibility = 'OPEN' | 'CLOSED';
/**
 * * Class ID: @ing3kth/val-api/ValClient/Party
 */
declare class Party {
    classId: string;
    AxiosClient: AxiosClient;
    Region: IValRegion;
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data: ValClient_Service);
    /**
    */
    FetchCustomGameConfigs(): Promise<IAxiosClient_Out>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchParty(partyId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchPlayer(puuid: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} partyId PartyID
    * @param {String} queue Queue
    * @returns {Promise<IAxiosClient_Out>}
    */
    ChangeQueue(partyId: string, queue: keyof typeof QueueId.data): Promise<IAxiosClient_Out>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    EnterMatchmakingQueue(partyId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {Promise<IAxiosClient_Out>}
    */
    InviteToPartyByDisplayName(partyId: string, gameName: string, tagLine: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    LeaveMatchmakingQueue(partyId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @returns {Promise<IAxiosClient_Out>}
    */
    SetAccessibility(partyId: string, accessibility: Party_SetAccessibility_accessibility): Promise<IAxiosClient_Out>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    StartCustomGame(partyId: string): Promise<IAxiosClient_Out>;
    /**
     *
     * @param {String} puuid PlayerUUID
     * @returns {Promise<IAxiosClient_Out>}
     */
    RemovePlayer(puuid: string): Promise<IAxiosClient_Out>;
    /**
     * @param {String} partyId PartyID
     * @param {String} requestId RequestID
     * @returns {Promise<IAxiosClient_Out>}
     */
    DeclineRequest(partyId: string, requestId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    LeaveParty(puuid: string, partyId: string): Promise<IAxiosClient_Out>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    LeaveQueue(partyId: string): Promise<IAxiosClient_Out>;
}
export { Party, type Party_SetAccessibility_accessibility };
//# sourceMappingURL=Party.d.ts.map