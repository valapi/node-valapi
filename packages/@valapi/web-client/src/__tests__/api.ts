import { env } from "node:process";

import type { Region } from "@valapi/lib";
import { Auth } from "@valapi/auth";

import { WebClient } from "../index";

describe("webclient.api", () => {
    const auth = new Auth();

    it("apis", async () => {
        await auth.login(<string>env.VAL_USER, <string>env.VAL_PASS);

        const client = new WebClient({
            user: auth.toJSON(),
            region: <Region.ID>env.VAL_REGION
        });

        Promise.all([
            client.getUserInfo(),
            client.AccountXP.getPlayer(auth.subject),
            client.ContractDefinitions.getItemProgression(),
            client.NameService.getPlayer(auth.subject),
            client.Favorites.get(auth.subject),
            client.MassRewards.reconcilePlayer(auth.subject),
            client.Match.fetchMatchHistory(auth.subject),
            client.Personalization.getPlayerLoadout(auth.subject),
            client.Store.getOffers()
        ]).then(values => {
            values.forEach(element => {
                expect(element.status === 200).toBe(true);
            });
        });
    });
});
