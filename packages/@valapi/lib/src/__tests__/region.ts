import { ValRegion, Region } from "../index";

describe("lib.region", () => {
    test("latin_america", () => {
        const _region = new ValRegion(Region.Default.Latin_America);

        const id = "latam";

        expect(_region.id).toBe(id);
    });

    test("brazil", () => {
        const _region = new ValRegion(Region.Default.Brazil);

        const id = "br";

        expect(_region.id).toBe(id);
    });
});
