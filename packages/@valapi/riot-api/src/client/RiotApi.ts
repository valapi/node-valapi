import { Region, ValAxios } from "@valapi/lib";
import type { CreateAxiosDefaults } from "axios";

import { RiotApiRegion } from "./RiotApiRegion";
import type { RiotApiService } from "./RiotApiService";

import { AccountV1 } from "../service/AccountV1";
import { ContentV1 } from "../service/ContentV1";
import { MatchV1 } from "../service/MatchV1";
import { RankedV1 } from "../service/RankedV1";
import { StatusV1 } from "../service/StatusV1";

export namespace RiotApi {
    /**
     * {@link Client} Config
     */
    export interface Config {
        /**
         * API Key
         */
        apiKey: string;
        /**
         * Region
         */
        region: Region.Identify;
        /**
         * Request Config
         */
        axiosConfig?: CreateAxiosDefaults;
    }
}

/**
 * Official Api From Riot Games
 */
export class RiotApi {
    public readonly config: Required<RiotApi.Config>;
    protected readonly axios: ValAxios;

    public readonly createAt: number = Date.now();

    // default

    private static readonly DEFAULT_config: Required<RiotApi.Config> = {
        apiKey: "",
        region: Region.Default.North_America,
        axiosConfig: {}
    };
    public static readonly Default = {
        config: RiotApi.DEFAULT_config
    };

    /**
     *
     * @param {RiotApi.Config} config Config
     */
    public constructor(config: RiotApi.Config) {
        this.config = {
            ...RiotApi.Default.config,
            ...config,
            ...{
                axiosConfig: {
                    ...RiotApi.Default.config.axiosConfig,
                    ...config.axiosConfig,
                    ...{
                        headers: {
                            ...RiotApi.Default.config.axiosConfig.headers,
                            ...config.axiosConfig?.headers,
                            ...{
                                "X-Riot-Token": `${config.apiKey}`
                            }
                        }
                    }
                }
            }
        };

        this.axios = new ValAxios(this.config.axiosConfig);
    }

    // service

    /**
     *
     * @param {T} Service Custom Service
     * @returns {T}
     */
    public getService<T extends RiotApiService>(Service: new (axios: ValAxios, apiRegion: RiotApiRegion) => T): T {
        return new Service(this.axios, new RiotApiRegion(this.config.region));
    }

    public get AccountV1(): AccountV1 {
        return new AccountV1(this.axios, new RiotApiRegion(this.config.region));
    }

    public get ContentV1(): ContentV1 {
        return new ContentV1(this.axios, new RiotApiRegion(this.config.region));
    }

    public get MatchV1(): MatchV1 {
        return new MatchV1(this.axios, new RiotApiRegion(this.config.region));
    }

    public get RankedV1(): RankedV1 {
        return new RankedV1(this.axios, new RiotApiRegion(this.config.region));
    }

    public get StatusV1(): StatusV1 {
        return new StatusV1(this.axios, new RiotApiRegion(this.config.region));
    }
}
