//import
const fs = require('fs');

const IngCore = require('@ing3kth/core')

const _path = process.env.LOCALAPPDATA + '/Riot Games/Riot Client/Config/lockfile';

//class
class RiotLocal {
    constructor(ip = '127.0.0.1', lockfile = {
        name: null,
        pid: null,
        port: null,
        password: null,
        protocol: null,
    }) {
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
            cookie: new IngCore.AxiosCookie().toJSON(),
            headers: {
                'Authorization': `Basic ${_base64}`,
            },
        }

        this.baseUrl = `${this.lockfile.protocol}://${this.ip}:${this.lockfile.port}`

        //remove me
        this.AxiosClient = new IngCore.AxiosClient(this.AxiosData);
        //remove me
    }

    async getlockfile(path = _path) {
        const _getFile = fs.readFileSync(path, 'utf8');
        
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
        return await this.AxiosClient.get(this.baseUrl + '/help');
    }

    async test() {
        const response = await this.AxiosClient.get(this.baseUrl + '/help');

        return response;
    }
}

module.exports = RiotLocal;

(async (RiotLocal) => {
    const RiotLocalsss = await new RiotLocal();
    //const _getDataS = 
    console.log(await RiotLocalsss.login("KawinThailand", "ingkawin0808"))
})(RiotLocal);