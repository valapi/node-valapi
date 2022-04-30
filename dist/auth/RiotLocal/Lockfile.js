"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@ing3kth/core");
const fs = __importStar(require("fs"));
/**
 * @param {String} path path to lockfile
 * @returns {IRiotLocalLockfile}
 */
function getLockfile(path = core_1.Config['val-api'].RiotLocal.lockfile) {
    var _getFile = fs.readFileSync(path, 'utf8');
    const _spilt_file = _getFile.split(":");
    const _lockfile = {
        name: _spilt_file[0],
        pid: Number(_spilt_file[1]),
        port: Number(_spilt_file[2]),
        password: _spilt_file[3],
        protocol: _spilt_file[4],
    };
    return _lockfile;
}
exports.default = getLockfile;
//# sourceMappingURL=Lockfile.js.map