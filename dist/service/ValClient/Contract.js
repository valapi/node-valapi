"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
//import
const AxiosClient_1 = require("@ing3kth/core/dist/core/AxiosClient");
//service
/**
 * * Class ID: @ing3kth/val-api/ValClient/Contract
 */
class Contract {
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Contract';
        this.AxiosClient = new AxiosClient_1.AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }
    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
    DefinitionsFetch() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.playerData + `/contract-definitions/v3/item-upgrades`);
        });
    }
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    Fetch(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}`);
        });
    }
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} contractId ContractID
    * @returns {Promise<IAxiosClient_Out>}
    */
    Activate(puuid, contractId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.playerData + `/contracts/v1/contracts/${puuid}/special/${contractId}`);
        });
    }
}
exports.Contract = Contract;
//# sourceMappingURL=Contract.js.map