import { Region as RegionCore } from "@valapi/lib";
declare class Region {
    private constructor();
    static Asia_Pacific: keyof typeof RegionCore.from;
    static Brazil: keyof typeof RegionCore.from;
    static Europe: keyof typeof RegionCore.from;
    static Korea: keyof typeof RegionCore.from;
    static Latin_America: keyof typeof RegionCore.from;
    static North_America: keyof typeof RegionCore.from;
    static Public_Beta_Environment: keyof typeof RegionCore.from;
}
export { Region };
