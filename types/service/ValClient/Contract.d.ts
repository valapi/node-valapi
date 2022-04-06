export = Contract;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Contract
 */
declare class Contract {
    /**
    * @param {JSON} data Services Data
    * @returns {Object}
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
     * @returns {Object}
    */
    DefinitionsFetch(): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Object}
    */
    Fetch(puuid: string): Object;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    */
    Activate(puuid: string, contractId: string): Promise<any>;
}
//# sourceMappingURL=Contract.d.ts.map