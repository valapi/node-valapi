export = ValClient;
declare class ValClient {
    /**
    * @param {JSON} data toJSON data
    */
    static fromJSON(data: JSON): ValClient;
    /**
    * @param {JSON} Account Account toJSON data
    * @param {String} Region Region
    */
    constructor(Account?: JSON, Region?: string);
    classId: string | undefined;
    cookie: any;
    accessToken: any;
    entitlements: any;
    client: {
        version: string;
        platfrom: string;
    } | undefined;
    region: string | undefined;
    reload(): void;
    RegionServices: ValRegion | undefined;
    AxiosData: {
        cookie: boolean;
        jar: any;
        headers: {
            Authorization: string;
            'X-Riot-Entitlements-JWT': any;
            'X-Riot-ClientVersion': string;
            'X-Riot-ClientPlatform': string;
        };
    } | undefined;
    services: {
        AxiosData: {
            cookie: boolean;
            jar: any;
            headers: {
                Authorization: string;
                'X-Riot-Entitlements-JWT': any;
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
    toJSON(): {
        cookie: any;
        accessToken: any;
        entitlements: any;
        region: string | undefined;
    };
    fromJSON(data: any): void;
    /**
    * @param {String} region Region
    * @example region = 'ap'
    */
    setRegion(region: string): void;
    /**
    * @param {String} clientVersion Client Version
    * @example clientVersion = 'release-04.04-shipping-15-678808'
    */
    setClientVersion(clientVersion: string): void;
    /**
    * @param {JSON} clientPlatfrom Client Platfrom in json
    * @example clientPlatfrom = {"platformType": "PC", "platformOS": "Windows", "platformOSVersion": "11.0.12345.1.256.64bit", "platformChipset": "Unknown"}
    */
    setClientPlatfrom_fromJSON(clientPlatfrom: JSON): void;
    /**
    * @param {JSON} cookie Cookie
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