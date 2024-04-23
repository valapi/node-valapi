import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Content {
    export interface ContentElements {
        ID: string;
        Name: string;
        StartTime: Date;
        EndTime: Date;
        IsActive: boolean;
    }

    export interface ContentElementsType extends ContentElements {
        Type: string;
    }

    export interface Content {
        DisabledID: Array<any>; // * unknown
        Seasons: Array<Content.ContentElementsType>;
        Events: Array<Content.ContentElements>;
    }
}

export class Content extends WebClientService {
    public get(): PromiseResponse<Content.Content> {
        return this.request.get(`${this.regionURL.url.sharedData}/content-service/v3/content`);
    }
}
