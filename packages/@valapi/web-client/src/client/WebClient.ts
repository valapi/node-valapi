import type { AxiosInstance } from "axios";

import { ValError } from "@valapi/lib";
import type { Region, Locale } from "@valapi/lib";
import { Auth } from "@valapi/auth";
import type { Config as AuthConfig, PromiseResponse } from "@valapi/auth";

import { WebClientRegionURL } from "./WebClientRegionURL";

import { AccountXP } from "../service/AccountXP";
import { Configuration } from "../service/Configuration";
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

export interface Config extends Omit<AuthConfig, "user"> {
    user: NonNullable<AuthConfig["user"]>;
    region: Region.ID;
}

export interface UserInfoResponse {
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
    player_locale: Locale.ID;
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

/**
 * API from Web Client
 */
export class WebClient {
    protected readonly request: AxiosInstance;
    protected readonly regionURL: WebClientRegionURL;

    public readonly subject: string;

    public constructor(config: Config) {
        const auth = new Auth(config);

        if (!auth.isAuthenticated) {
            throw new ValError({
                name: "WebClient_Constructor_Error",
                message: `user is not authenticated`,
                data: config.user
            });
        }

        this.request = auth.request.create();
        this.regionURL = new WebClientRegionURL(config.region);

        this.subject = auth.subject;
    }

    public getUserInfo(): PromiseResponse<UserInfoResponse> {
        return this.request.post(`https://auth.riotgames.com/userinfo`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public getUserSettings(): PromiseResponse<any> {
        return this.request.get(`https://playerpreferences.riotgames.com/playerPref/v3/getPreference/Ares.PlayerSettings`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public updateUserSettings(data: any): PromiseResponse<any> {
        return this.request.put(`https://playerpreferences.riotgames.com/playerPref/v3/getPreference`, {
            type: "Ares.PlayerSettings",
            data: data
        });
    }

    public get AccountXP(): AccountXP {
        return new AccountXP(this.request, this.regionURL);
    }

    public get Configuration(): Configuration {
        return new Configuration(this.request, this.regionURL);
    }

    public get Content(): Content {
        return new Content(this.request, this.regionURL);
    }

    public get ContractDefinitions(): ContractDefinitions {
        return new ContractDefinitions(this.request, this.regionURL);
    }

    public get Contracts(): Contracts {
        return new Contracts(this.request, this.regionURL);
    }

    public get CoreGame(): CoreGame {
        return new CoreGame(this.request, this.regionURL);
    }

    public get DailyTicket(): DailyTicket {
        return new DailyTicket(this.request, this.regionURL);
    }

    public get Favorites(): Favorites {
        return new Favorites(this.request, this.regionURL);
    }

    public get Latency(): Latency {
        return new Latency(this.request, this.regionURL);
    }

    public get MassRewards(): MassRewards {
        return new MassRewards(this.request, this.regionURL);
    }

    public get Match(): Match {
        return new Match(this.request, this.regionURL);
    }

    public get MMR(): MMR {
        return new MMR(this.request, this.regionURL);
    }

    public get NameService(): NameService {
        return new NameService(this.request, this.regionURL);
    }

    public get Party(): Party {
        return new Party(this.request, this.regionURL);
    }

    public get Personalization(): Personalization {
        return new Personalization(this.request, this.regionURL);
    }

    public get PreGame(): PreGame {
        return new PreGame(this.request, this.regionURL);
    }

    public get Premier(): Premier {
        return new Premier(this.request, this.regionURL);
    }

    public get Restrictions(): Restrictions {
        return new Restrictions(this.request, this.regionURL);
    }

    public get Session(): Session {
        return new Session(this.request, this.regionURL);
    }

    public get Store(): Store {
        return new Store(this.request, this.regionURL);
    }
}
