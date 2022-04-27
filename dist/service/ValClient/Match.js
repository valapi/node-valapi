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
exports.Match = void 0;
//import
const AxiosClient_1 = require("@ing3kth/core/dist/core/AxiosClient");
const QueueId_1 = __importDefault(require("../../resources/data/QueueId"));
//service
/**
 * * Class ID: @ing3kth/val-api/ValClient/Match
 */
class Match {
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Match';
        this.AxiosClient = new AxiosClient_1.AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }
    //PVP Endpoints
    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchMatchDetails(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.playerData + `/match-details/v1/matches/${matchId}`);
        });
    }
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queue Queue
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchMatchHistory(puuid, queue, startIndex = 0, endIndex = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let _url = this.Region.url.playerData + `/match-history/v1/history/${puuid}?startIndex=${String(startIndex)}&endIndex=${String(endIndex)}`;
            if (queue) {
                _url += `&queue=${QueueId_1.default.data[queue]}`;
            }
            return yield this.AxiosClient.get(_url);
        });
    }
}
exports.Match = Match;
//# sourceMappingURL=Match.js.map