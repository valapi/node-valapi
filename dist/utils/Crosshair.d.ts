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
            OverrideAll_BRABRABRA?: undefined;
        };
        InnerLines: ValoarntCrosshairLines;
        OuterLines: ValoarntCrosshairLines;
    };
    General: {
        Crosshair: {
            UseAdvancedOptions?: Boolean;
        };
        Other: {
            ShowSpectatedPlayerCrosshair: Boolean;
            FadeCrosshairWithFiringError: Boolean;
            DisableCrosshair?: Boolean;
        };
    };
}
declare class CrosshairClass {
    myCrosshair: ValoarntCrosshair;
    constructor();
    letgo(code: string): void;
}
export { CrosshairClass as Crosshair };
//# sourceMappingURL=Crosshair.d.ts.map