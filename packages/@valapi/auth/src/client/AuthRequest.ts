import { createSecureContext, type SecureContextOptions } from "node:tls";
import type { Agent, AgentOptions } from "node:https";

import axios, { AxiosHeaders } from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import { HttpsCookieAgent } from "http-cookie-agent/http";
import type { CookieAgent, CookieAgentOptions } from "http-cookie-agent/http";
import type { CookieJar } from "tough-cookie";
import * as selfsigned from "selfsigned";

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
    build?: string;
    version?: string;
    platform?: ClientPlatfrom;
    axiosConfig?: AxiosRequestConfig;
    agentConfig?: AgentOptions & CookieAgentOptions;
    cookie: CookieJar;
}

export class AuthRequest {
    public readonly certificate: selfsigned.GenerateResult;

    public readonly headers: AxiosHeaders;
    public readonly agent: CookieAgent<Agent>;

    readonly defaultAxiosConfig: AxiosRequestConfig;

    constructor(config: RequestConfig) {
        const __config = <Required<RequestConfig>>{
            ...{
                build: "91.0.2.1870.3774", // GET https://valorant-api.com/v1/version["data"]["riotClientBuild"]
                version: "release-09.00-shipping-28-2628993", // GET https://valorant-api.com/v1/version["data"]["riotClientVersion"]
                platform: {
                    platformType: "PC",
                    platformOS: "Windows",
                    platformOSVersion: "10.0.19043.1.256.64bit",
                    platformChipset: "Unknown"
                },
                axiosConfig: {
                    withCredentials: true
                }
            },
            ...config
        };

        this.defaultAxiosConfig = __config.axiosConfig;

        this.certificate = selfsigned.generate([], {
            days: 30,
            pkcs7: true,
            clientCertificate: true,
            clientCertificateCN: ValEncryption.randomString(16)
        });

        this.headers = new AxiosHeaders()
            .setContentType("application/json")
            .setAccept("application/json")
            .setUserAgent(AuthRequest.newUserAgent(__config.build, "rso-auth"))
            .set({
                "X-Riot-ClientVersion": __config.version,
                "X-Riot-ClientPlatform": ValEncryption.encryptJson(__config.platform)
            });

        const ctx_options: SecureContextOptions = {
            cert: this.certificate.cert,
            sigalgs: [
                "ecdsa_secp256r1_sha256",
                "rsa_pss_rsae_sha256",
                "rsa_pkcs1_sha256",
                "ecdsa_secp384r1_sha384",
                "rsa_pss_rsae_sha384",
                "rsa_pkcs1_sha384",
                "rsa_pss_rsae_sha512",
                "rsa_pkcs1_sha512",
                "rsa_pkcs1_sha1"
            ].join(":"),
            ciphers: [
                "TLS_AES_128_GCM_SHA256",
                "TLS_CHACHA20_POLY1305_SHA256",
                "TLS_AES_256_GCM_SHA384",
                "TLS_AES_128_CCM_SHA256",
                "TLS_AES_128_CCM_8_SHA256",
                "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
            ].join(":"),
            honorCipherOrder: true,
            key: this.certificate.private,
            maxVersion: "TLSv1.3",
            minVersion: "TLSv1.2"
        };

        this.agent = new HttpsCookieAgent({
            ...__config.agentConfig,
            ...ctx_options,
            ...{
                // #TcpSocketConnectOpts
                keepAlive: true,

                // #CommonConnectionOptions
                requestCert: false,
                secureContext: createSecureContext(ctx_options),
                rejectUnauthorized: false,

                // #CookieAgentOptions
                cookies: {
                    jar: __config.cookie
                }
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

    public static newUserAgent(build: string, app: string = "%s", os: string = "Windows;10;;Professional, x64"): string {
        return `RiotClient/${build} ${app} (${os})`;
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
