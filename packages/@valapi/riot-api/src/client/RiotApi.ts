import axios, { AxiosHeaders } from "axios";
import type { AxiosInstance, CreateAxiosDefaults } from "axios";

import type { Region } from "@valapi/lib";

import { RiotApiRegionURL } from "./RiotApiRegionURL";

import { AccountV1 } from "../service/AccountV1";
import { ContentV1 } from "../service/ContentV1";
import { MatchV1 } from "../service/MatchV1";
import { RankedV1 } from "../service/RankedV1";
import { StatusV1 } from "../service/StatusV1";

export interface Config {
    apiKey: string;
    region: Region.ID;
    axiosConfig?: CreateAxiosDefaults;
}

/**
 * Official Api From Riot Games
 */
export class RiotApi {
    public readonly request: AxiosInstance;
    public readonly regionURL: RiotApiRegionURL;

    public constructor(config: Config) {
        const headers = new AxiosHeaders();
        headers.setContentType("application/json");
        headers.set("X-Riot-Token", config.apiKey);

        this.request = axios.create({
            ...config.axiosConfig,
            ...{
                headers: {
                    ...config.axiosConfig?.headers,
                    ...headers.toJSON()
                }
            }
        });

        this.regionURL = new RiotApiRegionURL(config.region);
    }

    public get AccountV1(): AccountV1 {
        return new AccountV1(this.request, this.regionURL);
    }

    public get ContentV1(): ContentV1 {
        return new ContentV1(this.request, this.regionURL);
    }

    public get MatchV1(): MatchV1 {
        return new MatchV1(this.request, this.regionURL);
    }

    public get RankedV1(): RankedV1 {
        return new RankedV1(this.request, this.regionURL);
    }

    public get StatusV1(): StatusV1 {
        return new StatusV1(this.request, this.regionURL);
    }
}
