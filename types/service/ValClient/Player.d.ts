export = Player;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Player
 */
declare class Player {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetUsername(puuid: string): {
        /**
        * @param {String} puuid PlayerUUID
        * @returns {AxiosClientOut}
        */
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
     * @returns {AxiosClientOut}
    */
    GetUserInfo(): {
        /**
        * @param {String} puuid PlayerUUID
        * @returns {AxiosClientOut}
        */
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    FetchPlayer(puuid: string): {
        /**
        * @param {String} puuid PlayerUUID
        * @returns {AxiosClientOut}
        */
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {AxiosClientOut}
    */
    FetchCompetitiveUpdates(puuid: string, queueId?: string, startIndex?: number, endIndex?: number): {
        /**
        * @param {String} puuid PlayerUUID
        * @returns {AxiosClientOut}
        */
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    Loadout(puuid: string): {
        /**
        * @param {String} puuid PlayerUUID
        * @returns {AxiosClientOut}
        */
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    AccountXP(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
     * @returns {AxiosClientOut}
    */
    FetchPlayerRestrictions(): {
        /**
        * @param {String} puuid PlayerUUID
        * @returns {AxiosClientOut}
        */
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=Player.d.ts.map