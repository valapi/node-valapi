//class
class ValRegion {
    constructor(region = 'na') {
        this.region = region.toLowerCase();

        if (this.region == 'kr' || this.region == 'ap') {
            this.riotRegion = 'asia'
        }else if (this.region == 'eu') {
            this.riotRegion = 'europe'
        }else if (this.region == 'na' || this.region == 'latam' || this.region == 'br') {
            this.riotRegion = 'americas'
        }else {
            //unknown region
            this.riotRegion = 'esports'
        }

        if (this.region == 'na' || this.region == 'latam' || this.region == 'br') {
            this.server = 'na'
        }else {
            this.server = this.region
        }
    }

    toJSON() {
        return {
            data: {
                api: this.region,
                server: this.server,
                riot: this.riotRegion,
            },
            url: {
                playerData: `https://pd.${this.server}.a.pvp.net`,
                partyService: `https://glz-${this.region}-1.${this.server}.a.pvp.net`,
                sharedData: `https://shared.${this.server}.a.pvp.net`,
            },
            riot: {
                api: `https://${this.riotRegion}.api.riotgames.com`,
                esports: `https://esports.api.riotgames.com`,
                server: `https://${this.region}.api.riotgames.com`,
            }
        };
    }
}

//export
module.exports = ValRegion;