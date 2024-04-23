import type { AxiosInstance, AxiosResponse } from "axios";

import type { Language } from "./ValorantApiCom";

export type AllLanguageResponse<T> = Record<Exclude<Language, "all">, T>;
export type LanguageResponse<T, L extends Language> = L extends "all" ? AllLanguageResponse<T> : T;

export type Response<T> = Promise<
    AxiosResponse<{
        status: number;
        data?: T;
        error?: string;
    }>
>;

export class ValorantApiComService {
    protected readonly request: AxiosInstance;

    public constructor(request: AxiosInstance) {
        this.request = request;
    }
}
