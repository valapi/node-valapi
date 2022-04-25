import { CookieJar as toughCookie } from "tough-cookie";
import _Region from "../resources/data/Region";
import type { IValClient, ValClient_Service, IValClient_Auth, IValClient_ClientPlatfrom } from "../resources/interface/IValClient";
import type { IValRegion } from "../resources/interface/IValRegion";
import type { IAxiosClient } from "@ing3kth/core/dist/interface/IAxiosClient";
import { Client } from "../service/ValClient/Client";
import { Contract } from "../service/ValClient/Contract";
import { CurrentGame } from "../service/ValClient/CurrentGame";
import { Match } from "../service/ValClient/Match";
import { Party } from "../service/ValClient/Party";
import { Player } from "../service/ValClient/Player";
import { PreGame } from "../service/ValClient/PreGame";
import { Store } from "../service/ValClient/Store";
/**
 * * Class ID: @ing3kth/val-api/ValClient
 * * Use Anywhere: true
 */
declare class ValClient {
    classId: string;
    cookie: toughCookie.Serialized;
    accessToken: string;
    entitlements: string;
    client: {
        version: string;
        platfrom: string;
    };
    region: keyof typeof _Region.data;
    RegionServices: IValRegion | undefined;
    AxiosData: IAxiosClient | undefined;
    services: ValClient_Service | undefined;
    Client: Client | undefined;
    Contract: Contract | undefined;
    CurrentGame: CurrentGame | undefined;
    Match: Match | undefined;
    Party: Party | undefined;
    Player: Player | undefined;
    Pregame: PreGame | undefined;
    Store: Store | undefined;
    /**
    * @param {IValClient_Auth} Account Account toJSON data
    * @param {String} Region Region
    */
    constructor(Account?: IValClient_Auth, Region?: keyof typeof _Region.data);
    /***
     * @returns {void}
     */
    reload(): void;
    /**
     *
     * @returns {IValClient}
     */
    toJSON(): IValClient;
    /**
     *
     * @param {IValClient} data ValClient toJSON Data
     * @returns {void}
     */
    fromJSON(data: IValClient): void;
    /**
    * @param {String} region Region
    * @returns {void}
    */
    setRegion(region: keyof typeof _Region.data): void;
    /**
    * @param {String} clientVersion Client Version
    * @returns {void}
    */
    setClientVersion(clientVersion?: string): void;
    /**
    * @param {IValClient_ClientPlatfrom} clientPlatfrom Client Platfrom in json
    * @returns {void}
    */
    setClientPlatfrom_fromJSON(clientPlatfrom?: IValClient_ClientPlatfrom): void;
    /**
    * @param {JSON} cookie Cookie
    * @returns {void}
    */
    setCookie(cookie?: toughCookie.Serialized): void;
    /**
    * @param {IValClient} data toJSON data
    * @returns {void}
    */
    static fromJSON(data: IValClient): ValClient;
}
export { ValClient, type ValClient_Service };
//# sourceMappingURL=ValClient.d.ts.map