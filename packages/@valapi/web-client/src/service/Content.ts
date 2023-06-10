import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export namespace Content {
    // response

    export interface ContentElements {
        ID: string;
        Name: string;
        StartTime: Date;
        EndTime: Date;
        IsActive: boolean;
    }

    export interface Content {
        DisabledID: Array<any>; // * unknown
        Seasons: Array<Content.ContentElements & { Type: string }>;
        Events: Array<Content.ContentElements>;
    }
}

export class Content extends WebClientService {
    /**
     * @returns {Promise<AxiosResponse<Content.Content>>}
     */
    public async fetchContent(): Promise<AxiosResponse<Content.Content>> {
        return await this.axios.get(`${this.apiRegion.url.sharedData}/content-service/v3/content`);
    }
}
