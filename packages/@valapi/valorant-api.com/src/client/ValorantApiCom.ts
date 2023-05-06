import { ValAxios, Locale } from "@valapi/lib";
import type { CreateAxiosDefaults } from "axios";

import type { ValorantApiComService } from "./ValorantApiComService";

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
    export type Language = Exclude<Locale.Identify, "en-GB"> | "all";

    export namespace Response {
        /**
         * Localized Data
         */
        export type Languages<T> = T | Record<Exclude<ValorantApiCom.Language, "all">, T>;

        /**
         * Request Response
         */
        export type Data<T> = ValAxios.Response<{
            status: number;
            error?: string;
            data?: T;
        }>;
    }

    /**
     * {@link Client} Config
     */
    export interface Config {
        /**
         * Language
         */
        language?: ValorantApiCom.Language;
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
export class ValorantApiCom {
    public readonly config: Required<ValorantApiCom.Config>;
    protected readonly axios: ValAxios;

    // default

    private static readonly DEFAULT_config: Required<ValorantApiCom.Config> = {
        language: Locale.Default.English_United_States,
        axiosConfig: {},
        responseOptions: {
            ignore_null: true
        }
    };
    public static readonly Default = {
        config: ValorantApiCom.DEFAULT_config
    };

    /**
     *
     * @param {ValorantApiCom.Config} config Config
     */
    public constructor(config: ValorantApiCom.Config = {}) {
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
                                language: config.language ? config.language : ValorantApiCom.Default.config.language,
                                responseOptions: config.responseOptions && config.responseOptions.ignore_null === true ? "ignore_null" : ""
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

        this.axios = new ValAxios(this.config.axiosConfig);
    }

    // service

    /**
     *
     * @param {T} Service Custom Service
     * @returns {T}
     */
    public getService<T extends ValorantApiComService>(Service: new (axios: ValAxios) => T): T {
        return new Service(this.axios);
    }

    public get Agents(): Agents {
        return new Agents(this.axios);
    }

    public get Buddies(): Buddies {
        return new Buddies(this.axios);
    }

    public get Bundles(): Bundles {
        return new Bundles(this.axios);
    }

    public get Ceremonies(): Ceremonies {
        return new Ceremonies(this.axios);
    }

    public get CompetitiveTiers(): CompetitiveTiers {
        return new CompetitiveTiers(this.axios);
    }

    public get ContentTiers(): ContentTiers {
        return new ContentTiers(this.axios);
    }

    public get Contracts(): Contracts {
        return new Contracts(this.axios);
    }

    public get Currencies(): Currencies {
        return new Currencies(this.axios);
    }

    public get Events(): Events {
        return new Events(this.axios);
    }

    public get Gamemodes(): Gamemodes {
        return new Gamemodes(this.axios);
    }

    public get Gear(): Gear {
        return new Gear(this.axios);
    }

    public get LevelBorders(): LevelBorders {
        return new LevelBorders(this.axios);
    }

    public get Maps(): Maps {
        return new Maps(this.axios);
    }

    public get Missions(): Missions {
        return new Missions(this.axios);
    }

    public get Objectives(): Objectives {
        return new Objectives(this.axios);
    }

    public get PlayerCards(): PlayerCards {
        return new PlayerCards(this.axios);
    }

    public get PlayerTitles(): PlayerTitles {
        return new PlayerTitles(this.axios);
    }

    public get Seasons(): Seasons {
        return new Seasons(this.axios);
    }

    public get Sprays(): Sprays {
        return new Sprays(this.axios);
    }

    public get Themes(): Themes {
        return new Themes(this.axios);
    }

    public get Version(): Version {
        return new Version(this.axios);
    }

    public get Weapons(): Weapons {
        return new Weapons(this.axios);
    }
}
