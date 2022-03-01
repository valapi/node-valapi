//import
const AxiosClient = require('../resources/request');

const Contract = require('../api/Contract');
const Coregame = require('../api/Coregame');
const Party = require('../api/Party');
const Pregame = require('../api/Pregame');
const Client = require('../api/Client');
const Store = require('../api/Store');
const Match = require('../api/Match');
const Player = require('../api/Player');

//class
class ValClient {
    constructor(
        PreAccount = {
            accessToken: null,
            entitlements: null,
            cookie: null
        }, 
        Region = {
            region: null,
            playerData: null,
            partyService: null,
            sharedData: null
        },
        clientVersion = null
    ) {
        this.Account = PreAccount;
        this.Region = Region;
        this.clientVersion = clientVersion;

        this.Contract = new Contract(this.toJSON());
        this.Coregame = new Coregame(this.toJSON());
        this.Party = new Party(this.toJSON());
        this.Pregame = new Pregame(this.toJSON());
        this.Client = new Client(this.toJSON());
        this.Store = new Store(this.toJSON());
        this.Match = new Match(this.toJSON());
        this.Player = new Player(this.toJSON());
    }

    /**
    * @description Get Account
    */
    toJSON() {
        return {
            request: {
                headers: {
                    'Authorization': `Bearer ${this.Account.accessToken}`,
                    'X-Riot-Entitlements-JWT': this.Account.entitlements,
                    'X-Riot-ClientVersion': this.clientVersion,
                    'X-Riot-ClientPlatform': 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
                },
                cookie: this.Account.cookie,
                accessToken: this.Account.accessToken,
            },
            url: {
                region: this.Region.region,
                playerData: this.Region.playerData,
                partyService: this.Region.partyService,
                sharedData: this.Region.sharedData
            },
        }
    }

    /**
    * @description Get Account
    */
    fromJSON(toJSON_Account) {
        this.Account = {
            accessToken: toJSON_Account.request.accessToken,
            entitlements: toJSON_Account.request.headers['X-Riot-Entitlements-JWT'],
            cookie: toJSON_Account.request.cookie
        }
        this.clientVersion = toJSON_Account.request.headers['X-Riot-ClientVersion'],
        this.Region = {
            region: toJSON_Account.url.region,
            playerData: toJSON_Account.url.playerData,
            partyService: toJSON_Account.url.partyService,
            sharedData: toJSON_Account.url.sharedData
        }

        this.Contract = new Contract(this.toJSON());
        this.Coregame = new Coregame(this.toJSON());
        this.Party = new Party(this.toJSON());
        this.Pregame = new Pregame(this.toJSON());
        this.Client = new Client(this.toJSON());
        this.Store = new Store(this.toJSON());
        this.Match = new Match(this.toJSON());
        this.Player = new Player(this.toJSON());

        return this.toJSON();
    }
}

//export
module.exports = ValClient;

/*
this.playerDataUrl = `https://pd.${this.region}.a.pvp.net`;
this.partyServiceUrl = `https://glz-${this.region}-1.${this.region}.a.pvp.net`;
this.sharedDataUrl = `https://shared.${this.region}.a.pvp.net`;
*/