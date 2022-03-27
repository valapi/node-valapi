//import
const fs = require('fs');

const IngCore = require('@ing3kth/core')

const Client = require('../service/RiotLocal/Client');

//class
class RiotLocal {
    constructor(ip = '127.0.0.1', lockfile = {
        name: null,
        pid: null,
        port: null,
        password: null,
        protocol: null,
    }) {
        this.classId = '@ing3kth/val-api/RiotLocal';
        this.lockfile = {
            name: lockfile.name,
            pid: lockfile.pid,
            port: lockfile.port,
            password: lockfile.password,
            protocol: lockfile.protocol,
        }
        this.ip = ip;

        this.reload();
    }

    async reload() {
        this.lockfile = await this.getlockfile();

        const _base64 = IngCore.Base64.toBase64(`riot:${this.lockfile.password}`);
        this.AxiosData = {
            cookie: false,
            jar: null,
            headers: {
                'Authorization': `Basic ${_base64}`,
            },
        }

        this.services = {
            ip: this.ip,
            AxiosData: this.AxiosData,
            lockfile: this.lockfile,
        }

        this.Client = new Client(this.services);
    }

    async getlockfile(path = IngCore.Config['val-api'].local.lockfile) {
        try{
            var _getFile = fs.readFileSync(path, 'utf8');
        }catch(err){
            await IngCore.Logs.log(this.classId +  " Lockfile not found", 'err', true);
        }
        
        const _spilt_file = _getFile.split(":")
        const _lockfile = {
            name: _spilt_file[0],
            pid: _spilt_file[1],
            port: _spilt_file[2],
            password: _spilt_file[3],
            protocol: _spilt_file[4],
        }

        return _lockfile;
    }

    async login(username, password) {
        const response = await this.AxiosClient.put('/rso-auth/v1/session/credentials', {
            'username': username,
            'password': password,
            'persistLogin': true,
        });

        return response.data;
    }

    async help() {
        const response = await this.AxiosClient.get(this.baseUrl + '/help');

        return response.data;
    }
}

module.exports = RiotLocal;

(async (RiotLocal) => {
    const RiotLocalsss = await new RiotLocal();
    const _getDataS = await RiotLocalsss.Client.GetSettings();
    console.log(_getDataS)
})(RiotLocal);