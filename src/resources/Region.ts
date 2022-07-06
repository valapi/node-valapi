//import

import { Region as RegionCore } from "@valapi/lib";

//class

class Region {
    private constructor(x: keyof typeof RegionCore.to) {
        return RegionCore.to[x];
    }

    public static Asia_Pacific: keyof typeof RegionCore.from = "ap";
    public static Brazil: keyof typeof RegionCore.from = "br";
    public static Europe: keyof typeof RegionCore.from = "eu";
    public static Korea: keyof typeof RegionCore.from = "kr";
    public static Latin_America: keyof typeof RegionCore.from = "latam";
    public static North_America: keyof typeof RegionCore.from = "na";
    public static Public_Beta_Environment: keyof typeof RegionCore.from = "pbe";
}

//region

export { Region };