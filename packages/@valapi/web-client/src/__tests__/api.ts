import { WebClient } from "../index";

import { env } from "node:process";

describe("webclient.api", () => {
    const myClient = new WebClient();

    test("apis", async () => {
        await myClient.login(<string>env.VAL_USER, <string>env.VAL_PASS);

        const subject = myClient.getSubject();

        [
            await myClient.getUserInfo(),
            await myClient.AccountXP.getPlayer(subject),
            await myClient.ContractDefinitions.fetchItemProgression(),
            await myClient.DisplayNameService.fetchPlayers(subject),
            await myClient.Favorites.get(subject),
            await myClient.MassRewards.reconcilePlayer(subject),
            await myClient.Match.fetchMatchHistory(subject),
            await myClient.Personalization.getPlayerLoadout(subject),
            await myClient.Store.getOffers()
        ].forEach((element) => {
            expect(element.isRequestError).toBe(false);
        });
    });
});
