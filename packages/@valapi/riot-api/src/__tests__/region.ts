import { RiotApiRegion } from "../index";
import { Region } from "@valapi/lib";

describe("riotapi.region", () => {
    test("public_beta_environment", () => {
        const _region = new RiotApiRegion(Region.Default.Public_Beta_Environment);

        const id = "na";
        const continent = "pbe1";

        expect(_region.id).toBe(id);
        expect(_region.continent).toBe(continent);

        expect(_region.url).toMatchObject({
            region: `https://${id}.api.riotgames.com`,
            continent: `https://${continent}.api.riotgames.com`
        });
    });
});
