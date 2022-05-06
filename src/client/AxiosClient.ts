//import
import axios, { type Axios, type AxiosError, type AxiosRequestConfig } from 'axios';
import type { CookieJar } from 'tough-cookie';

import { Logs } from '@ing3kth/core';

import type { IAxiosClient } from "../resources/interface/IAxiosClient";
import { HttpsCookieAgent, HttpCookieAgent } from 'http-cookie-agent';

//update
declare module 'axios' {
    interface AxiosRequestConfig {
      jar?: CookieJar;
    }
}

//class
class AxiosClient {
    classId:string;
    axiosClient: Axios;

    /**
    * @param {AxiosRequestConfig} config Config
    */
    constructor(config: AxiosRequestConfig = {}) {
        this.classId = '@ing3kth/core/AxiosClient';
        if(config.jar){
            const ciphers = [
                'TLS_CHACHA20_POLY1305_SHA256',
                'TLS_AES_128_GCM_SHA256',
                'TLS_AES_256_GCM_SHA384',
                'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256'
            ];

            config.httpAgent = new HttpCookieAgent({ jar: config.jar, keepAlive: true });
            config.httpsAgent = new HttpsCookieAgent({ jar: config.jar, keepAlive: true, ciphers: ciphers.join(':'), honorCipherOrder: true, minVersion: 'TLSv1.2' });

            delete config.jar;
        }

        this.axiosClient = axios.create(config);
    }

    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
     async get(url:string, config:AxiosRequestConfig = {}):Promise<IAxiosClient> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.get(url, config);
            await Logs.log(this.classId + " GET " + url, 'info');
        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " GET " + url, 'warning');
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    async post(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<IAxiosClient> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.post(url, body, config);
            await Logs.log(this.classId + " POST " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " POST " + url, 'warning');
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    async put(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<IAxiosClient> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.put(url, body, config);
            await Logs.log(this.classId + " PUT " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " PUT " + url, 'warning');
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    async patch(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<IAxiosClient> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.patch(url, body, config);
            await Logs.log(this.classId + " PATCH " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " PATCH " + url, 'warning');
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    async delete(url:string, config:AxiosRequestConfig = {}):Promise<IAxiosClient> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.delete(url, config);
            await Logs.log(this.classId + " DELETE " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " DELETE " + url, 'warning');
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {AxiosRequestConfig} config Config
    */
    static client(config:AxiosRequestConfig):Axios {
        return new AxiosClient(config).axiosClient;
    }
}

//export
export { AxiosClient };