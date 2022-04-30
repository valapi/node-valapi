"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValClient = void 0;
//import
const IngCore = __importStar(require("@ing3kth/core"));
const config_1 = require("@ing3kth/core/dist/config");
const Uft8_1 = require("../utils/Uft8");
const tough_cookie_1 = require("tough-cookie");
const ValRegion_1 = require("../resources/ValRegion");
const Client_1 = require("../service/ValClient/Client");
const Contract_1 = require("../service/ValClient/Contract");
const CurrentGame_1 = require("../service/ValClient/CurrentGame");
const Match_1 = require("../service/ValClient/Match");
const Party_1 = require("../service/ValClient/Party");
const Player_1 = require("../service/ValClient/Player");
const PreGame_1 = require("../service/ValClient/PreGame");
const Store_1 = require("../service/ValClient/Store");
const Account_1 = require("../auth/ValClient/Account");
const Multifactor_1 = require("../auth/ValClient/Multifactor");
const AuthFlow_1 = require("../auth/ValClient/AuthFlow");
//class
/**
 * * Class ID: @ing3kth/val-api/ValClient
 * * Use Anywhere: true
 */
class ValClient {
    /**
    * @param {IValClient_Auth} Account Account toJSON data
    */
    constructor(Account = {
        cookie: new tough_cookie_1.CookieJar().toJSON(),
        accessToken: '',
        id_token: '',
        expires_in: 3600,
        token_type: '',
        entitlements: '',
        region: {
            pbe: '',
            live: '',
        },
        multifactor: false,
    }) {
        if (Account.multifactor) {
            IngCore.Logs.log('This Account is have a Multifactor', 'error', true);
        }
        //data
        this.classId = '@ing3kth/val-api/ValClient';
        this.cookie = Account.cookie;
        this.accessToken = Account.accessToken;
        this.id_token = Account.id_token;
        this.token_type = Account.token_type;
        this.entitlements = Account.entitlements;
        this.client = {
            version: IngCore.Config["val-api"].ValClient.client.version,
            platfrom: (0, Uft8_1.toBase64)(JSON.stringify(IngCore.Config["val-api"].ValClient.client.version)),
        };
        if (Account.region.live) {
            this.region = Account.region.live;
        }
        else {
            this.region = 'na';
        }
        this.reload();
    }
    /***
     * @returns {void}
     */
    reload() {
        this.RegionServices = new ValRegion_1.ValRegion(this.region).toJSON();
        //axios client
        this.AxiosData = {
            cookie: true,
            jar: this.cookie,
            headers: {
                'Authorization': `${this.token_type} ${this.accessToken}`,
                'X-Riot-Entitlements-JWT': this.entitlements,
                'X-Riot-ClientVersion': this.client.version,
                'X-Riot-ClientPlatform': this.client.platfrom,
            },
        };
        //services
        this.services = {
            AxiosData: this.AxiosData,
            Region: this.RegionServices,
        };
        this.Client = new Client_1.Client(this.services);
        this.Contract = new Contract_1.Contract(this.services);
        this.CurrentGame = new CurrentGame_1.CurrentGame(this.services);
        this.Match = new Match_1.Match(this.services);
        this.Party = new Party_1.Party(this.services);
        this.Player = new Player_1.Player(this.services);
        this.Pregame = new PreGame_1.PreGame(this.services);
        this.Store = new Store_1.Store(this.services);
        IngCore.Logs.log(this.classId + " Reload");
    }
    //save
    /**
     *
     * @returns {IValClient}
     */
    toJSON() {
        IngCore.Logs.log("Export " + this.classId);
        return {
            cookie: this.cookie,
            accessToken: this.accessToken,
            id_token: this.id_token,
            token_type: this.token_type,
            entitlements: this.entitlements,
            region: this.region,
        };
    }
    /**
     *
     * @param {IValClient} data ValClient toJSON Data
     * @returns {void}
     */
    fromJSON(data) {
        this.cookie = data.cookie;
        this.accessToken = data.accessToken;
        this.id_token = data.id_token;
        this.token_type = data.token_type;
        this.entitlements = data.entitlements;
        this.region = data.region;
        IngCore.Logs.log("Import " + this.classId);
        this.reload();
    }
    //settings
    /**
    * @param {String} region Region
    * @returns {void}
    */
    setRegion(region) {
        this.region = region;
        IngCore.Logs.log(this.classId + " SetRegion '" + this.region + "'");
        this.reload();
    }
    /**
    * @param {String} clientVersion Client Version
    * @returns {void}
    */
    setClientVersion(clientVersion = config_1._config["val-api"].ValClient.client.version) {
        this.client.version = clientVersion;
        IngCore.Logs.log(this.classId + " SetClientPlatfrom '" + this.client.version + "'");
        this.reload();
    }
    /**
    * @param {IValClient_ClientPlatfrom} clientPlatfrom Client Platfrom in json
    * @returns {void}
    */
    setClientPlatfrom_fromJSON(clientPlatfrom = config_1._config["val-api"].ValClient.client.platform) {
        this.client.platfrom = (0, Uft8_1.toBase64)(JSON.stringify(clientPlatfrom));
        IngCore.Logs.log(this.classId + " SetClientPlatfrom '" + this.client.platfrom + "'");
        this.reload();
    }
    /**
    * @param {toughCookie.Serialized} cookie Cookie
    * @returns {void}
    */
    setCookie(cookie = new tough_cookie_1.CookieJar().toJSON()) {
        this.cookie = cookie;
        IngCore.Logs.log(this.classId + " SetCookie '" + this.cookie + "'");
        this.reload();
    }
    /**
    * @param {IValClient} data toJSON data
    * @returns {void}
    */
    static fromJSON(data) {
        const ValApiClient = new ValClient();
        ValApiClient.fromJSON(data);
        return ValApiClient;
    }
}
exports.ValClient = ValClient;
//auth
ValClient.Auth = {
    Account: Account_1.Account,
    Multifactor: Multifactor_1.Multifactor,
    AuthFlow: AuthFlow_1.AuthFlow
};
//# sourceMappingURL=ValClient.js.map