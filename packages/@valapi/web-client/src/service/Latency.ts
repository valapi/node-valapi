import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export class Latency extends WebClientService {
    /**
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchStats(): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.sharedData}/latency/v1/ingestMulti`);
    }

    /**
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchStat(): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.sharedData}/latency/v1/ingest`);
    }
}
