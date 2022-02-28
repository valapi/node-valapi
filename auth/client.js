//import
const function_Userinfo = require('../api/userinfo');

//class
class ValClient {
    constructor(PreAccount, Region, clientVersion) {
        this.Account = PreAccount;
        this.Region = Region;
        this.clientVersion = clientVersion;
    }

    //account
    async toJSON() {
        return {
            request: {
                headers: {
                    'Authorization': `Bearer ${this.Account.accessToken}`,
                    'X-Riot-Entitlements-JWT': this.Account.entitlements,
                    'X-Riot-ClientVersion': this.clientVersion,
                    'X-Riot-ClientPlatform': 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
                },
                cookie: this.Account.cookie,
                accessToken: this.Account.accessToken,
                entitlement: this.Account.entitlements,
            },
            url: {
                playerData: this.Region.playerData,
                partyService: this.Region.partyService,
                sharedData: this.Region.sharedData
            },
        }
    }

    //function
    async getUserInfo() {
        return await function_Userinfo(await this.toJSON());
    }
}

//export
module.exports = ValClient;