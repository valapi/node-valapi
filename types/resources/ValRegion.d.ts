export = ValRegion;
declare class ValRegion {
    /**
    * @param {String} region Region
    * @example region = 'br'
    */
    constructor(region?: string);
    classId: string;
    base: string;
    region: string | undefined;
    server: string | undefined;
    riotRegion: string | undefined;
    toJSON(): {
        data: {
            base: string;
            api: string | undefined;
            server: string | undefined;
            riot: string | undefined;
        };
        url: {
            playerData: string;
            partyService: string;
            sharedData: string;
        };
        riot: {
            api: string;
            esports: string;
            server: string;
        };
    };
}
//# sourceMappingURL=ValRegion.d.ts.map