import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Weapons {
    export interface WeaponSkinChromas {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        displayIcon: string;
        fullRender: string;
        swatch: string;
        streamedVideo: string;
        assetPath: string;
    }

    export interface WeaponSkinLevels {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        levelItem: string;
        displayIcon: string;
        streamedVideo: string;
        assetPath: string;
    }

    export interface WeaponSkins {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        themeUuid: string;
        contentTierUuid: string;
        displayIcon: string;
        wallpaper: string;
        assetPath: string;
        chromas: Array<Weapons.WeaponSkinChromas>;
        levels: Array<Weapons.WeaponSkinLevels>;
    }

    export interface Weapons {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
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
            categoryText: ValorantApiCom.Response.Languages<string>; // localized
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
        skins: Array<Weapons.WeaponSkins>;
    }
}

export class Weapons extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<Weapons.Weapons[]>> {
        return this.axios.get("/weapons");
    }

    public getSkins(): Promise<ValorantApiCom.Response.Data<Weapons.WeaponSkins[]>> {
        return this.axios.get("/weapons/skins");
    }

    public getSkinChromas(): Promise<ValorantApiCom.Response.Data<Weapons.WeaponSkinChromas[]>> {
        return this.axios.get("/weapons/skinchromas");
    }

    public getSkinLevels(): Promise<ValorantApiCom.Response.Data<Weapons.WeaponSkinLevels[]>> {
        return this.axios.get("/weapons/skinlevels");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Weapons.Weapons>> {
        return this.axios.get(`/weapons/${uuid}`);
    }

    public getSkinByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Weapons.WeaponSkins>> {
        return this.axios.get(`/weapons/skins/${uuid}`);
    }

    public getSkinChromaByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Weapons.WeaponSkinChromas>> {
        return this.axios.get(`/weapons/skinchromas/${uuid}`);
    }

    public getSkinLevelByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Weapons.WeaponSkinLevels>> {
        return this.axios.get(`/weapons/skinlevels/${uuid}`);
    }
}
