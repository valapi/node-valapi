# **Valorant API - Support MFA**

<div align="center">

   <a href="https://www.npmjs.com/package/@ing3kth/val-api"><img src="https://nodei.co/npm/@ing3kth/val-api.png" alt="NPM"/></a>

   <a href="https://www.npmjs.com/package/@ing3kth/val-api"><img src="https://badgen.net/npm/dt/@ing3kth/val-api?icon=npm" alt="Downloads"/></a>
   <a href="https://packagephobia.com/result?p=@ing3kth/val-api"><img src="https://packagephobia.com/badge?p=@ing3kth/val-api" alt="Install Size"/></a>
   <a href="https://snyk.io/test/npm/@ing3kth/val-api"><img src="https://snyk.io/test/npm/@ing3kth/val-api/badge.svg" alt="Known Vulnerabilities"/></a>

   <a href="https://github.com/KTNG-3/val-api"><img src="https://badgen.net/badge/icon/github?icon=github&label" alt="Github"/></a>
   <a href="https://github.com/KTNG-3/val-api/blob/main/LICENSE"><img src="https://badgen.net/badge/license/MIT/blue" alt="LICENSE"/></a>
   <a href="https://discord.gg/pbyWbUYjyt"><img src="https://badgen.net/badge/icon/discord?icon=discord&label" alt="Discord"/></a>

</div>

## Installation

```bash
npm install @ing3kth/val-api
```

# Usage

```javascript
const ValApi = require('@ing3kth/val-api')
```

First We Need To **Login** To Valorant Account

```javascript
const ValAuth_Account = new ValApi.Auth.Account();
await ValAuth_Account.login('USERNAME', 'PASSWORD');

const ValAuth_Save = ValAuth_Account.toJSON()
```

*But We Have 2 Type Of Account*
### Multi-Factor Authentication
When The Account Have **"Multi-Factor"** You Can't Use Normal Method
```javascript
const Multifactor_Account = await ValAuth.login('USERNAME', 'PASSWORD');
```
Use This Script And Save It. Because We Need **"Cookie"**,
The Verify Code Will Send To Mail
```javascript
const Multifactor_Auth = new ValApi.Auth.Multifactor(Multifactor_Account);
const VerifyCode = 123456;  // <---------- Example Verify Code
await Multifactor_Auth.verify(VerifyCode);

const ValAuth_Save = Multifactor.toJSON()
```
Save The *`ValAuth_Save`* And Go To Next Step

### Resource
 
- QueueId
- ItemTypeId
- Currency
- Region
- Locale

```javascript
const Resource[] = ValApi.Resource.{NAME}[{String}]
const Resource. = ValApi.Resource.{NAME}.data.{String}
```

## Valorant Client / ValClient
After We Get **"Account"**, Then We Will Create an **"API Client"**

```javascript
const ValAccount_Client = new ValApi.ValClient({
        Account: ValAuth_Save,
        Region: "ap",  // <---------- Region
    });
```
### Settings
| Setting | Function |
| - | - |
| Region | setRegion(region) |
| Client Platfrom | setClientPlatfrom_fromJSON(clientPlatfrom) |
|  | setClientPlatfrom_from64(clientPlatfrom) |
| Client Version | setClientVersion(clientVersion) |
| Cookie | setCookie(cookie?) |

```javascript
ValAccount_Client.{Function}
```

### Save
#### Account  --->  Save
```javascript
const Save_ValAccount = ValAccount_Client.toJSON();
```
#### Save  --->  Account
```javascript
const ValAccount_Client = new ValApi.ValClient()
ValAccount_Client.fromJSON(Save_ValAccount);
```
Now We Have **"Api Client"** !!
## API
After We Get **"Api Client"**, Then We Will Use **"Valorant Api"**
| Service | Function |
| - | - |
| Client | GetSession(puuid) |
|  | FetchContent() |
|  | FetchConfig() |
| Contract | DefinitionsFetch() |
|  | Fetch(puuid) |
|  | Activate(puuid, contractId) |
| Coregame | FetchMatch(matchId) |
|  | FetchMatchLoadouts(matchId) |
|  | FetchPlayer(puuid) |
|  | DisassociatePlayer(puuid, matchId) |
| Match | FetchMatchDetails(matchId) |
|  | FetchMatchHistory(puuid, queueId?, startIndex?, endIndex?) |
| Party | FetchPlayer(puuid) |
|  | FetchParty(partyId) |
|  | InviteToParty(partyId, gameName, tagLine) |
|  | LeaveParty(puuid, partyId) |
|  | SetAccessibility(partyId, accessibility) |
|  | ChangeQueue(partyId, queueId) |
|  | LeaveQueue(partyId) |
|  | FetchCustomGameConfigs() |
|  | StartCustomGame(partyId) |
|  | EnterMatchmakingQueue(partyId) |
|  | LeaveMatchmakingQueue(partyId) |
| Player | GetUserInfo() |
|  | FetchPlayer(puuid) |
|  | GetUsername(puuid) |
|  | FetchCompetitiveUpdates(puuid, queueId?, startIndex?, endIndex?) |
|  | Loadout(puuid) |
|  | AccountXP(puuid) |
|  | FetchRestrictions() |
| Pregame | GetPlayer(puuid) |
|  | GetMatch(matchId) |
|  | GetMatchLoadouts(matchId) |
|  | QuitMatch(matchId) |
|  | SelectCharacter(matchId, agentId) |
|  | LockCharacter(matchId, agentId) |
| Store | GetEntitlements(puuid, itemTypeId) |
|  | GetOffers() |
|  | GetStorefront(puuid) |
|  | GetWallet(puuid) |


```javascript
    await ValAccount_Client.{Service}.{Function}
```

## Riot API
Official Api From Riot Games
```javascript
    const RiotApi_Client = new ValApi.RiotApi({
        key: 'API-KEY-123',  // <---------- API Key
        region: 'na',  // <---------- Region
    })
```
You Can Get Api Key From [developer.riotgames.com](https://developer.riotgames.com/)
| Service | Function |
| - | - |
| AccountV1 | ByRiotId(gameName, tagLine) |
|  | ByPuuid(puuid) |
|  | ByGame(puuid, game?) |
| ContentV1 | Contents(locale?) |
| StatusV1 | PlatformData() |

```javascript
    await RiotApi_Client.{Service}.{Function}
```

# Example
Example Script For **Copy And Paste**
### Valorant Client
```javascript
    //auth
    const ValAuth_Account = new ValApi.Auth.Account();

    const ValAuth_Auth = await ValAuth_Account.login("USERNAME", "PASSWORD")
    const ValAuth_Save = ValAuth_Account.toJSON();

    if(ValAuth_Save.accessToken == null || ValAuth_Save.entitlements == null) {
        //multifactor
    }

    //client
    const ValAccount_Client = new ValApi.ValClient({
        Account: ValAuth_Save,
        Region: "ap",  // <---------- Example Region //OR //ValApi.Resource.Region.data.AsiaPacific
    });

    const GetUserInfo = await ValAccount_Client.Player.GetUserInfo();

    const Valorant_Puuid = GetUserInfo.sub;  // <---------- This is Player UUID
    const Valorant_Account = ValAccount_Client.toJSON();  // <---------- This is Valorant Account
```
### Resource
```javascript
   const Currency[] = ValApi.Resource.Currency['85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741']
   const Currency. = ValApi.Resource.Currency.data.ValorantPoints
```
### API
```javascript
    const GetStore = await ValAccount_Client.Store.GetStorefront(Valorant_Puuid);
    const Bundle = GetStore.FeaturedBundle.Bundles[0]
    for(const Items of Bundle.Items){
        const _Price = Items.BasePrice
        const _Currency = ValApi.Resource.Currency[Items.CurrencyID]
        const _id = Items.Item.ItemID

        console.log(`[ ID: ${_id}, Price: ${_Price} ${_Currency} ]`)
    }
```
### Riot API
```javascript
    const RiotApi_Client = new ValApi.RiotApi({
        key: 'ABCDEF-ghi1j234-k5l6-78mn-9012-345op678q901',  // <---------- Example API Key
        region: ValApi.Resource.Region.data.NorthAmerica,  // <---------- Example Region
    })

    const getContent = await RiotApi_Client.ContentV1.Contents(ValApi.Resource.Locale.data.Japanese_Japan)
    console.log(getContent)
```

# Message From Developer

Thanks For Use My Package.

I am new Developer, I am not great at grammar

- [Report Bug](https://github.com/KTNG-3/val-api/issues) (Github)
- [Discord](https://discord.gg/pbyWbUYjyt)
- [Website](https://ingkth.wordpress.com/)

# Special Thanks

- [Techchrism](https://github.com/techchrism/valorant-api-docs) (API Docs)
- [RumbleMike](https://github.com/RumbleMike/ValorantClientAPI) (API Docs)
- [Valorant Community Developer Discord](https://discord.gg/sCgvpXJfEE)
- [Play Valorant](https://playvalorant.com/) (VALORANT)
- [developer.riotgames.com](https://developer.riotgames.com/) (Official Api From Riot Games)

# Copyright
**@ing3kth/val-api** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.