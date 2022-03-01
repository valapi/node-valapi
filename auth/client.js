//import
const AxiosClient = require('../resources/request');

//class
class ValClient {
    constructor(PreAccount, Region, clientVersion) {
        this.Account = PreAccount;
        this.Region = Region;
        this.clientVersion = clientVersion;

        const Contract = require('../api/Contract');
        this.Contract = new Contract(this.toJSON());

        const Coregame = require('../api/Coregame');
        this.Coregame = new Coregame(this.toJSON());

        const Party = require('../api/Party');
        this.Party = new Party(this.toJSON());
    }

    /**
    * @description Get Account
    */
    toJSON() {
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

    /**
    * @description Get user info
    * @return {Promise<any>}
    */
    async getUserInfo() {
        const Account = this.toJSON();
        const axiosClient = new AxiosClient({
            cookie: Account.request.cookie,
            headers: Account.request.headers,
        });

        const response = await axiosClient.post(`https://auth.riotgames.com/userinfo`);

        return response.data;
    }
}

//export
module.exports = ValClient;

/*
this.playerDataUrl = `https://pd.${this.region}.a.pvp.net`;
this.partyServiceUrl = `https://glz-${this.region}-1.${this.region}.a.pvp.net`;
this.sharedDataUrl = `https://shared.${this.region}.a.pvp.net`;
*/