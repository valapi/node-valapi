export = ValRegion;
/**
 * * Class ID: @ing3kth/val-api/ValRegion
 */
declare class ValRegion {
    /**
    * @param {String} region Region
    * @example region = 'br'
    * @returns {IValRegion}
    */
    constructor(region?: string);
    classId: string;
    base: string;
    region: string | undefined;
    server: string | undefined;
    riotRegion: string | undefined;
    /**
     *
     * @returns {IValRegion}
     */
    toJSON(): {
        data: {
            base: StringConstructor;
            api: StringConstructor;
            server: StringConstructor;
            riot: StringConstructor;
        };
        url: {
            playerData: StringConstructor;
            partyService: StringConstructor;
            sharedData: StringConstructor; /**
            * @param {String} region Region
            * @example region = 'br'
            * @returns {IValRegion}
            */
        };
        riot: {
            api: StringConstructor;
            esports: StringConstructor;
            server: StringConstructor;
        };
    };
}
//# sourceMappingURL=ValRegion.d.ts.map