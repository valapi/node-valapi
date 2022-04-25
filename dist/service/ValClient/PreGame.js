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
exports.PreGame = void 0;
//import
const AxiosClient_1 = require("@ing3kth/core/dist/core/AxiosClient");
//service
/**
 * * Class ID: @ing3kth/val-api/ValClient/Pregame
 */
class PreGame {
    /**
    * @param {ValClient_Service} data Services Data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/Pregame';
        this.AxiosClient = new AxiosClient_1.AxiosClient(data.AxiosData);
        this.Region = data.Region;
    }
    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetMatch(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}`);
        });
    }
    /**
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetMatchLoadouts(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/loadouts`);
        });
    }
    /**
    * @param {String} puuid PlayerUUID
    * @returns {Promise<IAxiosClient_Out>}
    */
    GetPlayer(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.get(this.Region.url.partyService + `/pregame/v1/players/${puuid}`);
        });
    }
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient_Out>}
    */
    LockCharacter(matchId, agentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/lock/${agentId}`);
        });
    }
    /**
     * * Careful to use, Riot will immediately shut down your Project.
    * @param {String} matchId MatchID
    * @returns {Promise<IAxiosClient_Out>}
    */
    QuitMatch(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/quit`);
        });
    }
    /**
    * @param {String} matchId MatchID
    * @param {String} agentId CharacterID
    * @returns {Promise<IAxiosClient_Out>}
    */
    SelectCharacter(matchId, agentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.AxiosClient.post(this.Region.url.partyService + `/pregame/v1/matches/${matchId}/select/${agentId}`);
        });
    }
}
exports.PreGame = PreGame;
//# sourceMappingURL=PreGame.js.map