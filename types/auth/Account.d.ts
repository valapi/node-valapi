export = Account;
declare class Account {
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @param {Boolean} toJSON return with toJSON data
     */
    static login(username: string, password: string, toJSON?: boolean): Promise<{
        cookie: any;
        accessToken: string | null;
        entitlements: any;
        multifactor: boolean;
    }>;
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     */
    constructor(username?: string, password?: string);
    classId: string;
    cookie: import("@ing3kth/core/types/core/AxiosCookie") | null;
    accessToken: string | null;
    entitlements: any;
    multifactor: boolean;
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     */
    login(username: string, password: string): Promise<{
        cookie: any;
        accessToken: string | null;
        entitlements: any;
        multifactor: boolean;
    }>;
    toJSON(): {
        cookie: any;
        accessToken: string | null;
        entitlements: any;
        multifactor: boolean;
    };
}
//# sourceMappingURL=Account.d.ts.map