const ValorantCrosshairColor = {
    0: 'White',
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
            OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair: Boolean,
        }
        InnerLines: ValoarntCrosshairLines;
        OuterLines: ValoarntCrosshairLines;
    };
    General: {
        Crosshair: {
            UseAdvancedOptions?: Boolean, //not support
        },
        Other: {
            ShowSpectatedPlayerCrosshair: Boolean,
            FadeCrosshairWithFiringError: Boolean,
            DisableCrosshair?: Boolean, //not useable
        }
    };
    SniperScope: {
        CenterDot: {
            Color: number,
            isEnable: Boolean, // not in valorant settings
            Opacity: number,
            Thickness: number,
        }
    }
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
            OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair: false,
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
        Crosshair: {

        },
        Other: {
            ShowSpectatedPlayerCrosshair: true,
            FadeCrosshairWithFiringError: true,
            DisableCrosshair: false,
        }
    },
    SniperScope: {
        CenterDot: {
            Color: 7,
            isEnable: true,
            Opacity: 0.75,
            Thickness: 1,
        }
    }
}

// Web Check: https://valofrags.com/crosshair-generator

/**
 * Valorant Crosshair Compiler
 * * Don't Code Like This Class (Make for understanding Valorant crosshair)
 */
class Crosshair {
    private myCrosshair: ValoarntCrosshair;

    public constructor() {
        this.myCrosshair = _defaultCrosshair;
    }

    public static toJSON(code: string): ValoarntCrosshair {
        const _CrosshairClass = new Crosshair();
        const codeArray = (code.split(';')).filter(x => x !== '0').filter(y => y !== 'P');

        // Basic

        if (codeArray.at(0) !== '0') {
            throw new Error('Invalid crosshair code');
        } else {
            codeArray.shift();

            if (codeArray.at(0) === 'c' && codeArray.at(1) === '1') { //c:1 = enable
                _CrosshairClass.myCrosshair.Primary.Crosshair.OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair = true;
                codeArray.shift();
                codeArray.shift();
            }

            if (codeArray.at(0) === 's' && codeArray.at(1) === '1') { //s:1 = enable
                _CrosshairClass.myCrosshair.General.Crosshair.UseAdvancedOptions = true;
                codeArray.shift();
                codeArray.shift();
            }
        }

        // Crosshair

        if (codeArray.at(0) !== 'P') {
            throw new Error('Invalid crosshair code');
        } else {
            codeArray.shift();

            // General //
            // General //

            // Color

            if (codeArray.at(0) === 'c') { // color
                _CrosshairClass.myCrosshair.Primary.Crosshair.CrosshairColor = Number(codeArray.at(1));
                codeArray.shift();
                codeArray.shift();
            }

            // Out Line

            if (codeArray.at(0) !== 'h' && codeArray.at(1) === '0') { // h:0 = disable
                if (codeArray.at(0) === 't') { // thickness
                    _CrosshairClass.myCrosshair.Primary.Crosshair.OutLine.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === 'o') { // opacity
                    _CrosshairClass.myCrosshair.Primary.Crosshair.OutLine.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
            } else {
                _CrosshairClass.myCrosshair.Primary.Crosshair.OutLine.isEnable = false;
                codeArray.shift();
                codeArray.shift();
            }

            // Center Dot

            if (codeArray.at(0) === 'd' && codeArray.at(1) === '1') { // d:1 = enable
                _CrosshairClass.myCrosshair.Primary.Crosshair.CenterDot.isEnable = true;
                codeArray.shift();
                codeArray.shift();

                if (codeArray.at(0) === 'z') { // thickness
                    _CrosshairClass.myCrosshair.Primary.Crosshair.CenterDot.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === 'a') { // opacity
                    _CrosshairClass.myCrosshair.Primary.Crosshair.CenterDot.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
            }

            // Mores

            if (codeArray.at(0) === 'f' && codeArray.at(1) === '0') { //FadeCrosshairWithFiringError
                _CrosshairClass.myCrosshair.General.Other.FadeCrosshairWithFiringError = false;
                codeArray.shift();
                codeArray.shift();
            }

            if (codeArray.at(0) === 's' && codeArray.at(1) === '0') { //ShowSpectatedPlayerCrosshair
                _CrosshairClass.myCrosshair.General.Other.ShowSpectatedPlayerCrosshair = false;
                codeArray.shift();
                codeArray.shift();
            }

            if (codeArray.at(0) === 'm' && codeArray.at(1) === '1') { //OverrideFiringErrorOffsetWithCrosshairOffset
                _CrosshairClass.myCrosshair.Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset = true;
                codeArray.shift();
                codeArray.shift();
            }

            // Inner Lines //
            // Inner Lines //

            if (codeArray.at(0) === '0b') { //0b:0 = disable
                _CrosshairClass.myCrosshair.Primary.InnerLines.isEnable = false;
                codeArray.shift();
                codeArray.shift();

            } else {

                // General

                if (codeArray.at(0) === '0t') { // thickness
                    _CrosshairClass.myCrosshair.Primary.InnerLines.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '0l') { // length
                    _CrosshairClass.myCrosshair.Primary.InnerLines.Length = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '0o') { // offset
                    _CrosshairClass.myCrosshair.Primary.InnerLines.Offset = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '0a') { // opacity
                    _CrosshairClass.myCrosshair.Primary.InnerLines.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                // Error

                // isEnale

                if (codeArray.at(0) === '0m' && codeArray.at(1) === '1') { // m:1 = enable
                    _CrosshairClass.myCrosshair.Primary.InnerLines.MovementError.isEnable = true
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '0f' && codeArray.at(1) === '0') { // f:0 = enable
                    _CrosshairClass.myCrosshair.Primary.InnerLines.FiringError.isEnable = false
                    codeArray.shift();
                    codeArray.shift();
                }

                // Multiplier

                if (codeArray.at(0) === '0s') { // m - multiplier
                    _CrosshairClass.myCrosshair.Primary.InnerLines.MovementError.Multiplier = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '0e') { // f - multiplier
                    _CrosshairClass.myCrosshair.Primary.InnerLines.FiringError.Multiplier = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
            }


            // Outer Lines //
            // Outer Lines //

            if (codeArray.at(0) === '1b') { //0b:0 = disable
                _CrosshairClass.myCrosshair.Primary.OuterLines.isEnable = false;
                codeArray.shift();
                codeArray.shift();

            } else {

                // General

                if (codeArray.at(0) === '1t') { // thickness
                    _CrosshairClass.myCrosshair.Primary.OuterLines.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '1l') { // length
                    _CrosshairClass.myCrosshair.Primary.OuterLines.Length = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '1o') { // offset
                    _CrosshairClass.myCrosshair.Primary.OuterLines.Offset = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '1a') { // opacity
                    _CrosshairClass.myCrosshair.Primary.OuterLines.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                // Error

                // isEnale

                if (codeArray.at(0) === '1m' && codeArray.at(1) === '1') { // m:1 = enable
                    _CrosshairClass.myCrosshair.Primary.OuterLines.MovementError.isEnable = true
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '1f' && codeArray.at(1) === '0') { // f:0 = enable
                    _CrosshairClass.myCrosshair.Primary.OuterLines.FiringError.isEnable = false
                    codeArray.shift();
                    codeArray.shift();
                }

                // Multiplier

                if (codeArray.at(0) === '1s') { // m - multiplier
                    _CrosshairClass.myCrosshair.Primary.OuterLines.MovementError.Multiplier = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === '1e') { // f - multiplier
                    _CrosshairClass.myCrosshair.Primary.OuterLines.FiringError.Multiplier = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
            }
        }

        // Advanced

        // Aim Down Sights

        if (code.at(0) === 'S') {
            // Work In Progress
        }

        // Snipers Scope

        if (code.at(0) === 'S') {
            codeArray.shift();

            if (codeArray.at(0) === 'd' && codeArray.at(1) === '0') { //d:0 = disable
                _CrosshairClass.myCrosshair.SniperScope.CenterDot.isEnable = false;
                codeArray.shift();
                codeArray.shift();

            } else {
                if (codeArray.at(0) === 'c') { // color
                    _CrosshairClass.myCrosshair.SniperScope.CenterDot.Color = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === 's') { // thickness
                    _CrosshairClass.myCrosshair.SniperScope.CenterDot.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

                if (codeArray.at(0) === 'o') { // opacity
                    _CrosshairClass.myCrosshair.SniperScope.CenterDot.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }

            }
        }

        '0;s;1;S;s;3.071;o;0.429'

        // End

        return _CrosshairClass.myCrosshair;
    }
}

export { Crosshair };

const _crosshair = Crosshair.toJSON('0;P;c;6;t;4;o;0.152;d;1;z;5;a;0.141;s;0;m;1;0b;0;1b;0')
console.log(_crosshair.General, _crosshair.Primary);