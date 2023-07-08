export default class Data {
    public static readonly from = {
        "ar-AE": "Arabic_United_Arab_Emirates",
        "de-DE": "German_Germany",
        "en-GB": "English_United_Kingdom",
        "en-US": "English_United_States",
        "es-ES": "Spanish_Spain",
        "es-MX": "Spanish_Mexico",
        "fr-FR": "French_France",
        "id-ID": "Indonesian_Indonesia",
        "it-IT": "Italian_Italy",
        "ja-JP": "Japanese_Japan",
        "ko-KR": "Korean_South_Korea",
        "pl-PL": "Polish_Poland",
        "pt-BR": "Portuguese_Brazil",
        "ru-RU": "Russian_Russia",
        "th-TH": "Thai_Thailand",
        "tr-TR": "Turkish_Turkey",
        "vi-VN": "Vietnamese_Vietnam",
        "zh-CN": "Chinese_China",
        "zh-TW": "Chinese_Taiwan"
    };

    public static readonly to = {
        Arabic_United_Arab_Emirates: "ar-AE",
        German_Germany: "de-DE",
        English_United_Kingdom: "en-GB",
        English_United_States: "en-US",
        Spanish_Spain: "es-ES",
        Spanish_Mexico: "es-MX",
        French_France: "fr-FR",
        Indonesian_Indonesia: "id-ID",
        Italian_Italy: "it-IT",
        Japanese_Japan: "ja-JP",
        Korean_South_Korea: "ko-KR",
        Polish_Poland: "pl-PL",
        Portuguese_Brazil: "pt-BR",
        Russian_Russia: "ru-RU",
        Thai_Thailand: "th-TH",
        Turkish_Turkey: "tr-TR",
        Vietnamese_Vietnam: "vi-VN",
        Chinese_China: "zh-CN",
        Chinese_Taiwan: "zh-TW"
    };
}

export enum Default {
    Arabic_United_Arab_Emirates = "ar-AE",
    German_Germany = "de-DE",
    English_United_Kingdom = "en-GB",
    English_United_States = "en-US",
    Spanish_Spain = "es-ES",
    Spanish_Mexico = "es-MX",
    French_France = "fr-FR",
    Indonesian_Indonesia = "id-ID",
    Italian_Italy = "it-IT",
    Japanese_Japan = "ja-JP",
    Korean_South_Korea = "ko-KR",
    Polish_Poland = "pl-PL",
    Portuguese_Brazil = "pt-BR",
    Russian_Russia = "ru-RU",
    Thai_Thailand = "th-TH",
    Turkish_Turkey = "tr-TR",
    Vietnamese_Vietnam = "vi-VN",
    Chinese_China = "zh-CN",
    Chinese_Taiwan = "zh-TW"
}

export type Identify = keyof typeof Data.from;
export type Name = keyof typeof Data.to;

/**
 * Change from {@link Name} to {@link Identify String}
 * @param {Name} x Name
 * @returns {Identify} String
 */
export function fromName(x: Name): Identify {
    return <Identify>Data.to[x];
}

/**
 * Change from {@link Identify String} to {@link Name}
 * @param {Identify} x String
 * @returns {Name} Name
 */
export function fromString(x: Identify): Name {
    return <Name>Data.from[x];
}
