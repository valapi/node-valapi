//import
const url = require('url');

const IngCore = require('@ing3kth/core');
const Logs = IngCore.Logs;
const AxiosClient = IngCore.AxiosClient;

//class
class Multifactor {
    /**
    * @param {JSON} data Account toJSON data
    */
    constructor(data = {
        cookie: new IngCore.AxiosCookie().toJSON(),
        accessToken: null,
        entitlements: null,
        multifactor: true,
    }) {
        if(data.classId && data.classId === '@ing3kth/val-api/Account'){
            data = data.toJSON();
        }

        if(!data.multifactor){
            Logs.log('This Account is not have a Multifactor', 'err', true);
        }

        this.classId = '@ing3kth/val-api/Multifactor';
        this.cookie = IngCore.AxiosCookie.fromJSON(data.cookie);
        this.accessToken = data.accessToken;
        this.entitlements = data.entitlements;
    }

    /**
    * @param {Number} verificationCode Verification Code
    */
     async verify(verificationCode) {
        const _cookie = this.cookie;
        const axiosClient = AxiosClient.client({
            cookie: true,
            jar: _cookie.toJSON(),
            headers: {}
        });

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            "type": "multifactor",
            "code": verificationCode.toString(),
            "rememberDevice": true
        }, {
            jar: _cookie,
        });
        await Logs.log(this.classId + " Auth");

        // get asscess token
        const get_url = auth_response.data.response.parameters.uri;
        const url_parts = url.parse(get_url, true);
        const removeSharpTag = url_parts.hash.replace('#', '');
        const accessToken_params = new URLSearchParams(removeSharpTag);
        this.accessToken = accessToken_params.get('access_token');
        await Logs.log(this.classId + " AccessToken");

        //ENTITLEMENTS
        const entitlements_response = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            jar: _cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        });

        this.entitlements = entitlements_response.data.entitlements_token;
        await Logs.log(this.classId + " Entitlements");

        this.cookie = _cookie;
        return this.toJSON();
    }

    toJSON() {
        Logs.log("Export " + this.classId);
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