import { ValVersion } from "../index";

describe("valorant_ts.version", () => {
    test("parse", () => {
        expect(ValVersion.parse("6.00")).toBe("6.0");
        expect(ValVersion.parse("5.10")).toBe("5.10");
        expect(ValVersion.parse("5.0")).toBe("5.0");
        expect(ValVersion.parse("4.11")).toBe("4.11");
        expect(ValVersion.parse("4.01")).toBe("4.01");
    });
});
