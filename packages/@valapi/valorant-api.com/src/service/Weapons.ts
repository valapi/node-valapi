import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Weapons {
    export interface WeaponSkinChromas<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        displayIcon: string;
        fullRender: string;
        swatch: string;
        streamedVideo: string;
        assetPath: string;
    }

    export interface WeaponSkinLevels<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        levelItem: string;
        displayIcon: string;
        streamedVideo: string;
        assetPath: string;
    }

    export interface WeaponSkins<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        themeUuid: string;
        contentTierUuid: string;
        displayIcon: string;
        wallpaper: string;
        assetPath: string;
        chromas: Array<Weapons.WeaponSkinChromas<L>>;
        levels: Array<Weapons.WeaponSkinLevels<L>>;
    }

    export interface Weapons<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
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
            categoryText: ValorantApiComService.Languages<string, L>;
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

export class Weapons<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Weapons.Weapons<L>[]>> {
        return this.axios.get("/weapons");
    }

    public getSkins(): Promise<ValorantApiComService.Response<Weapons.WeaponSkins<L>[]>> {
        return this.axios.get("/weapons/skins");
    }

    public getSkinChromas(): Promise<ValorantApiComService.Response<Weapons.WeaponSkinChromas<L>[]>> {
        return this.axios.get("/weapons/skinchromas");
    }

    public getSkinLevels(): Promise<ValorantApiComService.Response<Weapons.WeaponSkinLevels<L>[]>> {
        return this.axios.get("/weapons/skinlevels");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Weapons.Weapons<L>>> {
        return this.axios.get(`/weapons/${uuid}`);
    }

    public getSkinByUuid(uuid: string): Promise<ValorantApiComService.Response<Weapons.WeaponSkins<L>>> {
        return this.axios.get(`/weapons/skins/${uuid}`);
    }

    public getSkinChromaByUuid(uuid: string): Promise<ValorantApiComService.Response<Weapons.WeaponSkinChromas<L>>> {
        return this.axios.get(`/weapons/skinchromas/${uuid}`);
    }

    public getSkinLevelByUuid(uuid: string): Promise<ValorantApiComService.Response<Weapons.WeaponSkinLevels<L>>> {
        return this.axios.get(`/weapons/skinlevels/${uuid}`);
    }
}
