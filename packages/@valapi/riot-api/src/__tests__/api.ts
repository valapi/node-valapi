import { Region, Locale } from "@valapi/lib";
import { RiotApi } from "../index";

import { env } from "node:process";

describe("riotapi.api", () => {
    const myClient = new RiotApi({
        apiKey: env.VAL_RIOT_API ? env.VAL_RIOT_API : "",
        region: Region.Default.Asia_Pacific
    });

    test("apis", async () => {
        Promise.all([
            myClient.AccountV1.byRiotId("ING", "EMPTY"),
            myClient.ContentV1.contents(Locale.Default.English_United_States),
            myClient.RankedV1.leaderboardsByAct("3e47230a-463c-a301-eb7d-67bb60357d4f", 10, 0),
            myClient.StatusV1.platformData()
        ]).then((values) => {
            values.forEach((element) => {
                expect(element.status === 200).toBe(true);
                expect(element.data).not.toMatchObject({
                    status: {
                        message: "Unauthorized",
                        status_code: 401
                    }
                });
            });
        });
    });
});
