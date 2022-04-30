"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValRegion = void 0;
//import
const Region_1 = __importDefault(require("./data/Region"));
const Logs_1 = require("@ing3kth/core/dist/core/Logs");
//class
/**
 * * Class ID: @ing3kth/val-api/ValRegion
 */
class ValRegion {
    /**
    * @param {String} region Region
    * @returns {IValRegion}
    */
    constructor(region = 'na') {
        this.classId = '@ing3kth/val-api/ValRegion';
        this.base = region;
        if (!Region_1.default[region] || region === 'data') {
            Logs_1.Logs.log(`Region '${String(this.base)}' not found`, 'error', true);
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
    }
    /**
     * @param {String} region Region
     * @returns {String}
     */
    static toString(region) {
        return Region_1.default.data[region];
    }
    /**
     * @param {String} region Region
     * @returns {IValRegion}
     */
    static fromString(region) {
        const _region = new ValRegion(ValRegion.toString(region));
        return _region.toJSON();
    }
}
exports.ValRegion = ValRegion;
//# sourceMappingURL=ValRegion.js.map