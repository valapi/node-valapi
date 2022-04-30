import { IRiotLocal_Lockfile_Protocol, IRiotLocal_Lockfile } from "../../resources/interface/IRiotLocal";
import { Config as _config } from "@ing3kth/core";

import * as fs from 'fs';

/**
 * @param {String} path path to lockfile
 * @returns {IRiotLocalLockfile}
 */
function getLockfile(path:string = _config['val-api'].RiotLocal.lockfile):IRiotLocal_Lockfile {
    var _getFile = fs.readFileSync(path, 'utf8');

    const _spilt_file = _getFile.split(":");
    const _lockfile = {
        name: _spilt_file[0],
        pid: Number(_spilt_file[1]),
        port: Number(_spilt_file[2]),
        password: _spilt_file[3],
        protocol: _spilt_file[4] as IRiotLocal_Lockfile_Protocol,
    };

    return _lockfile;
}

export default getLockfile