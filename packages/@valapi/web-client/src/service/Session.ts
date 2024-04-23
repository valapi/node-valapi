import type { PromiseResponse, ClientPlatfrom } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Session {
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
        clientPlatformInfo: ClientPlatfrom;
        connectionTime: Date;
        shouldForceInvalidate: boolean;
    }

    export interface Reconnect {
        reconnect: boolean;
    }
}

export class Session extends WebClientService {
    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public connect(subject: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/session/v2/sessions/${subject}/connect`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public heartbeat(subject: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/session/v1/sessions/${subject}/heartbeat`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public disconnect(subject: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/session/v1/sessions/${subject}/disconnect`);
    }

    public get(subject: string): PromiseResponse<Session.Session> {
        return this.request.get(`${this.regionURL.url.partyService}/session/v1/sessions/${subject}`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     */
    public reconnect(subject: string): PromiseResponse<Session.Reconnect> {
        return this.request.get(`${this.regionURL.url.partyService}/session/v1/sessions/${subject}/reconnect`);
    }
}
