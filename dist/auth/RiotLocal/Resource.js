"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Chat_1 = __importDefault(require("../../service/RiotLocal/Chat"));
const Main_1 = __importDefault(require("../../service/RiotLocal/Main"));
const More_1 = __importDefault(require("../../service/RiotLocal/More"));
const RiotLocal_Resources = {
    Chat: Chat_1.default,
    Main: Main_1.default,
    More: More_1.default,
};
exports.default = RiotLocal_Resources;
//# sourceMappingURL=Resource.js.map