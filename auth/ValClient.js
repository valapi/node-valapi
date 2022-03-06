//import
const tough = require('tough-cookie');
const toughCookie = tough.CookieJar;

const ValRegion = require('../resources/ValRegion');
const AxiosClient = require('../resources/AxiosClient');

const Client = require('../service/Client');
const Contract = require('../service/Contract');
const Coregame = require('../service/Coregame');
const Match = require('../service/Match');
const Party = require('../service/Party');
const Player = require('../service/Player');
const Pregame = require('../service/Pregame');
const Store = require('../service/Store');

//class
class ValClient {
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
        this.Region = data.Region;

        this.reload();
    }

    //save
    
    toJSON() {
        return {
            cookie: this.cookie,
            accessToken: this.accessToken,
            entitlements: this.entitlements,
            Region: this.Region,
        }
    }

    fromJSON(data) {
        this.cookie = data.cookie;
        this.accessToken = data.accessToken;
        this.entitlements = data.entitlements;
        this.Region = data.Region;

        this.reload();
    }

    reload() {
        this.RegionServices = new ValRegion(this.Region).toJSON();

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

    //settings

    /**
    * @param {string} region Region String
    * @example 'ap'
    */
    setRegion(region) {
        this.Region = region;

        this.reload();
    }

    /**
    * @param {string} clientVersion Client Version
    * @example 'release-04.04-shipping-15-678808'
    */
    setClientVersion(clientVersion) {
        this.client.version = clientVersion;
        
        this.reload();
    }

    /**
    * @param {JSON} clientPlatfrom Client Platfrom in json
    * @example {"platformType": "PC", "platformOS": "Windows", "platformOSVersion": "11.0.12345.1.256.64bit", "platformChipset": "Unknown"}
    */
    setClientPlatfrom_fromJSON(clientPlatfrom) {
        this.client.platfrom = Buffer.from(JSON.stringify(clientPlatfrom)).toString('base64');
        
        this.reload();
    }

    /**
    * @param {string} clientPlatfrom Client Platfrom in base64
    * @example 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9'
    */
     setClientPlatfrom_from64(clientPlatfrom) {
        this.client.platfrom = clientPlatfrom;
        
        this.reload();
    }

}

//export
module.exports = ValClient;