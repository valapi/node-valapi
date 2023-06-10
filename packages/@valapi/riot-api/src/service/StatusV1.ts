import type { AxiosResponse } from "axios";

import { RiotApiService } from "../client/RiotApiService";

export namespace StatusV1 {
    export interface ContentDto {
        locale: string;
        content: string;

        [key: string]: any;
    }

    export interface UpdateDto {
        id: number;
        author: string;
        publish: boolean;
        /**
         * (Legal values: riotclient, riotstatus, game)
         */
        publish_locations: Array<string>;
        translations: Array<StatusV1.ContentDto>;
        created_at: string;
        updated_at: string;

        [key: string]: any;
    }

    export interface StatusDto {
        id: number;
        /**
         * (Legal values: scheduled, in_progress, complete)
         */
        maintenance_status: string;
        /**
         * (Legal values: info, warning, critical)
         */
        incident_severity: string;
        titles: Array<StatusV1.ContentDto>;
        updates: Array<StatusV1.UpdateDto>;
        created_at: string;
        archive_at: string;
        updated_at: string;
        /**
         * (Legal values: windows, macos, android, ios, ps4, xbone, switch)
         */
        platforms: Array<string>;

        [key: string]: any;
    }

    export interface PlatformDataDto {
        id: string;
        name: string;
        locales: Array<string>;
        maintenances: Array<StatusV1.StatusDto>;
        incidents: Array<StatusV1.StatusDto>;

        [key: string]: any;
    }
}

export class StatusV1 extends RiotApiService {
    /**
     * Get VALORANT status for the given platform.
     * @returns {Promise<AxiosResponse<StatusV1.PlatformDataDto>>}
     */
    public async platformData(): Promise<AxiosResponse<StatusV1.PlatformDataDto>> {
        return await this.axios.get(`${this.apiRegion.url.server}/val/status/v1/platform-data`);
    }
}
