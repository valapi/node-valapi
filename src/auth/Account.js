//import
const IngCore = require('@ing3kth/core');
const IValClientAuth = require('../resources/interface/IValClientAuth');

//class

/**
 * * Class ID: @ing3kth/val-api/Account
 */
class Account {
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     */
    constructor(username = false, password = false) {
        this.classId = '@ing3kth/val-api/Account';
        this.cookie = null;
        this.accessToken = null;
        this.entitlements = null;
        this.multifactor = false;

        if(username && password){
            return this.execute(username, password);
        }
    }

    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {IValClientAuth}
     */
    async execute(username, password) {
        const _cookie = new IngCore.Core.AxiosCookie();
        const axiosClient = IngCore.Core.AxiosClient.client({
            cookie: true,
            jar: _cookie.toJSON(),
            headers: {}
        });

        await axiosClient.post('https://auth.riotgames.com/api/v1/authorization', {
            'client_id': 'play-valorant-web-prod',
            'nonce': '1',
            'redirect_uri': 'https://playvalorant.com/opt_in',
            'response_type': 'token id_token',
        }, {
            jar: _cookie,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await IngCore.Core.Logs.log(this.classId + " Auth Cookie - POST https://auth.riotgames.com/api/v1/authorization");

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            'type': 'auth',
            'username': username,
            'password': password,
            'remember': true,
        }, {
            jar: _cookie,
        });
        await IngCore.Core.Logs.log(this.classId + " Auth - PUT https://auth.riotgames.com/api/v1/authorization");

        //multifactor
        if (auth_response.data.type == 'multifactor') {
            this.multifactor = true;
            this.cookie = _cookie;

            await IngCore.Core.Logs.log(this.classId + " Export Multi-Factor");
            return this.toJSON();
        }

        // get asscess token
        const _search = new URL(auth_response.data.response.parameters.uri);
        var _get_where;
        var _get_accessToken;

        if (_search.search) {
            _get_where = _search.search;
            _get_accessToken = 'access_token';
        } else {
            _get_where = _search.hash;
            _get_accessToken = '#access_token';
        }

        this.accessToken = new URLSearchParams(_get_where).get(_get_accessToken);
        await IngCore.Core.Logs.log(this.classId + " AccessToken");

        //ENTITLEMENTS
        const entitlements_response = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            jar: _cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        });

        this.entitlements = entitlements_response.data.entitlements_token;
        await IngCore.Core.Logs.log(this.classId + " Entitlements - POST https://entitlements.auth.riotgames.com/api/token/v1");

        this.cookie = _cookie;
        return this.toJSON();
    }

    /**
     * 
     * @returns {IValClientAuth}
     */
    toJSON() {
        IngCore.Core.Logs.log("Export " + this.classId);
        return {
            cookie: this.cookie.toJSON(),
            accessToken: this.accessToken,
            entitlements: this.entitlements,
            multifactor: this.multifactor,
        };
    }

    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {IValClientAuth}
     */
    static async login(username, password) {
        const NewAccount = new Account();
        return await NewAccount.execute(username, password);
    }
}

//export
module.exports = Account;