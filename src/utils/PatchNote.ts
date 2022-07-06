//import

import { Locale } from "@valapi/lib";

//interface

type ValorantVersion = `${number}.${number}`;

//class

/**
 * Valorant Patch Note URL
 */
class PatchNote {
    private json: string;
    private patch_list: string;
    private patch_note: string;

    /**
     * 
     * @param {string} language Language of the patch note
     */
    public constructor(language: keyof typeof Locale.from = 'en-US') {
        let lowerCase_language = language.toLowerCase();

        this.json = `https://playvalorant.com/page-data/${lowerCase_language}/news/tags/patch-notes/page-data.json`;

        this.patch_list = `https://playvalorant.com/${lowerCase_language}/news/tags/patch-notes/`;
        this.patch_note = `https://playvalorant.com/${lowerCase_language}/news/game-updates`;
    }

    /**
     * 
     * @param {string} language Language
     * @returns {string}
     */
    public static getJsonUrl(language?: keyof typeof Locale.from): string {
        const _myPatchNote = new PatchNote(language);

        return `${_myPatchNote.json}`;
    }

    /**
     * 
     * @param {string} patch Version
     * @param {string} language Language
     * @returns {string}
     */
    public static getUrl(patch?: ValorantVersion, language?: keyof typeof Locale.from): string {
        const _myPatchNote = new PatchNote(language);

        if (!patch) {
            return `${_myPatchNote.patch_list}`;
        }

        let split_patch: Array<string> = patch.split('.');
        if (split_patch.length !== 2) {
            throw new Error('Invalid patch number');
        } else if (split_patch.at(1) !== '0' && String(split_patch.at(1)).length === 1) {
            split_patch[1] = `0${split_patch[1]}`;

            patch = `${Number(split_patch.at(0))}.${String(split_patch.at(1))}` as ValorantVersion;
        }

        return `${_myPatchNote.patch_note}/valorant-patch-notes-${patch.replace('.', '-')}`;
    }
}

//export

export { PatchNote };
export type { ValorantVersion };