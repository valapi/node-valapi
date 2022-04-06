export = ValRegion;
/**
 * * Class ID: @ing3kth/val-api/ValRegion
 */
declare class ValRegion {
    /**
    * @param {String} region Region
    * @example region = 'br'
    * @returns {i_ValRegion}
    */
    constructor(region?: string);
    classId: string;
    base: string;
    region: string | undefined;
    server: string | undefined;
    riotRegion: string | undefined;
    /**
     *
     * @returns {i_ValRegion}
     */
    toJSON(): i_ValRegion;
}
//# sourceMappingURL=ValRegion.d.ts.map