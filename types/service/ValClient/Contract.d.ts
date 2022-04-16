export = Contract;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Contract
 */
declare class Contract {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    Region: any;
    /**
     * @returns {AxiosClientOut}
    */
    DefinitionsFetch(): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    Fetch(puuid: string): AxiosClientOut;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    * @returns {AxiosClientOut}
    */
    Activate(puuid: string, contractId: string): AxiosClientOut;
}
//# sourceMappingURL=Contract.d.ts.map