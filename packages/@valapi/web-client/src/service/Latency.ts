import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export class Latency extends WebClientService {
    /**
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async fetchStats(): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.sharedData}/latency/v1/ingestMulti`);
    }

    /**
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async fetchStat(): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.sharedData}/latency/v1/ingest`);
    }
}
