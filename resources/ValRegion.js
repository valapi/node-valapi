//class
class ValRegion {
    constructor(region = 'ap') {
        this.region = region.toLowerCase();
        this.playerDataUrl = `https://pd.${this.region}.a.pvp.net`;
        this.partyServiceUrl = `https://glz-${this.region}-1.${this.region}.a.pvp.net`;
        this.sharedDataUrl = `https://shared.${this.region}.a.pvp.net`;
    }

    toJSON() {
        return {
            region: this.region,
            url: {
                playerData: this.playerDataUrl,
                partyService: this.partyServiceUrl,
                sharedData: this.sharedDataUrl
            },
        };
    }
}

//export
module.exports = ValRegion;