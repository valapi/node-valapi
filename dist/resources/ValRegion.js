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
    constructor(region = 'North_America') {
        this.classId = '@ing3kth/val-api/ValRegion';
        this.base = Region_1.default.data[region];
        if (!this.base) {
            Logs_1.Logs.log(`Region '${String(this.base)}' not found`, 'error', true);
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
}
exports.ValRegion = ValRegion;
//# sourceMappingURL=ValRegion.js.map