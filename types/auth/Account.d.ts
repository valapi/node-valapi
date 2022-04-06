export = Account;
/**
 * * Class ID: @ing3kth/val-api/Account
 */
declare class Account {
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {i_ValClientAuth}
     */
    static login(username: string, password: string): {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        multifactor: BooleanConstructor;
    };
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
     * @returns {i_ValClientAuth}
     */
    execute(username: string, password: string): {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        multifactor: BooleanConstructor;
    };
    /**
     *
     * @returns {i_ValClientAuth}
     */
    toJSON(): {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        multifactor: BooleanConstructor;
    };
}
//# sourceMappingURL=Account.d.ts.map