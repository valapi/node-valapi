export = Account;
declare class Account {
    /**
    * @param {String} username Riot Account Username
    * @param {String} password Riot Account Password
    * @param {Boolean} toJSON return with toJSON data
    */
    static loginSync(username: string, password: string, toJSON?: boolean): Promise<{
        cookie: any;
        accessToken: string;
        entitlements: any;
        multifactor: boolean;
    }>;
    /**
    * @param {String} username Riot Account Username
    * @param {String} password Riot Account Password
    */
    constructor(username?: string, password?: string);
    cookie: any;
    accessToken: string;
    entitlements: any;
    multifactor: boolean;
    /**
    * @param {String} username Riot Account Username
    * @param {String} password Riot Account Password
    */
    login(username: string, password: string): Promise<{
        cookie: any;
        accessToken: string;
        entitlements: any;
        multifactor: boolean;
    }>;
    toJSON(): {
        cookie: any;
        accessToken: string;
        entitlements: any;
        multifactor: boolean;
    };
}
declare namespace Account {
    import login = Account.loginSync;
    export { login };
}
