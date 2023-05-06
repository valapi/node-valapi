import { ValError } from "./ValError";
import axios, { type AxiosInstance, type CreateAxiosDefaults, type AxiosError, type AxiosResponse, type AxiosRequestConfig, type AxiosDefaults } from "axios";

export namespace ValAxios {
    /**
     * Request Response
     */
    export interface Response<T = any> {
        isRequestError: boolean;
        data: T;
        status: number;
        headers: AxiosResponse["headers"];
    }
}

/**
 * Request Client
 */
export class ValAxios {
    public readonly config: AxiosDefaults;
    private readonly axios: AxiosInstance;

    // default

    private static readonly DEFAULT_config: CreateAxiosDefaults = {
        timeout: 15000, // 15 second (15 * 1000)
        headers: {
            "Content-Type": "application/json"
        }
    };
    public static readonly Default = {
        config: ValAxios.DEFAULT_config
    };

    /**
     *
     * @param {CreateAxiosDefaults} config Config
     */
    public constructor(config: CreateAxiosDefaults = {}) {
        this.axios = axios.create({
            ...axios.defaults,
            ...ValAxios.Default.config,
            ...config,
            ...{
                headers: {
                    ...axios.defaults.headers,
                    ...ValAxios.Default.config.headers,
                    ...config.headers
                }
            }
        });
        this.config = this.axios.defaults;
    }

    // handle

    /**
     * Request Response Handler
     * @param {AxiosResponse} response Axios Response
     * @returns {Promise<ValAxios.Response<T>>}
     */
    private async responseHandler<T>(response: AxiosResponse<T> | ValAxios.Response<T>): Promise<ValAxios.Response<T>> {
        return {
            isRequestError: false,
            data: response.data,
            status: response.status,
            headers: response.headers
        };
    }

    /**
     * Request Error Handler
     * @param {AxiosError} error Axios Error
     * @returns {Promise<void>}
     */
    private async errorHandler(error: AxiosError): Promise<void> {
        throw new ValError({
            name: "ValAxios_Error",
            message: error.message ? error.message : error.name,
            data: error.toJSON ? error.toJSON() : error,
            stack: error.stack
        });
    }

    // request

    /**
     * @param {string} url URL
     * @param {AxiosRequestConfig} config Axios Config
     * @returns {Promise<ValAxios.Response<T>>}
     */
    public async get<T = any>(url: string, config: AxiosRequestConfig = {}): Promise<ValAxios.Response<T>> {
        return await this.axios
            .get(url, config)
            .catch((error: AxiosError): any => {
                return this.errorHandler(error);
            })
            .then((response: AxiosResponse<T>) => {
                return this.responseHandler<T>(response);
            });
    }

    /**
     * @param {string} url URL
     * @param {object} body Body
     * @param {AxiosRequestConfig} config Axios Config
     * @returns {Promise<ValAxios.Response<T>>}
     */
    public async post<T = any>(url: string, body: object = {}, config: AxiosRequestConfig = {}): Promise<ValAxios.Response<T>> {
        return await this.axios
            .post(url, body, config)
            .catch((error: AxiosError): any => {
                return this.errorHandler(error);
            })
            .then((response: AxiosResponse<T>) => {
                return this.responseHandler<T>(response);
            });
    }

    /**
     * @param {string} url URL
     * @param {object} body Body
     * @param {AxiosRequestConfig} config Axios Config
     * @returns {Promise<ValAxios.Response<T>>}
     */
    public async put<T = any>(url: string, body: object = {}, config: AxiosRequestConfig = {}): Promise<ValAxios.Response<T>> {
        return await this.axios
            .put(url, body, config)
            .catch((error: AxiosError): any => {
                return this.errorHandler(error);
            })
            .then((response: AxiosResponse<T>) => {
                return this.responseHandler<T>(response);
            });
    }

    /**
     * @param {string} url URL
     * @param {object} body Body
     * @param {AxiosRequestConfig} config Axios Config
     * @returns {Promise<ValAxios.Response<T>>}
     */
    public async patch<T = any>(url: string, body: object = {}, config: AxiosRequestConfig = {}): Promise<ValAxios.Response<T>> {
        return await this.axios
            .patch(url, body, config)
            .catch((error: AxiosError): any => {
                return this.errorHandler(error);
            })
            .then((response: AxiosResponse<T>) => {
                return this.responseHandler<T>(response);
            });
    }

    /**
     * @param {string} url URL
     * @param {AxiosRequestConfig} config Axios Config
     * @returns {Promise<ValAxios.Response<T>>}
     */
    public async delete<T = any>(url: string, config: AxiosRequestConfig = {}): Promise<ValAxios.Response<T>> {
        return await this.axios
            .delete(url, config)
            .catch((error: AxiosError): any => {
                return this.errorHandler(error);
            })
            .then((response: AxiosResponse<T>) => {
                return this.responseHandler<T>(response);
            });
    }
}
