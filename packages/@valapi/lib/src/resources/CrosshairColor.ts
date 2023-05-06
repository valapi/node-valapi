export default class Data {
    public static readonly from = {
        "0": "White",
        "1": "Green",
        "2": "Yellow_Green",
        "3": "Green_Yellow",
        "4": "Yellow",
        "5": "Cyan",
        "6": "Pink",
        "7": "Red",
        "8": "Custom"
    };

    public static readonly fromHex = {
        "0": "FFFFFF",
        "1": "00FF00",
        "2": "7FFF00",
        "3": "DFFF00",
        "4": "FFFF00",
        "5": "00FFFF",
        "6": "FF00FF",
        "7": "FF0000"
    };

    public static readonly to = {
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

    public static readonly toHex = {
        FFFFFF: "0",
        "00FF00": "1",
        "7FFF00": "2",
        DFFF00: "3",
        FFFF00: "4",
        "00FFFF": "5",
        FF00FF: "6",
        FF0000: "7"
    };
}

export enum Default {
    White = "0",
    Green = "1",
    Yellow_Green = "2",
    Green_Yellow = "3",
    Yellow = "4",
    Cyan = "5",
    Pink = "6",
    Red = "7",
    Custom = "8"
}

export enum DefaultColor {
    White = "FFFFFF",
    Green = "00FF00",
    Yellow_Green = "7FFF00",
    Green_Yellow = "DFFF00",
    Yellow = "FFFF00",
    Cyan = "00FFFF",
    Pink = "FF00FF",
    Red = "FF0000"
}

export type Identify = keyof typeof Data.from;
export type Color = keyof typeof Data.to;

export type IdentifyHex = keyof typeof Data.fromHex;
export type ColorHex = keyof typeof Data.toHex;

/**
 * Change from {@link Color} to {@link Identify String}
 * @param {Color} x Color
 * @returns {Identify} String
 */
export function fromColor(x: Color): Identify {
    return <Identify>Data.to[x];
}

/**
 * **(Hex)** Change from {@link ColorHex Color} to {@link IdentifyHex String}
 * @param {ColorHex} x Color
 * @returns {IdentifyHex} String
 */
export function fromColorHex(x: ColorHex): IdentifyHex {
    return <IdentifyHex>Data.toHex[x];
}

/**
 * Change from {@link Identify String} to {@link Color}
 * @param {Identify} x String
 * @returns {Color} Color
 */
export function fromString(x: Identify): Color {
    return <Color>Data.from[x];
}

/**
 * **(Hex)** Change from {@link IdentifyHex String} to {@link ColorHex Color}
 * @param {IdentifyHex} x String
 * @returns {ColorHex} Color
 */
export function fromStringHex(x: IdentifyHex): ColorHex {
    return <ColorHex>Data.fromHex[x];
}
