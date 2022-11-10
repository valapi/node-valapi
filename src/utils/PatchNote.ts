// import

import { Locale, ValError } from "@valapi/lib";

// interface

export namespace PatchNote {
    export type Version = `${number}.${number}`;
}

// class

/**
 * Valorant Patch Note URL
 */
export class PatchNote {
    private json: string;
    private patch_list: string;
    private patch_note: string;

    /**
     *
     * @param {string} language Language of the patch note
     */
    private constructor(language: Locale.Identify = "en-US") {
        const lowerCase_language = language.toLowerCase();

        this.json = `https://playvalorant.com/page-data/${lowerCase_language}/news/tags/patch-notes/page-data.json`;

        this.patch_list = `https://playvalorant.com/${lowerCase_language}/news/tags/patch-notes/`;
        this.patch_note = `https://playvalorant.com/${lowerCase_language}/news/game-updates`;
    }

    /**
     *
     * @param {string} language Language
     * @returns {string} Url of Json data
     */
    public static getJsonUrl(language?: Locale.Identify): string {
        const _myPatchNote = new PatchNote(language);

        return `${_myPatchNote.json}`;
    }

    /**
     *
     * @param {string} patch Version
     * @param {string} language Language
     * @returns {string} Url of Patch note
     */
    public static getUrl(patch?: PatchNote.Version, language?: Locale.Identify): string {
        const _myPatchNote = new PatchNote(language);

        if (!patch) {
            return `${_myPatchNote.patch_list}`;
        }

        const split_patch: Array<string> = patch.split(".");
        if (split_patch.length !== 2) {
            throw new ValError({
                name: "PatchNote_Error",
                message: "Invalid patch number",
                data: patch
            });
        } else if (split_patch.at(1) !== "0" && String(split_patch.at(1)).length === 1) {
            split_patch[1] = `0${split_patch[1]}`;

            patch = `${Number(split_patch.at(0))}.${String(split_patch.at(1))}` as PatchNote.Version;
        }

        return `${_myPatchNote.patch_note}/valorant-patch-notes-${patch.replace(".", "-")}`;
    }
}
