import * as Region from "../resources/Region";

export class ValRegion {
    /**
     * Region ID
     */
    public readonly id: Region.Identify;

    /**
     *
     * @param {Region.Identify} region Region (default: na)
     */
    public constructor(region: Region.Identify = Region.Default.North_America) {
        this.id = "na";
        switch (region) {
            case "na": {
                break;
            }
            case "latam": {
                this.id = "latam";
                break;
            }
            case "br": {
                this.id = "br";
                break;
            }
            case "pbe": {
                break;
            }
            case "eu": {
                this.id = "eu";
                break;
            }
            case "kr": {
                this.id = "kr";
                break;
            }
            case "ap": {
                this.id = "ap";
                break;
            }
        }
    }
}
