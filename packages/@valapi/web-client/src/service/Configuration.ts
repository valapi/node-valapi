import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Configuration {
    export interface Config {
        LastApplication: Date;
        Collapsed: Record<string, string>; // * unknown
    }
}

export class Configuration extends WebClientService {
    public get(): PromiseResponse<Configuration.Config> {
        return this.request.get(`${this.regionURL.url.sharedData}/v1/config/${this.regionURL.id}`);
    }
}
