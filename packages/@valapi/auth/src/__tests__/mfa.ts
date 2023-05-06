import { Region } from "@valapi/lib";
import { AuthClient, AuthCore } from "../index";

import { CookieJar } from "tough-cookie";

import { createInterface } from "node:readline";
import { env, stdin, stdout } from "node:process";

const cmdInput = createInterface({
    input: stdin,
    output: stdout
});

/**
 * get input from console
 * @param {string} msg message to display
 * @returns {Promise<string>}
 */
function readLineAsync(msg: string): Promise<string> {
    return new Promise((resolve) => {
        cmdInput.question(msg, (answer) => {
            resolve(answer);
        });
    });
}

describe("auth.mfa", () => {
    const myClient = new AuthClient({
        region: <Region.Identify>env.VAL_MFA_REGION
    });

    test("mfa auth", async () => {
        await myClient.login(<string>env.VAL_MFA_USER, <string>env.VAL_MFA_PASS);

        expect(myClient.toJSON()).toMatchObject<Partial<AuthCore.Json>>({
            isMultifactorAccount: true,
            isAuthenticationError: false,
            access_token: "",
            id_token: "",
            session_state: "",
            entitlements_token: ""
        });

        // verify

        const _verifyCode = await readLineAsync("xxxxxx - MFA Verification Code?");

        await myClient.verify(Number(_verifyCode));

        expect(myClient.toJSON()).not.toMatchObject<Partial<AuthCore.Json>>({
            isMultifactorAccount: false,
            isAuthenticationError: true,
            cookie: new CookieJar().serializeSync(),
            access_token: "",
            id_token: "",
            session_state: "",
            entitlements_token: ""
        });
    });
});
