//import
const IngCore = require('@ing3kth/core');

const ValRegion = require('../resources/ValRegion');

const AccountV1 = require('../service/RiotApi/AccountV1');
const StatusV1 = require('../service/RiotApi/StatusV1');
const ContentV1 = require('../service/RiotApi/ContentV1');

//class

/**
 * Official Api From Riot Games
 */
class RiotApi {
    /**
    * @param {JSON} data Account toJSON data
    * @example data = { key: 'long-string', region: 'kr' }
    */
    constructor(data = {
        key: '',
        region: 'na',
    }) {
        this.classId = '@ing3kth/val-api/RiotApi';
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
                cookie: true,
                jar: new IngCore.Core.AxiosCookie().toJSON(),
                headers: {}
            }
        };

        this.AccountV1 = new AccountV1(this.services);
        this.StatusV1 = new StatusV1(this.services);
        this.ContentV1 = new ContentV1(this.services);

        IngCore.Core.Logs.log(this.classId + " Reload");
    }

    toJSON() {
        IngCore.Core.Logs.log("Export " + this.classId);
        return {
            key: this.apiKey,
            region: this.region,
        };
    }

    fromJSON(data) {
        this.apiKey = data.key;
        this.region = data.region;

        IngCore.Core.Logs.log("Import " + this.classId);
        this.reload();
    }

    //settings

    /**
    * @param {String} region Region
    * @example region = 'na'
    */
    setRegion(region) {
        this.region = region;

        IngCore.Core.Logs.log(this.classId + " SetRegion '" + this.region + "'");
        this.reload();
    }

    /**
    * @param {String} key API Key
    */
    setApiKey(key) {
        this.apiKey = key;

        IngCore.Core.Logs.log(this.classId + " setApiKey '" + this.apiKey + "'");
        this.reload();
    }

    /**
    * @param {JSON} data toJSON data
    */
    static fromJSON(data) {
        const RiotApiClient = new RiotApi();
        RiotApiClient.fromJSON(data);

        return RiotApiClient;
    }
}

//export
module.exports = RiotApi;