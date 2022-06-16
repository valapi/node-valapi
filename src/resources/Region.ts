import { Region as RegionCore } from "@valapi/lib";

class Region {
    private constructor(x: keyof typeof RegionCore.to) {
        return RegionCore.to[x];
    }

    public static Asia_Pacific: keyof typeof RegionCore.from = RegionCore.toString("Asia_Pacific");
    public static Brazil: keyof typeof RegionCore.from = RegionCore.toString("Brazil");
    public static Europe: keyof typeof RegionCore.from = RegionCore.toString("Europe");
    public static Korea: keyof typeof RegionCore.from = RegionCore.toString("Korea");
    public static Latin_America: keyof typeof RegionCore.from = RegionCore.toString("Latin_America");
    public static North_America: keyof typeof RegionCore.from = RegionCore.toString("North_America");
    public static Public_Beta_Environment: keyof typeof RegionCore.from = RegionCore.toString("Public_Beta_Environment");
}

export { Region };