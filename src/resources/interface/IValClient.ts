import { CookieJar } from "tough-cookie";
import _Region from "../../resources/data/Region";

interface IValClient {
    cookie: CookieJar.Serialized,
    accessToken: string,
    entitlements: string,
    region: keyof typeof _Region.data,
}

import { IValRegion } from "./IValRegion";
import { IAxiosClient } from "@ing3kth/core/dist/interface/IAxiosClient";

interface ValClient_Service {
    AxiosData: IAxiosClient,
    Region: IValRegion,
}

interface IValClient_Auth {
    cookie: CookieJar.Serialized,
    accessToken: string,
    entitlements: string,
    multifactor: boolean,
};

interface IValClient_ClientPlatfrom {
    "platformType": string, 
    "platformOS": string, 
    "platformOSVersion": string, 
    "platformChipset": string
}

export type { IValClient, ValClient_Service, IValClient_Auth, IValClient_ClientPlatfrom };