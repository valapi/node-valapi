"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchNote = exports.Crosshair = exports.Region = exports.Lib = exports.ValorantApiCom = exports.RiotAPI = exports.WebClient = exports.Auth = void 0;
const tslib_1 = require("tslib");
const Auth = tslib_1.__importStar(require("@valapi/auth"));
exports.Auth = Auth;
const WebClient = tslib_1.__importStar(require("@valapi/web-client"));
exports.WebClient = WebClient;
const RiotAPI = tslib_1.__importStar(require("@valapi/riot-api"));
exports.RiotAPI = RiotAPI;
const ValorantApiCom = tslib_1.__importStar(require("@valapi/valorant-api.com"));
exports.ValorantApiCom = ValorantApiCom;
const Lib = tslib_1.__importStar(require("@valapi/lib"));
exports.Lib = Lib;
exports.default = {
    Auth: Auth.Client,
    WebClient: WebClient.Client,
    RiotAPI: RiotAPI.Client,
    ValorantApiCom: ValorantApiCom.Client
};
// resources
var Region_1 = require("./resources/Region");
Object.defineProperty(exports, "Region", { enumerable: true, get: function () { return Region_1.Region; } });
// utils
var Crosshair_1 = require("./utils/Crosshair");
Object.defineProperty(exports, "Crosshair", { enumerable: true, get: function () { return Crosshair_1.Crosshair; } });
var PatchNote_1 = require("./utils/PatchNote");
Object.defineProperty(exports, "PatchNote", { enumerable: true, get: function () { return PatchNote_1.PatchNote; } });
