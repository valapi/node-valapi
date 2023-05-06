import type { ValAxios } from "@valapi/lib";

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
     * @returns {Promise<ValAxios.Response<Config.Config>>}
     */
    public async fetchConfig(): Promise<ValAxios.Response<Config.Config>> {
        return await this.axios.get(`${this.apiRegion.url.sharedData}/v1/config/${this.apiRegion.id}`);
    }
}
