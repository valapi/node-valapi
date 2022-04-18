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
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
     * @returns {AxiosClientOut}
    */
    DefinitionsFetch(): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    Fetch(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    * @returns {AxiosClientOut}
    */
    Activate(puuid: string, contractId: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=Contract.d.ts.map