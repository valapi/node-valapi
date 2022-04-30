import { IValRegion } from "./interface/IValRegion";
import _Region from "./data/Region";
/**
 * * Class ID: @ing3kth/val-api/ValRegion
 */
declare class ValRegion {
    classId: string;
    base: keyof typeof _Region | string;
    region: any;
    server: any;
    riotRegion: any;
    /**
    * @param {String} region Region
    * @returns {IValRegion}
    */
    constructor(region?: keyof typeof _Region);
    /**
     *
     * @returns {IValRegion}
     */
    toJSON(): IValRegion;
    /**
     * @param {String} region Region
     * @returns {String}
     */
    static toString(region: keyof typeof _Region.data): keyof typeof _Region;
    /**
     * @param {String} region Region
     * @returns {IValRegion}
     */
    static fromString(region: keyof typeof _Region.data): IValRegion;
}
export { ValRegion };
//# sourceMappingURL=ValRegion.d.ts.map