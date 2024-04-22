import type { Agent } from "node:https";

import axios, { AxiosHeaders } from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpsCookieAgent } from "http-cookie-agent/http";
import type { CookieAgent } from "http-cookie-agent/http";
import type { CookieJar } from "tough-cookie";

import { ValEncryption } from "@valapi/lib";

export type AuthPromiseResponse<T> = Promise<AuthResponse<T>>;
export type AuthResponse<T> = AxiosResponse<T>;

export interface AuthRequestPlatfrom {
    platformType: string;
    platformOS: string;
    platformOSVersion: string;
    platformChipset: string;
}

export interface AuthRequestConfig {
    userAgent?: string;
    version?: string;
    platform?: AuthRequestPlatfrom;
    axiosConfig?: AxiosRequestConfig;
    cookie: CookieJar;
}

export class AuthRequest {
    public headers: AxiosHeaders;
    public agent: CookieAgent<Agent>;

    public readonly defaultAxiosConfig: AxiosRequestConfig;

    constructor(config: AuthRequestConfig) {
        const requestConfig = <Required<AuthRequestConfig>>{
            ...{
                userAgent: "RiotClient/53.0.0.4494832.4470164 %s (Windows;10;;Professional, x64)",
                version: "release-08.07-shipping-9-2444158",
                platform: {
                    platformType: "PC",
                    platformOS: "Windows",
                    platformOSVersion: "10.0.19043.1.256.64bit",
                    platformChipset: "Unknown"
                }
            },
            ...config
        };

        this.defaultAxiosConfig = requestConfig.axiosConfig;

        this.headers = new AxiosHeaders()
            .setContentType("application/json")
            .setUserAgent(requestConfig.userAgent)
            .set({
                "X-Riot-ClientVersion": requestConfig.version,
                "X-Riot-ClientPlatform": ValEncryption.encryptJson(requestConfig.platform)
            });

        this.agent = new HttpsCookieAgent({
            cookies: {
                jar: requestConfig.cookie
            },
            keepAlive: true,
            ciphers: [
                "TLS_AES_128_GCM_SHA256",
                "TLS_CHACHA20_POLY1305_SHA256",
                "TLS_AES_256_GCM_SHA384",
                "TLS_AES_128_CCM_SHA256",
                "TLS_AES_128_CCM_8_SHA256",
                "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
            ].join(":"),
            honorCipherOrder: true,
            minVersion: "TLSv1.2",
            maxVersion: "TLSv1.3",
            rejectUnauthorized: false
        });
    }

    private get axiosConfig(): AxiosRequestConfig {
        return {
            ...this.defaultAxiosConfig,
            ...{
                httpsAgent: this.agent,
                headers: this.headers
            }
        };
    }

    public get<T>(url: string) {
        return axios.get<T>(url, this.axiosConfig);
    }

    public post<T>(url: string, data: any = {}) {
        return axios.post<T>(url, data, this.axiosConfig);
    }

    public put<T>(url: string, data: any = {}) {
        return axios.put<T>(url, data, this.axiosConfig);
    }

    public delete<T>(url: string) {
        return axios.delete<T>(url, this.axiosConfig);
    }
}
