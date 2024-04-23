import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export class Latency extends WebClientService {
    public fetchStats(): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.sharedData}/latency/v1/ingestMulti`);
    }

    public fetchStat(): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.sharedData}/latency/v1/ingest`);
    }
}
