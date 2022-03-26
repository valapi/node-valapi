//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support');
const tough = require('tough-cookie');
const url = require('url');

const Logs = require('@ing3kth/core').Logs
const AxiosClient = require('@ing3kth/core').AxiosClient

const toughCookie = tough.CookieJar;

//class
class Multifactor {
    /**
    * @param {JSON} data Account toJSON data
    */
    constructor(data = {
        cookie: new toughCookie().toJSON(),
        accessToken: null,
        entitlements: null,
        multifactor: true,
    }) {
        if(!data.multifactor){
            Logs.log('This Account is not have a Multifactor', 'err', true);
        }

        this.cookie = toughCookie.fromJSON(data.cookie);
        this.accessToken = data.accessToken;
        this.entitlements = data.entitlements;

        Logs.log("Multifactor Create")
    }

    /**
    * @param {Number} verificationCode Verification Code
    */
     async verify(verificationCode) {
        const _cookie = this.cookie;
        const axiosClient = wrapper(axios.create({ jar: _cookie, withCredentials: true }));

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            "type": "multifactor",
            "code": verificationCode.toString(),
            "rememberDevice": true
        }, {
            jar: _cookie,
        });
        await Logs.log("Multifactor Auth")

        // get asscess token
        const get_url = auth_response.data.response.parameters.uri;
        const url_parts = url.parse(get_url, true);
        const removeSharpTag = url_parts.hash.replace('#', '');
        const accessToken_params = new URLSearchParams(removeSharpTag);
        this.accessToken = accessToken_params.get('access_token');
        await Logs.log("Multifactor AccessToken")

        //ENTITLEMENTS
        const entitlements_response = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            jar: _cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        });

        this.entitlements = entitlements_response.data.entitlements_token;
        await Logs.log("Multifactor Entitlements")

        this.cookie = _cookie;
        return this.toJSON()
    }

    toJSON() {
        Logs.log("Export Multifactor")
        return {
            cookie: this.cookie.toJSON(),
            accessToken: this.accessToken,
            entitlements: this.entitlements,
        };
    }

    /**
    * @param {JSON} data ValAuth_Account toJSON data
    * @param {Number} verificationCode Verification Code
    * @param {Boolean} toJSON return with toJSON data
    */
    static async verifySync(data, verificationCode, toJSON = false) {
        const MultifactorAccount = new Multifactor(data);
        await MultifactorAccount.verify(verificationCode);

        if(toJSON){
            return MultifactorAccount.toJSON();
        }
        return MultifactorAccount;
    }
}

//export
Multifactor.verify = Multifactor.verifySync;

module.exports = Multifactor;