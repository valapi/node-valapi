import { ValError } from "../client/ValError";

export const Default = <const>{
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

export type Name = keyof typeof Default;
export type ID = (typeof Default)[Name];

export function fromName(x: Name): ID {
    return <ID>Default[x];
}

export function fromID(x: ID): Name {
    for (const data of Object.entries(Default)) {
        if (data[1] === x) {
            return <Name>data[0];
        }
    }

    throw new ValError({
        name: "Resource_Error",
        message: "Resource Not Found",
        data: x
    });
}
