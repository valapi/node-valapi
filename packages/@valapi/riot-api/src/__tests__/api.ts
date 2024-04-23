import { env } from "node:process";

import { Region, Locale } from "@valapi/lib";

import { RiotApi } from "../index";

describe("riotapi.api", () => {
    const client = new RiotApi({
        apiKey: env.VAL_RIOT_API ? env.VAL_RIOT_API : "",
        region: Region.Default.Asia_Pacific
    });

    test("apis", () => {
        Promise.all([
            client.AccountV1.byRiotId("ING", "EMPTY"),
            client.ContentV1.contents(Locale.Default.English_United_States),
            client.RankedV1.leaderboardsByAct("3e47230a-463c-a301-eb7d-67bb60357d4f", 10, 0),
            client.StatusV1.platformData()
        ]).then(values => {
            values.forEach(x => {
                expect(x.status === 200).toBe(true);
                expect(x.data).not.toMatchObject({
                    status: {
                        message: "Unauthorized",
                        status_code: 401
                    }
                });
            });
        });
    });
});
