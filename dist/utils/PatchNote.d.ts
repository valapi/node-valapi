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
     *
     * @param {string} language Language of the patch note
     */
    constructor(language?: Locale.String);
    /**
     *
     * @param {string} language Language
     * @returns {string} Url of Json data
     */
    static getJsonUrl(language?: Locale.String): string;
    /**
     *
     * @param {string} patch Version
     * @param {string} language Language
     * @returns {string} Url of Patch note
     */
    static getUrl(patch?: PatchNote.Version, language?: Locale.String): string;
}
export { PatchNote };
