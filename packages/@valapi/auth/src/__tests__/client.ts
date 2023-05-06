import { AuthCore, AuthClient } from "@valapi/auth";
import { Region } from "@valapi/lib";

describe("auth.client", () => {
    const myClient = new AuthCore({
        region: Region.Default.Europe
    });

    test("save class", () => {
        const constClient = new AuthClient();
        constClient.fromJSON(myClient.toJSON());

        expect(myClient.toJSON()).toStrictEqual(constClient.toJSON());

        expect(myClient.region).toStrictEqual(constClient.region);
    });

    test("save static", () => {
        const staticClient = AuthClient.fromJSON(myClient.toJSON(), {
            region: Region.Default.Korea
        });

        expect(myClient.toJSON()).not.toStrictEqual(staticClient.toJSON());

        expect(staticClient.region).toMatchObject({
            live: Region.Default.Korea
        });
    });
});
