export = Multifactor;
declare class Multifactor {
    /**
    * @param {JSON} data ValAuth_Account toJSON data
    * @param {Number} verificationCode Verification Code
    * @param {Boolean} toJSON return with toJSON data
    */
    static verify(data: JSON, verificationCode: number, toJSON?: boolean): Promise<{
        cookie: any;
        accessToken: any;
        entitlements: any;
        multifactor: any;
    }>;
    /**
    * @param {JSON} data Account toJSON data
    */
    constructor(data?: JSON);
    classId: string;
    cookie: import("@ing3kth/core/types/core/AxiosCookie");
    accessToken: any;
    entitlements: any;
    multifactor: any;
    /**
    * @param {Number} verificationCode Verification Code
    */
    verify(verificationCode: number): Promise<{
        cookie: any;
        accessToken: any;
        entitlements: any;
        multifactor: any;
    }>;
    toJSON(): {
        cookie: any;
        accessToken: any;
        entitlements: any;
        multifactor: any;
    };
}
//# sourceMappingURL=Multifactor.d.ts.map