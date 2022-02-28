//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support')
const tough = require('tough-cookie');
const url = require('url');

const toughCookie = tough.CookieJar;

//class
class Multifactor {
    constructor(getCookie) {
        this.cookie = toughCookie.fromJSON(getCookie);
        this.accessToken = undefined;
        this.entitlements = undefined;
    }

    async verify(verificationCode) {
        const _cookie = this.cookie;
        const axiosClient = wrapper(axios.create({ _cookie }));

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            "type": "multifactor",
            "code": verificationCode.toString(),
            "rememberDevice": false
        }, {
            jar: _cookie,
            withCredentials: true,
        })

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
    }

    async toJSON() {
        return {
            cookie: this.cookie.toJSON(),
            accessToken: this.accessToken,
            entitlements: this.entitlements
        };
    }
}

//export
module.exports = Multifactor;