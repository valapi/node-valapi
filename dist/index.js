"use strict";
// modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchNote = exports.ValorantDefaultCrosshair = exports.ValorantCrosshairColor = exports.Crosshair = exports.Region = exports.Lib = exports.ValorantApiCom = exports.RiotAPI = exports.Auth = void 0;
const tslib_1 = require("tslib");
exports.Auth = tslib_1.__importStar(require("@valapi/auth"));
//export * as ApiWrapper from "@valapi/api-wrapper"; // BANNED
exports.RiotAPI = tslib_1.__importStar(require("@valapi/riot-api"));
//export * as RiotClient from "@valapi/riot-client"; // BANNED
exports.ValorantApiCom = tslib_1.__importStar(require("@valapi/valorant-api.com"));
exports.Lib = tslib_1.__importStar(require("@valapi/lib"));
// resources
var Region_1 = require("./resources/Region");
Object.defineProperty(exports, "Region", { enumerable: true, get: function () { return Region_1.Region; } });
// utils
var Crosshair_1 = require("./utils/Crosshair");
Object.defineProperty(exports, "Crosshair", { enumerable: true, get: function () { return Crosshair_1.Crosshair; } });
Object.defineProperty(exports, "ValorantCrosshairColor", { enumerable: true, get: function () { return Crosshair_1.ValorantCrosshairColor; } });
Object.defineProperty(exports, "ValorantDefaultCrosshair", { enumerable: true, get: function () { return Crosshair_1.ValorantDefaultCrosshair; } });
var PatchNote_1 = require("./utils/PatchNote");
Object.defineProperty(exports, "PatchNote", { enumerable: true, get: function () { return PatchNote_1.PatchNote; } });
//# sourceMappingURL=index.js.map