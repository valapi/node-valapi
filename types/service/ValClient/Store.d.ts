export = Store;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Store
 */
declare class Store {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} itemTypeId ItemTypeID
    * @returns {Object}
    */
    GetEntitlements(puuid: string, itemTypeId: string): Object;
    /**
     * @returns {Object}
    */
    GetOffers(): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    GetStorefront(puuid: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    GetWallet(puuid: string): Object;
}
//# sourceMappingURL=Store.d.ts.map