import { CookieJar } from "tough-cookie";
import _Region from "../../resources/data/Region";
interface IValClient {
    cookie: CookieJar.Serialized;
    accessToken: string;
    tokenType: string;
    entitlements: string;
    region: keyof typeof _Region;
}
import { IValRegion } from "./IValRegion";
import { Interface_AxiosClient } from "@ing3kth/core";
interface ValClient_Service {
    AxiosData: Interface_AxiosClient.IAxiosClient;
    Region: IValRegion;
}
interface IValClient_Auth {
    cookie: CookieJar.Serialized;
    accessToken: string;
    id_token: string;
    expires_in: number;
    token_type: string;
    entitlements: string;
    region: {
        pbe: string;
        live: string;
    };
    multifactor: boolean;
}
interface IValClient_ClientPlatfrom {
    "platformType": string;
    "platformOS": string;
    "platformOSVersion": string;
    "platformChipset": string;
}
export type { IValClient, ValClient_Service, IValClient_Auth, IValClient_ClientPlatfrom };
//# sourceMappingURL=IValClient.d.ts.map