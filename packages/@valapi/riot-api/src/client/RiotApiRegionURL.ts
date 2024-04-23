import { ValRegion } from "@valapi/lib";
import type { Region } from "@valapi/lib";

export class RiotApiRegionURL extends ValRegion {
    public readonly continent: string;
    public readonly url: {
        /**
         * $.api.riotgames.com
         */
        region: string;
        /**
         * $.api.riotgames.com
         */
        continent: string;
        /**
         * esports.api.riotgames.com
         */
        esports: string;
    };

    /**
     * @param region (default: na)
     */
    public constructor(region?: Region.ID) {
        super(region);

        this.continent = "americas";
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
                this.continent = "pbe1";
                break;
            }
            case "eu": {
                this.continent = "europe";
                break;
            }
            case "kr": {
                this.continent = "asia";
                break;
            }
            case "ap": {
                this.continent = "asia";
                break;
            }
        }

        this.url = {
            region: `https://${this.id}.api.riotgames.com`,
            continent: `https://${this.continent}.api.riotgames.com`,
            esports: `https://esports.api.riotgames.com`
        };
    }
}
