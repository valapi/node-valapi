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
const AxiosClient_1 = require("@ing3kth/core/dist/core/AxiosClient");
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
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchParty(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/parties/${partyId}`);
        });
    }
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    FetchPlayer(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
        });
    }
    /**
    * @param {String} partyId PartyID
    * @param {String} queue Queue
    * @returns {Promise<IAxiosClient_Out>}
    */
    ChangeQueue(partyId, queue) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/queue`, {
                "queueID": `${QueueId_1.default.data[queue]}`
            });
        });
    }
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    EnterMatchmakingQueue(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/join`);
        });
    }
    /**
    * @param {String} partyId PartyID
    * @param {String} gameName In-Game Name
    * @param {String} tagLine In-Game Tag
    * @returns {Promise<IAxiosClient_Out>}
    */
    InviteToPartyByDisplayName(partyId, gameName, tagLine) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
        });
    }
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    LeaveMatchmakingQueue(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
        });
    }
    /**
    * @param {String} partyId PartyID
    * @param {String} accessibility Accessibility
    * @returns {Promise<IAxiosClient_Out>}
    */
    SetAccessibility(partyId, accessibility) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/accessibility`, {
                "accessibility": `${accessibility}`
            });
        });
    }
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    StartCustomGame(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/startcustomgame`);
        });
    }
    //Not Sort Yet
    /**
     *
     * @param {String} puuid PlayerUUID
     * @returns {Promise<IAxiosClient_Out>}
     */
    RemovePlayer(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.delete(this.Region.url.partyService + `/parties/v1/players/${puuid}`);
        });
    }
    /**
     * @param {String} partyId PartyID
     * @param {String} requestId RequestID
     * @returns {Promise<IAxiosClient_Out>}
     */
    DeclineRequest(partyId, requestId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/request/${requestId}/decline`);
        });
    }
    //NOT IN DOCS
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    LeaveParty(puuid, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/players/${puuid}/leaveparty/${partyId}`);
        });
    }
    /**
    * @param {String} partyId PartyID
    * @returns {Promise<IAxiosClient_Out>}
    */
    LeaveQueue(partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/parties/v1/parties/${partyId}/matchmaking/leave`);
        });
    }
}
exports.Party = Party;
//# sourceMappingURL=Party.js.map