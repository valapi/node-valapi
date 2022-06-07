const ValorantCrosshairColor = {
    0: 'White', // default
    1: 'Green',
    2: 'Yellow Green',
    3: 'Green Yellow',
    4: 'Yellow',
    5: 'Cyan',
    6: 'Pink',
    7: 'Red',
}

// interface

interface ValoarntCrosshairLinesError {
    isEnable: Boolean; // not in valorant settings
    Multiplier: number;
}

interface ValoarntCrosshairLines {
    isEnable: Boolean, // not in valorant settings
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
            CrosshairColor: number,
            OutLine: {
                isEnable: Boolean, // not in valorant settings
                Opacity: number,
                Thickness: number,
            },
            CenterDot: {
                isEnable: Boolean, // not in valorant settings
                Opacity: number,
                Thickness: number,
            },
            OverrideFiringErrorOffsetWithCrosshairOffset: Boolean,
            OverrideAll_BRABRABRA?: undefined //unknown
        }
        InnerLines: ValoarntCrosshairLines;
        OuterLines: ValoarntCrosshairLines;
    };
    General: {
        ShowSpectatedPlayerCrosshair: Boolean,
        FadeCrosshairWithFiringError: Boolean,
    };
}

const _defaultCrosshair: ValoarntCrosshair = {
    Primary: {
        Crosshair: {
            CrosshairColor: 0,
            OutLine: {
                isEnable: true,
                Opacity: 0.5,
                Thickness: 1,
            },
            CenterDot: {
                isEnable: false,
                Opacity: 1,
                Thickness: 2,
            },
            OverrideFiringErrorOffsetWithCrosshairOffset: false,
        },
        InnerLines: {
            isEnable: true,
            Opacity: 0.8,
            Length: 6,
            Thickness: 2,
            Offset: 3,
            MovementError: {
                isEnable: false,
                Multiplier: 1,
            },
            FiringError: {
                isEnable: true,
                Multiplier: 1,
            }
        },
        OuterLines: {
            isEnable: true,
            Opacity: 0.35,
            Length: 2,
            Thickness: 2,
            Offset: 10,
            MovementError: {
                isEnable: true,
                Multiplier: 1,
            },
            FiringError: {
                isEnable: true,
                Multiplier: 1,
            }
        },
    },
    General: {
        ShowSpectatedPlayerCrosshair: true,
        FadeCrosshairWithFiringError: true,
    }
}

// Web Check: https://valofrags.com/crosshair-generator

class CrosshairClass {
    public myCrosshair: ValoarntCrosshair;

    constructor() {
        this.myCrosshair = _defaultCrosshair;
    }

    public letgo(code: string) {
        const codeArray = code.split(';');

        // Basic

        if (codeArray.at(0) !== '0') {
            throw new Error('Invalid crosshair code');
        }

        codeArray.shift();

        if (codeArray.at(0) === 'P') {
            codeArray.shift();

            /**
             * General
             */

            // Color

            if (codeArray.at(0) === 'c') {
                this.myCrosshair.Primary.Crosshair.CrosshairColor = Number(codeArray.at(1));
                codeArray.shift();
                codeArray.shift();
            }

            // Out Line

            if (codeArray.at(0) !== 'h') { // h:0 = disable
                if (codeArray.at(0) === 't') { // thickness
                    this.myCrosshair.Primary.Crosshair.OutLine.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === 'o') { // opacity
                    this.myCrosshair.Primary.Crosshair.OutLine.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
            } else {
                this.myCrosshair.Primary.Crosshair.OutLine.isEnable = false;
                codeArray.shift();
                codeArray.shift();
            }

            // Center Dot

            if (codeArray.at(0) === 'd' && codeArray.at(1) === '1') { // d:1 = enable
                this.myCrosshair.Primary.Crosshair.CenterDot.isEnable = true;
                codeArray.shift();
                codeArray.shift();

                if (codeArray.at(0) === 'z') { // thickness
                    this.myCrosshair.Primary.Crosshair.CenterDot.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === 'a') { // opacity
                    this.myCrosshair.Primary.Crosshair.CenterDot.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
            }

            // Mores //

            if (codeArray.at(0) === 'f' && codeArray.at(1) === '0') { //FadeCrosshairWithFiringError
                this.myCrosshair.General.FadeCrosshairWithFiringError = false;
                codeArray.shift();
                codeArray.shift();
            }

            if (codeArray.at(0) === 's' && codeArray.at(1) === '0') { //ShowSpectatedPlayerCrosshair
                this.myCrosshair.General.ShowSpectatedPlayerCrosshair = false;
                codeArray.shift();
                codeArray.shift();
            }

            if (codeArray.at(0) === 'm' && codeArray.at(1) === '1') { //OverrideFiringErrorOffsetWithCrosshairOffset
                this.myCrosshair.Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset = true;
                codeArray.shift();
                codeArray.shift();
            }

            /**
             * Inner
             */

            '0t;7;0l;0;0o;1;0a;0.682;'
            '1t;7;1l;8;1o;19;1a;0.213'

        }
    }
}

export { CrosshairClass as Crosshair };

const _crosshair = new CrosshairClass();

_crosshair.letgo('0t;5;0l;17;0o;1;0a;0.224;1t;6;1l;5;1o;13;1a;0.536');
console.log(_crosshair.myCrosshair.Primary, _crosshair.myCrosshair.General);