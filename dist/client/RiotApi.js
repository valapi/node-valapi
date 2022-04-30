"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotApi = void 0;
//import
const IngCore = __importStar(require("@ing3kth/core"));
const ValRegion_1 = require("../resources/ValRegion");
const AccountV1_1 = require("../service/RiotApi/AccountV1");
const StatusV1_1 = require("../service/RiotApi/StatusV1");
const ContentV1_1 = require("../service/RiotApi/ContentV1");
//class
/**
 * Official Api From Riot Games
 *
 * You Can Get API Key From https://developer.riotgames.com/
 *
 * * Class ID: @ing3kth/val-api/RiotApi
 * * Use Anywhere: true
 */
class RiotApi {
    /**
    * @param {IRiotApi} data RiotApi toJSON Data
    */
    constructor(data = {
        apiKey: '',
        region: 'ap',
    }) {
        this.classId = '@ing3kth/val-api/RiotApi';
        this.apiKey = data.apiKey;
        this.region = data.region;
        if (!this.apiKey) {
            IngCore.Logs.log(this.classId + " Missing API Key", 'error', true);
            return;
        }
        this.reload();
    }
    /**
     * @returns {void}
     */
    reload() {
        this.RegionServices = new ValRegion_1.ValRegion(this.region).toJSON();
        //services
        this.services = {
            key: this.apiKey,
            region: this.RegionServices,
            AxiosData: {
                cookie: false,
                jar: null,
                headers: {}
            }
        };
        this.AccountV1 = new AccountV1_1.AccountV1(this.services);
        this.StatusV1 = new StatusV1_1.StatusV1(this.services);
        this.ContentV1 = new ContentV1_1.ContentV1(this.services);
        IngCore.Logs.log(this.classId + " Reload");
    }
    /**
     *
     * @returns {IRiotApi}
     */
    toJSON() {
        IngCore.Logs.log("Export " + this.classId);
        return {
            apiKey: this.apiKey,
            region: this.region,
        };
    }
    /**
     *
     * @param {IRiotApi} data RiotApi toJSON Data
     */
    fromJSON(data) {
        this.apiKey = data.apiKey;
        this.region = data.region;
        IngCore.Logs.log("Import " + this.classId);
        this.reload();
    }
    //settings
    /**
    * @param {String} region Region
    */
    setRegion(region) {
        this.region = region;
        IngCore.Logs.log(this.classId + " SetRegion '" + this.region + "'");
        this.reload();
    }
    /**
    * @param {String} key API Key
    */
    setApiKey(key) {
        this.apiKey = key;
        IngCore.Logs.log(this.classId + " setApiKey '" + this.apiKey + "'");
        this.reload();
    }
    /**
    * @param {IRiotApi} data toJSON data
    */
    static fromJSON(data) {
        const RiotApiClient = new RiotApi();
        RiotApiClient.fromJSON(data);
        return RiotApiClient;
    }
}
exports.RiotApi = RiotApi;
//# sourceMappingURL=RiotApi.js.map