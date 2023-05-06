export default class Data {
    public static readonly from = {
        na: "North_America",
        latam: "Latin_America",
        br: "Brazil",
        pbe: "Public_Beta_Environment",
        eu: "Europe",
        kr: "Korea",
        ap: "Asia_Pacific"
    };

    public static readonly to = {
        North_America: "na",
        Latin_America: "latam",
        Brazil: "br",
        Public_Beta_Environment: "pbe",
        Europe: "eu",
        Korea: "kr",
        Asia_Pacific: "ap"
    };
}

export enum Default {
    North_America = "na",
    Latin_America = "latam",
    Brazil = "br",
    Public_Beta_Environment = "pbe",
    Europe = "eu",
    Korea = "kr",
    Asia_Pacific = "ap"
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
