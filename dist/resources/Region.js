"use strict";
// import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const lib_1 = require("@valapi/lib");
// class
class Region {
    constructor(x) {
        return lib_1.Region.to[x];
    }
}
exports.Region = Region;
Region.Asia_Pacific = "ap";
Region.Brazil = "br";
Region.Europe = "eu";
Region.Korea = "kr";
Region.Latin_America = "latam";
Region.North_America = "na";
Region.Public_Beta_Environment = "pbe";
