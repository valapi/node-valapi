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
        }
    },
    General: {
        ShowSpectatedPlayerCrosshair: true,
        FadeCrosshairWithFiringError: true,
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
        }
    }
}
exports.Crosshair = CrosshairClass;
const _crosshair = new CrosshairClass();
_crosshair.letgo('0;P;c;6;t;3;o;0.3;s;0;m;1;0t;5;0l;17;0o;1;0a;0.224;1t;6;1l;5;1o;13;1a;0.536');
console.log(_crosshair.myCrosshair.Primary, _crosshair.myCrosshair.General);
//# sourceMappingURL=Crosshair.js.map