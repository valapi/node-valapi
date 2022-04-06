//import
const IngCore = require('@ing3kth/core');

const i_RiotApi = require('../resources/interface/i_RiotApi');
const ValRegion = require('../resources/ValRegion');

const AccountV1 = require('../service/RiotApi/AccountV1');
const StatusV1 = require('../service/RiotApi/StatusV1');
const ContentV1 = require('../service/RiotApi/ContentV1');

//class

/**
 * Official Api From Riot Games
 * 
 * You Can Get API Key From https://developer.riotgames.com/
 * 
 * * Class ID: @ing3kth/val-api/RiotApi
 * * Use Anywhere: true
 */
class RiotApi {
    /**
    * @param {i_RiotApi} data RiotApi toJSON Data
    */
    constructor(data = {
        apiKey: null,
        region: 'ap',
    }) {
        if(!key){
            IngCore.Core.Logs.log(this.classId + " Missing API Key", 'err', true);
            return;
        }

        this.classId = '@ing3kth/val-api/RiotApi';
        this.apiKey = data.apiKey;
        this.region = data.region;

        this.reload();
    }

    /**
     * @returns {void}
     */
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

    /**
     * 
     * @returns {i_RiotApi}
     */
    toJSON() {
        IngCore.Core.Logs.log("Export " + this.classId);
        return {
            key: this.apiKey,
            region: this.region,
        };
    }

    /**
     * 
     * @param {i_RiotApi} data RiotApi toJSON Data
     */
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