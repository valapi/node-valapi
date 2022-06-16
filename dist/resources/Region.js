"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const lib_1 = require("@valapi/lib");
class Region {
    constructor(x) {
        return lib_1.Region.to[x];
    }
}
exports.Region = Region;
Region.Asia_Pacific = lib_1.Region.toString("Asia_Pacific");
Region.Brazil = lib_1.Region.toString("Brazil");
Region.Europe = lib_1.Region.toString("Europe");
Region.Korea = lib_1.Region.toString("Korea");
Region.Latin_America = lib_1.Region.toString("Latin_America");
Region.North_America = lib_1.Region.toString("North_America");
Region.Public_Beta_Environment = lib_1.Region.toString("Public_Beta_Environment");
//# sourceMappingURL=Region.js.map