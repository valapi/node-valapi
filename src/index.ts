import * as Auth from "@valapi/auth";
import * as WebClient from "@valapi/web-client";
import * as RiotAPI from "@valapi/riot-api";
import * as ValorantApiCom from "@valapi/valorant-api.com";
import * as Lib from "@valapi/lib";

// modules

export { Auth, WebClient, RiotAPI, ValorantApiCom, Lib };

export default {
    Auth: Auth.AuthClient,
    WebClient: WebClient.Client,
    RiotAPI: RiotAPI.Client,
    ValorantApiCom: ValorantApiCom.Client
};

// utils

export { Crosshair } from "./utils/Crosshair";
export { PatchNote } from "./utils/PatchNote";
