// import

import { Region as RegionCore } from "@valapi/lib";

// class

export class Region {
    private constructor(x: RegionCore.Name) {
        return RegionCore.to[x];
    }

    public static Asia_Pacific: RegionCore.String = "ap";
    public static Brazil: RegionCore.String = "br";
    public static Europe: RegionCore.String = "eu";
    public static Korea: RegionCore.String = "kr";
    public static Latin_America: RegionCore.String = "latam";
    public static North_America: RegionCore.String = "na";
    public static Public_Beta_Environment: RegionCore.String = "pbe";
}
