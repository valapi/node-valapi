import _Region from "../../resources/data/Region";
import { CookieJar } from "tough-cookie";
interface IValClient {
    cookie: CookieJar.Serialized;
    access_token: string;
    token_type: string;
    entitlements_token: string;
    region: keyof typeof _Region;
}
import { IValRegion } from "./IValRegion";
import { AxiosRequestConfig } from "axios";
interface ValClient_Service {
    AxiosData: AxiosRequestConfig;
    Region: IValRegion;
}
interface IValClient_Auth {
    cookie: CookieJar.Serialized;
    access_token: string;
    id_token: string;
    expires_in: number;
    token_type: string;
    entitlements_token: string;
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