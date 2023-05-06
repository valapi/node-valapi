import type { ValAxios } from "@valapi/lib";
import type { AuthCore } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Session {
    // response

    export interface Session {
        subject: string;
        cxnState: string;
        clientID: string;
        clientVersion: string;
        loopState: string;
        loopStateMetadata: string;
        version: number;
        lastHeartbeatTime: Date;
        expiredTime: Date;
        heartbeatIntervalMillis: number;
        playtimeNotification: string;
        playtimeMinutes: number;
        isRestricted: boolean;
        userinfoValidTime: Date;
        restrictionType: string;
        clientPlatformInfo: AuthCore.ClientPlatfrom;
    }

    export interface Reconnect {
        reconnect: boolean;
    }
}

export class Session extends WebClientService {
    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async connect(subject: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/session/v2/sessions/${subject}/connect`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async heartbeat(subject: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/session/v1/sessions/${subject}/heartbeat`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async disconnect(subject: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/session/v1/sessions/${subject}/disconnect`);
    }

    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<Session.Session>>}
     */
    public async get(subject: string): Promise<ValAxios.Response<Session.Session>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/session/v1/sessions/${subject}`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<Session.Reconnect>>}
     */
    public async reconnect(subject: string): Promise<ValAxios.Response<Session.Reconnect>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/session/v1/sessions/${subject}/reconnect`);
    }
}
