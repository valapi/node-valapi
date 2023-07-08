import type { AxiosResponse } from "axios";

import type { Locale } from "@valapi/lib";

import { RiotApiService } from "../client/RiotApiService";

export namespace ContentV1 {
    export interface ActDto {
        name: string;
        /**
         * This field is excluded from the response when a locale is set
         */
        localizedNames?: string;
        id: string;
        isActive: boolean;

        [key: string]: any;
    }

    export interface ContentItemDto {
        name: string;
        /**
         * This field is excluded from the response when a locale is set
         */
        localizedNames?: string;
        id: string;
        assetName: string;
        /**
         * This field is only included for maps and game modes. These values are used in the match response.
         */
        assetPath?: string;

        [key: string]: any;
    }

    export interface ContentDto {
        version: string;
        characters: Array<ContentV1.ContentItemDto>;
        maps: Array<ContentV1.ContentItemDto>;
        chromas: Array<ContentV1.ContentItemDto>;
        skins: Array<ContentV1.ContentItemDto>;
        skinLevels: Array<ContentV1.ContentItemDto>;
        equips: Array<ContentV1.ContentItemDto>;
        gameModes: Array<ContentV1.ContentItemDto>;
        sprays: Array<ContentV1.ContentItemDto>;
        sprayLevels: Array<ContentV1.ContentItemDto>;
        charms: Array<ContentV1.ContentItemDto>;
        charmLevels: Array<ContentV1.ContentItemDto>;
        playerCards: Array<ContentV1.ContentItemDto>;
        playerTitles: Array<ContentV1.ContentItemDto>;
        acts: Array<ContentV1.ActDto>;

        [key: string]: any;
    }
}

export class ContentV1 extends RiotApiService {
    /**
     * Get content optionally filtered by locale
     * @param {Locale.Identify} locale Locale (default: en-US)
     * @returns {Promise<AxiosResponse<ContentV1.ContentDto>>}
     */
    public contents(locale: Locale.Identify = "en-US"): Promise<AxiosResponse<ContentV1.ContentDto>> {
        return this.axios.get(`${this.apiRegion.url.server}/val/content/v1/contents?locale=${locale}`);
    }
}
