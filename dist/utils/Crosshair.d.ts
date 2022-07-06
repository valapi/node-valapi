interface ValoarntCrosshairParsePrimary {
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
interface ValoarntCrosshairParse {
    "0": {
        "p"?: number;
        "c"?: number;
        "s"?: number;
    };
    "P"?: ValoarntCrosshairParsePrimary;
    "A"?: ValoarntCrosshairParsePrimary;
    "S"?: {
        "d"?: number;
        "c"?: number;
        "s"?: number;
        "o"?: number;
    };
}
interface ValoarntCrosshairLinesError {
    isEnable: Boolean;
    Multiplier: number;
}
interface ValoarntCrosshairLines {
    isEnable: Boolean;
    Opacity: number;
    Length: number;
    Thickness: number;
    Offset: number;
    MovementError: ValoarntCrosshairLinesError;
    FiringError: ValoarntCrosshairLinesError;
}
interface ValoarntCrosshair {
    Primary: {
        Crosshair: {
            CrosshairColor: number;
            OutLine: {
                isEnable: Boolean;
                Opacity: number;
                Thickness: number;
            };
            CenterDot: {
                isEnable: Boolean;
                Opacity: number;
                Thickness: number;
            };
            OverrideFiringErrorOffsetWithCrosshairOffset: Boolean;
            OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair: Boolean;
        };
        InnerLines: ValoarntCrosshairLines;
        OuterLines: ValoarntCrosshairLines;
    };
    AimDownSights: {
        CopyPrimaryCrosshair: Boolean;
        Crosshair: {
            CrosshairColor: number;
            OutLine: {
                isEnable: Boolean;
                Opacity: number;
                Thickness: number;
            };
            CenterDot: {
                isEnable: Boolean;
                Opacity: number;
                Thickness: number;
            };
            OverrideFiringErrorOffsetWithCrosshairOffset: Boolean;
        };
        InnerLines: ValoarntCrosshairLines;
        OuterLines: ValoarntCrosshairLines;
    };
    General: {
        Crosshair: {
            UseAdvancedOptions: Boolean;
        };
        Other: {
            ShowSpectatedPlayerCrosshair: Boolean;
            FadeCrosshairWithFiringError: Boolean;
            DisableCrosshair?: Boolean;
        };
    };
    SniperScope: {
        CenterDot: {
            Color: number;
            isEnable: Boolean;
            Opacity: number;
            Thickness: number;
        };
    };
}
declare const ValorantCrosshairColor: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
};
declare const _defaultCrosshair: ValoarntCrosshair;
/**
 * Valorant Crosshair Compiler
 * * Don't Code Like This Class (Make for understanding Valorant crosshair)
 */
declare class Crosshair {
    private code;
    private isCrosshairParse;
    General: {
        Crosshair: {
            UseAdvancedOptions: Boolean;
        };
        Other: {
            ShowSpectatedPlayerCrosshair: Boolean;
            FadeCrosshairWithFiringError: Boolean;
            DisableCrosshair?: Boolean | undefined;
        };
    };
    Primary: {
        Crosshair: {
            CrosshairColor: number;
            OutLine: {
                isEnable: Boolean;
                Opacity: number;
                Thickness: number;
            };
            CenterDot: {
                isEnable: Boolean;
                Opacity: number;
                Thickness: number;
            };
            OverrideFiringErrorOffsetWithCrosshairOffset: Boolean;
            OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair: Boolean;
        };
        InnerLines: ValoarntCrosshairLines;
        OuterLines: ValoarntCrosshairLines;
    };
    AimDownSights: {
        CopyPrimaryCrosshair: Boolean;
        Crosshair: {
            CrosshairColor: number;
            OutLine: {
                isEnable: Boolean;
                Opacity: number;
                Thickness: number;
            };
            CenterDot: {
                isEnable: Boolean;
                Opacity: number;
                Thickness: number;
            };
            OverrideFiringErrorOffsetWithCrosshairOffset: Boolean;
        };
        InnerLines: ValoarntCrosshairLines;
        OuterLines: ValoarntCrosshairLines;
    };
    SniperScope: {
        CenterDot: {
            Color: number;
            isEnable: Boolean;
            Opacity: number;
            Thickness: number;
        };
    };
    constructor(code?: string);
    private generateJsonCode;
    private toJsonParse;
    private fromJson;
    /**
     *
     * @returns {ValoarntCrosshair}
     */
    toJson(): ValoarntCrosshair;
    /**
     *
     * @returns {string} Crosshair Code
     */
    toString(): string;
    static fromJson(crosshair: ValoarntCrosshair): Crosshair;
    static fromJsonToString(crosshair: ValoarntCrosshair): string;
    static fromString(code: string): Crosshair;
    static fromStringToJson(code: string): ValoarntCrosshair;
}
export { Crosshair, ValorantCrosshairColor as ValorantCrosshairColor, _defaultCrosshair as ValorantDefaultCrosshair };
export type { ValoarntCrosshairParsePrimary, ValoarntCrosshairParse, ValoarntCrosshairLinesError, ValoarntCrosshairLines, ValoarntCrosshair };
//# sourceMappingURL=Crosshair.d.ts.map