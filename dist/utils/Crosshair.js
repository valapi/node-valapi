"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crosshair = void 0;
const ValorantCrosshairColor = {
    0: 'White',
    1: 'Green',
    2: 'Yellow Green',
    3: 'Green Yellow',
    4: 'Yellow',
    5: 'Cyan',
    6: 'Pink',
    7: 'Red',
};
const _defaultCrosshair = {
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
        Crosshair: {},
        Other: {
            ShowSpectatedPlayerCrosshair: true,
            FadeCrosshairWithFiringError: true,
        }
    }
};
// Web Check: https://valofrags.com/crosshair-generator
class CrosshairClass {
    constructor() {
        this.myCrosshair = _defaultCrosshair;
    }
    letgo(code) {
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
            }
            else {
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
                this.myCrosshair.General.Other.FadeCrosshairWithFiringError = false;
                codeArray.shift();
                codeArray.shift();
            }
            if (codeArray.at(0) === 's' && codeArray.at(1) === '0') { //ShowSpectatedPlayerCrosshair
                this.myCrosshair.General.Other.ShowSpectatedPlayerCrosshair = false;
                codeArray.shift();
                codeArray.shift();
            }
            if (codeArray.at(0) === 'm' && codeArray.at(1) === '1') { //OverrideFiringErrorOffsetWithCrosshairOffset
                this.myCrosshair.Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset = true;
                codeArray.shift();
                codeArray.shift();
            }
            /**
             * Inner Lines
             */
            if (codeArray.at(0) === '0b') { //0b:0 = disable
                this.myCrosshair.Primary.InnerLines.isEnable = false;
                codeArray.shift();
                codeArray.shift();
            }
            else {
                // General
                if (codeArray.at(0) === '0t') { // thickness
                    this.myCrosshair.Primary.InnerLines.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '0l') { // length
                    this.myCrosshair.Primary.InnerLines.Length = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '0o') { // offset
                    this.myCrosshair.Primary.InnerLines.Offset = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '0a') { // opacity
                    this.myCrosshair.Primary.InnerLines.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                // Error
                // isEnale
                if (codeArray.at(0) === '0m' && codeArray.at(1) === '1') { // m:1 = enable
                    this.myCrosshair.Primary.InnerLines.MovementError.isEnable = true;
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '0f' && codeArray.at(1) === '0') { // f:0 = enable
                    this.myCrosshair.Primary.InnerLines.FiringError.isEnable = false;
                    codeArray.shift();
                    codeArray.shift();
                }
                // Multiplier
                if (codeArray.at(0) === '0s') { // m - multiplier
                    this.myCrosshair.Primary.InnerLines.MovementError.Multiplier = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '0e') { // f - multiplier
                    this.myCrosshair.Primary.InnerLines.FiringError.Multiplier = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
            }
            /**
             * Outer Lines
             */
            if (codeArray.at(0) === '1b') { //0b:0 = disable
                this.myCrosshair.Primary.OuterLines.isEnable = false;
                codeArray.shift();
                codeArray.shift();
            }
            else {
                // General
                if (codeArray.at(0) === '1t') { // thickness
                    this.myCrosshair.Primary.OuterLines.Thickness = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '1l') { // length
                    this.myCrosshair.Primary.OuterLines.Length = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '1o') { // offset
                    this.myCrosshair.Primary.OuterLines.Offset = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '1a') { // opacity
                    this.myCrosshair.Primary.OuterLines.Opacity = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                // Error
                // isEnale
                if (codeArray.at(0) === '1m' && codeArray.at(1) === '1') { // m:1 = enable
                    this.myCrosshair.Primary.OuterLines.MovementError.isEnable = true;
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '1f' && codeArray.at(1) === '0') { // f:0 = enable
                    this.myCrosshair.Primary.OuterLines.FiringError.isEnable = false;
                    codeArray.shift();
                    codeArray.shift();
                }
                // Multiplier
                if (codeArray.at(0) === '1s') { // m - multiplier
                    this.myCrosshair.Primary.OuterLines.MovementError.Multiplier = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
                if (codeArray.at(0) === '1e') { // f - multiplier
                    this.myCrosshair.Primary.OuterLines.FiringError.Multiplier = Number(codeArray.at(1));
                    codeArray.shift();
                    codeArray.shift();
                }
            }
        }
    }
}
exports.Crosshair = CrosshairClass;
const _crosshair = new CrosshairClass();
_crosshair.letgo('0;P;c;6;t;4;o;0.152;d;1;z;5;a;0.141;s;0;m;1;0b;0;1b;0');
console.log(_crosshair.myCrosshair.Primary, _crosshair.myCrosshair.General);
//# sourceMappingURL=Crosshair.js.map