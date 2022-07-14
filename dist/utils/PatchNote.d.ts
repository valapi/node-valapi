import { Locale } from "@valapi/lib";
declare namespace PatchNote {
    type Version = `${number}.${number}`;
}
/**
 * Valorant Patch Note URL
 */
declare class PatchNote {
    private json;
    private patch_list;
    private patch_note;
    /**
     * Class Constructor
     * @param {string} language Language of the patch note
     */
    constructor(language?: keyof typeof Locale.from);
    /**
     *
     * @param {string} language Language
     * @returns {string} Url of Json data
     */
    static getJsonUrl(language?: keyof typeof Locale.from): string;
    /**
     *
     * @param {string} patch Version
     * @param {string} language Language
     * @returns {string} Url of Patch note
     */
    static getUrl(patch?: PatchNote.Version, language?: keyof typeof Locale.from): string;
}
export { PatchNote };
