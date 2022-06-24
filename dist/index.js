"use strict";
// modules
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
exports.PatchNote = exports.Crosshair = exports.Region = exports.Lib = exports.ValorantApiCom = exports.RiotAPI = void 0;
// export * as ApiWrapper from "@valapi/api-wrapper"; // BANNED
exports.RiotAPI = __importStar(require("@valapi/riot-api"));
// export * as RiotClient from "@valapi/riot-client"; // BANNED
exports.ValorantApiCom = __importStar(require("@valapi/valorant-api.com"));
exports.Lib = __importStar(require("@valapi/lib"));
// resources
var Region_1 = require("./resources/Region");
Object.defineProperty(exports, "Region", { enumerable: true, get: function () { return Region_1.Region; } });
// utils
var Crosshair_1 = require("./utils/Crosshair");
Object.defineProperty(exports, "Crosshair", { enumerable: true, get: function () { return Crosshair_1.Crosshair; } });
var PatchNote_1 = require("./utils/PatchNote");
Object.defineProperty(exports, "PatchNote", { enumerable: true, get: function () { return PatchNote_1.PatchNote; } });
//# sourceMappingURL=index.js.map