import { AxiosClient } from "../../client/AxiosClient";
import type { ValClient_Service } from "../../client/ValClient";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
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
    FetchCustomGameConfigs(): Promise<IAxiosClient>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient>}
    */
    FetchParty(partyId: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient>}
    */
    FetchPlayer(puuid: string): Promise<IAxiosClient>;
    /**
    * @param {String} partyId PartyID
    * @param {String} queue Queue
    * @returns {Promise<IAxiosClient>}
    */
    ChangeQueue(partyId: string, queue: keyof typeof QueueId.data): Promise<IAxiosClient>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient>}
    */
    EnterMatchmakingQueue(partyId: string): Promise<IAxiosClient>;
    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {Promise<IAxiosClient>}
    */
    InviteToPartyByDisplayName(partyId: string, gameName: string, tagLine: string): Promise<IAxiosClient>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient>}
    */
    LeaveMatchmakingQueue(partyId: string): Promise<IAxiosClient>;
    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @returns {Promise<IAxiosClient>}
    */
    SetAccessibility(partyId: string, accessibility: Party_SetAccessibility_accessibility): Promise<IAxiosClient>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient>}
    */
    StartCustomGame(partyId: string): Promise<IAxiosClient>;
    /**
     *
     * @param {String} puuid PlayerUUID
     * @returns {Promise<IAxiosClient>}
     */
    RemovePlayer(puuid: string): Promise<IAxiosClient>;
    /**
     * @param {String} partyId PartyID
     * @param {String} requestId RequestID
     * @returns {Promise<IAxiosClient>}
     */
    DeclineRequest(partyId: string, requestId: string): Promise<IAxiosClient>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient>}
    */
    LeaveParty(puuid: string, partyId: string): Promise<IAxiosClient>;
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient>}
    */
    LeaveQueue(partyId: string): Promise<IAxiosClient>;
}
export { Party, type Party_SetAccessibility_accessibility };
//# sourceMappingURL=Party.d.ts.map