import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

import { Locale } from "@valapi/lib";

import { ValVersion } from "./ValVersion";

/**
 * Valorant Patch Note
 */
export class ValPatchNote {
    private readonly url: {
        default: string;
        pageData: string;
    };

    /**
     *
     * @param {string} language Language of the patch note
     */
    private constructor(language: Locale.Identify = Locale.Default.English_United_States) {
        const _languageLowerCase = language.toLowerCase();

        this.url = {
            default: `https://playvalorant.com/${_languageLowerCase}`,
            pageData: `https://playvalorant.com/page-data/${_languageLowerCase}`
        };
    }

    /**
     *
     * @param {ValVersion.Version} version Version
     * @param {Locale.Identify} language Language
     * @returns {string} Url
     */
    public static getUrl(version?: ValVersion.Version, language?: Locale.Identify): string {
        const patchNoteInstance = new ValPatchNote(language);

        if (!version) {
            return `${patchNoteInstance.url.default}/news/tags/patch-notes/`;
        }

        return `${patchNoteInstance.url.default}/news/game-updates/valorant-patch-notes-${ValVersion.parse(version).replace(".", "-")}`;
    }

    /**
     *
     * @param {Locale.Identify} language Language
     * @param {AxiosRequestConfig} axiosConfig Config
     * @returns {Promise<AxiosResponse<any>>} Patch Note Content
     */
    public static async getContent(language?: Locale.Identify, axiosConfig?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
        const patchNoteInstance = new ValPatchNote(language);

        return await axios.get(`${patchNoteInstance.url.pageData}/news/tags/patch-notes/page-data.json`, axiosConfig);
    }
}
