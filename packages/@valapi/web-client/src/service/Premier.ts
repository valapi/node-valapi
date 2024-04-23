import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Premier {
    export interface Seasons {
        PremierSeasons: Array<any>; // * unknown
    }

    export interface Conferences {
        PremierConferences: Array<any>; // * unknown
    }

    export interface Player {
        puuid: string;
        rosterId: string;
        invites: Array<any>; // * unknown
        version: number;
        createdAt: number;
        updatedAt: number;
    }

    export interface RosterCustomization {
        /**
         * Icon ID
         */
        icon: string;
        /**
         * 0.000000 <= number <= 1.000000
         */
        primaryColor: `(R=${number},G=${number},B=${number},A=${number})`;
        /**
         * 0.000000 <= number <= 1.000000
         */
        secondaryColor: `(R=${number},G=${number},B=${number},A=${number})`;
        /**
         * 0.000000 <= number <= 1.000000
         */
        tertiaryColor: `(R=${number},G=${number},B=${number},A=${number})`;
    }
}

export class Premier extends WebClientService {
    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public getEligibility(): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v1/player/eligibility`);
    }

    public getPremierConferences(): PromiseResponse<Premier.Conferences> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v1/affinities/${this.regionURL.id}/conferences`);
    }

    public fetchPremierSeasons(): PromiseResponse<Premier.Seasons> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v1/affinities/${this.regionURL.id}/premier-seasons`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public getActivePremierSeason(): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v1/affinities/${this.regionURL.id}/premier-seasons/active`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public getMUCToken(realm: string, rosterId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}/muctoken`);
    }

    public getPlayer(subject: string): PromiseResponse<Premier.Player> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v2/players/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public GetRosterV1(rosterId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v1/rosters/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public GetRosterV2(rosterId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v2/rosters/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public getRosterByProxy(realm: string, rosterId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public setPremierRosterCustomization(rosterId: string, rosterCustomization: Premier.RosterCustomization): PromiseResponse<any> {
        return this.request.put(`${this.regionURL.url.playerData}/premier/v1/rosters/${rosterId}/customization`, rosterCustomization);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public deleteRosterByProxy(realm: string, rosterId: string): PromiseResponse<any> {
        return this.request.delete(`${this.regionURL.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public rosterEnroll(rosterId: string, conferenceId: string): PromiseResponse<any> {
        return this.request.put(`${this.regionURL.url.playerData}/premier/v1/rosters/${rosterId}/enroll`, {
            id: conferenceId
        });
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public createInvite(rosterId: string, subject: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.playerData}/premier/v2/rosters/${rosterId}/invites/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public getPremierRosterMatchHistory(rosterId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/premier/v1/rosters/${rosterId}/matchhistory`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public acceptInvite(rosterId: string, subject: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.playerData}/premier/v2/rosters/${rosterId}/invites/${subject}/accept`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public makePremierGame(partyId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/makePremierGame`, {});
    }
}
