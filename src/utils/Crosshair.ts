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

interface ValoarntCrosshairParse {
    // Others
    "0": {
        "p"?: number, //idk this // ithink is clone of primary crosshair
        "c"?: number,
        "s"?: number,
    };
    // Primary
    "P"?: {
        // Color
        "c"?: number,
        // Out Line
        "h"?: number,
        "t"?: number,
        "o"?: number,
        // Center Dot
        "d"?: number,
        "z"?: number,
        "a"?: number,
        // Mores
        "f"?: number,
        "s"?: number,
        "m"?: number,
        // Inner Lines
        "0b"?: number,
        "0t"?: number,
        "0l"?: number,
        "0o"?: number,
        "0a"?: number,
        "0m"?: number,
        "0f"?: number,
        "0s"?: number,
        "0e"?: number,
        // Outer Lines
        "1b"?: number,
        "1t"?: number,
        "1l"?: number,
        "1o"?: number,
        "1a"?: number,
        "1m"?: number,
        "1f"?: number,
        "1s"?: number,
        "1e"?: number,
    };
    // Aim Down Sights
    "A"?: {
        // Color
        "c"?: number,
        // Out Line
        "h"?: number,
        "t"?: number,
        "o"?: number,
        // Center Dot
        "d"?: number,
        "z"?: number,
        "a"?: number,
        // Mores
        "m"?: number,
        // Inner Lines
        "0b"?: number,
        "0t"?: number,
        "0l"?: number,
        "0o"?: number,
        "0a"?: number,
        "0m"?: number,
        "0f"?: number,
        "0s"?: number,
        "0e"?: number,
        // Outer Lines
        "1b"?: number,
        "1t"?: number,
        "1l"?: number,
        "1o"?: number,
        "1a"?: number,
        "1m"?: number,
        "1f"?: number,
        "1s"?: number,
        "1e"?: number,
    };
    // Sniper Scope
    "S"?: {
        "d"?: number,
        "c"?: number,
        "s"?: number,
        "o"?: number,
    };
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
        InnerLines: ValoarntCrosshairLines,
        OuterLines: ValoarntCrosshairLines,
    };
    AimDownSights: {
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
        }
        InnerLines: ValoarntCrosshairLines,
        OuterLines: ValoarntCrosshairLines,
    };
    General: {
        Crosshair: {
            UseAdvancedOptions: Boolean,
        },
        Other: {
            ShowSpectatedPlayerCrosshair: Boolean,
            FadeCrosshairWithFiringError: Boolean,
            DisableCrosshair?: Boolean, //not useable
        },
    };
    SniperScope: {
        CenterDot: {
            Color: number,
            isEnable: Boolean, // not in valorant settings
            Opacity: number,
            Thickness: number,
        },
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
    AimDownSights: {
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
    private normalCode: string;
    private myCrosshair: ValoarntCrosshair;

    public constructor(code: string = '0') {
        this.normalCode = code;
        this.myCrosshair = _defaultCrosshair;
    }

    public toJSON(): ValoarntCrosshair {
        const myCode: ValoarntCrosshairParse = this.parse();

        // Basic

        if (!myCode[0]) {
            throw new Error('Invalid crosshair code');
        } else {

            if (myCode[0].c === 1) { //c:1 = enable
                this.myCrosshair.Primary.Crosshair.OverrideAllPrimaryCrosshairWithMyPrimaryCrosshair = true;
            }

            if (myCode[0].s === 1) { //s:1 = enable
                this.myCrosshair.General.Crosshair.UseAdvancedOptions = true;
            }
        }

        // Crosshair

        if (myCode.P) {

            // General //
            // General //

            // Color

            if (myCode.P.c) { // color
                this.myCrosshair.Primary.Crosshair.CrosshairColor = myCode.P.c;
            }

            // Out Line

            if (myCode.P.h === 0) { // h:0 = disable
                this.myCrosshair.Primary.Crosshair.OutLine.isEnable = false;
            } else {
                if (myCode.P.t) { // thickness
                    this.myCrosshair.Primary.Crosshair.OutLine.Thickness = myCode.P.t;
                }

                if (myCode.P.o) { // opacity
                    this.myCrosshair.Primary.Crosshair.OutLine.Opacity = myCode.P.o;
                }
            }

            // Center Dot

            if (myCode.P.d === 1) { // d:1 = enable
                this.myCrosshair.Primary.Crosshair.CenterDot.isEnable = true;

                if (myCode.P.z) { // thickness
                    this.myCrosshair.Primary.Crosshair.CenterDot.Thickness = myCode.P.z;
                }

                if (myCode.P.a) { // opacity
                    this.myCrosshair.Primary.Crosshair.CenterDot.Opacity = myCode.P.a;
                }
            }

            // Mores

            if (myCode.P.f === 0) { //FadeCrosshairWithFiringError (f:0)
                this.myCrosshair.General.Other.FadeCrosshairWithFiringError = false;
            }

            if (myCode.P.s === 0) { //ShowSpectatedPlayerCrosshair (s:0)
                this.myCrosshair.General.Other.ShowSpectatedPlayerCrosshair = false;
            }

            if (myCode.P.m === 1) { //OverrideFiringErrorOffsetWithCrosshairOffset (m:1)
                this.myCrosshair.Primary.Crosshair.OverrideFiringErrorOffsetWithCrosshairOffset = true;
            }

            // Inner Lines //
            // Inner Lines //

            if (myCode.P["0b"] === 0) { //0b:0 = disable
                this.myCrosshair.Primary.InnerLines.isEnable = false;
            } else {

                // General

                if (myCode.P["0t"]) { // thickness
                    this.myCrosshair.Primary.InnerLines.Thickness = myCode.P["0t"];
                }

                if (myCode.P["0l"]) { // length
                    this.myCrosshair.Primary.InnerLines.Length = myCode.P["0l"];
                }

                if (myCode.P["0o"]) { // offset
                    this.myCrosshair.Primary.InnerLines.Offset = myCode.P["0o"];
                }

                if (myCode.P["0a"]) { // opacity
                    this.myCrosshair.Primary.InnerLines.Opacity = myCode.P["0a"];
                }

                // Error

                // isEnale

                if (myCode.P["0m"] === 1) { // m:1 = enable
                    this.myCrosshair.Primary.InnerLines.MovementError.isEnable = true;
                }

                if (myCode.P["0f"] === 0) { // f:0 = enable
                    this.myCrosshair.Primary.InnerLines.FiringError.isEnable = false;
                }

                // Multiplier

                if (myCode.P["0s"]) { // m - multiplier
                    this.myCrosshair.Primary.InnerLines.MovementError.Multiplier = myCode.P["0s"];
                }

                if (myCode.P["0e"]) { // f - multiplier
                    this.myCrosshair.Primary.InnerLines.FiringError.Multiplier = myCode.P["0e"];
                }
            }


            // Outer Lines //
            // Outer Lines //

            if (myCode.P["1b"] === 0) { //1b:0 = disable
                this.myCrosshair.Primary.OuterLines.isEnable = false;
            } else {

                // General

                if (myCode.P["1t"]) { // thickness
                    this.myCrosshair.Primary.OuterLines.Thickness = myCode.P["1t"];
                }

                if (myCode.P["1l"]) { // length
                    this.myCrosshair.Primary.OuterLines.Length = myCode.P["1l"];
                }

                if (myCode.P["1o"]) { // offset
                    this.myCrosshair.Primary.OuterLines.Offset = myCode.P["1o"];
                }

                if (myCode.P["1a"]) { // opacity
                    this.myCrosshair.Primary.OuterLines.Opacity = myCode.P["1a"];
                }

                // Error

                // isEnale

                if (myCode.P["1m"] === 1) { // m:1 = enable
                    this.myCrosshair.Primary.OuterLines.MovementError.isEnable = true;
                }

                if (myCode.P["1f"] === 0) { // f:0 = enable
                    this.myCrosshair.Primary.OuterLines.FiringError.isEnable = false;
                }

                // Multiplier

                if (myCode.P["1s"]) { // m - multiplier
                    this.myCrosshair.Primary.OuterLines.MovementError.Multiplier = myCode.P["1s"];
                }

                if (myCode.P["1e"]) { // f - multiplier
                    this.myCrosshair.Primary.OuterLines.FiringError.Multiplier = myCode.P["1e"];
                }
            }
        }

        // Advanced

        // Aim Down Sights

        if (myCode.A) {

            // General //
            // General //

            // Color

            if (myCode.A.c) { // color
                this.myCrosshair.AimDownSights.Crosshair.CrosshairColor = myCode.A.c;
            }

            // Out Line //something went wrong here

            if (myCode.A.h === 0) { // h:0 = disable
                this.myCrosshair.AimDownSights.Crosshair.OutLine.isEnable = false;
            } else {
                if (myCode.A.t) { // thickness
                    this.myCrosshair.AimDownSights.Crosshair.OutLine.Thickness = myCode.A.t;
                }

                if (myCode.A.o) { // opacity
                    this.myCrosshair.AimDownSights.Crosshair.OutLine.Opacity = myCode.A.o;
                }
            }

            // Center Dot //something went wrong here

            if (myCode.A.d === 1) { // d:1 = enable
                this.myCrosshair.AimDownSights.Crosshair.CenterDot.isEnable = true;

                if (myCode.A.z) { // thickness
                    this.myCrosshair.AimDownSights.Crosshair.CenterDot.Thickness = myCode.A.z;
                }

                if (myCode.A.a) { // opacity
                    this.myCrosshair.AimDownSights.Crosshair.CenterDot.Opacity = myCode.A.a;
                }
            }

            // Inner Lines //
            // Inner Lines //

            if (myCode.A["0b"]) { //0b:0 = disable
                this.myCrosshair.AimDownSights.InnerLines.isEnable = false;
            } else {

                // General

                if (myCode.A["0t"]) { // thickness
                    this.myCrosshair.AimDownSights.InnerLines.Thickness = myCode.A["0t"];
                }

                if (myCode.A["0l"]) { // length
                    this.myCrosshair.AimDownSights.InnerLines.Length = myCode.A["0l"];
                }

                if (myCode.A["0o"]) { // offset
                    this.myCrosshair.AimDownSights.InnerLines.Offset = myCode.A["0o"];
                }

                if (myCode.A["0a"]) { // opacity
                    this.myCrosshair.AimDownSights.InnerLines.Opacity = myCode.A["0a"];
                }

                // Error

                // isEnale

                if (myCode.A["0m"] === 1) { // m:1 = enable
                    this.myCrosshair.AimDownSights.InnerLines.MovementError.isEnable = true;
                }

                if (myCode.A["0f"] === 0) { // f:0 = enable
                    this.myCrosshair.AimDownSights.InnerLines.FiringError.isEnable = false;
                }

                // Multiplier

                if (myCode.A["0s"]) { // m - multiplier
                    this.myCrosshair.AimDownSights.InnerLines.MovementError.Multiplier = myCode.A["0s"];
                }

                if (myCode.A["0e"]) { // f - multiplier
                    this.myCrosshair.AimDownSights.InnerLines.FiringError.Multiplier = myCode.A["0e"];
                }
            }


            // Outer Lines //
            // Outer Lines //

            if (myCode.A["1b"]) { //0b:0 = disable
                this.myCrosshair.AimDownSights.OuterLines.isEnable = false;
            } else {

                // General

                if (myCode.A["1t"]) { // thickness
                    this.myCrosshair.AimDownSights.OuterLines.Thickness = myCode.A["1t"];
                }

                if (myCode.A["1l"]) { // length
                    this.myCrosshair.AimDownSights.OuterLines.Length = myCode.A["1l"];
                }

                if (myCode.A["1o"]) { // offset
                    this.myCrosshair.AimDownSights.OuterLines.Offset = myCode.A["1o"];
                }

                if (myCode.A["1a"]) { // opacity
                    this.myCrosshair.AimDownSights.OuterLines.Opacity = myCode.A["1a"];
                }

                // Error

                // isEnale

                if (myCode.A["1m"] === 1) { // m:1 = enable
                    this.myCrosshair.AimDownSights.OuterLines.MovementError.isEnable = true;
                }

                if (myCode.A["1f"] === 0) { // f:0 = enable
                    this.myCrosshair.AimDownSights.OuterLines.FiringError.isEnable = false;
                }

                // Multiplier

                if (myCode.A["1s"]) { // m - multiplier
                    this.myCrosshair.AimDownSights.OuterLines.MovementError.Multiplier = myCode.A["1s"];
                }

                if (myCode.A["1e"]) { // f - multiplier
                    this.myCrosshair.AimDownSights.OuterLines.FiringError.Multiplier = myCode.A["1e"];
                }
            }
        }

        // Snipers Scope

        if (myCode.S) {
            if (myCode.S["d"] === 0) { //d:0 = disable
                this.myCrosshair.SniperScope.CenterDot.isEnable = false;
            } else {
                if (myCode.S["c"]) { // color
                    this.myCrosshair.SniperScope.CenterDot.Color = myCode.S["c"];
                }

                if (myCode.S["s"]) { // thickness
                    this.myCrosshair.SniperScope.CenterDot.Thickness = myCode.S["s"];
                }

                if (myCode.S["o"]) { // opacity
                    this.myCrosshair.SniperScope.CenterDot.Opacity = myCode.S["o"];
                }
            }
        }

        // End

        return this.myCrosshair;
    }

    public toString(): string {
        // Work In Progress
        return '0';
    }

    public parse(): ValoarntCrosshairParse {
        const codeArray = String(this.normalCode).split(';');
        let myJSON = `{`;

        // start

        if (codeArray.at(0) !== '0') {
            throw new Error('Invalid code');
        } else {
            myJSON += '"0":{';
            codeArray.shift();
        }

        // parse

        for (let ofCode in codeArray) {
            const code = codeArray[ofCode];

            if (String(Number(code)) === code) {
                myJSON += `${code}`;
                continue;
            }

            if (code.toUpperCase() === code) {
                // upper case

                myJSON += `},"${code}":{`;
            } else {
                // lower case

                if (!myJSON.endsWith('{')) {
                    myJSON += `,`
                }

                myJSON += `"${code}":`
            }
        }

        myJSON += `}}`
        return JSON.parse(myJSON) as ValoarntCrosshairParse;
    }
}

export { Crosshair };

const _crosshair = new Crosshair('0;p;0;c;1;s;1;P;c;4;t;2;o;0.238;d;1;z;3;a;0.481;m;1;0t;6;0l;11;0o;12;0a;0.468;0m;1;0s;2.396;0e;2.339;1t;5;1l;7;1o;23;1a;0.77;1s;1.584;1e;1.603;A;c;6;t;3;o;0.622;f;0;s;0;0t;5;0l;11;0o;11;0a;0.481;0m;1;0s;1.508;0e;1.725;1t;5;1l;5;1o;23;1a;0.525;1s;1.943;1e;1.905;S;c;3;s;2.595;o;0.569').toJSON();
//console.log(_crosshair);
console.log(_crosshair.SniperScope, _crosshair.Primary, _crosshair.AimDownSights, _crosshair.General);