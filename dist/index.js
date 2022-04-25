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
exports.Interface = exports.Resource = exports.ValRegion = exports.RiotLocal = exports.RiotApi = exports.ValClient = exports.Auth = void 0;
//auth
exports.Auth = __importStar(require("./export/Auth"));
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
exports.Resource = __importStar(require("./export/Resource"));
//interface
exports.Interface = __importStar(require("./export/Interface"));
//# sourceMappingURL=index.js.map