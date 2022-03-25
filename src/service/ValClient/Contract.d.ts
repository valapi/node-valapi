export = Contract;
declare class Contract {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    AxiosClient: AxiosClient;
    Region: any;
    /**
    */
    DefinitionsFetch(): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    */
    Fetch(puuid: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    */
    Activate(puuid: string, contractId: string): Promise<any>;
}
import AxiosClient = require("../../resources/AxiosClient");
