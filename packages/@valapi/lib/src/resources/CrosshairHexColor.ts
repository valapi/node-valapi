import { ValError } from "../client/ValError";

export const Default = <const>{
    White: "FFFFFF",
    Green: "00FF00",
    Yellow_Green: "7FFF00",
    Green_Yellow: "DFFF00",
    Yellow: "FFFF00",
    Cyan: "00FFFF",
    Pink: "FF00FF",
    Red: "FF0000"
};

export type Name = keyof typeof Default;
export type Hex = (typeof Default)[Name];

/**
 * Change from {@link Name} to {@link Hex}
 * @param {Name} x Name
 * @returns {Hex} Hex
 */
export function fromName(x: Name): Hex {
    return <Hex>Default[x];
}

/**
 * Change from {@link Hex} to {@link Name}
 * @param {Hex} x Hex
 * @returns {Name} Name
 */
export function fromHex(x: Hex): Name {
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
