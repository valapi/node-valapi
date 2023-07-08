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
    public fetchContent(): Promise<AxiosResponse<Content.Content>> {
        return this.axios.get(`${this.apiRegion.url.sharedData}/content-service/v3/content`);
    }
}
