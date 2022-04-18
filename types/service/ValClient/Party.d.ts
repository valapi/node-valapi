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
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
    */
    FetchCustomGameConfigs(): Promise<{
        isError: BooleanConstructor;
        data: ObjectConstructor;
    }>;
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    FetchParty(partyId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    FetchPlayer(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} partyId PartyID
    * @param {String} queueId QueueID
    * @returns {AxiosClientOut}
    */
    ChangeQueue(partyId: string, queueId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    EnterMatchmakingQueue(partyId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {AxiosClientOut}
    */
    InviteToPartyByDisplayName(partyId: string, gameName: string, tagLine: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    LeaveMatchmakingQueue(partyId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @default accessibility = "OPEN" || "CLOSED"
    * @returns {AxiosClientOut}
    */
    SetAccessibility(partyId: string, accessibility: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    StartCustomGame(partyId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    LeaveParty(puuid: string, partyId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} partyId PartyID
    * @returns {AxiosClientOut}
    */
    LeaveQueue(partyId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=Party.d.ts.map