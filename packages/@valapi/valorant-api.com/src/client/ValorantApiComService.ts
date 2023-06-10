import type { AxiosInstance } from "axios";

export class ValorantApiComService {
    protected readonly axios: AxiosInstance;

    /**
     *
     * @param {AxiosInstance} axios Request Client
     */
    public constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
}
