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
        this.region = region.toLowerCase();

        if(!Region[this.region]) {
            Logs.log(`Region '${this.region}' not found`, 'err', true);
        }

        switch (this.region) {
            case 'na' || 'latam' || 'br':
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'pbe':
                this.region = 'na';
                this.server = 'pbe';
                this.riotRegion = 'americas';
                break;
            case 'kr' || 'ap':
                this.riotRegion = 'asia';
            case 'eu':
                this.riotRegion = 'europe';
            default: 
                this.server = this.region;
                break;
        }

        return this.toJSON();
    }

    toJSON() {
        return {
            data: {
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
    }
}

//export
module.exports = ValRegion;