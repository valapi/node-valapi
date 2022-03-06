//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support')
const tough = require('tough-cookie');
const url = require('url');

const toughCookie = tough.CookieJar;

//class
class Account {
    constructor() {
        this.cookie = null;
        this.accessToken = null;
        this.entitlements = null;
    }

    /**
    * @param {string} username Riot Username
    * @param {string} password Riot Account Password
    */
     async login(username, password) {
        const _cookie = new toughCookie();
        const axiosClient = wrapper(axios.create({ _cookie }));

        await axiosClient.post('https://auth.riotgames.com/api/v1/authorization', {
            'client_id': 'play-valorant-web-prod',
            'nonce': '1',
            'redirect_uri': 'https://playvalorant.com/opt_in',
            'response_type': 'token id_token',
        }, {
            jar: _cookie,
            withCredentials: true,
        })

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            'type': 'auth',
            'username': username,
            'password': password,
        }, {
            jar: _cookie,
            withCredentials: true,
        })

        //multifactor
        if (auth_response.data.type == 'multifactor') {
            this.cookie = _cookie;
            return this.toJSON();
        }

        // get asscess token
        const get_url = auth_response.data.response.parameters.uri;
        const url_parts = url.parse(get_url, true);
        const removeSharpTag = url_parts.hash.replace('#', '');
        const accessToken_params = new URLSearchParams(removeSharpTag);
        this.accessToken = accessToken_params.get('access_token');

        //ENTITLEMENTS
        const entitlements_response = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            jar: _cookie,
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        })

        this.entitlements = entitlements_response.data.entitlements_token;

        this.cookie = _cookie;
        return this.toJSON();
    }

    toJSON() {
        return {
            cookie: this.cookie.toJSON(),
            accessToken: this.accessToken,
            entitlements: this.entitlements,
        }
    }
}

//export
module.exports = Account;