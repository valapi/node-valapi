import type { ValAxios } from "@valapi/lib";
import type { RiotApiRegion } from "./RiotApiRegion";

export class RiotApiService {
    protected readonly axios: ValAxios;
    protected readonly apiRegion: RiotApiRegion;

    /**
     *
     * @param {ValAxios} axios Request Client
     * @param {RiotApiRegion} apiRegion Region Service
     */
    public constructor(axios: ValAxios, apiRegion: RiotApiRegion) {
        this.axios = axios;
        this.apiRegion = apiRegion;
    }
}
