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
        };
    };
    General: {
        ShowSpectatedPlayerCrosshair: Boolean;
        FadeCrosshairWithFiringError: Boolean;
    };
}
declare class CrosshairClass {
    myCrosshair: ValoarntCrosshair;
    constructor();
    letgo(code: string): void;
}
export { CrosshairClass as Crosshair };
//# sourceMappingURL=Crosshair.d.ts.map