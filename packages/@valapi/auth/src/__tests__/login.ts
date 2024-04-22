import type { Region } from "@valapi/lib";
import { Auth, type UserAuthInfo } from "../index";

import { CookieJar } from "tough-cookie";

import { env } from "node:process";
import { randomBytes } from "node:crypto";

describe("auth.login", () => {
    const auth = new Auth();

    test("new client", () => {
        expect(auth.toJSON()).toMatchObject<UserAuthInfo>({
            cookie: new CookieJar().serializeSync(),
            isMultifactor: false,
            access_token: "",
            id_token: "",
            session_state: "",
            entitlements_token: ""
        });

        expect(auth.subject).toBe("");
    });

    test("empty refresh", async () => {
        await expect(auth.reauthorize()).rejects.toThrow();
    });

    test("user auth", async () => {
        await auth.login(<string>env.VAL_USER, <string>env.VAL_PASS);

        expect(auth.isMultifactor).toBe(false);
    });

    test("user auth error", async () => {
        const errorAuth = new Auth({
            platform: {
                platformChipset: "",
                platformOS: "",
                platformOSVersion: "",
                platformType: ""
            },
            version: ""
        });

        await expect(errorAuth.login(randomBytes(10).toString("hex"), randomBytes(15).toString("hex"))).rejects.toThrow();
    });

    test("user region", async () => {
        await expect(auth.regionTokenization()).resolves.toBe(<Region.ID>env.VAL_REGION);
    });

    test("cookie auth", async () => {
        const cookieAuth = new Auth();
        cookieAuth.fromJSON({
            ...new Auth().toJSON(),
            ...{
                cookie: auth.cookie.toJSON()
            }
        });

        await cookieAuth.reauthorize();

        expect(cookieAuth.isMultifactor).toBe(false);
        expect(cookieAuth.subject).toBe(auth.subject);
        expect(cookieAuth.cookie.serializeSync()).not.toStrictEqual(auth.cookie.serializeSync());
    });
});
