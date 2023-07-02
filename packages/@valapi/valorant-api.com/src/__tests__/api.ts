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
        Promise.all([
            myClient.Agents.get(),
            myClient.Buddies.get(),
            myClient.Buddies.getLevels(),
            myClient.Bundles.get(),
            myClient.Ceremonies.get(),
            myClient.CompetitiveTiers.get(),
            myClient.ContentTiers.get(),
            myClient.Contracts.get(),
            myClient.Currencies.get(),
            myClient.Events.get(),
            myClient.Gamemodes.get(),
            myClient.Gamemodes.getEquippables(),
            myClient.Gear.get(),
            myClient.LevelBorders.get(),
            myClient.Maps.get(),
            myClient.Missions.get(),
            myClient.Objectives.get(),
            myClient.PlayerCards.get(),
            myClient.PlayerTitles.get(),
            myClient.Seasons.get(),
            myClient.Seasons.getCompetitiveSeasons(),
            myClient.Sprays.get(),
            myClient.Sprays.getLevels(),
            myClient.Themes.get(),
            myClient.Version.get(),
            myClient.Weapons.get(),
            myClient.Weapons.getSkins()
        ]).then((values) => {
            values.forEach((element) => {
                expect(element.status === 200).toBe(true);
                expect(element.data.data).not.toBe([]);
                expect(element.data.data).not.toContain([undefined]);
            });
        });
    });
});
