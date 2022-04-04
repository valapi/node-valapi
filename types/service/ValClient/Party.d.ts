export = Party;
declare class Party {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    */
    FetchPlayer(puuid: string): Promise<any>;
    /**
    * @param {String} partyId PartyID
    */
    FetchParty(partyId: string): Promise<any>;
    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    */
    InviteToParty(partyId: string, gameName: string, tagLine: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    */
    LeaveParty(puuid: string, partyId: string): Promise<any>;
    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @example "OPEN", "CLOSED"
    */
    SetAccessibility(partyId: string, accessibility: string): Promise<any>;
    /**
    * @param {String} partyId PartyID
    * @param {String} queueId QueueID
    */
    ChangeQueue(partyId: string, queueId: string): Promise<any>;
    /**
    * @param {String} partyId PartyID
    */
    LeaveQueue(partyId: string): Promise<any>;
    /**
    */
    FetchCustomGameConfigs(): Promise<any>;
    /**
    * @param {String} partyId PartyID
    */
    StartCustomGame(partyId: string): Promise<any>;
    /**
    * @param {String} partyId PartyID
    */
    EnterMatchmakingQueue(partyId: string): Promise<any>;
    /**
    * @param {String} partyId PartyID
    */
    LeaveMatchmakingQueue(partyId: string): Promise<any>;
}
//# sourceMappingURL=Party.d.ts.map