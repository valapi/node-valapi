import { IValRegion } from "./interface/IValRegion";

//import
import _Region from "./data/Region";

import { Logs } from "@ing3kth/core/dist/core/Logs";

//class

/**
 * * Class ID: @ing3kth/val-api/ValRegion
 */
class ValRegion {
    classId:string;
    base:keyof typeof _Region | string;
    region:any;
    server:any;
    riotRegion:any;
    /**
    * @param {String} region Region
    * @returns {IValRegion}
    */
    constructor(region:keyof typeof _Region.data = 'North_America') {
        this.classId = '@ing3kth/val-api/ValRegion';
        this.base = _Region.data[region];

        if(!this.base) {
            Logs.log(`Region '${String(this.base)}' not found`, 'error', true);
        }

        switch (String(region)) {
            case 'North_America':
                this.region = 'na';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'Latin_America':
                this.region = 'latam';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'Brazil':
                this.region = 'br';
                this.server = 'na';
                this.riotRegion = 'americas';
                break;
            case 'Public_Beta_Environment':
                this.region = 'na';
                this.server = 'pbe';
                this.riotRegion = 'pbe1';
                break;
            case 'Europe':
                this.region = 'eu';
                this.server = 'eu';
                this.riotRegion = 'europe';
                break;
            case 'Korea':
                this.region = 'kr';
                this.server = 'kr';
                this.riotRegion = 'asia';
                break;
            case 'Asia_Pacific':
                this.region = 'ap';
                this.server = 'ap';
                this.riotRegion = 'asia';
                break;
            default:
                return new ValRegion('North_America');
        }
    }

    /**
     * 
     * @returns {IValRegion}
     */
    toJSON():IValRegion {
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
    }
}

//export
export { ValRegion };