import { Locale } from "@valapi/lib";
import { ValorantApiCom } from "../index";

describe("valapicom.api", () => {
    const client = new ValorantApiCom({
        language: Locale.Default.Thai_Thailand,
        responseOptions: {
            ignore_null: true
        }
    });

    test("apis", () => {
        Promise.all([
            client.Agents.get(),
            client.Buddies.get(),
            client.Buddies.getLevels(),
            client.Bundles.get(),
            client.Ceremonies.get(),
            client.CompetitiveTiers.get(),
            client.ContentTiers.get(),
            client.Contracts.get(),
            client.Currencies.get(),
            client.Events.get(),
            client.Gamemodes.get(),
            client.Gamemodes.getEquippables(),
            client.Gear.get(),
            client.Internal.riotClientVersion(),
            client.LevelBorders.get(),
            client.Maps.get(),
            client.Missions.get(),
            client.Objectives.get(),
            client.PlayerCards.get(),
            client.PlayerTitles.get(),
            client.Seasons.get(),
            client.Seasons.getCompetitiveSeasons(),
            client.Sprays.get(),
            client.Sprays.getLevels(),
            client.Themes.get(),
            client.Version.get(),
            client.Weapons.get(),
            client.Weapons.getSkins()
        ]).then(values => {
            values.forEach(x => {
                expect(x.status === 200).toBe(true);
                expect(x.data.data).not.toBe([]);
                expect(x.data.data).not.toContain([undefined]);
            });
        });
    });
});
