import { env } from "node:process";
import { randomBytes } from "node:crypto";

import type { Region } from "@valapi/lib";

import { Auth } from "../index";

describe("auth.client", () => {
    const auth = new Auth();

    test("empty_reauth", async () => {
        await expect(auth.reauthorize()).rejects.toThrow();
    });

    test("login", async () => {
        await auth.login(<string>env.VAL_USER, <string>env.VAL_PASS);

        expect(auth.isMultifactor).toBe(false);
        expect(auth.isAuthenticated).toBe(true);
    });

    test("error", async () => {
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

    test("region", async () => {
        await expect(auth.regionTokenization()).resolves.toBe(<Region.ID>env.VAL_REGION);
    });

    test("reauth", async () => {
        const cookieAuth = new Auth({
            user: {
                ...new Auth().toJSON(),
                ...{
                    cookie: auth.cookie.toJSON()
                }
            }
        });

        await cookieAuth.reauthorize();

        expect(cookieAuth.isMultifactor).toBe(false);
        expect(cookieAuth.subject).toBe(auth.subject);
        expect(cookieAuth.cookie.serializeSync()).not.toStrictEqual(auth.cookie.serializeSync());
    });
});
