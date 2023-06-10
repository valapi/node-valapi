import type { AxiosInstance } from "axios";

import type { WebClientRegion } from "./WebClientRegion";

export class WebClientService {
    protected readonly axios: AxiosInstance;
    protected readonly apiRegion: WebClientRegion;

    /**
     *
     * @param {AxiosInstance} axios Request Client
     * @param {WebClientRegion} apiRegion Region Service
     */
    public constructor(axios: AxiosInstance, apiRegion: WebClientRegion) {
        this.axios = axios;
        this.apiRegion = apiRegion;
    }
}
