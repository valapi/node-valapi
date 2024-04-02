import axios from "axios";
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

export namespace ValorantApiCom {
    /**
     * All Language Available
     */
    export type Language = Exclude<Locale.ID, "en-GB"> | "all";

    export interface Config<L extends ValorantApiCom.Language> {
        /**
         * Language
         */
        language?: L;
        /**
         * Request Config
         */
        axiosConfig?: CreateAxiosDefaults;
        /**
         * Response Option
         */
        responseOptions?: {
            /**
             * Delete properties that have a `null` value
             */
            ignore_null?: boolean;
        };
    }
}

/**
 * Third-Party API by Officer
 *
 * https://valorant-api.com
 */
export class ValorantApiCom<L extends ValorantApiCom.Language> {
    private static readonly DEFAULT_config: Required<ValorantApiCom.Config<any>> = {
        language: Locale.Default.English_United_States,
        axiosConfig: {},
        responseOptions: {
            ignore_null: true
        }
    };
    public static readonly Default = {
        config: ValorantApiCom.DEFAULT_config
    };

    public readonly config: Required<ValorantApiCom.Config<L>>;
    protected readonly axios: AxiosInstance;

    /**
     *
     * @param {ValorantApiCom.Config<L>} config Config
     */
    public constructor(config: ValorantApiCom.Config<L> = {}) {
        this.config = {
            ...ValorantApiCom.Default.config,
            ...config,
            ...{
                axiosConfig: {
                    ...ValorantApiCom.Default.config.axiosConfig,
                    ...config.axiosConfig,
                    ...{
                        baseURL: "https://valorant-api.com/v1",
                        params: {
                            ...ValorantApiCom.Default.config.axiosConfig.params,
                            ...config.axiosConfig?.params,
                            ...{
                                language: config.language || ValorantApiCom.Default.config.language,
                                responseOptions: config.responseOptions && config.responseOptions.ignore_null ? "ignore_null" : ""
                            }
                        }
                    }
                },
                responseOptions: {
                    ...ValorantApiCom.Default.config.responseOptions,
                    ...config.responseOptions
                }
            }
        };

        this.axios = axios.create(this.config.axiosConfig);
    }

    public get request() {
        return this.axios.request;
    }

    public get Agents(): Agents<L> {
        return new Agents<L>(this.axios);
    }

    public get Buddies(): Buddies<L> {
        return new Buddies<L>(this.axios);
    }

    public get Bundles(): Bundles<L> {
        return new Bundles<L>(this.axios);
    }

    public get Ceremonies(): Ceremonies<L> {
        return new Ceremonies<L>(this.axios);
    }

    public get CompetitiveTiers(): CompetitiveTiers<L> {
        return new CompetitiveTiers<L>(this.axios);
    }

    public get ContentTiers(): ContentTiers<L> {
        return new ContentTiers<L>(this.axios);
    }

    public get Contracts(): Contracts<L> {
        return new Contracts<L>(this.axios);
    }

    public get Currencies(): Currencies<L> {
        return new Currencies<L>(this.axios);
    }

    public get Events(): Events<L> {
        return new Events<L>(this.axios);
    }

    public get Gamemodes(): Gamemodes<L> {
        return new Gamemodes<L>(this.axios);
    }

    public get Gear(): Gear<L> {
        return new Gear<L>(this.axios);
    }

    public get LevelBorders(): LevelBorders {
        return new LevelBorders(this.axios);
    }

    public get Maps(): Maps<L> {
        return new Maps<L>(this.axios);
    }

    public get Missions(): Missions {
        return new Missions(this.axios);
    }

    public get Objectives(): Objectives {
        return new Objectives(this.axios);
    }

    public get PlayerCards(): PlayerCards<L> {
        return new PlayerCards<L>(this.axios);
    }

    public get PlayerTitles(): PlayerTitles<L> {
        return new PlayerTitles<L>(this.axios);
    }

    public get Seasons(): Seasons<L> {
        return new Seasons<L>(this.axios);
    }

    public get Sprays(): Sprays<L> {
        return new Sprays<L>(this.axios);
    }

    public get Themes(): Themes<L> {
        return new Themes<L>(this.axios);
    }

    public get Version(): Version {
        return new Version(this.axios);
    }

    public get Weapons(): Weapons<L> {
        return new Weapons<L>(this.axios);
    }
}
