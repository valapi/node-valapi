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
exports.StatusV1 = void 0;
//import
const AxiosClient_1 = require("@ing3kth/core/dist/core/AxiosClient");
//class
/**
 * * Class ID: @ing3kth/val-api/RiotApi/StatusV1
 */
class StatusV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/RiotApi/StatusV1';
        this.apiKey = data.key;
        this.region = data.region;
        this.AxiosClient = new AxiosClient_1.AxiosClient(data.AxiosData);
    }
    /**
     * @returns {Promise<IAxiosClient_Out>}
     */
    PlatformData() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.region.riot.server + `/val/status/v1/platform-data` + `?api_key=${this.apiKey}`);
        });
    }
}
exports.StatusV1 = StatusV1;
//# sourceMappingURL=StatusV1.js.map