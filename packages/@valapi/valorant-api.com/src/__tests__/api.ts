import { Locale } from "@valapi/lib";
import { ValorantApiCom } from "../index";

describe("valapicom.api", () => {
    const myClient = new ValorantApiCom({
        language: Locale.Default.Thai_Thailand,
        responseOptions: {
            ignore_null: true
        }
    });

    test("apis", async () => {
        const _data = [
            await myClient.Agents.get(),
            await myClient.Buddies.get(),
            await myClient.Buddies.getLevels(),
            await myClient.Bundles.get(),
            await myClient.Ceremonies.get(),
            await myClient.CompetitiveTiers.get(),
            await myClient.ContentTiers.get(),
            await myClient.Contracts.get(),
            await myClient.Currencies.get(),
            await myClient.Events.get(),
            await myClient.Gamemodes.get(),
            await myClient.Gamemodes.getEquippables(),
            await myClient.Gear.get(),
            await myClient.LevelBorders.get(),
            await myClient.Maps.get(),
            await myClient.Missions.get(),
            await myClient.Objectives.get(),
            await myClient.PlayerCards.get(),
            await myClient.PlayerTitles.get(),
            await myClient.Seasons.get(),
            await myClient.Seasons.getCompetitiveSeasons(),
            await myClient.Sprays.get(),
            await myClient.Sprays.getLevels(),
            await myClient.Themes.get(),
            await myClient.Version.get(),
            await myClient.Weapons.get(),
            await myClient.Weapons.getSkins()
        ];

        _data.map((element) => {
            expect(element.isRequestError).toBe(false);
            expect(element.data.data).not.toBe([]);
            expect(element.data.data).not.toContain([undefined]);
        });
    });
});
