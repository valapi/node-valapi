import { Region } from "@valapi/lib";
import { AuthClient, AuthCore } from "../index";

import { CookieJar } from "tough-cookie";

import { env } from "node:process";
import { randomBytes } from "node:crypto";

describe("auth.login", () => {
    const myClient = new AuthClient({
        region: <Region.Identify>env.VAL_REGION
    });

    test("new client", () => {
        expect(myClient.toJSON()).toMatchObject<Partial<AuthCore.Json>>({
            isMultifactorAccount: false,
            isAuthenticationError: false,
            cookie: new CookieJar().serializeSync(),
            access_token: "",
            id_token: "",
            expires_in: 3600,
            token_type: "Bearer",
            session_state: "",
            entitlements_token: "",
            region: {
                pbe: Region.Default.North_America,
                live: <Region.Identify>env.VAL_REGION
            }
        });

        expect(() => {
            myClient.getSubject();
        }).toThrow();
    });

    test("empty refresh", async () => {
        await expect(async () => {
            return await myClient.refresh();
        }).rejects.toThrow();
    });

    test("user auth", async () => {
        await myClient.login(<string>env.VAL_USER, <string>env.VAL_PASS);

        expect(myClient.toJSON()).not.toMatchObject<Partial<AuthCore.Json>>({
            isMultifactorAccount: true,
            isAuthenticationError: true,
            cookie: new CookieJar().serializeSync(),
            access_token: "",
            id_token: "",
            session_state: "",
            entitlements_token: ""
        });
    });

    test("user auth error", async () => {
        const errorClient = new AuthClient({
            client: {
                platform: {
                    platformChipset: "",
                    platformOS: "",
                    platformOSVersion: "",
                    platformType: ""
                },
                version: ""
            }
        });

        await expect(async () => {
            return await errorClient.login(randomBytes(10).toString("hex"), randomBytes(15).toString("hex"));
        }).rejects.toThrow();
    });

    test("cookie auth", async () => {
        const cookieClient = await AuthClient.fromCookie(myClient.cookie, {
            region: <Region.Identify>env.VAL_REGION
        });

        expect(cookieClient.toJSON()).toMatchObject({
            isMultifactorAccount: false,
            isAuthenticationError: false
        });

        expect(cookieClient.getSubject()).toBe(myClient.getSubject());

        expect(myClient.cookie.serializeSync()).not.toStrictEqual(cookieClient.cookie.serializeSync());
    });
});
