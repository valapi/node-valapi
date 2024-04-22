import { AuthInstance } from "@valapi/auth";

describe("auth.client", () => {
    const myClient = new AuthInstance();

    test("save class", () => {
        const constClient = new AuthInstance();
        constClient.fromJSON(myClient.toJSON());

        expect(myClient.toJSON()).toStrictEqual(constClient.toJSON());
    });
});
