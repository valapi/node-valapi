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
exports.ContentV1 = void 0;
//import
const AxiosClient_1 = require("../../client/AxiosClient");
const Locale_1 = __importDefault(require("../../resources/data/Locale"));
//class
/**
 * * Class ID: @ing3kth/val-api/RiotApi/ContentV1
 */
class ContentV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/RiotApi/ContentV1';
        this.apiKey = data.key;
        this.region = data.region;
        this.AxiosClient = new AxiosClient_1.AxiosClient(data.AxiosData);
    }
    /**
     *
     * @param {String} locale Locale
     * @returns {Promise<IAxiosClient>}
     */
    Contents(locale = 'English_United_States') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.region.riot.server + `/val/content/v1/contents?locale=${Locale_1.default.data[locale]}` + `&api_key=${this.apiKey}`);
        });
    }
}
exports.ContentV1 = ContentV1;
//# sourceMappingURL=ContentV1.js.map