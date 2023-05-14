import { ValBase64 } from "../index";

describe("lib.util", () => {
    test("base64", () => {
        expect(ValBase64.decrypt("eyJ2YWxvcmFudC50cyI6ICJ0aGUgYmVzdCBOb2RlLmpzIGxpYnJhcnkgdG8gdXNpbmcgVmFsb3JhbnQgQVBJIn0=")).toBe(`{"valorant.ts": "the best Node.js library to using Valorant API"}`);
        expect(ValBase64.encrypt(`{"1":"2kov83v4yj1v8y09",":)":"18ny9c8ny91c8ny9cn9"}`)).toBe("eyIxIjoiMmtvdjgzdjR5ajF2OHkwOSIsIjopIjoiMThueTljOG55OTFjOG55OWNuOSJ9");

        expect(ValBase64.encrypt("18ny9v2ny9v129ny1v21v8ny9")).toBe("MThueTl2Mm55OXYxMjlueTF2MjF2OG55OQ==");
        expect(ValBase64.decrypt("MThueTl2Mm55OXYxMjlueTF2MjF2OG55OQ==")).toBe("18ny9v2ny9v129ny1v21v8ny9");
    });
});
