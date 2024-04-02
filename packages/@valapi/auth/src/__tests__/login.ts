import { Region } from "@valapi/lib";
import { AuthClient, AuthCore } from "../index";

import { CookieJar } from "tough-cookie";

import { env } from "node:process";
import { randomBytes } from "node:crypto";

describe("auth.login", () => {
    const myClient = new AuthClient({
        region: <Region.ID>env.VAL_REGION
    });

    test("new client", () => {
        expect(myClient.toJSON()).toMatchObject<Partial<AuthCore.Json>>({
            authenticationInfo: {
                isMultifactor: false,
                isError: false,
                message: "load;client;"
            },
            cookie: new CookieJar().serializeSync(),
            access_token: "",
            id_token: "",
            expires_in: 3600,
            token_type: "Bearer",
            session_state: "",
            entitlements_token: "",
            region: {
                pbe: Region.Default.North_America,
                live: <Region.ID>env.VAL_REGION
            }
        });

        expect(() => {
            myClient.getSubject();
        }).toThrow();
    });

    test("empty refresh", async () => {
        await expect(async () => {
            return myClient.refresh();
        }).rejects.toThrow();
    });

    test("user auth", async () => {
        await myClient.login(<string>env.VAL_USER, <string>env.VAL_PASS);

        expect(myClient.toJSON().authenticationInfo).toMatchObject<Partial<AuthCore.JsonAuthenticationInfo>>({
            isMultifactor: false,
            isError: false,
            message: "success;login;"
        });
    });

    test("user auth error", async () => {
        const errorClient = new AuthClient({
            platform: {
                platformChipset: "",
                platformOS: "",
                platformOSVersion: "",
                platformType: ""
            },
            version: ""
        });

        await expect(async () => {
            return errorClient.login(randomBytes(10).toString("hex"), randomBytes(15).toString("hex"));
        }).rejects.toThrow();
    });

    test("cookie auth", async () => {
        const cookieClient = await AuthClient.fromCookie(myClient.cookie, {
            region: <Region.ID>env.VAL_REGION
        });

        expect(cookieClient.toJSON().authenticationInfo).toMatchObject<Partial<AuthCore.JsonAuthenticationInfo>>({
            isError: false,
            isMultifactor: false,
            message: "success;cookie;"
        });

        expect(cookieClient.getSubject()).toBe(myClient.getSubject());

        expect(myClient.cookie.serializeSync()).not.toStrictEqual(cookieClient.cookie.serializeSync());
    });
});
