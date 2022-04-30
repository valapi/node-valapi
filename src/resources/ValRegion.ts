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
    constructor(region:keyof typeof _Region = 'na') {
        this.classId = '@ing3kth/val-api/ValRegion';
        this.base = region;

        if(!_Region[region] || region === 'data') {
            Logs.log(`Region '${String(this.base)}' not found`, 'error', true);
        }

        switch (region) {
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
                this.riotRegion = 'pbe1';
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

    /**
     * @param {String} region Region
     * @returns {String}
     */
     static toString(region: keyof typeof _Region.data):keyof typeof _Region {
        return _Region.data[region] as keyof typeof _Region;
    }

    /**
     * @param {String} region Region
     * @returns {IValRegion}
     */
    static fromString(region: keyof typeof _Region.data):IValRegion {
        const _region = new ValRegion(ValRegion.toString(region));
        return _region.toJSON();
    }
}

//export
export { ValRegion };