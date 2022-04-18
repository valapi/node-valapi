export = Store;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Store
 */
declare class Store {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} itemTypeId ItemTypeID
    * @returns {AxiosClientOut}
    */
    GetEntitlements(puuid: string, itemTypeId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
     * @returns {AxiosClientOut}
    */
    GetOffers(): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetStorefront(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetWallet(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=Store.d.ts.map