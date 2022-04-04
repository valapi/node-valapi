export namespace Auth {
    const Account: typeof import("./auth/Account");
    const Multifactor: typeof import("./auth/Multifactor");
}
export const ValClient: typeof import("./client/ValClient");
export const RiotApi: typeof import("./client/RiotApi");
export const ValRegion: typeof import("./resources/ValRegion");
export namespace Resource {
    const QueueId: {
        unrated: string;
        competitive: string;
        spikerush: string;
        deathmatch: string;
        ggteam: string;
        onefa: string;
        snowball: string;
        '': string;
        newmap: string;
        data: {
            Unrated: string;
            Competitive: string;
            Spikerush: string;
            Deathmatch: string;
            Escalation: string;
            Replication: string;
            SnowballFight: string;
            Custom: string;
        };
        seeding: string;
    };
    const ItemTypeId: {
        '01bb38e1-da47-4e6a-9b3d-945fe4655707': string;
        'f85cb6f7-33e5-4dc8-b609-ec7212301948': string;
        'd5f120f8-ff8c-4aac-92ea-f2b5acbe9475': string;
        'dd3bf334-87f3-40bd-b043-682a57a8dc3a': string;
        '3f296c07-64c3-494c-923b-fe692a4fa1bd': string;
        'e7c63390-eda7-46e0-bb7a-a6abdacd2433': string;
        '3ad1b2b2-acdb-4524-852f-954a76ddae0a': string;
        'de7caa6b-adf7-4588-bbd1-143831e786c6': string;
        data: {
            Agents: string;
            Contracts: string;
            Sprays: string;
            GunBuddies: string;
            Cards: string;
            Skins: string;
            SkinVariants: string;
            Titles: string;
        };
    };
    const Currency: {
        '85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741': string;
        'e59aa87c-4cbf-517a-5983-6e81511be9b7': string;
        'f08d4ae3-939c-4576-ab26-09ce1f23bb37': string;
        data: {
            ValorantPoints: string;
            RadianitePoints: string;
            FreeAgents: string;
        };
    };
    const Region: {
        na: string;
        eu: string;
        ap: string;
        kr: string;
        latam: string;
        br: string;
        pbe: string;
        data: {
            NorthAmerica: string;
            Europe: string;
            AsiaPacific: string;
            Korea: string;
            LatinAmerica: string;
            Brazil: string;
            PublicBetaEnvironment: string;
        };
    };
    const Locale: {
        "ar-AE": string;
        "de-DE": string;
        "en-GB": string;
        "en-US": string;
        "es-ES": string;
        "es-MX": string;
        "fr-FR": string;
        "id-ID": string;
        "it-IT": string;
        "ja-JP": string;
        "ko-KR": string;
        "pl-PL": string;
        "pt-BR": string;
        "ru-RU": string;
        "th-TH": string;
        "tr-TR": string;
        "vi-VN": string;
        "zh-CN": string;
        "zh-TW": string;
        data: {
            Arabic_UAE: string;
            German_Germany: string;
            English_UnitedKingdom: string;
            English_UnitedStates: string;
            Spanish_Spain: string;
            Spanish_Mexico: string;
            French_France: string;
            Indonesian_Indonesia: string;
            Italian_Italy: string;
            Japanese_Japan: string;
            Korean_Korea: string;
            Polish_Poland: string;
            Portuguese_Brazil: string;
            Russian_Russia: string;
            Thai_Thailand: string;
            Turkish_Turkey: string;
            Vietnamese_Vietnam: string;
            Chinese_China: string;
            Chinese_Taiwan: string;
        };
    };
}
//# sourceMappingURL=index.d.ts.map