import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Weapons {
    export interface WeaponSkinChromas<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        displayIcon: string;
        fullRender: string;
        swatch: string;
        streamedVideo: string;
        assetPath: string;
    }

    export interface WeaponSkinLevels<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        levelItem: string;
        displayIcon: string;
        streamedVideo: string;
        assetPath: string;
    }

    export interface WeaponSkins<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        themeUuid: string;
        contentTierUuid: string;
        displayIcon: string;
        wallpaper: string;
        assetPath: string;
        chromas: Array<Weapons.WeaponSkinChromas<L>>;
        levels: Array<Weapons.WeaponSkinLevels<L>>;
    }

    export interface Weapons<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        category: string;
        defaultSkinUuid: string;
        displayIcon: string;
        killStreamIcon: string;
        assetPath: string;
        weaponStats: {
            fireRate: number;
            magazineSize: number;
            runSpeedMultiplier: number;
            equipTimeSeconds: number;
            reloadTimeSeconds: number;
            firstBulletAccuracy: number;
            shotgunPelletCount: number;
            wallPenetration: string;
            feature: string;
            fireMode: string;
            altFireType: string;
            adsStats: {
                zoomMultiplier: number;
                fireRate: number;
                runSpeedMultiplier: number;
                burstCount: number;
                firstBulletAccuracy: number;
            };
            altShotgunStats: {
                shotgunPelletCount: number;
                burstRate: number;
            };
            airBurstStats: {
                shotgunPelletCount: number;
                burstDistance: number;
            };
            damageRanges: Array<{
                rangeStartMeters: number;
                rangeEndMeters: number;
                headDamage: number;
                bodyDamage: number;
                legDamage: number;
            }>;
        };
        shopData: {
            cost: number;
            category: string;
            shopOrderPriority: number;
            categoryText: LanguageResponse<string, L>;
            gridPosition: {
                row: number;
                column: number;
            };
            canBeTrashed: boolean;
            image: string;
            newImage: string;
            newImage2: string;
            assetPath: string;
        };
        skins: Array<Weapons.WeaponSkins<L>>;
    }
}

export class Weapons<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Weapons.Weapons<L>[]> {
        return this.request.get(`/v1/weapons`);
    }

    public getSkins(): Response<Weapons.WeaponSkins<L>[]> {
        return this.request.get(`/v1/weapons/skins`);
    }

    public getSkinChromas(): Response<Weapons.WeaponSkinChromas<L>[]> {
        return this.request.get(`/v1/weapons/skinchromas`);
    }

    public getSkinLevels(): Response<Weapons.WeaponSkinLevels<L>[]> {
        return this.request.get(`/v1/weapons/skinlevels`);
    }

    public getByUuid(uuid: string): Response<Weapons.Weapons<L>> {
        return this.request.get(`/v1/weapons/${uuid}`);
    }

    public getSkinByUuid(uuid: string): Response<Weapons.WeaponSkins<L>> {
        return this.request.get(`/v1/weapons/skins/${uuid}`);
    }

    public getSkinChromaByUuid(uuid: string): Response<Weapons.WeaponSkinChromas<L>> {
        return this.request.get(`/v1/weapons/skinchromas/${uuid}`);
    }

    public getSkinLevelByUuid(uuid: string): Response<Weapons.WeaponSkinLevels<L>> {
        return this.request.get(`/v1/weapons/skinlevels/${uuid}`);
    }
}
