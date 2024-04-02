import { ValError, CrosshairColor } from "@valapi/lib";

export namespace ValCrosshair {
    export type Category = "0" | "P" | "A" | "S";

    export namespace Data {
        export interface BaseType<T extends string | number, TName extends string = string> {
            type: string;
            value: {
                path: `${ValCrosshair.Category}.${string}`;
                priority: number;
                name: `${string}.${TName}`;
                data: T;
                default: T;
            };
            components: Array<ValCrosshair.Data.Any>;
        }

        export type Any =
            | ValCrosshair.Data.String
            | ValCrosshair.Data.Number
            | ValCrosshair.Data.Boolean
            | ValCrosshair.Data.Color
            | ValCrosshair.Data.Elements
            | ValCrosshair.Data.Length
            | ValCrosshair.Data.Multiplier
            | ValCrosshair.Data.Line;

        export interface String<TName extends string = string, TType extends string = string, TStrings extends Array<TType> = Array<TType>> extends ValCrosshair.Data.BaseType<TType, TName> {
            type: "String";
            strings: TStrings;
        }

        export interface Number<TName extends string = string, TType extends "Integer" | "Decimal" = "Integer" | "Decimal", TMin extends number = number, TMax extends number = number>
            extends ValCrosshair.Data.BaseType<number, TName> {
            type: "Number";
            number: {
                type: TType;
                minimum: TMin;
                maximum: TMax;
            };
        }

        export interface Boolean<TName extends string = string> extends ValCrosshair.Data.BaseType<0 | 1, TName> {
            type: "Boolean";
        }

        export interface Color<TName extends string = "Color"> extends ValCrosshair.Data.BaseType<0 | 1, `${TName}.isHex`> {
            type: "Color";
            components: [
                ValCrosshair.Data.String<`${TName}.Color`, CrosshairColor.ID, ["0", "1", "2", "3", "4", "5", "6", "7", "8"]>,
                /**
                 * When hex is enable
                 */
                ValCrosshair.Data.String<`${TName}.Hex`, CrosshairColor.IdHex, ["FFFFFF", "00FF00", "7FFF00", "DFFF00", "FFFF00", "00FFFF", "FF00FF", "FF0000"]>
            ];
        }

        export interface Elements<TName extends string = string> extends ValCrosshair.Data.BaseType<0 | 1, `${TName}.isEnable`> {
            type: "Elements";
            components: [ValCrosshair.Data.Number<`${TName}.Thickness`, "Integer", 1, 6>, ValCrosshair.Data.Number<`${TName}.Opacity`, "Decimal", 0, 1>];
        }

        export interface Length<TName extends string = "Length", TMax extends number = number> extends ValCrosshair.Data.BaseType<0 | 1, `${TName}.isChain`> {
            type: "Length";
            components: [
                ValCrosshair.Data.Number<`${TName}.Primary`, "Integer", 0, TMax>,
                /**
                 * When chain is enable
                 */
                ValCrosshair.Data.Number<`${TName}.Secondary`, "Integer", 0, TMax>
            ];
        }

        export interface Multiplier<TName extends string = string> extends ValCrosshair.Data.BaseType<0 | 1, `${TName}.isEnable`> {
            type: "Multiplier";
            components: [ValCrosshair.Data.Number<`${TName}.Multiplier`, "Decimal", 0, 3>];
        }

        export interface Line<TName extends string = string> extends ValCrosshair.Data.BaseType<0 | 1, `${TName}.isEnable`> {
            type: "Line";
            components: [
                ValCrosshair.Data.Number<`${TName}.Thickness`, "Integer", 0, 10>,
                ValCrosshair.Data.Length<`${TName}.Length`>,
                ValCrosshair.Data.Number<`${TName}.Offset`, "Integer", 0>,
                ValCrosshair.Data.Number<`${TName}.Opacity`, "Decimal", 0, 1>,
                ValCrosshair.Data.Multiplier<`${TName}.MovementError`>,
                ValCrosshair.Data.Multiplier<`${TName}.FiringError`>
            ];
        }
    }
}

/**
 * Valorant Crosshair
 */
export class ValCrosshair {
    public data: Array<ValCrosshair.Data.Any> = [
        // * 0 (Others)

        {
            type: "Boolean",
            value: {
                path: "0.p",
                priority: 1,
                name: "AimDownSights.CopyPrimaryCrosshair",
                data: 1,
                default: 1
            },
            components: []
        },
        {
            type: "Boolean",
            value: {
                path: "0.c",
                priority: 2,
                name: "Primary.Crosshair.OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair",
                data: 0,
                default: 0
            },
            components: []
        },
        {
            type: "Boolean",
            value: {
                path: "0.s",
                priority: 3,
                name: "General.Crosshair.UseAdvancedOptions",
                data: 0,
                default: 0
            },
            components: []
        },

        // * P (Primary)

        {
            type: "Color",
            value: {
                path: "P.b",
                priority: 10,
                name: "Primary.Crosshair.Color.isHex",
                data: 0,
                default: 0
            },
            components: [
                {
                    type: "String",
                    strings: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
                    value: {
                        path: "P.c",
                        priority: 4,
                        name: "Primary.Crosshair.Color.Color",
                        data: "0",
                        default: "0"
                    },
                    components: []
                },
                {
                    type: "String",
                    strings: ["FFFFFF", "00FF00", "7FFF00", "DFFF00", "FFFF00", "00FFFF", "FF00FF", "FF0000"],
                    value: {
                        path: "P.u",
                        priority: 5,
                        name: "Primary.Crosshair.Color.Hex",
                        data: <CrosshairColor.IdHex>CrosshairColor.fromColorHex("White"),
                        default: <CrosshairColor.IdHex>CrosshairColor.fromColorHex("White")
                    },
                    components: []
                }
            ]
        },
        {
            type: "Elements",
            value: {
                path: "P.h",
                priority: 6,
                name: "Primary.Crosshair.OutLine.isEnable",
                data: 1,
                default: 1
            },
            components: [
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 1,
                        maximum: 6
                    },
                    value: {
                        path: "P.t",
                        priority: 7,
                        name: "Primary.Crosshair.OutLine.Thickness",
                        data: 1,
                        default: 1
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "P.o",
                        priority: 8,
                        name: "Primary.Crosshair.OutLine.Opacity",
                        data: 0.5,
                        default: 0.5
                    },
                    components: []
                }
            ]
        },
        {
            type: "Elements",
            value: {
                path: "P.d",
                priority: 9,
                name: "Primary.Crosshair.CenterDot.isEnable",
                data: 0,
                default: 0
            },
            components: [
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 1,
                        maximum: 6
                    },
                    value: {
                        path: "P.z",
                        priority: 11,
                        name: "Primary.Crosshair.CenterDot.Thickness",
                        data: 2,
                        default: 2
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "P.a",
                        priority: 12,
                        name: "Primary.Crosshair.CenterDot.Opacity",
                        data: 1,
                        default: 1
                    },
                    components: []
                }
            ]
        },
        {
            type: "Boolean",
            value: {
                path: "P.f",
                priority: 13,
                name: "General.Other.FadeCrosshairWithFiringError",
                data: 1,
                default: 1
            },
            components: []
        },
        {
            type: "Boolean",
            value: {
                path: "P.s",
                priority: 14,
                name: "General.Other.ShowSpectatedPlayerCrosshair",
                data: 1,
                default: 1
            },
            components: []
        },
        {
            type: "Boolean",
            value: {
                path: "P.m",
                priority: 15,
                name: "Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset",
                data: 0,
                default: 0
            },
            components: []
        },
        {
            type: "Line",
            value: {
                path: "P.0b",
                priority: 16,
                name: "Primary.InnerLines.isEnable",
                data: 1,
                default: 1
            },
            components: [
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 0,
                        maximum: 10
                    },
                    value: {
                        path: "P.0t",
                        priority: 17,
                        name: "Primary.InnerLines.Thickness",
                        data: 2,
                        default: 2
                    },
                    components: []
                },
                {
                    type: "Length",
                    value: {
                        path: "P.0g",
                        priority: 20,
                        name: "Primary.InnerLines.Length.isChain",
                        data: 0,
                        default: 0
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Integer",
                                minimum: 0,
                                maximum: 20
                            },
                            value: {
                                path: "P.0l",
                                priority: 18,
                                name: "Primary.InnerLines.Length.Primary",
                                data: 6,
                                default: 6
                            },
                            components: []
                        },
                        {
                            type: "Number",
                            number: {
                                type: "Integer",
                                minimum: 0,
                                maximum: 20
                            },
                            value: {
                                path: "P.0v",
                                priority: 19,
                                name: "Primary.InnerLines.Length.Secondary",
                                data: 6,
                                default: 6
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 0,
                        maximum: 20
                    },
                    value: {
                        path: "P.0o",
                        priority: 21,
                        name: "Primary.InnerLines.Offset",
                        data: 3,
                        default: 3
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "P.0a",
                        priority: 22,
                        name: "Primary.InnerLines.Opacity",
                        data: 0.8,
                        default: 0.8
                    },
                    components: []
                },
                {
                    type: "Multiplier",
                    value: {
                        path: "P.0m",
                        priority: 23,
                        name: "Primary.InnerLines.MovementError.isEnable",
                        data: 0,
                        default: 0
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Decimal",
                                minimum: 0,
                                maximum: 3
                            },
                            value: {
                                path: "P.0s",
                                priority: 25,
                                name: "Primary.InnerLines.MovementError.Multiplier",
                                data: 1,
                                default: 1
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Multiplier",
                    value: {
                        path: "P.0f",
                        priority: 24,
                        name: "Primary.InnerLines.FiringError.isEnable",
                        data: 1,
                        default: 1
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Decimal",
                                minimum: 0,
                                maximum: 3
                            },
                            value: {
                                path: "P.0e",
                                priority: 26,
                                name: "Primary.InnerLines.FiringError.Multiplier",
                                data: 1,
                                default: 1
                            },
                            components: []
                        }
                    ]
                }
            ]
        },
        {
            type: "Line",
            value: {
                path: "P.1b",
                priority: 27,
                name: "Primary.OuterLines.isEnable",
                data: 1,
                default: 1
            },
            components: [
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 0,
                        maximum: 10
                    },
                    value: {
                        path: "P.1t",
                        priority: 28,
                        name: "Primary.OuterLines.Thickness",
                        data: 2,
                        default: 2
                    },
                    components: []
                },
                {
                    type: "Length",
                    value: {
                        path: "P.1g",
                        priority: 31,
                        name: "Primary.OuterLines.Length.isChain",
                        data: 0,
                        default: 0
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Integer",
                                minimum: 0,
                                maximum: 10
                            },
                            value: {
                                path: "P.1l",
                                priority: 29,
                                name: "Primary.OuterLines.Length.Primary",
                                data: 2,
                                default: 2
                            },
                            components: []
                        },
                        {
                            type: "Number",
                            number: {
                                type: "Integer",
                                minimum: 0,
                                maximum: 10
                            },
                            value: {
                                path: "P.1v",
                                priority: 30,
                                name: "Primary.OuterLines.Length.Secondary",
                                data: 2,
                                default: 2
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 0,
                        maximum: 40
                    },
                    value: {
                        path: "P.1o",
                        priority: 32,
                        name: "Primary.OuterLines.Offset",
                        data: 10,
                        default: 10
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "P.1a",
                        priority: 33,
                        name: "Primary.OuterLines.Opacity",
                        data: 0.35,
                        default: 0.35
                    },
                    components: []
                },
                {
                    type: "Multiplier",
                    value: {
                        path: "P.1m",
                        priority: 34,
                        name: "Primary.OuterLines.MovementError.isEnable",
                        data: 1,
                        default: 1
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Decimal",
                                minimum: 0,
                                maximum: 3
                            },
                            value: {
                                path: "P.1s",
                                priority: 36,
                                name: "Primary.OuterLines.MovementError.Multiplier",
                                data: 1,
                                default: 1
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Multiplier",
                    value: {
                        path: "P.1f",
                        priority: 35,
                        name: "Primary.OuterLines.FiringError.isEnable",
                        data: 1,
                        default: 1
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Decimal",
                                minimum: 0,
                                maximum: 3
                            },
                            value: {
                                path: "P.1e",
                                priority: 37,
                                name: "Primary.OuterLines.FiringError.Multiplier",
                                data: 1,
                                default: 1
                            },
                            components: []
                        }
                    ]
                }
            ]
        },

        // * A (AimDownSights)

        {
            type: "Color",
            value: {
                path: "A.b",
                priority: 44,
                name: "AimDownSights.Crosshair.Color.isHex",
                data: 0,
                default: 0
            },
            components: [
                {
                    type: "String",
                    strings: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
                    value: {
                        path: "A.c",
                        priority: 38,
                        name: "AimDownSights.Crosshair.Color.Color",
                        data: "0",
                        default: "0"
                    },
                    components: []
                },
                {
                    type: "String",
                    strings: ["FFFFFF", "00FF00", "7FFF00", "DFFF00", "FFFF00", "00FFFF", "FF00FF", "FF0000"],
                    value: {
                        path: "A.u",
                        priority: 39,
                        name: "AimDownSights.Crosshair.Color.Hex",
                        data: <CrosshairColor.IdHex>CrosshairColor.fromColorHex("White"),
                        default: <CrosshairColor.IdHex>CrosshairColor.fromColorHex("White")
                    },
                    components: []
                }
            ]
        },
        {
            type: "Elements",
            value: {
                path: "A.h",
                priority: 40,
                name: "AimDownSights.Crosshair.OutLine.isEnable",
                data: 1,
                default: 1
            },
            components: [
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 1,
                        maximum: 6
                    },
                    value: {
                        path: "A.t",
                        priority: 41,
                        name: "AimDownSights.Crosshair.OutLine.Thickness",
                        data: 1,
                        default: 1
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "A.o",
                        priority: 42,
                        name: "AimDownSights.Crosshair.OutLine.Opacity",
                        data: 0.5,
                        default: 0.5
                    },
                    components: []
                }
            ]
        },
        {
            type: "Elements",
            value: {
                path: "A.d",
                priority: 43,
                name: "AimDownSights.Crosshair.CenterDot.isEnable",
                data: 0,
                default: 0
            },
            components: [
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 1,
                        maximum: 6
                    },
                    value: {
                        path: "A.z",
                        priority: 45,
                        name: "AimDownSights.Crosshair.CenterDot.Thickness",
                        data: 2,
                        default: 2
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "A.a",
                        priority: 46,
                        name: "AimDownSights.Crosshair.CenterDot.Opacity",
                        data: 1,
                        default: 1
                    },
                    components: []
                }
            ]
        },
        {
            type: "Boolean",
            value: {
                path: "A.m",
                priority: 47,
                name: "AimDownSights.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset",
                data: 0,
                default: 0
            },
            components: []
        },
        {
            type: "Line",
            value: {
                path: "A.0b",
                priority: 48,
                name: "AimDownSights.InnerLines.isEnable",
                data: 1,
                default: 1
            },
            components: [
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 0,
                        maximum: 10
                    },
                    value: {
                        path: "A.0t",
                        priority: 49,
                        name: "AimDownSights.InnerLines.Thickness",
                        data: 2,
                        default: 2
                    },
                    components: []
                },
                {
                    type: "Length",
                    value: {
                        path: "A.0g",
                        priority: 52,
                        name: "AimDownSights.InnerLines.Length.isChain",
                        data: 0,
                        default: 0
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Integer",
                                minimum: 0,
                                maximum: 20
                            },
                            value: {
                                path: "A.0l",
                                priority: 50,
                                name: "AimDownSights.InnerLines.Length.Primary",
                                data: 6,
                                default: 6
                            },
                            components: []
                        },
                        {
                            type: "Number",
                            number: {
                                type: "Integer",
                                minimum: 0,
                                maximum: 20
                            },
                            value: {
                                path: "A.0v",
                                priority: 51,
                                name: "AimDownSights.InnerLines.Length.Secondary",
                                data: 6,
                                default: 6
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 0,
                        maximum: 20
                    },
                    value: {
                        path: "A.0o",
                        priority: 53,
                        name: "AimDownSights.InnerLines.Offset",
                        data: 3,
                        default: 3
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "A.0a",
                        priority: 54,
                        name: "AimDownSights.InnerLines.Opacity",
                        data: 0.8,
                        default: 0.8
                    },
                    components: []
                },
                {
                    type: "Multiplier",
                    value: {
                        path: "A.0m",
                        priority: 55,
                        name: "AimDownSights.InnerLines.MovementError.isEnable",
                        data: 0,
                        default: 0
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Decimal",
                                minimum: 0,
                                maximum: 3
                            },
                            value: {
                                path: "A.0s",
                                priority: 57,
                                name: "AimDownSights.InnerLines.MovementError.Multiplier",
                                data: 1,
                                default: 1
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Multiplier",
                    value: {
                        path: "A.0f",
                        priority: 56,
                        name: "AimDownSights.InnerLines.FiringError.isEnable",
                        data: 1,
                        default: 1
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Decimal",
                                minimum: 0,
                                maximum: 3
                            },
                            value: {
                                path: "A.0e",
                                priority: 58,
                                name: "AimDownSights.InnerLines.FiringError.Multiplier",
                                data: 1,
                                default: 1
                            },
                            components: []
                        }
                    ]
                }
            ]
        },
        {
            type: "Line",
            value: {
                path: "A.1b",
                priority: 59,
                name: "AimDownSights.OuterLines.isEnable",
                data: 1,
                default: 1
            },
            components: [
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 0,
                        maximum: 10
                    },
                    value: {
                        path: "A.1t",
                        priority: 60,
                        name: "AimDownSights.OuterLines.Thickness",
                        data: 2,
                        default: 2
                    },
                    components: []
                },
                {
                    type: "Length",
                    value: {
                        path: "A.1g",
                        priority: 63,
                        name: "AimDownSights.OuterLines.Length.isChain",
                        data: 0,
                        default: 0
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Integer",
                                minimum: 0,
                                maximum: 10
                            },
                            value: {
                                path: "A.1l",
                                priority: 61,
                                name: "AimDownSights.OuterLines.Length.Primary",
                                data: 2,
                                default: 2
                            },
                            components: []
                        },
                        {
                            type: "Number",
                            number: {
                                type: "Integer",
                                minimum: 0,
                                maximum: 10
                            },
                            value: {
                                path: "A.1v",
                                priority: 62,
                                name: "AimDownSights.OuterLines.Length.Secondary",
                                data: 2,
                                default: 2
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Number",
                    number: {
                        type: "Integer",
                        minimum: 0,
                        maximum: 40
                    },
                    value: {
                        path: "A.1o",
                        priority: 64,
                        name: "AimDownSights.OuterLines.Offset",
                        data: 10,
                        default: 10
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "A.1a",
                        priority: 65,
                        name: "AimDownSights.OuterLines.Opacity",
                        data: 0.35,
                        default: 0.35
                    },
                    components: []
                },
                {
                    type: "Multiplier",
                    value: {
                        path: "A.1m",
                        priority: 66,
                        name: "AimDownSights.OuterLines.MovementError.isEnable",
                        data: 1,
                        default: 1
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Decimal",
                                minimum: 0,
                                maximum: 3
                            },
                            value: {
                                path: "A.1s",
                                priority: 68,
                                name: "AimDownSights.OuterLines.MovementError.Multiplier",
                                data: 1,
                                default: 1
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Multiplier",
                    value: {
                        path: "A.1f",
                        priority: 67,
                        name: "AimDownSights.OuterLines.FiringError.isEnable",
                        data: 1,
                        default: 1
                    },
                    components: [
                        {
                            type: "Number",
                            number: {
                                type: "Decimal",
                                minimum: 0,
                                maximum: 3
                            },
                            value: {
                                path: "A.1e",
                                priority: 69,
                                name: "AimDownSights.OuterLines.FiringError.Multiplier",
                                data: 1,
                                default: 1
                            },
                            components: []
                        }
                    ]
                }
            ]
        },

        // * S (SniperScope)

        {
            type: "Boolean",
            value: {
                path: "S.d",
                priority: 70,
                name: "SniperScope.CenterDot.isEnable",
                data: 1,
                default: 1
            },
            components: [
                {
                    type: "Color",
                    value: {
                        path: "S.b",
                        priority: 71,
                        name: "SniperScope.CenterDot.Color.isHex",
                        data: 0,
                        default: 0
                    },
                    components: [
                        {
                            type: "String",
                            strings: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
                            value: {
                                path: "S.c",
                                priority: 72,
                                name: "SniperScope.CenterDot.Color.Color",
                                data: "7",
                                default: "7"
                            },
                            components: []
                        },
                        {
                            type: "String",
                            strings: ["FFFFFF", "00FF00", "7FFF00", "DFFF00", "FFFF00", "00FFFF", "FF00FF", "FF0000"],
                            value: {
                                path: "S.t",
                                priority: 73,
                                name: "SniperScope.CenterDot.Color.Hex",
                                data: <CrosshairColor.IdHex>CrosshairColor.fromColorHex("White"),
                                default: <CrosshairColor.IdHex>CrosshairColor.fromColorHex("White")
                            },
                            components: []
                        }
                    ]
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 4
                    },
                    value: {
                        path: "S.s",
                        priority: 74,
                        name: "SniperScope.CenterDot.Thickness",
                        data: 1,
                        default: 1
                    },
                    components: []
                },
                {
                    type: "Number",
                    number: {
                        type: "Decimal",
                        minimum: 0,
                        maximum: 1
                    },
                    value: {
                        path: "S.o",
                        priority: 75,
                        name: "SniperScope.CenterDot.Opacity",
                        data: 0.75,
                        default: 0.75
                    },
                    components: []
                }
            ]
        }
    ];

    private _forEach(data: Array<ValCrosshair.Data.Any>, index: Array<number>, callback: (value: ValCrosshair.Data.Any, index: Array<number>) => void): void {
        for (const i in data) {
            if (data[i]) {
                const _index: Array<number> = index.concat([Number.parseInt(i)]);

                callback(data[i], _index);

                this._forEach(data[i].components, _index, callback);
            }
        }
    }

    /**
     *
     * @param {function (value: Omit<ValCrosshair.Data.Any, "components">, index: Array<number>): void} callback callback function
     * @returns {void}
     */
    public forEach(callback: (value: Omit<ValCrosshair.Data.Any, "components">, index: Array<number>) => void): void {
        this._forEach(this.data, [], callback);
    }

    private _find(data: Array<ValCrosshair.Data.Any>, index: Array<number>, callback: (value: ValCrosshair.Data.Any, index: Array<number>) => boolean): ValCrosshair.Data.Any | undefined {
        for (const i in data) {
            if (data[i]) {
                const _index: Array<number> = index.concat([Number.parseInt(i)]);

                if (callback(data[i], _index)) {
                    return data[i];
                }

                const components = this._find(data[i].components, _index, callback);
                if (components !== undefined) {
                    return components;
                }
            }
        }

        return undefined;
    }

    /**
     *
     * @param {function (value: Omit<ValCrosshair.Data.Any, "components">, index: Array<number>): boolean} callback callback function
     * @returns {ValCrosshair.Data.Any | undefined}
     */
    public find(callback: (value: Omit<ValCrosshair.Data.Any, "components">, index: Array<number>) => boolean): ValCrosshair.Data.Any | undefined {
        return this._find(this.data, [], callback);
    }

    private _map<T>(data: Array<ValCrosshair.Data.Any>, index: Array<number>, callback: (value: ValCrosshair.Data.Any, index: Array<number>) => T): Array<T> {
        const items: Array<T> = [];

        for (const i in data) {
            if (data[i]) {
                const _index: Array<number> = index.concat([Number.parseInt(i)]);
                const value = callback(data[i], _index);

                if (value !== undefined) {
                    items.push(value);
                }

                const components = this._map(data[i].components, _index, callback);
                if (components.length > 0) {
                    items.push(...components);
                }
            }
        }

        return items;
    }

    /**
     *
     * @param {function (value: Omit<ValCrosshair.Data.Any, "components">, index: Array<number>): T} callback callback function
     * @returns {Array<T>}
     */
    public map<T>(callback: (value: Omit<ValCrosshair.Data.Any, "components">, index: Array<number>) => T): Array<T> {
        return this._map<T>(this.data, [], callback);
    }

    /**
     *
     * @param {Array<number>} index Index
     * @param {string | number} data Data
     * @returns {void}
     */
    public set(index: Array<number>, data: string | number): void {
        switch (index.length) {
            case 0: {
                break;
            }
            case 1: {
                this.data[index[0]].value.data = data;
                break;
            }
            case 2: {
                this.data[index[0]].components[index[1]].value.data = data;
                break;
            }
            case 3: {
                this.data[index[0]].components[index[1]].components[index[2]].value.data = data;
                break;
            }
            case 4: {
                this.data[index[0]].components[index[1]].components[index[2]].components[index[3]].value.data = data;
                break;
            }
            case 5: {
                this.data[index[0]].components[index[1]].components[index[2]].components[index[3]].components[index[4]].value.data = data;
                break;
            }
            default: {
                throw new ValError({
                    name: "ValCrosshair_Error",
                    message: "Index Too Long",
                    data: index
                });
            }
        }
    }

    private _export(
        data: Array<ValCrosshair.Data.Any>,
        _export: Record<ValCrosshair.Category, Array<{ priority: number; path: string; value: string | number }>>
    ): Record<ValCrosshair.Category, Array<{ priority: number; path: string; value: string | number }>> {
        for (const item of data) {
            if ((item.type !== "String" && item.type !== "Number" && item.value.data === 1) || item.type === "String" || item.type === "Number" || item.type === "Color" || item.type === "Length") {
                const itemExport = this._export(item.components, {
                    "0": [],
                    A: [],
                    P: [],
                    S: []
                });

                _export["0"] = _export["0"].concat(itemExport["0"]);
                _export["A"] = _export["A"].concat(itemExport["A"]);
                _export["P"] = _export["P"].concat(itemExport["P"]);
                _export["S"] = _export["S"].concat(itemExport["S"]);
            }

            if (item.value.data !== item.value.default) {
                const _path = item.value.path.split(".");
                _export[<ValCrosshair.Category>_path[0]].push({
                    priority: item.value.priority,
                    path: _path[1],
                    value: item.value.data
                });
            }
        }

        return _export;
    }

    /**
     * Export Profile Code
     * @param {boolean} sort Sort by priority
     * @returns {string}
     */
    public export(sort = true): string {
        const _export = this._export(this.data, {
            "0": [],
            A: [],
            P: [],
            S: []
        });

        if (sort) {
            _export["0"].sort((a, b) => a.priority - b.priority);
            _export["A"].sort((a, b) => a.priority - b.priority);
            _export["P"].sort((a, b) => a.priority - b.priority);
            _export["S"].sort((a, b) => a.priority - b.priority);
        }

        const _sort: Record<ValCrosshair.Category, Array<string | number>> = {
            "0": [],
            A: [],
            P: [],
            S: []
        };
        _export["0"].map((a) => {
            _sort["0"].push(a.path);
            _sort["0"].push(a.value);
        });
        _export["A"].map((a) => {
            _sort["A"].push(a.path);
            _sort["A"].push(a.value);
        });
        _export["P"].map((a) => {
            _sort["P"].push(a.path);
            _sort["P"].push(a.value);
        });
        _export["S"].map((a) => {
            _sort["S"].push(a.path);
            _sort["S"].push(a.value);
        });

        const _return: Array<string> = [];
        if (_export["0"].length > 0) {
            _return.push(`0;${_sort["0"].join(";")}`);
        } else {
            _return.push(`0`);
        }
        if (_export["A"].length > 0) {
            _return.push(`A;${_sort["A"].join(";")}`);
        }
        if (_export["P"].length > 0) {
            _return.push(`P;${_sort["P"].join(";")}`);
        }
        if (_export["S"].length > 0) {
            _return.push(`S;${_sort["S"].join(";")}`);
        }

        return _return.join(";");
    }

    /**
     * Import Profile Code
     * @param {string} profileCode Crosshair Code
     * @returns {void}
     */
    public import(profileCode: string): void {
        const _code: Array<string> = profileCode.split(";");

        let currentCategory: ValCrosshair.Category = "0";
        let currentCode = "";
        let lastCodeType: "Key" | "Value" = "Value";

        if (_code.shift() !== "0") {
            throw new ValError({
                name: "ValCrosshair_Error",
                message: "Invalid Crosshair Code",
                data: profileCode
            });
        }

        for (const code of _code) {
            if (code === "P" || code === "A" || code === "S") {
                currentCategory = code;
                lastCodeType = "Value";
                continue;
            }

            if (lastCodeType === "Value") {
                currentCode = code;

                lastCodeType = "Key";
            } else {
                this.find((value, index) => {
                    if (value.value.path === `${currentCategory}.${currentCode}`) {
                        if (value.type === "Number") {
                            if ((<ValCrosshair.Data.Number>value).number.type === "Decimal") {
                                this.set(index, Number.parseFloat(Number.parseFloat(code).toFixed(2)));
                            } else {
                                this.set(index, Number.parseInt(code));
                            }
                        } else if (value.type === "Boolean") {
                            this.set(index, Number.parseInt(code));
                        }

                        return true;
                    }

                    return false;
                });

                lastCodeType = "Value";
            }
        }
    }
}
