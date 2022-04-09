export = ValClient;
/**
 * * Class ID: @ing3kth/val-api/ValClient
 * * Use Anywhere: true
 */
declare class ValClient {
    /**
    * @param {JSON} data toJSON data
    * @returns {void}
    */
    static fromJSON(data: JSON): void;
    /**
    * @param {IValClientAuth} Account Account toJSON data
    * @param {String} Region Region
    */
    constructor(Account?: {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        multifactor: BooleanConstructor;
    }, Region?: string);
    classId: string | undefined;
    cookie: ObjectConstructor | undefined;
    accessToken: StringConstructor | undefined;
    entitlements: StringConstructor | undefined;
    client: {
        version: string;
        platfrom: string;
    } | undefined;
    region: string | undefined;
    /***
     * @returns {void}
     */
    reload(): void;
    RegionServices: ValRegion | undefined;
    AxiosData: {
        cookie: boolean;
        jar: ObjectConstructor | undefined;
        headers: {
            Authorization: string;
            'X-Riot-Entitlements-JWT': StringConstructor | undefined;
            'X-Riot-ClientVersion': string;
            'X-Riot-ClientPlatform': string;
        };
    } | undefined;
    services: {
        AxiosData: {
            cookie: boolean;
            jar: ObjectConstructor | undefined;
            headers: {
                Authorization: string;
                'X-Riot-Entitlements-JWT': StringConstructor | undefined;
                'X-Riot-ClientVersion': string;
                'X-Riot-ClientPlatform': string;
            };
        };
        Region: ValRegion;
    } | undefined;
    Client: Client | undefined;
    Contract: Contract | undefined;
    Coregame: CurrentGame | undefined;
    Match: Match | undefined;
    Party: Party | undefined;
    Player: Player | undefined;
    Pregame: PreGame | undefined;
    Store: Store | undefined;
    /**
     *
     * @returns {IValClient}
     */
    toJSON(): {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        region: StringConstructor;
    };
    /**
     *
     * @param {IValClient} data ValClient toJSON Data
     * @returns {void}
     */
    fromJSON(data: {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        region: StringConstructor;
    }): void;
    /**
    * @param {String} region Region
    * @example region = 'ap'
    * @returns {void}
    */
    setRegion(region: string): void;
    /**
    * @param {String} clientVersion Client Version
    * @example clientVersion = 'release-04.04-shipping-15-678808'
    * @returns {void}
    */
    setClientVersion(clientVersion: string): void;
    /**
    * @param {JSON} clientPlatfrom Client Platfrom in json
    * @example clientPlatfrom = {"platformType": "PC", "platformOS": "Windows", "platformOSVersion": "11.0.12345.1.256.64bit", "platformChipset": "Unknown"}
    * @returns {void}
    */
    setClientPlatfrom_fromJSON(clientPlatfrom: JSON): void;
    /**
    * @param {JSON} cookie Cookie
    * @returns {void}
    */
    setCookie(cookie?: JSON): void;
}
import ValRegion = require("../resources/ValRegion");
import Client = require("../service/ValClient/Client");
import Contract = require("../service/ValClient/Contract");
import CurrentGame = require("../service/ValClient/CurrentGame");
import Match = require("../service/ValClient/Match");
import Party = require("../service/ValClient/Party");
import Player = require("../service/ValClient/Player");
import PreGame = require("../service/ValClient/PreGame");
import Store = require("../service/ValClient/Store");
//# sourceMappingURL=ValClient.d.ts.map