import { Locale, ValAxios } from "@valapi/lib";
import { ValVersion } from "./ValVersion";

import type { AxiosRequestConfig } from "axios";

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
     * @returns {Promise<ValAxios.Response<any>>} Patch Note Content
     */
    public static async getContent(language?: Locale.Identify, axiosConfig?: AxiosRequestConfig): Promise<ValAxios.Response<any>> {
        const patchNoteInstance = new ValPatchNote(language);
        const axiosClient = new ValAxios(axiosConfig);

        return await axiosClient.get(`${patchNoteInstance.url.pageData}/news/tags/patch-notes/page-data.json`);
    }
}
