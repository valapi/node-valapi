import { type Axios, type AxiosRequestConfig } from 'axios';
import type { CookieJar } from 'tough-cookie';
import type { IAxiosClient } from "../resources/interface/IAxiosClient";
declare module 'axios' {
    interface AxiosRequestConfig {
        jar?: CookieJar;
    }
}
declare class AxiosClient {
    classId: string;
    axiosClient: Axios;
    /**
    * @param {AxiosRequestConfig} config Config
    */
    constructor(config?: AxiosRequestConfig);
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    get(url: string, config?: AxiosRequestConfig): Promise<IAxiosClient>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    post(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClient>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    put(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClient>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    patch(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClient>;
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    delete(url: string, config?: AxiosRequestConfig): Promise<IAxiosClient>;
    /**
    * @param {AxiosRequestConfig} config Config
    */
    static client(config: AxiosRequestConfig): Axios;
}
export { AxiosClient };
//# sourceMappingURL=AxiosClient.d.ts.map