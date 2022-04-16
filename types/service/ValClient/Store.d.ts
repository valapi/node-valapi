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
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} itemTypeId ItemTypeID
    * @returns {AxiosClientOut}
    */
    GetEntitlements(puuid: string, itemTypeId: string): AxiosClientOut;
    /**
     * @returns {AxiosClientOut}
    */
    GetOffers(): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetStorefront(puuid: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetWallet(puuid: string): AxiosClientOut;
}
//# sourceMappingURL=Store.d.ts.map