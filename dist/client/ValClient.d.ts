import { CookieJar } from "tough-cookie";
import _Region from "../resources/data/Region";
import type { IValClient, ValClient_Service, IValClient_Auth, IValClient_ClientPlatfrom } from "../resources/interface/IValClient";
import { Client } from "../service/ValClient/Client";
import { Contract } from "../service/ValClient/Contract";
import { CurrentGame } from "../service/ValClient/CurrentGame";
import { Match } from "../service/ValClient/Match";
import { Party } from "../service/ValClient/Party";
import { Player } from "../service/ValClient/Player";
import { PreGame } from "../service/ValClient/PreGame";
import { Store } from "../service/ValClient/Store";
import { Account as Auth_Account } from "../auth/ValClient/Account";
import { Multifactor as Auth_Multifactor } from "../auth/ValClient/Multifactor";
/**
 * * Class ID: @ing3kth/val-api/ValClient
 * * Use Anywhere: true
 */
declare class ValClient {
    classId: string;
    private cookie;
    private access_token;
    private token_type;
    private entitlements_token;
    private client;
    private region;
    private RegionServices;
    private services;
    Client: Client;
    Contract: Contract;
    CurrentGame: CurrentGame;
    Match: Match;
    Party: Party;
    Player: Player;
    Pregame: PreGame;
    Store: Store;
    /**
    * @param {IValClient_Auth} Account Account toJSON data
    */
    constructor(Account: IValClient_Auth);
    /***
     * @returns {void}
     */
    private reload;
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
    setRegion(region: keyof typeof _Region): void;
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
    * @param {CookieJar.Serialized} cookie Cookie
    * @returns {void}
    */
    setCookie(cookie: CookieJar.Serialized): void;
    /**
    * @param {IValClient} data toJSON data
    * @returns {void}
    */
    static fromJSON(data: IValClient): ValClient;
    static Auth: {
        login: typeof Auth_Account.login;
        verify: typeof Auth_Multifactor.verify;
    };
}
export { ValClient, type ValClient_Service };
//# sourceMappingURL=ValClient.d.ts.map