export = ValRegion;
declare class ValRegion {
    /**
    * @param {String} region Region
    * @example region = 'br'
    */
    constructor(region?: string);
    region: string;
    riotRegion: string;
    server: string;
    toJSON(): {
        data: {
            api: string;
            server: string;
            riot: string;
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
