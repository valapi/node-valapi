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

export function fromName(x: Name): Hex {
    return <Hex>Default[x];
}

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
