import { Locale } from "@valapi/lib";
declare type ValorantVersion = `${number}.${number}`;
/**
 * Valorant Patch Note URL
 */
declare class PatchNote {
    private json;
    private patch_list;
    private patch_note;
    /**
     *
     * @param {string} language Language of the patch note
     */
    constructor(language?: keyof typeof Locale.from);
    /**
     *
     * @param {string} language Language
     * @returns {string}
     */
    static getJsonUrl(language?: keyof typeof Locale.from): string;
    /**
     *
     * @param {string} patch Version
     * @param {string} language Language
     * @returns {string}
     */
    static getUrl(patch?: ValorantVersion, language?: keyof typeof Locale.from): string;
}
export { PatchNote };
export type { ValorantVersion };
//# sourceMappingURL=PatchNote.d.ts.map