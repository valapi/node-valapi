//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support');
const tough = require('tough-cookie');
const url = require('url');

const Logs = require('@ing3kth/core').Logs
const AxiosClient = require('@ing3kth/core').AxiosClient

const toughCookie = tough.CookieJar;

//class
class Account {
    /**
    * @param {String} username Riot Account Username
    * @param {String} password Riot Account Password
    */
    constructor(username = false, password = false) {
        this.cookie = null;
        this.accessToken = null;
        this.entitlements = null;
        this.multifactor = false;

        if(username && password){
            return this.login(username, password);
        }

        Logs.log("Account Create")
    }

    /**
    * @param {String} username Riot Account Username
    * @param {String} password Riot Account Password
    */
     async login(username, password) {
        const _cookie = new toughCookie();
        const axiosClient = wrapper(axios.create({ jar: _cookie, withCredentials: true }));

        const auth_cookie = await axiosClient.post('https://auth.riotgames.com/api/v1/authorization', {
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
        await Logs.log("Account Auth Cookie")

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            'type': 'auth',
            'username': username,
            'password': password,
            'remember': true,
        }, {
            jar: _cookie,
        });
        await Logs.log("Account Auth")

        //multifactor
        if (auth_response.data.type == 'multifactor') {
            this.multifactor = true;
            this.cookie = _cookie;

            await Logs.log("Account Multi-Factor")
            return this.toJSON();
        }

        // get asscess token
        const get_url = auth_response.data.response.parameters.uri;
        const url_parts = url.parse(get_url, true);
        const removeSharpTag = url_parts.hash.replace('#', '');
        const accessToken_params = new URLSearchParams(removeSharpTag);
        this.accessToken = accessToken_params.get('access_token');
        await Logs.log("Account AccessToken")

        //ENTITLEMENTS
        const entitlements_response = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            jar: _cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        });

        this.entitlements = entitlements_response.data.entitlements_token;
        await Logs.log("Account Entitlements")

        this.cookie = _cookie;
        return this.toJSON();
    }

    toJSON() {
        Logs.log("Export Account")
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
    * @param {Boolean} toJSON return with toJSON data
    */
    static async loginSync(username, password, toJSON = false) {
        const NewAccount = new Account();
        await NewAccount.login(username, password);

        if(toJSON){
            return NewAccount.toJSON();
        }
        return NewAccount;
    }
}

//export
Account.login = Account.loginSync;

module.exports = Account;