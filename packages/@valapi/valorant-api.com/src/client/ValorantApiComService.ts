import type { ValAxios } from "@valapi/lib";

export class ValorantApiComService {
    protected readonly axios: ValAxios;

    /**
     *
     * @param {ValAxios} axios Request Client
     */
    public constructor(axios: ValAxios) {
        this.axios = axios;
    }
}
