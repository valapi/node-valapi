import { ValError } from "../client/ValError";

export const Default = <const>{
    North_America: "na",
    Latin_America: "latam",
    Brazil: "br",
    Public_Beta_Environment: "pbe",
    Europe: "eu",
    Korea: "kr",
    Asia_Pacific: "ap"
};

export type Name = keyof typeof Default;
export type ID = (typeof Default)[Name];

/**
 * Change from {@link Name} to {@link ID}
 * @param {Name} x Name
 * @returns {ID} ID
 */
export function fromName(x: Name): ID {
    return <ID>Default[x];
}

/**
 * Change from {@link ID} to {@link Name}
 * @param {ID} x ID
 * @returns {Name} Name
 */
export function fromID(x: ID): Name {
    for (const data of Object.entries(Default)) {
        if (data[1] == x) {
            return <Name>data[0];
        }
    }

    throw new ValError({
        name: "Resource_Error",
        message: "Resource Not Found",
        data: x
    });
}
