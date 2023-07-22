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
    export interface DataResponse<T> extends BaseResponse<T> {
        data: T;
    }
    export interface ErrorResponse<T> extends BaseResponse<T> {
        error: string;
    }

    /**
     * Request Response
     */
    export type Response<T> = AxiosResponse<DataResponse<T> | ErrorResponse<T>>;
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
