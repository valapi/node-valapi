import { ValRegion } from "@valapi/lib";
import type { Region } from "@valapi/lib";

export class RiotApiRegion extends ValRegion {
    public readonly riotRegion: string;
    public readonly url: {
        /**
         * $.api.riotgames.com
         */
        api: string;
        /**
         * esports.api.riotgames.com
         */
        esports: string;
        /**
         * $.api.riotgames.com
         */
        server: string;
    };

    /**
     *
     * @param {string} region Region (default: na)
     */
    public constructor(region?: Region.Identify) {
        super(region);

        this.riotRegion = "americas";
        switch (region) {
            case "na": {
                break;
            }
            case "latam": {
                break;
            }
            case "br": {
                break;
            }
            case "pbe": {
                this.riotRegion = "pbe1";
                break;
            }
            case "eu": {
                this.riotRegion = "europe";
                break;
            }
            case "kr": {
                this.riotRegion = "asia";
                break;
            }
            case "ap": {
                this.riotRegion = "asia";
                break;
            }
        }

        this.url = {
            api: `https://${this.riotRegion}.api.riotgames.com`,
            esports: `https://esports.api.riotgames.com`,
            server: `https://${this.id}.api.riotgames.com`
        };
    }
}
