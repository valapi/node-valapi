import type { AxiosResponse } from "axios";

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
     * @returns {Promise<AxiosResponse<any>>}
     */
    public getEligibility(): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/player/eligibility`);
    }

    /**
     * @returns {Promise<AxiosResponse<Premier.Conferences>>}
     */
    public getPremierConferences(): Promise<AxiosResponse<Premier.Conferences>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/affinities/${this.apiRegion.id}/conferences`);
    }

    /**
     * @returns {Promise<AxiosResponse<Premier.Seasons>>}
     */
    public fetchPremierSeasons(): Promise<AxiosResponse<Premier.Seasons>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/affinities/${this.apiRegion.id}/premier-seasons`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @returns {Promise<AxiosResponse<any>>}
     */
    public getActivePremierSeason(): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/affinities/${this.apiRegion.id}/premier-seasons/active`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} realm Realm
     * @param {string} rosterId Roster ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public getMUCToken(realm: string, rosterId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}/muctoken`);
    }

    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<Premier.Player>>}
     */
    public getPlayer(subject: string): Promise<AxiosResponse<Premier.Player>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v2/players/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public GetRosterV1(rosterId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/rosters/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public GetRosterV2(rosterId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v2/rosters/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} realm Realm
     * @param {string} rosterId Roster ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public getRosterByProxy(realm: string, rosterId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @param {Premier.RosterCustomization} rosterCustomization Roster Customization
     * @returns {Promise<AxiosResponse<any>>}
     */
    public setPremierRosterCustomization(rosterId: string, rosterCustomization: Premier.RosterCustomization): Promise<AxiosResponse<any>> {
        return this.axios.put(`${this.apiRegion.url.playerData}/premier/v1/rosters/${rosterId}/customization`, rosterCustomization);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} realm Realm
     * @param {string} rosterId Roster ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public deleteRosterByProxy(realm: string, rosterId: string): Promise<AxiosResponse<any>> {
        return this.axios.delete(`${this.apiRegion.url.playerData}/premier/v1/rsp/rosters/v1/${realm}/roster/${rosterId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @param {string} conferenceId Conference ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public rosterEnroll(rosterId: string, conferenceId: string): Promise<AxiosResponse<any>> {
        return this.axios.put(`${this.apiRegion.url.playerData}/premier/v1/rosters/${rosterId}/enroll`, {
            id: conferenceId
        });
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public createInvite(rosterId: string, subject: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.playerData}/premier/v2/rosters/${rosterId}/invites/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public getPremierRosterMatchHistory(rosterId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/premier/v1/rosters/${rosterId}/matchhistory`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} rosterId Roster ID
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public acceptInvite(rosterId: string, subject: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.playerData}/premier/v2/rosters/${rosterId}/invites/${subject}/accept`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public makePremierGame(partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/makePremierGame`, {});
    }
}
