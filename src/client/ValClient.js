//import
const tough = require('tough-cookie');
const toughCookie = tough.CookieJar;

const ValRegion = require('../resources/ValRegion');

const Client = require('../service/ValClient/Client');
const Contract = require('../service/ValClient/Contract');
const Coregame = require('../service/ValClient/Coregame');
const Match = require('../service/ValClient/Match');
const Party = require('../service/ValClient/Party');
const Player = require('../service/ValClient/Player');
const Pregame = require('../service/ValClient/Pregame');
const Store = require('../service/ValClient/Store');

//class
class ValClient {
    /**
    * @param {JSON} data Account toJSON data
    * @example data = { Account: ValAuth_Save, Region: 'latam' }
    */
    constructor(data = {
        Account: {
            cookie: new toughCookie().toJSON(),
            accessToken: null,
            entitlements: null,
        },
        Region: 'ap',
    }) {
        //data
        this.cookie = data.Account.cookie;
        this.accessToken = data.Account.accessToken;
        this.entitlements = data.Account.entitlements;
        this.client = {
            version: 'release-04.04-shipping-16-679250',
            platfrom: 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9'
        }
        this.region = data.Region;

        this.reload();
    }

    reload() {
        this.RegionServices = new ValRegion(this.region);

        //axios client
        this.AxiosData = {
            cookie: this.cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'X-Riot-Entitlements-JWT': this.entitlements,
                'X-Riot-ClientVersion': this.client.version,
                'X-Riot-ClientPlatform': this.client.platfrom,
            },
        };

        //services
        this.services = {
            AxiosData: this.AxiosData,
            Region: this.RegionServices,
        }

        this.Client = new Client(this.services);
        this.Contract = new Contract(this.services);
        this.Coregame = new Coregame(this.services);
        this.Match = new Match(this.services);
        this.Party = new Party(this.services);
        this.Player = new Player(this.services);
        this.Pregame = new Pregame(this.services);
        this.Store = new Store(this.services);
    }

    //save
    
    toJSON() {
        return {
            cookie: this.cookie,
            accessToken: this.accessToken,
            entitlements: this.entitlements,
            region: this.region,
        }
    }

    fromJSON(data) {
        this.cookie = data.cookie;
        this.accessToken = data.accessToken;
        this.entitlements = data.entitlements;
        this.region = data.region;

        this.reload();
    }

    //settings

    /**
    * @param {String} region Region
    * @example region = 'ap'
    */
    setRegion(region) {
        this.region = region;

        this.reload();
    }

    /**
    * @param {String} clientVersion Client Version
    * @example clientVersion = 'release-04.04-shipping-15-678808'
    */
    setClientVersion(clientVersion) {
        this.client.version = clientVersion;
        
        this.reload();
    }

    /**
    * @param {JSON} clientPlatfrom Client Platfrom in json
    * @example clientPlatfrom = {"platformType": "PC", "platformOS": "Windows", "platformOSVersion": "11.0.12345.1.256.64bit", "platformChipset": "Unknown"}
    */
    setClientPlatfrom_fromJSON(clientPlatfrom) {
        this.client.platfrom = Buffer.from(JSON.stringify(clientPlatfrom)).toString('base64');
        
        this.reload();
    }

    /**
    * @param {JSON} cookie Cookie
    */
    setCookie(cookie = new toughCookie().toJSON()) {
        this.cookie = cookie;
        
        this.reload();
    }

    /**
    * @param {JSON} data toJSON data
    */
    static fromJSONSync(data) {
        const ValApiClient = new ValClient();
        ValApiClient.fromJSON(data);

        return ValApiClient;
    }

}
ValClient.fromJSON = ValClient.fromJSONSync;

//export
module.exports = ValClient;