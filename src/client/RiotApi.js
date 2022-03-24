//import
const tough = require('tough-cookie');
const toughCookie = tough.CookieJar;

const ValRegion = require('../resources/ValRegion');

const AccountV1 = require('../service/RiotApi/AccountV1');
const StatusV1 = require('../service/RiotApi/StatusV1');
const ContentV1 = require('../service/RiotApi/ContentV1');

//class
class RiotApi {
    /**
    * @param {JSON} data Account toJSON data
    * @example data = { key: 'long-string', region: 'kr' }
    */
    constructor(data = {
        key: '',
        region: 'na',
    }) {
        this.apiKey = data.key;
        this.region = data.region;

        this.reload();
    }

    reload() {
        this.RegionServices = new ValRegion(this.region);

        //services
        this.services = {
            key: this.apiKey,
            region: this.RegionServices,
            AxiosData: {
                cookie: new toughCookie().toJSON(),
                headers: {}
            }
        }

        this.AccountV1 = new AccountV1(this.services);
        this.StatusV1 = new StatusV1(this.services);
        this.ContentV1 = new ContentV1(this.services);
    }

    toJSON() {
        return {
            key: this.apiKey,
            region: this.region,
        }
    }

    fromJSON(data) {
        this.apiKey = data.key;
        this.region = data.region;

        this.reload();
    }

    //settings

    /**
    * @param {String} region Region
    * @example region = 'na'
    */
    setRegion(region) {
        this.region = region;

        this.reload();
    }

    /**
    * @param {String} key API Key
    */
    setApiKey(key) {
        this.apiKey = key

        this.reload();
    }

    /**
    * @param {JSON} data toJSON data
    */
    static fromJSONSync(data) {
        const RiotApiClient = new RiotApi();
        RiotApiClient.fromJSON(data);

        return RiotApiClient;
    }
}
RiotApi.fromJSON = RiotApi.fromJSONSync;

//export
module.exports = RiotApi;