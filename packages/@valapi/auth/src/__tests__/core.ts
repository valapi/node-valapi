import { CookieJar } from "tough-cookie";

import { AuthInstance } from "@valapi/auth";
import type { AuthUserInfo } from "@valapi/auth";

describe("auth.core", () => {
    const auth = new AuthInstance();

    test("new", () => {
        expect(auth.toJSON()).toMatchObject<AuthUserInfo>({
            cookie: new CookieJar().serializeSync(),
            isMultifactor: false,
            access_token: "",
            id_token: "",
            session_state: "",
            entitlements_token: ""
        });

        expect(auth.subject).toBe("");
        expect(auth.isAuthenticated).toBe(false);
    });

    test("save", () => {
        const exportAuth = new AuthInstance(auth.toJSON());

        expect(exportAuth.toJSON()).toStrictEqual(auth.toJSON());
    });
});
