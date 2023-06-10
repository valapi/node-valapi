import { ValRegion } from "@valapi/lib";
import type { Region } from "@valapi/lib";

export class WebClientRegion extends ValRegion {
    public readonly shard: Region.Identify;
    public readonly url: {
        /**
         * pd.$.a.pvp.net
         */
        playerData: string;
        /**
         * glz-$-1.$.a.pvp.net
         */
        partyService: string;
        /**
         * shared.$.a.pvp.net
         */
        sharedData: string;
    };

    /**
     *
     * @param {string} region Region (default: na)
     */
    public constructor(region?: Region.Identify) {
        super(region);

        this.shard = "na";
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
                this.shard = "pbe";
                break;
            }
            case "eu": {
                this.shard = "eu";
                break;
            }
            case "kr": {
                this.shard = "kr";
                break;
            }
            case "ap": {
                this.shard = "ap";
                break;
            }
        }

        this.url = {
            playerData: `https://pd.${this.shard}.a.pvp.net`,
            partyService: `https://glz-${this.id}-1.${this.shard}.a.pvp.net`,
            sharedData: `https://shared.${this.shard}.a.pvp.net`
        };
    }
}
