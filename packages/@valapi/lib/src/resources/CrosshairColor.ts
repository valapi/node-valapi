export const Default = <const>{
    White: "0",
    Green: "1",
    Yellow_Green: "2",
    Green_Yellow: "3",
    Yellow: "4",
    Cyan: "5",
    Pink: "6",
    Red: "7",
    Custom: "8"
};

export type Color = keyof typeof Default;
export type ID = (typeof Default)[Color];

/**
 * Change from {@link Color} to {@link ID}
 * @param {Color} x Color
 * @returns {ID} ID
 */
export function fromColor(x: Color): ID | undefined {
    return <ID>Default[x];
}

/**
 * Change from {@link ID} to {@link Color}
 * @param {ID} x ID
 * @returns {Color} Color
 */
export function fromID(x: ID): Color | undefined {
    for (const data of Object.entries(Default)) {
        if (data[1] == x) {
            return <Color>data[0];
        }
    }

    return undefined;
}

export const DefaultHex = <const>{
    White: "FFFFFF",
    Green: "00FF00",
    Yellow_Green: "7FFF00",
    Green_Yellow: "DFFF00",
    Yellow: "FFFF00",
    Cyan: "00FFFF",
    Pink: "FF00FF",
    Red: "FF0000"
};

type ColorHex = keyof typeof DefaultHex;
export type IdHex = (typeof DefaultHex)[ColorHex];

/**
 * Change from {@link Color} to {@link IdHex}
 * @param {Color} x Color
 * @returns {IdHex} IdHex
 */
export function fromColorHex(x: Color): IdHex | undefined {
    return <IdHex>DefaultHex[<ColorHex>x];
}

/**
 * Change from {@link IdHex} to {@link Color}
 * @param {IdHex} x IdHex
 * @returns {Color} Color
 */
export function fromIdHex(x: IdHex): Color | undefined {
    for (const data of Object.entries(DefaultHex)) {
        if (data[1] == x) {
            return <Color>data[0];
        }
    }

    return undefined;
}
