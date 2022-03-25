export = ValClient;
declare class ValClient {
    /**
    * @param {JSON} data toJSON data
    */
    static fromJSONSync(data: JSON): ValClient;
    /**
    * @param {JSON} data Account toJSON data
    * @example data = { Account: ValAuth_Save, Region: 'latam' }
    */
    constructor(data?: JSON);
    cookie: any;
    accessToken: any;
    entitlements: any;
    client: {
        version: string;
        platfrom: string;
    };
    region: any;
    reload(): void;
    RegionServices: ValRegion;
    AxiosData: {
        cookie: any;
        headers: {
            Authorization: string;
            'X-Riot-Entitlements-JWT': any;
            'X-Riot-ClientVersion': string;
            'X-Riot-ClientPlatform': string;
        };
    };
    services: {
        AxiosData: {
            cookie: any;
            headers: {
                Authorization: string;
                'X-Riot-Entitlements-JWT': any;
                'X-Riot-ClientVersion': string;
                'X-Riot-ClientPlatform': string;
            };
        };
        Region: ValRegion;
    };
    Client: Client;
    Contract: Contract;
    Coregame: Coregame;
    Match: Match;
    Party: Party;
    Player: Player;
    Pregame: Pregame;
    Store: Store;
    toJSON(): {
        cookie: any;
        accessToken: any;
        entitlements: any;
        region: any;
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
declare namespace ValClient {
    import fromJSON = ValClient.fromJSONSync;
    export { fromJSON };
}
import ValRegion = require("../resources/ValRegion");
import Client = require("../service/ValClient/Client");
import Contract = require("../service/ValClient/Contract");
import Coregame = require("../service/ValClient/Coregame");
import Match = require("../service/ValClient/Match");
import Party = require("../service/ValClient/Party");
import Player = require("../service/ValClient/Player");
import Pregame = require("../service/ValClient/Pregame");
import Store = require("../service/ValClient/Store");
