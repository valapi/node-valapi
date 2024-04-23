import axios, { AxiosHeaders } from "axios";
import type { AxiosInstance, CreateAxiosDefaults } from "axios";

import { Locale } from "@valapi/lib";

import { Agents } from "../service/Agents";
import { Buddies } from "../service/Buddies";
import { Bundles } from "../service/Bundles";
import { Ceremonies } from "../service/Ceremonies";
import { CompetitiveTiers } from "../service/CompetitiveTiers";
import { ContentTiers } from "../service/ContentTiers";
import { Contracts } from "../service/Contracts";
import { Currencies } from "../service/Currencies";
import { Events } from "../service/Events";
import { Gamemodes } from "../service/Gamemodes";
import { Gear } from "../service/Gear";
import { LevelBorders } from "../service/LevelBorders";
import { Maps } from "../service/Maps";
import { Missions } from "../service/Missions";
import { Objectives } from "../service/Objectives";
import { PlayerCards } from "../service/PlayerCards";
import { PlayerTitles } from "../service/PlayerTitles";
import { Seasons } from "../service/Seasons";
import { Sprays } from "../service/Sprays";
import { Themes } from "../service/Themes";
import { Version } from "../service/Version";
import { Weapons } from "../service/Weapons";

export type Language = Exclude<Locale.ID, "en-GB"> | "all";

export interface Config<L extends Language> {
    language?: L;
    axiosConfig?: CreateAxiosDefaults;
    responseOptions?: {
        /**
         * Delete properties that have a `null` value
         */
        ignore_null?: boolean;
    };
}

/**
 * Third-Party API by Officer
 *
 * https://valorant-api.com
 */
export class ValorantApiCom<L extends Language> {
    protected readonly request: AxiosInstance;

    public constructor(config: Config<L> = {}) {
        const headers = new AxiosHeaders();
        headers.setContentType("application/json");

        this.request = axios.create({
            ...config.axiosConfig,
            ...{
                baseURL: "https://valorant-api.com/v1",
                headers: {
                    ...config.axiosConfig?.headers,
                    ...headers.toJSON()
                },
                params: {
                    ...config.axiosConfig?.params,
                    ...{
                        language: config.language,
                        responseOptions: config.responseOptions
                            ? Object.entries(config.responseOptions)
                                  .filter(x => x[1])
                                  .map(x => x[0])
                                  .join(" ")
                            : undefined
                    }
                }
            }
        });
    }

    public get Agents(): Agents<L> {
        return new Agents<L>(this.request);
    }

    public get Buddies(): Buddies<L> {
        return new Buddies<L>(this.request);
    }

    public get Bundles(): Bundles<L> {
        return new Bundles<L>(this.request);
    }

    public get Ceremonies(): Ceremonies<L> {
        return new Ceremonies<L>(this.request);
    }

    public get CompetitiveTiers(): CompetitiveTiers<L> {
        return new CompetitiveTiers<L>(this.request);
    }

    public get ContentTiers(): ContentTiers<L> {
        return new ContentTiers<L>(this.request);
    }

    public get Contracts(): Contracts<L> {
        return new Contracts<L>(this.request);
    }

    public get Currencies(): Currencies<L> {
        return new Currencies<L>(this.request);
    }

    public get Events(): Events<L> {
        return new Events<L>(this.request);
    }

    public get Gamemodes(): Gamemodes<L> {
        return new Gamemodes<L>(this.request);
    }

    public get Gear(): Gear<L> {
        return new Gear<L>(this.request);
    }

    public get LevelBorders(): LevelBorders<L> {
        return new LevelBorders<L>(this.request);
    }

    public get Maps(): Maps<L> {
        return new Maps<L>(this.request);
    }

    public get Missions(): Missions {
        return new Missions(this.request);
    }

    public get Objectives(): Objectives {
        return new Objectives(this.request);
    }

    public get PlayerCards(): PlayerCards<L> {
        return new PlayerCards<L>(this.request);
    }

    public get PlayerTitles(): PlayerTitles<L> {
        return new PlayerTitles<L>(this.request);
    }

    public get Seasons(): Seasons<L> {
        return new Seasons<L>(this.request);
    }

    public get Sprays(): Sprays<L> {
        return new Sprays<L>(this.request);
    }

    public get Themes(): Themes<L> {
        return new Themes<L>(this.request);
    }

    public get Version(): Version {
        return new Version(this.request);
    }

    public get Weapons(): Weapons<L> {
        return new Weapons<L>(this.request);
    }
}
