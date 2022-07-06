// modules

export * as Auth from "@valapi/auth";
//export * as ApiWrapper from "@valapi/api-wrapper"; // BANNED
export * as RiotAPI from "@valapi/riot-api";
//export * as RiotClient from "@valapi/riot-client"; // BANNED
export * as ValorantApiCom from "@valapi/valorant-api.com";
export * as Lib from "@valapi/lib";

// resources

export { Region } from "./resources/Region";

// utils

export {
    Crosshair,
    ValorantCrosshairColor, ValorantDefaultCrosshair,
    type ValoarntCrosshairParsePrimary, type ValoarntCrosshairParse, type ValoarntCrosshairLinesError, type ValoarntCrosshairLines, type ValoarntCrosshair
} from "./utils/Crosshair";

export {
    PatchNote,
    type ValorantVersion,
} from "./utils/PatchNote";