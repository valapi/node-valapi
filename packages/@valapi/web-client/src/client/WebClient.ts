import axios from "axios";
import type { AxiosResponse, AxiosInstance } from "axios";
import { CookieJar } from "tough-cookie";

import type { Region, Locale } from "@valapi/lib";
import { AuthClient } from "@valapi/auth";
import type { AuthCore } from "@valapi/auth";

import { WebClientRegion } from "./WebClientRegion";

import { AccountXP } from "../service/AccountXP";
import { Config } from "../service/Config";
import { Content } from "../service/Content";
import { ContractDefinitions } from "../service/ContractDefinitions";
import { Contracts } from "../service/Contracts";
import { CoreGame } from "../service/CoreGame";
import { DailyTicket } from "../service/DailyTicket";
import { Favorites } from "../service/Favorites";
import { Latency } from "../service/Latency";
import { MassRewards } from "../service/MassRewards";
import { Match } from "../service/Match";
import { MMR } from "../service/MMR";
import { NameService } from "../service/NameService";
import { Party } from "../service/Party";
import { Personalization } from "../service/Personalization";
import { PreGame } from "../service/PreGame";
import { Premier } from "../service/Premier";
import { Restrictions } from "../service/Restrictions";
import { Session } from "../service/Session";
import { Store } from "../service/Store";

export namespace WebClient {
    export interface UserJson extends Omit<AuthCore.Json, "id_token" | "expires_in" | "token_type" | "session_state" | "createAt" | "authenticationInfo" | "region"> {
        region: Region.Identify;
    }

    export interface UserInfo {
        country: string;
        sub: string;
        email_verified: boolean;
        player_plocale: any; // * unknown
        country_at: number;
        pw: {
            cng_at: number;
            reset: boolean;
            must_reset: boolean;
        };
        phone_number_verified: boolean;
        account_verified: boolean;
        ppid: any; // * unknown
        federated_identity_details: Array<{
            provider_name: string;
            provider_environment: any; // * unknown
        }>;
        federated_identity_providers: Array<string>;
        player_locale: Locale.Identify;
        acct: {
            type: number;
            state: string;
            adm: boolean;
            game_name: string;
            tag_line: string;
            created_at: number;
        };
        age: number;
        jti: string;
        affinity: Record<string, string>;
    }
}

/**
 * API from Web Client
 */
export class WebClient extends AuthClient {
    protected get axios(): AxiosInstance {
        return axios.create(this.config.axiosConfig);
    }

    // data

    /**
     *
     * @returns {WebClient.UserJson} Account Data
     */
    public toUserJSON(): WebClient.UserJson {
        return {
            cookie: this.cookie.serializeSync(),
            access_token: this.access_token,
            entitlements_token: this.entitlements_token,
            region: this.region.live
        };
    }

    /**
     *
     * @param {WebClient.UserJson} account {@link WebClient.UserJson JSON} Account Data
     * @returns {void}
     */
    public fromUserJSON(account: WebClient.UserJson): void {
        this.cookie = CookieJar.deserializeSync(JSON.stringify(account.cookie));
        this.access_token = account.access_token;
        this.entitlements_token = account.entitlements_token;
        this.region = {
            live: account.region
        };
    }

    /**
     *
     * @param {WebClient.UserJson} account {@link WebClient.UserJson JSON} Account Data
     * @param {AuthCore.Config} config Config
     * @returns {WebClient}
     */
    public static fromUserJSON(account: WebClient.UserJson, config?: AuthCore.Config): WebClient {
        const webClient = new WebClient(config);
        webClient.fromUserJSON(account);

        return webClient;
    }

    /**
     *
     * @param {CookieJar} cookie CookieJar
     * @param {AuthCore.Config} config Config
     * @returns {Promise<WebClient>}
     */
    public static async fromCookie(cookie: CookieJar, config?: AuthCore.Config): Promise<WebClient> {
        const webClient = new WebClient(config);
        await webClient.fromCookie(cookie);

        return webClient;
    }

    /**
     *
     * @param {AuthCore.Json} account {@link AuthCore.Json JSON} Account Data
     * @param {AuthCore.Config} config Config
     * @returns {WebClient}
     */
    public static fromJSON(account: AuthCore.Json, config?: AuthCore.Config): WebClient {
        const webClient = new WebClient(config);
        webClient.fromJSON(account);

        return webClient;
    }

    /**
     * @returns {Promise<AxiosResponse<WebClient.UserInfo>>}
     */
    public getUserInfo(): Promise<AxiosResponse<WebClient.UserInfo>> {
        return this.axios.post(`https://auth.riotgames.com/userinfo`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @returns {Promise<AxiosResponse<any>>}
     */
    public getUserSettings(): Promise<AxiosResponse<any>> {
        return this.axios.get(`https://playerpreferences.riotgames.com/playerPref/v3/getPreference/Ares.PlayerSettings`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {any} data Settings Data to update
     * @returns {Promise<AxiosResponse<any>>}
     */
    public updateUserSettings(data: any): Promise<AxiosResponse<any>> {
        return this.axios.put(`https://playerpreferences.riotgames.com/playerPref/v3/getPreference`, {
            type: "Ares.PlayerSettings",
            data: data
        });
    }

    public get request() {
        return this.axios.request;
    }

    public get AccountXP(): AccountXP {
        return new AccountXP(this.axios, new WebClientRegion(this.region.live));
    }

    public get Config(): Config {
        return new Config(this.axios, new WebClientRegion(this.region.live));
    }

    public get Content(): Content {
        return new Content(this.axios, new WebClientRegion(this.region.live));
    }

    public get ContractDefinitions(): ContractDefinitions {
        return new ContractDefinitions(this.axios, new WebClientRegion(this.region.live));
    }

    public get Contracts(): Contracts {
        return new Contracts(this.axios, new WebClientRegion(this.region.live));
    }

    public get CoreGame(): CoreGame {
        return new CoreGame(this.axios, new WebClientRegion(this.region.live));
    }

    public get DailyTicket(): DailyTicket {
        return new DailyTicket(this.axios, new WebClientRegion(this.region.live));
    }

    public get Favorites(): Favorites {
        return new Favorites(this.axios, new WebClientRegion(this.region.live));
    }

    public get Latency(): Latency {
        return new Latency(this.axios, new WebClientRegion(this.region.live));
    }

    public get MassRewards(): MassRewards {
        return new MassRewards(this.axios, new WebClientRegion(this.region.live));
    }

    public get Match(): Match {
        return new Match(this.axios, new WebClientRegion(this.region.live));
    }

    public get MMR(): MMR {
        return new MMR(this.axios, new WebClientRegion(this.region.live));
    }

    public get NameService(): NameService {
        return new NameService(this.axios, new WebClientRegion(this.region.live));
    }

    public get Party(): Party {
        return new Party(this.axios, new WebClientRegion(this.region.live));
    }

    public get Personalization(): Personalization {
        return new Personalization(this.axios, new WebClientRegion(this.region.live));
    }

    public get PreGame(): PreGame {
        return new PreGame(this.axios, new WebClientRegion(this.region.live));
    }

    public get Premier(): Premier {
        return new Premier(this.axios, new WebClientRegion(this.region.live));
    }

    public get Restrictions(): Restrictions {
        return new Restrictions(this.axios, new WebClientRegion(this.region.live));
    }

    public get Session(): Session {
        return new Session(this.axios, new WebClientRegion(this.region.live));
    }

    public get Store(): Store {
        return new Store(this.axios, new WebClientRegion(this.region.live));
    }
}
