//import
const tough = require('tough-cookie');
const toughCookie = tough.CookieJar;

const ValRegion =  require('../resources/ValRegion');
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
        Regions: null
    }) {
        //data
        this.cookie = data.Account.cookie;
        this.accessToken = data.Account.accessToken;
        this.entitlements = data.Account.entitlements;
        this.client = {
            version: 'release-04.04-shipping-15-678808',
            platfrom: 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9'
        }

        //region
        const Regions = new ValRegion(data.Region);
        this.Region = Regions.toJSON();

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
            Region: this.Region,
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
            Region: this.Region.region,
        }
    }

    fromJSON(data) {
        //data
        this.cookie = data.cookie;
        this.accessToken = data.accessToken;
        this.entitlements = data.entitlements;

        //region
        const Regions = new ValRegion(data.Region);
        this.Region = Regions.toJSON();

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
            Region: this.Region,
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
}

//export
module.exports = ValClient;