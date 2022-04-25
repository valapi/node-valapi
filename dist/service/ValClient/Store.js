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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
//import
const AxiosClient_1 = require("@ing3kth/core/dist/core/AxiosClient");
const ItemTypeId_1 = __importDefault(require("../../resources/data/ItemTypeId"));
//service
/**
 * * Class ID: @ing3kth/val-api/ValClient/Store
 */
class Store {
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Store';
        this.AxiosClient = new AxiosClient_1.AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} itemType ItemType
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetEntitlements(puuid, itemType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.playerData + `/store/v1/entitlements/${puuid}/${ItemTypeId_1.default.data[itemType]}`);
        });
    }
    /**
     * @returns {Promise<IAxiosClient_Out>}
    */
    GetOffers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.playerData + `/store/v1/offers/`);
        });
    }
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetStorefront(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.playerData + `/store/v2/storefront/${puuid}`);
        });
    }
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetWallet(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.playerData + `/store/v1/wallet/${puuid}`);
        });
    }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map