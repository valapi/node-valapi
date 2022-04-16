export = Party;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Party
 */
declare class Party {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    */
    FetchCustomGameConfigs(): Promise<any>;
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    FetchParty(partyId: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    FetchPlayer(puuid: string): AxiosClientOut;
    /**
    * @param {String} partyId PartyID
    * @param {String} queueId QueueID
    * @returns {AxiosClientOut}
    */
    ChangeQueue(partyId: string, queueId: string): AxiosClientOut;
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    EnterMatchmakingQueue(partyId: string): AxiosClientOut;
    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {AxiosClientOut}
    */
    InviteToPartyByDisplayName(partyId: string, gameName: string, tagLine: string): AxiosClientOut;
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    LeaveMatchmakingQueue(partyId: string): AxiosClientOut;
    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @default accessibility = "OPEN" || "CLOSED"
    * @returns {AxiosClientOut}
    */
    SetAccessibility(partyId: string, accessibility: string): AxiosClientOut;
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    StartCustomGame(partyId: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    LeaveParty(puuid: string, partyId: string): AxiosClientOut;
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    LeaveQueue(partyId: string): AxiosClientOut;
}
//# sourceMappingURL=Party.d.ts.map