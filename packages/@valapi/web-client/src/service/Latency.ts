import type { ValAxios } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export class Latency extends WebClientService {
    /**
     *
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async fetchStats(): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.sharedData}/latency/v1/ingestMulti`);
    }

    /**
     *
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async fetchStat(): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.sharedData}/latency/v1/ingest`);
    }
}
