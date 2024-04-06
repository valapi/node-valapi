import { CrosshairColor, CrosshairHexColor, ItemTypeId, Locale, QueueId, Region } from "../index";

describe("lib.resource", () => {
    test("resources", () => {
        expect(CrosshairColor.fromName("White")).toBe("0");
        expect(CrosshairColor.fromID("1")).toBe("Green");

        expect(CrosshairHexColor.fromName("Pink")).toBe("FF00FF");
        expect(CrosshairHexColor.fromHex("00FFFF")).toBe("Cyan");

        expect(ItemTypeId.fromName("Agents")).toBe("01bb38e1-da47-4e6a-9b3d-945fe4655707");
        expect(ItemTypeId.fromID("e7c63390-eda7-46e0-bb7a-a6abdacd2433")).toBe("Skins");

        expect(Locale.fromName("German_Germany")).toBe("de-DE");
        expect(Locale.fromID("zh-TW")).toBe("Chinese_Taiwan");

        expect(QueueId.fromName("Escalation")).toBe("ggteam");
        expect(QueueId.fromID("onefa")).toBe("Replication");

        expect(Region.fromName("Brazil")).toBe("br");
        expect(Region.fromID("pbe")).toBe("Public_Beta_Environment");
    });
});
