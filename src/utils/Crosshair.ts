//import

import { CrosshairColor } from "@valapi/lib";

//interface

namespace Crosshair {
    export interface ParsePrimary {
        // Color
        "c"?: number;
        "u"?: string; //<--- Custom Color
        // Out Line
        "h"?: number;
        "t"?: number;
        "o"?: number;
        // Center Dot
        "d"?: number;
        "z"?: number;
        "a"?: number;
        // Mores
        "f"?: number;
        "s"?: number;
        "m"?: number;
        // Inner Lines
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
        // Outer Lines
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

    export interface Parse {
        // Others
        "0": {
            "p"?: number,
            "c"?: number,
            "s"?: number,
        };
        // Primary
        "P"?: Crosshair.ParsePrimary;
        // Aim Down Sights
        "A"?: Crosshair.ParsePrimary;
        // Sniper Scope
        "S"?: {
            "d"?: number,
            "c"?: number,
            "t"?: string, //<--- Custom Color
            "s"?: number,
            "o"?: number,
        };
    }

    export interface LinesError {
        isEnable: boolean; // not in valorant settings
        Multiplier: number;
    }

    export interface Lines {
        isEnable: boolean, // not in valorant settings
        Opacity: number;
        Length: { // base on valorant settings
            Value: number;
            isChain: boolean;
            SecondValue: number;
        };
        Thickness: number;
        Offset: number;
        MovementError: Crosshair.LinesError;
        FiringError: Crosshair.LinesError;
    }

    export interface Crosshair {
        Primary: {
            Crosshair: {
                isHexCrosshairColor: boolean, // not in valorant settings
                CrosshairColor: string,
                OutLine: {
                    isEnable: boolean, // not in valorant settings
                    Opacity: number,
                    Thickness: number,
                },
                CenterDot: {
                    isEnable: boolean, // not in valorant settings
                    Opacity: number,
                    Thickness: number,
                },
                OverrideFiringErrorOffsetWithCrosshairOffset: boolean,
                OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair: boolean,
            }
            InnerLines: Crosshair.Lines,
            OuterLines: Crosshair.Lines,
        };
        AimDownSights: {
            CopyPrimaryCrosshair: boolean,
            Crosshair: {
                isHexCrosshairColor: boolean, // not in valorant settings
                CrosshairColor: string,
                OutLine: {
                    isEnable: boolean, // not in valorant settings
                    Opacity: number,
                    Thickness: number,
                },
                CenterDot: {
                    isEnable: boolean, // not in valorant settings
                    Opacity: number,
                    Thickness: number,
                },
                OverrideFiringErrorOffsetWithCrosshairOffset: boolean,
            }
            InnerLines: Crosshair.Lines,
            OuterLines: Crosshair.Lines,
        };
        General: {
            Crosshair: {
                UseAdvancedOptions: boolean,
            },
            Other: {
                ShowSpectatedPlayerCrosshair: boolean,
                FadeCrosshairWithFiringError: boolean,
                DisableCrosshair?: boolean, //not useable
            },
        };
        SniperScope: {
            CenterDot: {
                isHexColor: boolean, // not in valorant settings
                Color: string,
                isEnable: boolean, // not in valorant settings
                Opacity: number,
                Thickness: number,
            },
        };
    }
}

//class

const _defaultCrosshair: Crosshair.Crosshair = {
    Primary: {
        Crosshair: {
            isHexCrosshairColor: false,
            CrosshairColor: "0",
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
            Length: {
                Value: 6,
                isChain: false,
                SecondValue: 6,
            },
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
            Length: {
                Value: 2,
                isChain: false,
                SecondValue: 2,
            },
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
    AimDownSights: {
        CopyPrimaryCrosshair: true,
        Crosshair: {
            isHexCrosshairColor: false,
            CrosshairColor: "0",
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
            Length: {
                Value: 6,
                isChain: false,
                SecondValue: 6,
            },
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
            Length: {
                Value: 2,
                isChain: false,
                SecondValue: 2,
            },
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
            UseAdvancedOptions: false,
        },
        Other: {
            ShowSpectatedPlayerCrosshair: true,
            FadeCrosshairWithFiringError: true,
            DisableCrosshair: false,
        }
    },
    SniperScope: {
        CenterDot: {
            isHexColor: false,
            Color: "7",
            isEnable: true,
            Opacity: 0.75,
            Thickness: 1,
        }
    }
};

function generateNewJSON<ReturnType = object>(myJSON: ReturnType): ReturnType {
    return JSON.parse(JSON.stringify(myJSON));
}

/**
 * Valorant Crosshair Compiler
 * * Don't Code Like This Class (Make for understanding Valorant crosshair)
 */
class Crosshair {
    private code: string;

    public General = generateNewJSON(_defaultCrosshair.General);
    public Primary = generateNewJSON(_defaultCrosshair.Primary);
    public AimDownSights = generateNewJSON(_defaultCrosshair.AimDownSights);
    public SniperScope = generateNewJSON(_defaultCrosshair.SniperScope);

    /**
     * 
     * @param {string} code Crosshair Code
     */
    public constructor(code = "0") {
        this.code = code;

        this.toJson();
    }

    private generateJsonCode(): Crosshair.Crosshair {
        return {
            General: this.General,
            Primary: this.Primary,
            AimDownSights: this.AimDownSights,
            SniperScope: this.SniperScope,
        };
    }

    private toJsonParse(): Crosshair.Parse {
        const codeArray = String(this.code).split(';');
        let myJSON = `{`;

        // start

        if (codeArray.at(0) !== '0') {
            throw new Error(
                'Invalid code'
            );
        } else {
            myJSON += '"0":{';
            codeArray.shift();
        }

        // parse

        for (const ofCode in codeArray) {
            const code = codeArray[ofCode];

            if (String(Number(code)) === code) {
                myJSON += `${code}`;
                continue;
            }

            if (code.toUpperCase() === code) {
                // upper case
                
                if (String(code).endsWith("FF")) {
                    if (myJSON.endsWith(`"c":${CrosshairColor.to["Custom"]},"u":`) || myJSON.endsWith(`"c":${CrosshairColor.to["Custom"]},"t":`)) {
                        // hex color
        
                        myJSON += `"${code}"`;
                        continue;
                    }
                }

                myJSON += `},"${code}":{`;
            } else {
                // lower case

                if (!myJSON.endsWith('{')) {
                    myJSON += `,`;
                }

                myJSON += `"${code}":`;
            }
        }

        myJSON += `}}`;
        return JSON.parse(myJSON) as Crosshair.Parse;
    }

    private fromJson(crosshair: Crosshair.Crosshair): void {
        this.General = crosshair.General;
        this.Primary = crosshair.Primary;
        this.AimDownSights = crosshair.AimDownSights;
        this.SniperScope = crosshair.SniperScope;
    }

    /**
     * 
     * @returns {ValoarntCrosshair} Json Valorant Crosshair
     */
    public toJson(): Crosshair.Crosshair {
        const myCode: Crosshair.Parse = this.toJsonParse();

        // Basic

        if (!myCode[0]) {
            throw new Error(
                'Invalid crosshair code'
            );
        } else {

            if (myCode[0].p === 0) { //p:0 = disable
                this.AimDownSights.CopyPrimaryCrosshair = false;
            }

            if (myCode[0].c === 1) { //c:1 = enable
                this.Primary.Crosshair.OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair = true;
            }

            if (myCode[0].s === 1) { //s:1 = enable
                this.General.Crosshair.UseAdvancedOptions = true;
            }
        }

        // Crosshair

        if (myCode.P) {

            // General //
            // General //

            // Color

            if (myCode.P.c) { // color
                if (myCode.P.c == CrosshairColor.to["Custom"] && myCode.P.u) { //custom
                    this.Primary.Crosshair.CrosshairColor = myCode.P.u;
                } else {
                    this.Primary.Crosshair.CrosshairColor = String(myCode.P.c);
                }
            }

            // Out Line

            if (myCode.P.h === 0) { // h:0 = disable
                this.Primary.Crosshair.OutLine.isEnable = false;
            } else {
                if (myCode.P.t) { // thickness
                    this.Primary.Crosshair.OutLine.Thickness = myCode.P.t;
                }

                if (myCode.P.o) { // opacity
                    this.Primary.Crosshair.OutLine.Opacity = myCode.P.o;
                }
            }

            // Center Dot

            if (myCode.P.d === 1) { // d:1 = enable
                this.Primary.Crosshair.CenterDot.isEnable = true;

                if (myCode.P.z) { // thickness
                    this.Primary.Crosshair.CenterDot.Thickness = myCode.P.z;
                }

                if (myCode.P.a) { // opacity
                    this.Primary.Crosshair.CenterDot.Opacity = myCode.P.a;
                }
            }

            // Mores

            if (myCode.P.f === 0) { //FadeCrosshairWithFiringError (f:0)
                this.General.Other.FadeCrosshairWithFiringError = false;
            }

            if (myCode.P.s === 0) { //ShowSpectatedPlayerCrosshair (s:0)
                this.General.Other.ShowSpectatedPlayerCrosshair = false;
            }

            if (myCode.P.m === 1) { //OverrideFiringErrorOffsetWithCrosshairOffset (m:1)
                this.Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset = true;
            }

            // Inner Lines //
            // Inner Lines //

            if (myCode.P["0b"] === 0) { //0b:0 = disable
                this.Primary.InnerLines.isEnable = false;
            } else {

                // General

                if (myCode.P["0t"]) { // thickness
                    this.Primary.InnerLines.Thickness = myCode.P["0t"];
                }

                if (myCode.P["0l"]) { // length
                    this.Primary.InnerLines.Length.Value = myCode.P["0l"];
                }

                if (myCode.P["0g"] === 1 && myCode.P["0v"]) { //0g:1 = enable
                    this.Primary.InnerLines.Length.isChain = true;

                    this.Primary.InnerLines.Length.SecondValue = myCode.P["0v"];
                }

                if (myCode.P["0o"]) { // offset
                    this.Primary.InnerLines.Offset = myCode.P["0o"];
                }

                if (myCode.P["0a"]) { // opacity
                    this.Primary.InnerLines.Opacity = myCode.P["0a"];
                }

                // Error

                // isEnale

                if (myCode.P["0m"] === 1) { // m:1 = enable
                    this.Primary.InnerLines.MovementError.isEnable = true;
                }

                if (myCode.P["0f"] === 0) { // f:0 = enable
                    this.Primary.InnerLines.FiringError.isEnable = false;
                }

                // Multiplier

                if (myCode.P["0s"]) { // m - multiplier
                    this.Primary.InnerLines.MovementError.Multiplier = myCode.P["0s"];
                }

                if (myCode.P["0e"]) { // f - multiplier
                    this.Primary.InnerLines.FiringError.Multiplier = myCode.P["0e"];
                }
            }


            // Outer Lines //
            // Outer Lines //

            if (myCode.P["1b"] === 0) { //1b:0 = disable
                this.Primary.OuterLines.isEnable = false;
            } else {

                // General

                if (myCode.P["1t"]) { // thickness
                    this.Primary.OuterLines.Thickness = myCode.P["1t"];
                }

                if (myCode.P["1l"]) { // length
                    this.Primary.OuterLines.Length.Value = myCode.P["1l"];
                }

                if (myCode.P["1g"] === 1 && myCode.P["1v"]) { //1g:1 = enable
                    this.Primary.OuterLines.Length.isChain = true;

                    this.Primary.OuterLines.Length.SecondValue = myCode.P["1v"];
                }

                if (myCode.P["1o"]) { // offset
                    this.Primary.OuterLines.Offset = myCode.P["1o"];
                }

                if (myCode.P["1a"]) { // opacity
                    this.Primary.OuterLines.Opacity = myCode.P["1a"];
                }

                // Error

                // isEnale

                if (myCode.P["1m"] === 1) { // m:1 = enable
                    this.Primary.OuterLines.MovementError.isEnable = true;
                }

                if (myCode.P["1f"] === 0) { // f:0 = enable
                    this.Primary.OuterLines.FiringError.isEnable = false;
                }

                // Multiplier

                if (myCode.P["1s"]) { // m - multiplier
                    this.Primary.OuterLines.MovementError.Multiplier = myCode.P["1s"];
                }

                if (myCode.P["1e"]) { // f - multiplier
                    this.Primary.OuterLines.FiringError.Multiplier = myCode.P["1e"];
                }
            }
        }

        // Advanced

        // Aim Down Sights

        if (myCode.A && this.AimDownSights.CopyPrimaryCrosshair === false) {

            // General //
            // General //

            // Color

            if (myCode.A.c) { // color
                if (myCode.A.c == CrosshairColor.to["Custom"] && myCode.A.u) { //custom
                    this.AimDownSights.Crosshair.CrosshairColor = myCode.A.u;
                } else {
                    this.AimDownSights.Crosshair.CrosshairColor = String(myCode.A.c);
                }
            }

            // Out Line

            if (myCode.A.h === 0) { // h:0 = disable
                this.AimDownSights.Crosshair.OutLine.isEnable = false;
            } else {
                if (myCode.A.t) { // thickness
                    this.AimDownSights.Crosshair.OutLine.Thickness = myCode.A.t;
                }

                if (myCode.A.o) { // opacity
                    this.AimDownSights.Crosshair.OutLine.Opacity = myCode.A.o;
                }
            }

            // Center Dot

            if (myCode.A.d === 1) { // d:1 = enable
                this.AimDownSights.Crosshair.CenterDot.isEnable = true;

                if (myCode.A.z) { // thickness
                    this.AimDownSights.Crosshair.CenterDot.Thickness = myCode.A.z;
                }

                if (myCode.A.a) { // opacity
                    this.AimDownSights.Crosshair.CenterDot.Opacity = myCode.A.a;
                }
            }

            // Mores

            if (myCode.A.m === 1) { //m:1 = enable
                this.AimDownSights.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset = true;
            }

            // Inner Lines //
            // Inner Lines //

            if (myCode.A["0b"]) { //0b:0 = disable
                this.AimDownSights.InnerLines.isEnable = false;
            } else {

                // General

                if (myCode.A["0t"]) { // thickness
                    this.AimDownSights.InnerLines.Thickness = myCode.A["0t"];
                }

                if (myCode.A["0l"]) { // length
                    this.AimDownSights.InnerLines.Length.Value = myCode.A["0l"];
                }

                if (myCode.A["0g"] === 1 && myCode.A["0v"]) { //0g:1 = enable
                    this.AimDownSights.InnerLines.Length.isChain = true;

                    this.AimDownSights.InnerLines.Length.SecondValue = myCode.A["0v"];
                }

                if (myCode.A["0o"]) { // offset
                    this.AimDownSights.InnerLines.Offset = myCode.A["0o"];
                }

                if (myCode.A["0a"]) { // opacity
                    this.AimDownSights.InnerLines.Opacity = myCode.A["0a"];
                }

                // Error

                // isEnale

                if (myCode.A["0m"] === 1) { // m:1 = enable
                    this.AimDownSights.InnerLines.MovementError.isEnable = true;
                }

                if (myCode.A["0f"] === 0) { // f:0 = enable
                    this.AimDownSights.InnerLines.FiringError.isEnable = false;
                }

                // Multiplier

                if (myCode.A["0s"]) { // m - multiplier
                    this.AimDownSights.InnerLines.MovementError.Multiplier = myCode.A["0s"];
                }

                if (myCode.A["0e"]) { // f - multiplier
                    this.AimDownSights.InnerLines.FiringError.Multiplier = myCode.A["0e"];
                }
            }


            // Outer Lines //
            // Outer Lines //

            if (myCode.A["1b"]) { //0b:0 = disable
                this.AimDownSights.OuterLines.isEnable = false;
            } else {

                // General

                if (myCode.A["1t"]) { // thickness
                    this.AimDownSights.OuterLines.Thickness = myCode.A["1t"];
                }

                if (myCode.A["1l"]) { // length
                    this.AimDownSights.OuterLines.Length.Value = myCode.A["1l"];
                }

                if (myCode.A["1g"] === 1 && myCode.A["1v"]) { //1g:1 = enable
                    this.AimDownSights.OuterLines.Length.isChain = true;

                    this.AimDownSights.OuterLines.Length.SecondValue = myCode.A["1v"];
                }

                if (myCode.A["1o"]) { // offset
                    this.AimDownSights.OuterLines.Offset = myCode.A["1o"];
                }

                if (myCode.A["1a"]) { // opacity
                    this.AimDownSights.OuterLines.Opacity = myCode.A["1a"];
                }

                // Error

                // isEnale

                if (myCode.A["1m"] === 1) { // m:1 = enable
                    this.AimDownSights.OuterLines.MovementError.isEnable = true;
                }

                if (myCode.A["1f"] === 0) { // f:0 = enable
                    this.AimDownSights.OuterLines.FiringError.isEnable = false;
                }

                // Multiplier

                if (myCode.A["1s"]) { // m - multiplier
                    this.AimDownSights.OuterLines.MovementError.Multiplier = myCode.A["1s"];
                }

                if (myCode.A["1e"]) { // f - multiplier
                    this.AimDownSights.OuterLines.FiringError.Multiplier = myCode.A["1e"];
                }
            }
        }

        // Snipers Scope

        if (myCode.S) {
            if (myCode.S["d"] === 0) { //d:0 = disable
                this.SniperScope.CenterDot.isEnable = false;
            } else {
                if (myCode.S["c"]) { // color
                    if (myCode.S["c"] == CrosshairColor.to["Custom"] && myCode.S["t"]) { //custom
                        this.SniperScope.CenterDot.Color = myCode.S["t"];
                    } else {
                        this.SniperScope.CenterDot.Color = String(myCode.S["c"]);
                    }
                }

                if (myCode.S["s"]) { // thickness
                    this.SniperScope.CenterDot.Thickness = myCode.S["s"];
                }

                if (myCode.S["o"]) { // opacity
                    this.SniperScope.CenterDot.Opacity = myCode.S["o"];
                }
            }
        }

        // End

        return this.generateJsonCode();
    }

    /**
     * 
     * @returns {string} Crosshair Code
     */
    public toString(): string {
        const myCode = {
            "0": ``,
            "P": ``,
            "A": ``,
            "S": ``
        };

        /**
         * toString (Start)
         */

        // General //
        // General //

        if (this.AimDownSights.CopyPrimaryCrosshair !== _defaultCrosshair.AimDownSights.CopyPrimaryCrosshair) {
            myCode["0"] += `p;${Number(this.AimDownSights.CopyPrimaryCrosshair)};`;
        }

        if (this.Primary.Crosshair.OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair !== _defaultCrosshair.Primary.Crosshair.OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair) {
            myCode["0"] += `c;${Number(this.Primary.Crosshair.OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair)};`;
        }

        if (this.General.Crosshair.UseAdvancedOptions !== _defaultCrosshair.General.Crosshair.UseAdvancedOptions) {
            myCode["0"] += `s;${Number(this.General.Crosshair.UseAdvancedOptions)};`;
        }

        // Primary //
        // Primary //

        // Color

        if (this.Primary.Crosshair.isHexCrosshairColor !== _defaultCrosshair.Primary.Crosshair.isHexCrosshairColor) {
            myCode["P"] += `c;${CrosshairColor.to["Custom"]};u;${Number(this.Primary.Crosshair.isHexCrosshairColor)}`;
        } else if (this.Primary.Crosshair.CrosshairColor !== _defaultCrosshair.Primary.Crosshair.CrosshairColor) {
            myCode["P"] += `c;${this.Primary.Crosshair.CrosshairColor};`;
        }

        // Out Line

        if (this.Primary.Crosshair.OutLine.isEnable !== _defaultCrosshair.Primary.Crosshair.OutLine.isEnable) {
            myCode["P"] += `h;${Number(this.Primary.Crosshair.OutLine.isEnable)};`;
        } else {
            if (this.Primary.Crosshair.OutLine.Thickness !== _defaultCrosshair.Primary.Crosshair.OutLine.Thickness) {
                myCode["P"] += `t;${this.Primary.Crosshair.OutLine.Thickness};`;
            }

            if (this.Primary.Crosshair.OutLine.Opacity !== _defaultCrosshair.Primary.Crosshair.OutLine.Opacity) {
                myCode["P"] += `o;${this.Primary.Crosshair.OutLine.Opacity};`;
            }
        }

        // Center Dot

        if (this.Primary.Crosshair.CenterDot.isEnable !== _defaultCrosshair.Primary.Crosshair.CenterDot.isEnable) {
            myCode["P"] += `d;${Number(this.Primary.Crosshair.CenterDot.isEnable)};`;

            if (this.Primary.Crosshair.CenterDot.Thickness !== _defaultCrosshair.Primary.Crosshair.CenterDot.Thickness) {
                myCode["P"] += `z;${this.Primary.Crosshair.CenterDot.Thickness};`;
            }

            if (this.Primary.Crosshair.CenterDot.Opacity !== _defaultCrosshair.Primary.Crosshair.CenterDot.Opacity) {
                myCode["P"] += `a;${this.Primary.Crosshair.CenterDot.Opacity};`;
            }
        }

        // Mores

        if (this.General.Other.FadeCrosshairWithFiringError !== _defaultCrosshair.General.Other.FadeCrosshairWithFiringError) {
            myCode["P"] += `f;${Number(this.General.Other.FadeCrosshairWithFiringError)};`;
        }

        if (this.General.Other.ShowSpectatedPlayerCrosshair !== _defaultCrosshair.General.Other.ShowSpectatedPlayerCrosshair) {
            myCode["P"] += `s;${Number(this.General.Other.ShowSpectatedPlayerCrosshair)};`;
        }

        if (this.Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset !== _defaultCrosshair.Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset) {
            myCode["P"] += `m;${Number(this.Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset)};`;
        }

        // Inner Lines

        if (this.Primary.InnerLines.isEnable !== _defaultCrosshair.Primary.InnerLines.isEnable) {
            myCode["P"] += `0b;${Number(this.Primary.InnerLines.isEnable)};`;
        } else {

            // General

            if (this.Primary.InnerLines.Thickness !== _defaultCrosshair.Primary.InnerLines.Thickness) {
                myCode["P"] += `0t;${this.Primary.InnerLines.Thickness};`;
            }

            if (this.Primary.InnerLines.Length.Value !== _defaultCrosshair.Primary.InnerLines.Length.Value) {
                myCode["P"] += `0l;${this.Primary.InnerLines.Length.Value};`;
            }

            if (this.Primary.InnerLines.Length.isChain !== _defaultCrosshair.Primary.InnerLines.Length.isChain) {

                if (this.Primary.InnerLines.Length.SecondValue !== _defaultCrosshair.Primary.InnerLines.Length.SecondValue) {
                    myCode["P"] += `0v;${this.Primary.InnerLines.Length.SecondValue};`;
                }

                myCode["P"] += `0g;${Number(this.Primary.InnerLines.Length.isChain)};`;
            }

            if (this.Primary.InnerLines.Offset !== _defaultCrosshair.Primary.InnerLines.Offset) {
                myCode["P"] += `0o;${this.Primary.InnerLines.Offset};`;
            }

            if (this.Primary.InnerLines.Opacity !== _defaultCrosshair.Primary.InnerLines.Opacity) {
                myCode["P"] += `0a;${this.Primary.InnerLines.Opacity};`;
            }

            // Error //

            // isEnable

            if (this.Primary.InnerLines.MovementError.isEnable !== _defaultCrosshair.Primary.InnerLines.MovementError.isEnable) {
                myCode["P"] += `0m;${Number(this.Primary.InnerLines.MovementError.isEnable)};`;
            }

            if (this.Primary.InnerLines.FiringError.isEnable !== _defaultCrosshair.Primary.InnerLines.FiringError.isEnable) {
                myCode["P"] += `0f;${Number(this.Primary.InnerLines.FiringError.isEnable)};`;
            }

            // Multiplier

            if (this.Primary.InnerLines.MovementError.Multiplier !== _defaultCrosshair.Primary.InnerLines.MovementError.Multiplier) {
                myCode["P"] += `0s;${this.Primary.InnerLines.MovementError.Multiplier};`;
            }

            if (this.Primary.InnerLines.FiringError.Multiplier !== _defaultCrosshair.Primary.InnerLines.FiringError.Multiplier) {
                myCode["P"] += `0e;${this.Primary.InnerLines.FiringError.Multiplier};`;
            }
        }

        // Outer Lines

        if (this.Primary.OuterLines.isEnable !== _defaultCrosshair.Primary.OuterLines.isEnable) {
            myCode["P"] += `1b;${Number(this.Primary.OuterLines.isEnable)};`;
        } else {

            // General

            if (this.Primary.OuterLines.Thickness !== _defaultCrosshair.Primary.OuterLines.Thickness) {
                myCode["P"] += `1t;${this.Primary.OuterLines.Thickness};`;
            }

            if (this.Primary.OuterLines.Length.Value !== _defaultCrosshair.Primary.OuterLines.Length.Value) {
                myCode["P"] += `1l;${this.Primary.OuterLines.Length.Value};`;
            }

            if (this.Primary.OuterLines.Length.isChain !== _defaultCrosshair.Primary.OuterLines.Length.isChain) {

                if (this.Primary.OuterLines.Length.SecondValue !== _defaultCrosshair.Primary.OuterLines.Length.SecondValue) {
                    myCode["P"] += `1v;${this.Primary.OuterLines.Length.SecondValue};`;
                }

                myCode["P"] += `1g;${Number(this.Primary.OuterLines.Length.isChain)};`;
            }

            if (this.Primary.OuterLines.Offset !== _defaultCrosshair.Primary.OuterLines.Offset) {
                myCode["P"] += `1o;${this.Primary.OuterLines.Offset};`;
            }

            if (this.Primary.OuterLines.Opacity !== _defaultCrosshair.Primary.OuterLines.Opacity) {
                myCode["P"] += `1a;${this.Primary.OuterLines.Opacity};`;
            }

            // Error //

            // isEnable

            if (this.Primary.OuterLines.MovementError.isEnable !== _defaultCrosshair.Primary.OuterLines.MovementError.isEnable) {
                myCode["P"] += `1m;${Number(this.Primary.OuterLines.MovementError.isEnable)};`;
            }

            if (this.Primary.OuterLines.FiringError.isEnable !== _defaultCrosshair.Primary.OuterLines.FiringError.isEnable) {
                myCode["P"] += `1f;${Number(this.Primary.OuterLines.FiringError.isEnable)};`;
            }

            // Multiplier

            if (this.Primary.OuterLines.MovementError.Multiplier !== _defaultCrosshair.Primary.OuterLines.MovementError.Multiplier) {
                myCode["P"] += `1s;${this.Primary.OuterLines.MovementError.Multiplier};`;
            }

            if (this.Primary.OuterLines.FiringError.Multiplier !== _defaultCrosshair.Primary.OuterLines.FiringError.Multiplier) {
                myCode["P"] += `1e;${this.Primary.OuterLines.FiringError.Multiplier};`;
            }
        }

        // Aim Down Sights //
        // Aim Down Sights //

        if (this.AimDownSights.CopyPrimaryCrosshair === false) {

            // Color

            if (this.AimDownSights.Crosshair.isHexCrosshairColor !== _defaultCrosshair.AimDownSights.Crosshair.isHexCrosshairColor) {
                myCode["A"] += `c;${CrosshairColor.to["Custom"]};u;${Number(this.AimDownSights.Crosshair.isHexCrosshairColor)}`;
            } else if (this.AimDownSights.Crosshair.CrosshairColor !== _defaultCrosshair.AimDownSights.Crosshair.CrosshairColor) {
                myCode["A"] += `c;${this.AimDownSights.Crosshair.CrosshairColor};`;
            }

            // Out Line

            if (this.AimDownSights.Crosshair.OutLine.isEnable !== _defaultCrosshair.AimDownSights.Crosshair.OutLine.isEnable) {
                myCode["A"] += `h;${Number(this.AimDownSights.Crosshair.OutLine.isEnable)};`;
            } else {
                if (this.AimDownSights.Crosshair.OutLine.Thickness !== _defaultCrosshair.AimDownSights.Crosshair.OutLine.Thickness) {
                    myCode["A"] += `t;${this.AimDownSights.Crosshair.OutLine.Thickness};`;
                }

                if (this.AimDownSights.Crosshair.OutLine.Opacity !== _defaultCrosshair.AimDownSights.Crosshair.OutLine.Opacity) {
                    myCode["A"] += `o;${this.AimDownSights.Crosshair.OutLine.Opacity};`;
                }
            }

            // Center Dot

            if (this.AimDownSights.Crosshair.CenterDot.isEnable !== _defaultCrosshair.AimDownSights.Crosshair.CenterDot.isEnable) {
                myCode["A"] += `d;${Number(this.AimDownSights.Crosshair.CenterDot.isEnable)};`;
            } else {
                if (this.AimDownSights.Crosshair.CenterDot.Thickness !== _defaultCrosshair.AimDownSights.Crosshair.CenterDot.Thickness) {
                    myCode["A"] += `z;${this.AimDownSights.Crosshair.CenterDot.Thickness};`;
                }

                if (this.AimDownSights.Crosshair.CenterDot.Opacity !== _defaultCrosshair.AimDownSights.Crosshair.CenterDot.Opacity) {
                    myCode["A"] += `a;${this.AimDownSights.Crosshair.CenterDot.Opacity};`;
                }
            }

            // Mores

            myCode["A"] += `f;0;s;0;`; // I don't know why, but this is needed.

            if (this.AimDownSights.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset) {
                myCode["A"] += `m;${Number(this.AimDownSights.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset)};`;
            }

            // Inner Lines

            if (this.AimDownSights.InnerLines.isEnable !== _defaultCrosshair.AimDownSights.InnerLines.isEnable) {
                myCode["A"] += `0b;${Number(this.AimDownSights.InnerLines.isEnable)};`;
            } else {

                // General

                if (this.AimDownSights.InnerLines.Thickness !== _defaultCrosshair.AimDownSights.InnerLines.Thickness) {
                    myCode["A"] += `0t;${this.AimDownSights.InnerLines.Thickness};`;
                }

                if (this.AimDownSights.InnerLines.Length.Value !== _defaultCrosshair.AimDownSights.InnerLines.Length.Value) {
                    myCode["A"] += `0l;${this.AimDownSights.InnerLines.Length.Value};`;
                }

                if (this.AimDownSights.InnerLines.Length.isChain !== _defaultCrosshair.AimDownSights.InnerLines.Length.isChain) {

                    if (this.AimDownSights.InnerLines.Length.SecondValue !== _defaultCrosshair.AimDownSights.InnerLines.Length.SecondValue) {
                        myCode["A"] += `0v;${this.AimDownSights.InnerLines.Length.SecondValue};`;
                    }
    
                    myCode["A"] += `0g;${Number(this.AimDownSights.InnerLines.Length.isChain)};`;
                }

                if (this.AimDownSights.InnerLines.Offset !== _defaultCrosshair.AimDownSights.InnerLines.Offset) {
                    myCode["A"] += `0o;${this.AimDownSights.InnerLines.Offset};`;
                }

                if (this.AimDownSights.InnerLines.Opacity !== _defaultCrosshair.AimDownSights.InnerLines.Opacity) {
                    myCode["A"] += `0a;${this.AimDownSights.InnerLines.Opacity};`;
                }

                // Error //

                // isEnable

                if (this.AimDownSights.InnerLines.MovementError.isEnable !== _defaultCrosshair.AimDownSights.InnerLines.MovementError.isEnable) {
                    myCode["A"] += `0m;${Number(this.AimDownSights.InnerLines.MovementError.isEnable)};`;
                }

                if (this.AimDownSights.InnerLines.FiringError.isEnable !== _defaultCrosshair.AimDownSights.InnerLines.FiringError.isEnable) {
                    myCode["A"] += `0f;${Number(this.AimDownSights.InnerLines.FiringError.isEnable)};`;
                }

                // Multiplier

                if (this.AimDownSights.InnerLines.MovementError.Multiplier !== _defaultCrosshair.AimDownSights.InnerLines.MovementError.Multiplier) {
                    myCode["A"] += `0s;${this.AimDownSights.InnerLines.MovementError.Multiplier};`;
                }

                if (this.AimDownSights.InnerLines.FiringError.Multiplier !== _defaultCrosshair.AimDownSights.InnerLines.FiringError.Multiplier) {
                    myCode["A"] += `0e;${this.AimDownSights.InnerLines.FiringError.Multiplier};`;
                }
            }

            // Outer Lines

            if (this.AimDownSights.OuterLines.isEnable !== _defaultCrosshair.AimDownSights.OuterLines.isEnable) {
                myCode["A"] += `1b;${Number(this.AimDownSights.OuterLines.isEnable)};`;
            } else {

                // General

                if (this.AimDownSights.OuterLines.Thickness !== _defaultCrosshair.AimDownSights.OuterLines.Thickness) {
                    myCode["A"] += `1t;${this.AimDownSights.OuterLines.Thickness};`;
                }

                if (this.AimDownSights.OuterLines.Length.Value !== _defaultCrosshair.AimDownSights.OuterLines.Length.Value) {
                    myCode["A"] += `1l;${this.AimDownSights.OuterLines.Length.Value};`;
                }

                if (this.AimDownSights.OuterLines.Length.isChain !== _defaultCrosshair.AimDownSights.OuterLines.Length.isChain) {

                    if (this.AimDownSights.OuterLines.Length.SecondValue !== _defaultCrosshair.AimDownSights.OuterLines.Length.SecondValue) {
                        myCode["A"] += `1v;${this.AimDownSights.OuterLines.Length.SecondValue};`;
                    }
    
                    myCode["A"] += `1g;${Number(this.AimDownSights.OuterLines.Length.isChain)};`;
                }

                if (this.AimDownSights.OuterLines.Offset !== _defaultCrosshair.AimDownSights.OuterLines.Offset) {
                    myCode["A"] += `1o;${this.AimDownSights.OuterLines.Offset};`;
                }

                if (this.AimDownSights.OuterLines.Opacity !== _defaultCrosshair.AimDownSights.OuterLines.Opacity) {
                    myCode["A"] += `1a;${this.AimDownSights.OuterLines.Opacity};`;
                }

                // Error //

                // isEnable

                if (this.AimDownSights.OuterLines.MovementError.isEnable !== _defaultCrosshair.AimDownSights.OuterLines.MovementError.isEnable) {
                    myCode["A"] += `1m;${Number(this.AimDownSights.OuterLines.MovementError.isEnable)};`;
                }

                if (this.AimDownSights.OuterLines.FiringError.isEnable !== _defaultCrosshair.AimDownSights.OuterLines.FiringError.isEnable) {
                    myCode["A"] += `1f;${Number(this.AimDownSights.OuterLines.FiringError.isEnable)};`;
                }

                // Multiplier

                if (this.AimDownSights.OuterLines.MovementError.Multiplier !== _defaultCrosshair.AimDownSights.OuterLines.MovementError.Multiplier) {
                    myCode["A"] += `1s;${this.AimDownSights.OuterLines.MovementError.Multiplier};`;
                }

                if (this.AimDownSights.OuterLines.FiringError.Multiplier !== _defaultCrosshair.AimDownSights.OuterLines.FiringError.Multiplier) {
                    myCode["A"] += `1e;${this.AimDownSights.OuterLines.FiringError.Multiplier};`;
                }
            }
        }

        // Snipers Scope //
        // Snipers Scope //

        if (this.SniperScope.CenterDot.isEnable !== _defaultCrosshair.SniperScope.CenterDot.isEnable) {
            myCode["S"] += `d;${Number(this.SniperScope.CenterDot.isEnable)};`;
        } else {

            if (this.SniperScope.CenterDot.isHexColor !== _defaultCrosshair.SniperScope.CenterDot.isHexColor) {
                myCode["S"] += `c;${CrosshairColor.to["Custom"]};t;${Number(this.SniperScope.CenterDot.isHexColor)}`;
            } else if (this.SniperScope.CenterDot.Color !== _defaultCrosshair.SniperScope.CenterDot.Color) {
                myCode["S"] += `c;${this.SniperScope.CenterDot.Color};`;
            }

            if (this.SniperScope.CenterDot.Thickness !== _defaultCrosshair.SniperScope.CenterDot.Thickness) {
                myCode["S"] += `s;${this.SniperScope.CenterDot.Thickness};`;
            }

            if (this.SniperScope.CenterDot.Opacity !== _defaultCrosshair.SniperScope.CenterDot.Opacity) {
                myCode["S"] += `o;${this.SniperScope.CenterDot.Opacity};`;
            }
        }

        /**
         * toString (End)
         */

        let stringCode = ``;

        for (const key in myCode) {
            const _key = key as keyof typeof myCode;

            if (myCode[_key] !== ``) {
                stringCode += `${key};${myCode[_key]}`;

                if (!String(myCode[_key]).endsWith(';')) {
                    stringCode += `;`;
                }
            }
        }

        if (!stringCode.startsWith('0')) {
            stringCode = `0;${stringCode}`;
        }

        if (stringCode.endsWith(';')) {
            stringCode = stringCode.slice(0, -1);
        }

        return stringCode;
    }

    //static

    public static readonly Default: Crosshair.Crosshair = _defaultCrosshair;

    /**
     * 
     * @param {Crosshair.Crosshair} crosshair Json Valorant Crosshair
     * @returns {Crosshair}
     */
    public static fromJson(crosshair: Crosshair.Crosshair): Crosshair {
        const _newCrosshair = new Crosshair();
        _newCrosshair.fromJson(crosshair);

        return _newCrosshair;
    }

    /**
     * 
     * @param {Crosshair.Crosshair} crosshair Json Valorant Crosshair
     * @returns {string} Crosshair Code
     */
    public static fromJsonToString(crosshair: Crosshair.Crosshair): string {
        const _newCrosshair = Crosshair.fromJson(crosshair);

        return _newCrosshair.toString();
    }

    /**
     * 
     * @param {string} code Crosshair Code
     * @returns {Crosshair}
     */
    public static fromString(code: string): Crosshair {
        const _newCrosshair = new Crosshair(code);

        return _newCrosshair;
    }

    /**
     * 
     * @param {string} code Crosshair Code
     * @returns {Crosshair.Crosshair} Json Valorant Crosshair
     */
    public static fromStringToJson(code: string): Crosshair.Crosshair {
        const _newCrosshair = Crosshair.fromString(code);

        return _newCrosshair.toJson();
    }
}

//export

export { Crosshair };