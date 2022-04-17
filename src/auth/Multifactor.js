//import
const IngCore = require('@ing3kth/core');
const IValClientAuth = require('../resources/interface/IValClientAuth');

//class

/**
 * * Class ID: @ing3kth/val-api/RiotApi
 */
class Multifactor {
    /**
    * @param {IValClientAuth} data Account toJSON data
    */
    constructor(data = {
        cookie: new IngCore.Core.AxiosCookie().toJSON(),
        accessToken: null,
        entitlements: null,
        multifactor: true,
    }) {
        if(!data.multifactor){
            IngCore.Core.Logs.log('This Account is not have a Multifactor', 'err', true);
        }

        this.classId = '@ing3kth/val-api/Multifactor';
        this.cookie = IngCore.Core.AxiosCookie.fromJSON(data.cookie);
        this.accessToken = data.accessToken;
        this.entitlements = data.entitlements;
        this.multifactor = data.multifactor;
    }

    /**
    * @param {Number} verificationCode Verification Code
    * @returns {IValClientAuth}
    */
     async execute(verificationCode) {
        const _cookie = this.cookie;
        const axiosClient = IngCore.Core.AxiosClient.client({
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
        await IngCore.Core.Logs.log(this.classId + " Auth - PUT https://auth.riotgames.com/api/v1/authorization");

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
        this.multifactor = false;
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
    * @param {IValClientAuth} data ValAuth_Account toJSON data
    * @param {Number} verificationCode Verification Code
    */
    static async verify(data, verificationCode) {
        const MultifactorAccount = new Multifactor(data);
        return await MultifactorAccount.execute(verificationCode);
    }
}

//export
module.exports = Multifactor;