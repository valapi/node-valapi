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
exports.Interface_ValRegion = exports.Interface_ValClient = exports.Interface_RiotLocal = exports.Interface_RiotApi = exports.Region = exports.QueueId = exports.Locale = exports.ItemTypeId = exports.Currency = exports.ValRegion = exports.RiotLocal = exports.RiotApi = exports.ValClient = void 0;
//client
var ValClient_1 = require("./client/ValClient");
Object.defineProperty(exports, "ValClient", { enumerable: true, get: function () { return ValClient_1.ValClient; } });
var RiotApi_1 = require("./client/RiotApi");
Object.defineProperty(exports, "RiotApi", { enumerable: true, get: function () { return RiotApi_1.RiotApi; } });
var RiotLocal_1 = require("./client/RiotLocal");
Object.defineProperty(exports, "RiotLocal", { enumerable: true, get: function () { return RiotLocal_1.RiotLocal; } });
//resource
var ValRegion_1 = require("./resources/ValRegion");
Object.defineProperty(exports, "ValRegion", { enumerable: true, get: function () { return ValRegion_1.ValRegion; } });
exports.Currency = __importStar(require("./resources/data/Currency"));
exports.ItemTypeId = __importStar(require("./resources/data/ItemTypeId"));
exports.Locale = __importStar(require("./resources/data/Locale"));
exports.QueueId = __importStar(require("./resources/data/QueueId"));
exports.Region = __importStar(require("./resources/data/Region"));
//interface
exports.Interface_RiotApi = __importStar(require("./resources/interface/IRiotApi"));
exports.Interface_RiotLocal = __importStar(require("./resources/interface/IRiotLocal"));
exports.Interface_ValClient = __importStar(require("./resources/interface/IValClient"));
exports.Interface_ValRegion = __importStar(require("./resources/interface/IValRegion"));
//# sourceMappingURL=index.js.map