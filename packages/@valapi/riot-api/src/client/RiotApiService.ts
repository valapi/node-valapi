import type { AxiosInstance } from "axios";

import type { RiotApiRegion } from "./RiotApiRegion";

export class RiotApiService {
    protected readonly axios: AxiosInstance;
    protected readonly apiRegion: RiotApiRegion;

    /**
     *
     * @param {AxiosInstance} axios Request Client
     * @param {RiotApiRegion} apiRegion Region Service
     */
    public constructor(axios: AxiosInstance, apiRegion: RiotApiRegion) {
        this.axios = axios;
        this.apiRegion = apiRegion;
    }
}
