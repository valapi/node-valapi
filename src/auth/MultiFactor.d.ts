export = Multifactor;
declare class Multifactor {
    /**
    * @param {JSON} data ValAuth_Account toJSON data
    * @param {Number} verificationCode Verification Code
    * @param {Boolean} toJSON return with toJSON data
    */
    static verifySync(data: JSON, verificationCode: number, toJSON?: boolean): Promise<{
        cookie: any;
        accessToken: any;
        entitlements: any;
    }>;
    /**
    * @param {JSON} data Account toJSON data
    */
    constructor(data?: JSON);
    cookie: any;
    accessToken: any;
    entitlements: any;
    /**
    * @param {Number} verificationCode Verification Code
    */
    verify(verificationCode: number): Promise<void>;
    toJSON(): {
        cookie: any;
        accessToken: any;
        entitlements: any;
    };
}
declare namespace Multifactor {
    import verify = Multifactor.verifySync;
    export { verify };
}
