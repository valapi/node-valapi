//import
const Region = require(`./data/Region`);

const Logs = require('@ing3kth/core').Core.Logs;

//class
class ValRegion {
    /**
    * @param {String} region Region
    * @example region = 'br'
    */
    constructor(region = 'na') {
        this.classId = '@ing3kth/val-api/ValRegion';
        this.base = region.toLowerCase();

        if(!Region[this.base]) {
            Logs.log(`Region '${this.base}' not found`, 'err', true);
        }

        switch (this.base) {
            case 'na':
                this.region = 'na';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'latam':
                this.region = 'latam';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'br':
                this.region = 'br';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'pbe':
                this.region = 'na';
                this.server = 'pbe';
                this.riotRegion = 'americas';
                break;
            case 'eu':
                this.region = 'eu';
                this.server = 'eu';
                this.riotRegion = 'europe';
                break;
            case 'kr':
                this.region = 'kr';
                this.server = 'kr';
                this.riotRegion = 'asia';
                break;
            case 'ap':
                this.region = 'ap';
                this.server = 'ap';
                this.riotRegion = 'asia';
                break;
            default:
                return new ValRegion('na');
        };

        return this.toJSON();
    };

    toJSON() {
        return {
            data: {
                base: this.base,
                api: this.region,
                server: this.server,
                riot: this.riotRegion,
            },
            url: {
                playerData: `https://pd.${this.server}.a.pvp.net`,
                partyService: `https://glz-${this.region}-1.${this.server}.a.pvp.net`,
                sharedData: `https://shared.${this.server}.a.pvp.net`,
            },
            riot: {
                api: `https://${this.riotRegion}.api.riotgames.com`,
                esports: `https://esports.api.riotgames.com`,
                server: `https://${this.region}.api.riotgames.com`,
            }
        };
    };
};

//export
module.exports = ValRegion;