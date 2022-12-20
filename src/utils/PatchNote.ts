// import

import { Locale, ValError } from "@valapi/lib";

// interface

export namespace ValPatchNote {
    export type Version = `${number}.${number}`;
}

// class

/**
 * Valorant Patch Note URL
 */
export class ValPatchNote {
    private readonly baseUrl: {
        default: string;
        data: string;
    };

    /**
     *
     * @param {string} language Language of the patch note
     */
    private constructor(language: Locale.Identify = "en-US") {
        const lowerCase_language = language.toLowerCase();

        this.baseUrl = {
            default: `https://playvalorant.com/${lowerCase_language}`,
            data: `https://playvalorant.com/page-data/${lowerCase_language}`
        };
    }

    private static parse(patch: ValPatchNote.Version, replaceWith = "."): string {
        const split_patch: Array<string> = patch.split(".");
        if (split_patch.length !== 2) {
            throw new ValError({
                name: "PatchNote_Error",
                message: "Invalid patch number",
                data: patch
            });
        }

        // * first Value

        split_patch[0] = Number(split_patch[0]).toString();

        // * second value

        if (split_patch[1] === "00") {
            // 5.00 --> 5.0

            split_patch[1] = "0";
        } else if (split_patch[1] !== "0") {
            // 5.1 --> 5.01

            if (String(split_patch[1]).length === 1) {
                split_patch[1] = `0${split_patch[1]}`;
            }
        }

        return split_patch.join(replaceWith);
    }

    // static

    /**
     *
     * @param {string} patch Version
     * @param {string} language Language
     * @returns {string} Url
     */
    public static getUrl(patch?: ValPatchNote.Version, language?: Locale.Identify): string {
        const _patchNote = new ValPatchNote(language);

        if (!patch) {
            return `${_patchNote.baseUrl.default}/news/tags/patch-notes/`;
        }

        return `${_patchNote.baseUrl.default}/news/game-updates/valorant-patch-notes-${ValPatchNote.parse(patch, "-")}`;
    }

    /**
     *
     * @param {string} language Language
     * @returns {string} Url
     */
    public static getContentUrl(language?: Locale.Identify): string {
        const _patchNote = new ValPatchNote(language);
        return `${_patchNote.baseUrl.data}/news/tags/patch-notes/page-data.json`;
    }
}