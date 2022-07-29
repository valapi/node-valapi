declare namespace Crosshair {
    interface ParsePrimary {
        "c"?: number;
        "h"?: number;
        "t"?: number;
        "o"?: number;
        "d"?: number;
        "z"?: number;
        "a"?: number;
        "f"?: number;
        "s"?: number;
        "m"?: number;
        "0b"?: number;
        "0t"?: number;
        "0l"?: number;
        "0o"?: number;
        "0a"?: number;
        "0m"?: number;
        "0f"?: number;
        "0s"?: number;
        "0e"?: number;
        "1b"?: number;
        "1t"?: number;
        "1l"?: number;
        "1o"?: number;
        "1a"?: number;
        "1m"?: number;
        "1f"?: number;
        "1s"?: number;
        "1e"?: number;
    }
    interface Parse {
        "0": {
            "p"?: number;
            "c"?: number;
            "s"?: number;
        };
        "P"?: Crosshair.ParsePrimary;
        "A"?: Crosshair.ParsePrimary;
        "S"?: {
            "d"?: number;
            "c"?: number;
            "s"?: number;
            "o"?: number;
        };
    }
    interface LinesError {
        isEnable: boolean;
        Multiplier: number;
    }
    interface Lines {
        isEnable: boolean;
        Opacity: number;
        Length: number;
        Thickness: number;
        Offset: number;
        MovementError: Crosshair.LinesError;
        FiringError: Crosshair.LinesError;
    }
    interface Crosshair {
        Primary: {
            Crosshair: {
                CrosshairColor: number;
                OutLine: {
                    isEnable: boolean;
                    Opacity: number;
                    Thickness: number;
                };
                CenterDot: {
                    isEnable: boolean;
                    Opacity: number;
                    Thickness: number;
                };
                OverrideFiringErrorOffsetWithCrosshairOffset: boolean;
                OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair: boolean;
            };
            InnerLines: Crosshair.Lines;
            OuterLines: Crosshair.Lines;
        };
        AimDownSights: {
            CopyPrimaryCrosshair: boolean;
            Crosshair: {
                CrosshairColor: number;
                OutLine: {
                    isEnable: boolean;
                    Opacity: number;
                    Thickness: number;
                };
                CenterDot: {
                    isEnable: boolean;
                    Opacity: number;
                    Thickness: number;
                };
                OverrideFiringErrorOffsetWithCrosshairOffset: boolean;
            };
            InnerLines: Crosshair.Lines;
            OuterLines: Crosshair.Lines;
        };
        General: {
            Crosshair: {
                UseAdvancedOptions: boolean;
            };
            Other: {
                ShowSpectatedPlayerCrosshair: boolean;
                FadeCrosshairWithFiringError: boolean;
                DisableCrosshair?: boolean;
            };
        };
        SniperScope: {
            CenterDot: {
                Color: number;
                isEnable: boolean;
                Opacity: number;
                Thickness: number;
            };
        };
    }
}
/**
 * Valorant Crosshair Compiler
 * * Don't Code Like This Class (Make for understanding Valorant crosshair)
 */
declare class Crosshair {
    private code;
    private isCrosshairParse;
    General: {
        Crosshair: {
            UseAdvancedOptions: boolean;
        };
        Other: {
            ShowSpectatedPlayerCrosshair: boolean;
            FadeCrosshairWithFiringError: boolean;
            DisableCrosshair?: boolean | undefined;
        };
    };
    Primary: {
        Crosshair: {
            CrosshairColor: number;
            OutLine: {
                isEnable: boolean;
                Opacity: number;
                Thickness: number;
            };
            CenterDot: {
                isEnable: boolean;
                Opacity: number;
                Thickness: number;
            };
            OverrideFiringErrorOffsetWithCrosshairOffset: boolean;
            OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair: boolean;
        };
        InnerLines: Crosshair.Lines;
        OuterLines: Crosshair.Lines;
    };
    AimDownSights: {
        CopyPrimaryCrosshair: boolean;
        Crosshair: {
            CrosshairColor: number;
            OutLine: {
                isEnable: boolean;
                Opacity: number;
                Thickness: number;
            };
            CenterDot: {
                isEnable: boolean;
                Opacity: number;
                Thickness: number;
            };
            OverrideFiringErrorOffsetWithCrosshairOffset: boolean;
        };
        InnerLines: Crosshair.Lines;
        OuterLines: Crosshair.Lines;
    };
    SniperScope: {
        CenterDot: {
            Color: number;
            isEnable: boolean;
            Opacity: number;
            Thickness: number;
        };
    };
    /**
     *
     * @param {string} code Crosshair Code
     */
    constructor(code?: string);
    private generateJsonCode;
    private toJsonParse;
    private fromJson;
    /**
     *
     * @returns {ValoarntCrosshair} Json Valorant Crosshair
     */
    toJson(): Crosshair.Crosshair;
    /**
     *
     * @returns {string} Crosshair Code
     */
    toString(): string;
    static readonly Default: Crosshair.Crosshair;
    static readonly Color: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    };
    /**
     *
     * @param {Crosshair.Crosshair} crosshair Json Valorant Crosshair
     * @returns {Crosshair}
     */
    static fromJson(crosshair: Crosshair.Crosshair): Crosshair;
    /**
     *
     * @param {Crosshair.Crosshair} crosshair Json Valorant Crosshair
     * @returns {string} Crosshair Code
     */
    static fromJsonToString(crosshair: Crosshair.Crosshair): string;
    /**
     *
     * @param {string} code Crosshair Code
     * @returns {Crosshair}
     */
    static fromString(code: string): Crosshair;
    /**
     *
     * @param {string} code Crosshair Code
     * @returns {Crosshair.Crosshair} Json Valorant Crosshair
     */
    static fromStringToJson(code: string): Crosshair.Crosshair;
}
export { Crosshair };
