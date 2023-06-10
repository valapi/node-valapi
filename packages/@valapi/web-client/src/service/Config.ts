import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export namespace Config {
    // response

    export interface Config {
        LastApplication: Date;
        Collapsed: Record<string, string>; // * unknown
    }
}

export class Config extends WebClientService {
    /**
     * @returns {Promise<AxiosResponse<Config.Config>>}
     */
    public async fetchConfig(): Promise<AxiosResponse<Config.Config>> {
        return await this.axios.get(`${this.apiRegion.url.sharedData}/v1/config/${this.apiRegion.id}`);
    }
}
