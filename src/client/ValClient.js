//import
const IngCore = require('@ing3kth/core');
const IValClient = require('../resources/interface/IValClient');
const IValClientAuth = require('../resources/interface/IValClientAuth');

const ValRegion = require('../resources/ValRegion');

const Client = require('../service/ValClient/Client');
const Contract = require('../service/ValClient/Contract');
const CurrentGame = require('../service/ValClient/CurrentGame');
const Match = require('../service/ValClient/Match');
const Party = require('../service/ValClient/Party');
const Player = require('../service/ValClient/Player');
const PreGame = require('../service/ValClient/PreGame');
const Store = require('../service/ValClient/Store');

//class

/**
 * * Class ID: @ing3kth/val-api/ValClient
 * * Use Anywhere: true
 */
class ValClient {
    /**
    * @param {IValClientAuth} Account Account toJSON data
    * @param {String} Region Region
    */
    constructor(Account = {
        cookie: new IngCore.Core.AxiosCookie().toJSON(),
        accessToken: null,
        entitlements: null,
        multifactor: false,
    }, Region = 'ap') {
        if(Account.multifactor){
            IngCore.Core.Logs.log('This Account is have a Multifactor', 'err', true);
            return;
        }

        //data
        this.classId = '@ing3kth/val-api/ValClient';
        this.cookie = Account.cookie;
        this.accessToken = Account.accessToken;
        this.entitlements = Account.entitlements;
        this.client = {
            version: 'release-04.05-shipping-23-687347',
            platfrom: 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9'
        };
        this.region = Region;

        this.reload();
    }

    /***
     * @returns {void}
     */
    reload() {
        this.RegionServices = new ValRegion(this.region);

        //axios client
        this.AxiosData = {
            cookie: true,
            jar: this.cookie,
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
        };

        this.Client = new Client(this.services);
        this.Contract = new Contract(this.services);
        this.Coregame = new CurrentGame(this.services);
        this.Match = new Match(this.services);
        this.Party = new Party(this.services);
        this.Player = new Player(this.services);
        this.Pregame = new PreGame(this.services);
        this.Store = new Store(this.services);

        IngCore.Core.Logs.log(this.classId + " Reload");
    }

    //save
    
    /**
     * 
     * @returns {IValClient}
     */
    toJSON() {
        IngCore.Core.Logs.log("Export " + this.classId);
        return {
            cookie: this.cookie,
            accessToken: this.accessToken,
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
        this.entitlements = data.entitlements;
        this.region = data.region;

        IngCore.Core.Logs.log("Import " + this.classId);
        this.reload();
    }

    //settings

    /**
    * @param {String} region Region
    * @example region = 'ap'
    * @returns {void}
    */
    setRegion(region) {
        this.region = region;

        IngCore.Core.Logs.log(this.classId +  " SetRegion '" + this.region + "'");
        this.reload();
    }

    /**
    * @param {String} clientVersion Client Version
    * @example clientVersion = 'release-04.04-shipping-15-678808'
    * @returns {void}
    */
    setClientVersion(clientVersion) {
        this.client.version = clientVersion;
        
        IngCore.Core.Logs.log(this.classId +  " SetClientPlatfrom '" + this.client.version + "'");
        this.reload();
    }

    /**
    * @param {JSON} clientPlatfrom Client Platfrom in json
    * @example clientPlatfrom = {"platformType": "PC", "platformOS": "Windows", "platformOSVersion": "11.0.12345.1.256.64bit", "platformChipset": "Unknown"}
    * @returns {void}
    */
    setClientPlatfrom_fromJSON(clientPlatfrom) {
        this.client.platfrom = IngCore.Utils.Base64.toBase64(clientPlatfrom);
        
        IngCore.Core.Logs.log(this.classId +  " SetClientPlatfrom '" + this.client.platfrom + "'");
        this.reload();
    }

    /**
    * @param {JSON} cookie Cookie
    * @returns {void}
    */
    setCookie(cookie = new IngCore.Core.AxiosCookie().toJSON()) {
        this.cookie = cookie;
        
        IngCore.Core.Logs.log(this.classId +  " SetCookie '" + this.cookie + "'");
        this.reload();
    }

    /**
    * @param {JSON} data toJSON data
    * @returns {void}
    */
    static fromJSON(data) {
        const ValApiClient = new ValClient();
        ValApiClient.fromJSON(data);

        return ValApiClient;
    }
}

//export
module.exports = ValClient;