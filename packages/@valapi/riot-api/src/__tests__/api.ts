import { Region, Locale } from "@valapi/lib";
import { RiotApi } from "../index";

import { env } from "node:process";

describe("riotapi.api", () => {
    const myClient = new RiotApi({
        apiKey: env.VAL_RIOT_API ? env.VAL_RIOT_API : "",
        region: Region.Default.Asia_Pacific
    });

    test("apis", async () => {
        const _data = [
            await myClient.AccountV1.byRiotId("RealKawin", "In3gG"),
            await myClient.ContentV1.contents(Locale.Default.English_United_States),
            await myClient.RankedV1.leaderboardsByAct("3e47230a-463c-a301-eb7d-67bb60357d4f", 10, 0),
            await myClient.StatusV1.platformData()
        ];

        _data.map((element) => {
            expect(element.isRequestError).toBe(false);
            expect(element.data).not.toMatchObject({
                status: {
                    message: "Unauthorized",
                    status_code: 401
                }
            });
        });
    });
});
