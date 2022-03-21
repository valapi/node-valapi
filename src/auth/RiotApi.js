//import
const ValRegion = require('../resources/ValRegion');

const AccountV1 = require('../api/AccountV1');
const StatusV1 = require('../api/StatusV1');
const ContentV1 = require('../api/ContentV1');

//class
class RiotApi {
    constructor(data = {
        key: '',
        region: 'na',
    }) {
        this.apiKey = data.key;
        this.region = data.region;

        this.reload();
    }

    reload() {
        this.RegionServices = new ValRegion(this.region).toJSON();

        //services
        this.services = {
            key: this.apiKey,
            region: this.RegionServices,
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