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
exports.Party = void 0;
//import
const AxiosClient_1 = require("../../client/AxiosClient");
const QueueId_1 = __importDefault(require("../../resources/data/QueueId"));
/**
 * * Class ID: @ing3kth/val-api/ValClient/Party
 */
class Party {
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Party';
        this.AxiosClient = new AxiosClient_1.AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }
    /**
    */
    FetchCustomGameConfigs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/customgameconfigs`);
        });
    }
    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
    FetchParty(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/${partyId}`);
        });
    }
    /**
    * @param {String} puuid Player UUID
    * @returns {Promise<IAxiosClient>}
    */
    FetchPlayer(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
        });
    }
    /**
    * @param {String} partyId Party ID
    * @param {String} queue Queue
    * @returns {Promise<IAxiosClient>}
    */
    ChangeQueue(partyId, queue) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/queue`, {
                "queueID": `${QueueId_1.default.data[queue]}`
            });
        });
    }
    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
    EnterMatchmakingQueue(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/join`);
        });
    }
    /**
    * @param {String} partyId Party ID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {Promise<IAxiosClient>}
    */
    InviteToPartyByDisplayName(partyId, gameName, tagLine) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
        });
    }
    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
    LeaveMatchmakingQueue(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
        });
    }
    /**
    * @param {String} partyId Party ID
    * @param {String} accessibility Accessibility
    * @returns {Promise<IAxiosClient>}
    */
    SetAccessibility(partyId, accessibility) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/accessibility`, {
                "accessibility": `${accessibility}`
            });
        });
    }
    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
    StartCustomGame(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/startcustomgame`);
        });
    }
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {Promise<IAxiosClient>}
     */
    RemovePlayer(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.delete(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
        });
    }
    /**
     * @param {String} partyId Party ID
     * @param {String} requestId Request ID
     * @returns {Promise<IAxiosClient>}
     */
    DeclineRequest(partyId, requestId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/request/${requestId}/decline`);
        });
    }
    /**
    * @param {String} puuid Player UUID
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
    LeaveParty(puuid, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/players/${puuid}/leaveparty/${partyId}`);
        });
    }
    /**
    * @param {String} partyId Party ID
    * @returns {Promise<IAxiosClient>}
    */
    LeaveQueue(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
        });
    }
}
exports.Party = Party;
//# sourceMappingURL=Party.js.map