import { RiotApiRegion } from "../index";
import { Region } from "@valapi/lib";

describe("riotapi.region", () => {
    test("public_beta_environment", () => {
        const _region = new RiotApiRegion(Region.Default.Public_Beta_Environment);

        const id = "na";
        const riotRegion = "pbe1";

        expect(_region.id).toBe(id);
        expect(_region.riotRegion).toBe(riotRegion);

        expect(_region.url).toMatchObject({
            api: `https://${riotRegion}.api.riotgames.com`,
            server: `https://${id}.api.riotgames.com`
        });
    });
});
