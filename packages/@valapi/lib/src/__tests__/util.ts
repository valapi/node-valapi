import { toUft8, fromUft8 } from "../index";

describe("lib.util", () => {
    test("uft8", () => {
        expect(fromUft8("eyJ2YWxvcmFudC50cyI6ICJ0aGUgYmVzdCBOb2RlLmpzIGxpYnJhcnkgdG8gdXNpbmcgVmFsb3JhbnQgQVBJIn0=", "base64")).toBe(
            `{"valorant.ts": "the best Node.js library to using Valorant API"}`
        );
        expect(toUft8(`{"1":"2kov83v4yj1v8y09",":)":"18ny9c8ny91c8ny9cn9"}`, "base64")).toBe("eyIxIjoiMmtvdjgzdjR5ajF2OHkwOSIsIjopIjoiMThueTljOG55OTFjOG55OWNuOSJ9");

        expect(toUft8("18ny9v2ny9v129ny1v21v8ny9", "base64")).toBe("MThueTl2Mm55OXYxMjlueTF2MjF2OG55OQ==");
        expect(fromUft8("MThueTl2Mm55OXYxMjlueTF2MjF2OG55OQ==", "base64")).toBe("18ny9v2ny9v129ny1v21v8ny9");
    });
});
