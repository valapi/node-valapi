import { WebClient } from "../index";

import { env } from "node:process";

describe("webclient.api", () => {
    const myClient = new WebClient();

    test("apis", async () => {
        await myClient.login(<string>env.VAL_USER, <string>env.VAL_PASS);

        const subject = myClient.getSubject();

        Promise.all([
            myClient.getUserInfo(),
            myClient.AccountXP.getPlayer(subject),
            myClient.ContractDefinitions.getItemProgression(),
            myClient.NameService.getPlayer(subject),
            myClient.Favorites.get(subject),
            myClient.MassRewards.reconcilePlayer(subject),
            myClient.Match.fetchMatchHistory(subject),
            myClient.Personalization.getPlayerLoadout(subject),
            myClient.Store.getOffers()
        ]).then((values) => {
            values.forEach((element) => {
                expect(element.status === 200).toBe(true);
            });
        });
    });
});
