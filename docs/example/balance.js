//"Normal Use" Script Here

//Then You Can Use This Script
const GetWallet = await ValClient.Store.GetWallet(_puuid);
const Balance = GetWallet.Balances;

console.log("Valorant Point: " + Balance[valApi.Currency.data.ValorantPoints]);
console.log("Radianite Points: " + Balance[valApi.Currency.data.RadianitePoints]);
console.log("FreeAgents Point: " + Balance[valApi.Currency.data.FreeAgents]);