export = Multifactor;
/**
 * * Class ID: @ing3kth/val-api/RiotApi
 */
declare class Multifactor {
    /**
    * @param {i_ValClientAuth} data ValAuth_Account toJSON data
    * @param {Number} verificationCode Verification Code
    */
    static verify(data: {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        multifactor: BooleanConstructor;
    }, verificationCode: number): Promise<{
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        multifactor: BooleanConstructor;
    }>;
    /**
    * @param {i_ValClientAuth} data Account toJSON data
    */
    constructor(data?: {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        multifactor: BooleanConstructor;
    });
    classId: string;
    cookie: void;
    accessToken: StringConstructor;
    entitlements: StringConstructor;
    multifactor: BooleanConstructor;
    /**
    * @param {Number} verificationCode Verification Code
    * @returns {i_ValClientAuth}
    */
    execute(verificationCode: number): {
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
//# sourceMappingURL=Multifactor.d.ts.map