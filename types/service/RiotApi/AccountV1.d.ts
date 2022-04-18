export = AccountV1;
/**
 * * Class ID: @ing3kth/val-api/RiotApi/AccountV1
 */
declare class AccountV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    apiKey: any;
    region: any;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    /**
     *
     * @param {String} gameName In-Game Name
     * @param {String} tagLine In-Game Tag
     * @returns {AxiosClientOut}
     */
    ByRiotId(gameName: string, tagLine: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
     *
     * @param {String} puuid Player UUID
     * @returns {AxiosClientOut}
     */
    ByPuuid(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
     *
     * @param {String} puuid Player UUID
     * @param {String} game Game
     * @example game = 'val' && 'lor'
     * @returns {AxiosClientOut}
     */
    ByGame(puuid: string, game?: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=AccountV1.d.ts.map