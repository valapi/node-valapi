import * as Auth from "@valapi/auth";
import * as WebClient from "@valapi/web-client";
import * as RiotAPI from "@valapi/riot-api";
import * as ValorantApiCom from "@valapi/valorant-api.com";
import * as Lib from "@valapi/lib";
export { Auth, WebClient, RiotAPI, ValorantApiCom, Lib };
declare const _default: {
    Auth: typeof Auth.Client;
    WebClient: typeof WebClient.Client;
    RiotAPI: typeof RiotAPI.Client;
    ValorantApiCom: typeof ValorantApiCom.Client;
};
export default _default;
export { Region } from "./resources/Region";
export { Crosshair } from "./utils/Crosshair";
export { PatchNote } from "./utils/PatchNote";
