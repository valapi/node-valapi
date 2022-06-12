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
interface ValoarntCrosshairParse {
    "0": {
        "p"?: number;
        "c"?: number;
        "s"?: number;
    };
    "P"?: {
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
    };
    "A"?: {
        "c"?: number;
        "h"?: number;
        "t"?: number;
        "o"?: number;
        "d"?: number;
        "z"?: number;
        "a"?: number;
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
    };
    "S"?: {
        "d"?: number;
        "c"?: number;
        "s"?: number;
        "o"?: number;
    };
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
/**
 * Valorant Crosshair Compiler
 * * Don't Code Like This Class (Make for understanding Valorant crosshair)
 */
declare class Crosshair {
    private normalCode;
    private myCrosshair;
    constructor(code?: string);
    toJSON(): ValoarntCrosshair;
    parse(): ValoarntCrosshairParse;
}
export { Crosshair };
//# sourceMappingURL=Crosshair.d.ts.map