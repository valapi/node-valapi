declare namespace Crosshair {
    interface ParsePrimary {
        "c"?: number;
        "u"?: string;
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
        "0v"?: number;
        "0g"?: number;
        "0o"?: number;
        "0a"?: number;
        "0m"?: number;
        "0f"?: number;
        "0s"?: number;
        "0e"?: number;
        "1b"?: number;
        "1t"?: number;
        "1l"?: number;
        "1v"?: number;
        "1g"?: number;
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
            "t"?: string;
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
        Length: {
            Value: number;
            isChain: boolean;
            SecondValue: number;
        };
        Thickness: number;
        Offset: number;
        MovementError: Crosshair.LinesError;
        FiringError: Crosshair.LinesError;
    }
    interface Crosshair {
        Primary: {
            Crosshair: {
                isHexCrosshairColor: boolean;
                CrosshairColor: string;
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
                isHexCrosshairColor: boolean;
                CrosshairColor: string;
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
                isHexColor: boolean;
                Color: string;
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
            isHexCrosshairColor: boolean;
            CrosshairColor: string;
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
            isHexCrosshairColor: boolean;
            CrosshairColor: string;
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
            isHexColor: boolean;
            Color: string;
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
