import { Locale } from "@valapi/lib";
import { ValPatchNote } from "../index";

describe("valorant_ts.patchnote", () => {
    test("url", () => {
        expect(ValPatchNote.getUrl()).toBe("https://playvalorant.com/en-us/news/tags/patch-notes/");
        expect(ValPatchNote.getUrl("4.00")).toBe("https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-4-0");
        expect(ValPatchNote.getUrl("6.2", Locale.Default.Polish_Poland)).toBe("https://playvalorant.com/pl-pl/news/game-updates/valorant-patch-notes-6-02");
    });

    test("page content", async () => {
        const pageData = await ValPatchNote.getContent(Locale.Default.Spanish_Mexico);

        expect(pageData.status === 200).toBe(true);
    });
});
