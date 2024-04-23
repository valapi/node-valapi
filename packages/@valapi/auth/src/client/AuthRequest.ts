import type { Agent, AgentOptions } from "node:https";

import axios, { AxiosHeaders } from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import { HttpsCookieAgent } from "http-cookie-agent/http";
import type { CookieAgent, CookieAgentOptions } from "http-cookie-agent/http";
import type { CookieJar } from "tough-cookie";

import { ValEncryption } from "@valapi/lib";

export type PromiseResponse<T> = Promise<Response<T>>;
export type Response<T> = AxiosResponse<T>;

export interface ClientPlatfrom {
    platformType: string;
    platformOS: string;
    platformOSVersion: string;
    platformChipset: string;
}

export interface RequestConfig {
    userAgent?: string;
    version?: string;
    platform?: ClientPlatfrom;
    axiosConfig?: AxiosRequestConfig;
    agentConfig?: AgentOptions & CookieAgentOptions;
    cookie: CookieJar;
}

export class AuthRequest {
    public readonly headers: AxiosHeaders;
    public readonly agent: CookieAgent<Agent>;

    public readonly defaultAxiosConfig: AxiosRequestConfig;

    constructor(config: RequestConfig) {
        const requestConfig = {
            ...{
                userAgent: "RiotClient/53.0.0.4494832.4470164 %s (Windows;10;;Professional, x64)",
                version: "release-08.07-shipping-9-2444158",
                platform: {
                    platformType: "PC",
                    platformOS: "Windows",
                    platformOSVersion: "10.0.19043.1.256.64bit",
                    platformChipset: "Unknown"
                },
                axiosConfig: {}
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
            ...requestConfig.agentConfig,
            ...{
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
            }
        });
    }

    private get axiosConfig(): AxiosRequestConfig {
        return {
            ...this.defaultAxiosConfig,
            ...{
                httpsAgent: this.agent,
                headers: {
                    ...this.defaultAxiosConfig.headers,
                    ...this.headers.toJSON()
                }
            }
        };
    }

    public create(): AxiosInstance {
        return axios.create(this.axiosConfig);
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
