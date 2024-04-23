import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Favorites {
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
    public get(subject: string): PromiseResponse<Favorites.Favorite> {
        return this.request.get(`${this.regionURL.url.playerData}/favorites/v1/players/${subject}/favorites`);
    }

    public add(subject: string, itemId: string): PromiseResponse<Favorites.Favorite> {
        return this.request.post(`${this.regionURL.url.playerData}/favorites/v1/players/${subject}/favorites`, {
            ItemID: itemId
        });
    }

    public remove(subject: string, itemId: string): PromiseResponse<Favorites.Favorite> {
        return this.request.delete(`${this.regionURL.url.playerData}/favorites/v1/players/${subject}/favorites/${itemId}`);
    }
}
