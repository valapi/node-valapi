//"Normal Use" Script Here

//Then You Can Use This Script
const MatchHistory = await ValClient.Match.FetchMatchHistory(_puuid);
const matchIndex = 0; // <---------- Change This To Your Match Index
const MatchID = MatchHistory.History[matchIndex].MatchID;

const Match = await ValClient.Match.FetchMatchDetails(MatchID);
console.log(Match);