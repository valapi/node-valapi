export = Party;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Party
 */
declare class Party {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
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
    * @returns {Object}
    */
    FetchParty(partyId: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    FetchPlayer(puuid: string): Object;
    /**
    * @param {String} partyId PartyID
    * @param {String} queueId QueueID
    * @returns {Object}
    */
    ChangeQueue(partyId: string, queueId: string): Object;
    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
    EnterMatchmakingQueue(partyId: string): Object;
    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {Object}
    */
    InviteToPartyByDisplayName(partyId: string, gameName: string, tagLine: string): Object;
    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
    LeaveMatchmakingQueue(partyId: string): Object;
    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @default accessibility = "OPEN" || "CLOSED"
    * @returns {Object}
    */
    SetAccessibility(partyId: string, accessibility: string): Object;
    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
    StartCustomGame(partyId: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    * @returns {Object}
    */
    LeaveParty(puuid: string, partyId: string): Object;
    /**
    * @param {String} partyId PartyID
    * @returns {Object}
    */
    LeaveQueue(partyId: string): Object;
}
//# sourceMappingURL=Party.d.ts.map