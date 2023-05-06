import type { ValAxios } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace Favorites {
    // response

    export interface Favorite {
        Subject: string;
        FavoritedContent: Record<
            string,
            {
                FavoriteID: string;
                ItemID: string;
            }
        >;
    }
}

export class Favorites extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<Favorites.Favorite>>}
     */
    public async get(subject: string): Promise<ValAxios.Response<Favorites.Favorite>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/favorites/v1/players/${subject}/favorites`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} itemId Item ID
     * @returns {Promise<ValAxios.Response<Favorites.Favorite>>}
     */
    public async add(subject: string, itemId: string): Promise<ValAxios.Response<Favorites.Favorite>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/favorites/v1/players/${subject}/favorites`, {
            ItemID: itemId
        });
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} itemId Item ID
     * @returns {Promise<ValAxios.Response<Favorites.Favorite>>}
     */
    public async remove(subject: string, itemId: string): Promise<ValAxios.Response<Favorites.Favorite>> {
        return await this.axios.delete(`${this.apiRegion.url.playerData}/favorites/v1/players/${subject}/favorites/${itemId}`);
    }
}
