const GetStore = await ValClient.Store.GetStorefront(_puuid);
const Bundle = GetStore.FeaturedBundle.Bundles[0]
for(const Items of Bundle.Items){
    const _Price = Items.BasePrice
    const _Currency = ValApi.Currency[Items.CurrencyID]
    const _id = Items.Item.ItemID

    console.log("[ ID: " + _id + ", Price: " + _Price + " " + _Currency + " ]")
}