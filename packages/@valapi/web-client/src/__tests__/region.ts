import { WebClientRegion } from "../index";
import { Region } from "@valapi/lib";

describe("webclient.region", () => {
    test("korea", () => {
        const _region = new WebClientRegion(Region.Default.Korea);

        const id = "kr";
        const shard = "kr";

        expect(_region.id).toBe(id);
        expect(_region.shard).toBe(shard);

        expect(_region.url).toMatchObject({
            playerData: `https://pd.${shard}.a.pvp.net`,
            partyService: `https://glz-${id}-1.${shard}.a.pvp.net`,
            sharedData: `https://shared.${shard}.a.pvp.net`
        });
    });
});
