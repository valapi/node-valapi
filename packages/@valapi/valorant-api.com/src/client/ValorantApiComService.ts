import type { AxiosInstance, AxiosResponse } from "axios";

import type { ValorantApiCom } from "./ValorantApiCom";

export namespace ValorantApiComService {
    export type SingleLanguage<T> = T;
    export type MultipleLanguage<T> = Record<Exclude<ValorantApiCom.Language, "all">, T>;

    /**
     * Localized Data
     */
    export type Languages<T, L extends ValorantApiCom.Language> = L extends "all" ? MultipleLanguage<T> : SingleLanguage<T>;

    export interface BaseResponse<T> {
        status: number;
        data?: T;
        error?: string;
    }

    /**
     * Request Response
     */
    export type Response<T> = AxiosResponse<BaseResponse<T>>;
}

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
