import type { ValAxios } from "@valapi/lib";
import type { WebClientRegion } from "./WebClientRegion";

export class WebClientService {
    protected readonly axios: ValAxios;
    protected readonly apiRegion: WebClientRegion;

    /**
     *
     * @param {ValAxios} axios Request Client
     * @param {WebClientRegion} apiRegion Region Service
     */
    public constructor(axios: ValAxios, apiRegion: WebClientRegion) {
        this.axios = axios;
        this.apiRegion = apiRegion;
    }
}
