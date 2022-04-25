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
exports.AccountV1 = void 0;
//import
const AxiosClient_1 = require("@ing3kth/core/dist/core/AxiosClient");
/**
 * * Class ID: @ing3kth/val-api/RiotApi/AccountV1
 */
class AccountV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/RiotApi/AccountV1';
        this.apiKey = data.key;
        this.region = data.region;
        this.AxiosClient = new AxiosClient_1.AxiosClient(data.AxiosData);
    }
    /**
     *
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {Promise<IAxiosClient_Out>}
     */
    ByRiotId(gameName, tagLine) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}` + `?api_key=${this.apiKey}`);
        });
    }
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {Promise<IAxiosClient_Out>}
     */
    ByPuuid(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/accounts/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);
        });
    }
    /**
     *
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @returns {Promise<IAxiosClient_Out>}
     */
    ByGame(puuid, game = 'val') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.region.riot.api + `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}` + `?api_key=${this.apiKey}`);
        });
    }
}
exports.AccountV1 = AccountV1;
//# sourceMappingURL=AccountV1.js.map