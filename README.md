# Valorant API - Support MFA

<!-- Main -->
<div align="center">

   <a href="https://www.npmjs.com/package/@ing3kth/val-api"><img src="https://nodei.co/npm/@ing3kth/val-api.png" alt="NPM"/></a>

   <a href="https://www.npmjs.com/package/@ing3kth/val-api"><img src="https://badgen.net/npm/dt/@ing3kth/val-api?icon=npm" alt="Downloads"/></a>
   <a href="https://packagephobia.com/result?p=@ing3kth/val-api"><img src="https://packagephobia.com/badge?p=@ing3kth/val-api" alt="Install Size"/></a>
   <a href="https://www.codacy.com/gh/KTNG-3/val-api/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=KTNG-3/val-api&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/b3bd20059ade46e78a605bf6a0b1f1e1" alt="Codacy Badge"/></a>
   <a href="https://snyk.io/test/npm/@ing3kth/val-api"><img src="https://snyk.io/test/npm/@ing3kth/val-api/badge.svg" alt="Known Vulnerabilities"/></a>

   <a href="https://github.com/KTNG-3/val-api"><img src="https://badgen.net/badge/icon/github?icon=github&label" alt="Github"/></a>
   <a href="https://github.com/KTNG-3/val-api/blob/main/LICENSE"><img src="https://badgen.net/badge/license/MIT/blue" alt="LICENSE"/></a>
   <a href="https://discord.gg/pbyWbUYjyt"><img src="https://badgen.net/badge/icon/discord?icon=discord&label" alt="Discord"/></a>

</div>

## Introduced

### Table of Contents

- [Valorant API - Support MFA](#valorant-api---support-mfa)
  - [Introduced](#introduced)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Valorant Client / ValClient](#valorant-client--valclient)
    - [Authentication](#authentication)
      - [Multi-Factor Authentication](#multi-factor-authentication)
    - [Client](#client)
    - [API](#api)
  - [Riot API](#riot-api)
    - [API](#api-1)
  - [Resource](#resource)
- [Example](#example)
- [Epilogue](#epilogue)

### Installation

NPM:

```bash
  npm install @ing3kth/val-api
```

Yarn:

```bash
  yarn add @ing3kth/val-api
```

### Usage

```javascript
  const ValApi = require('@ing3kth/val-api')
```

## Valorant Client / ValClient

### Authentication

First We Need To **Login** To `Valorant Account`

```javascript
  const ValAuth_Account = await ValApi.Auth.Account.login('USERNAME', 'PASSWORD');

  const ValAuth_Save = ValAuth_Account.toJSON()
```

*But We Have 2 Type Of Account*

#### Multi-Factor Authentication

When The Account Have **Multi-Factor** You Can't Use Normal Method

```javascript
  const Multifactor_Account = await ValApi.Auth.Account.login('USERNAME', 'PASSWORD');
  //Use This Script And Save It. Because We Need "Cookie"
```

The **Verify Code** Will Send To **Mail**

```javascript
  const Multifactor_Auth = new ValApi.Auth.Multifactor(Multifactor_Account);
  const VerifyCode = 123456;  // <---------- Example Verify Code
  await Multifactor_Auth.verify(VerifyCode);

  const ValAuth_Save = Multifactor.toJSON()
```

Save The **`ValAuth_Save`** And Go To Next Step

### Client

After We Get **Account**, Then We Will Create an **API Client**

```javascript
  const ValAccount_Client = new ValApi.ValClient({
          Account: ValAuth_Save,
          Region: "ap",  // <---------- Region
      });
```

Now We Have `API Client` !!

<!-- Settings -->
<details><summary>Settings</summary>

>| Setting | Function |
>| - | - |
>| Region | setRegion(region) |
>| Client Platfrom | setClientPlatfrom_fromJSON(clientPlatfrom) |
>|  | setClientPlatfrom_from64(clientPlatfrom) |
>| Client Version | setClientVersion(clientVersion) |
>
>```javascript
>    ValAccount_Client.{Function}
>```

</details>

<!-- Saves -->
<details><summary>Saves</summary>

>#### Account  --->  Save
>```javascript
>    const Save_ValAccount = ValAccount_Client.toJSON();
>```
>#### Save  --->  Account
>```javascript
>    const ValAccount_Client = ValApi.ValClient.fromJSON(Save_ValAccount);
>```

</details>

### API

After We Get `API Client`, Then We Will Use `Valorant API`
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

<!-- Settings -->
<details><summary>Settings</summary>

>| Setting | Function |
>| - | - |
>| Region | setRegion(region) |
>| API Key | setApiKey(key) |
>
>```javascript
>    RiotApi_Client.{Function}
>```

</details>

### API

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

## Resource

- Currency
- ItemTypeId
- Locale
- QueueId
- Region

```javascript
  const Resource[] = ValApi.Resource.{NAME}[{String}]
  const Resource. = ValApi.Resource.{NAME}.data.{String}
```

# Example

Example Script

<!-- Valorant Client -->
<details><summary>Valorant Client</summary>

><!-- Authentication -->
><details><summary>Authentication</summary>
>
>>#### Auth
>>
>>```javascript
>>    const ValAuth_Account = new ValApi.Auth.Account();
>>
>>    const ValAuth_Auth = await ValAuth_Account.login("USERNAME", "PASSWORD")
>>    const ValAuth_Save = ValAuth_Account.toJSON();
>>
>>    if(ValAuth_Save.multifactor) {
>>        //multifactor
>>        const Multifactor_Account = ValAuth_Save;
>>    }
>>```
>>
>>#### Multi-Factor
>>
>>```javascript
>>    const Multifactor_Auth = new ValApi.Auth.Multifactor(Multifactor_Account);
>>    const VerifyCode = 123456;  // <---------- Example Verify Code
>>    await Multifactor_Auth.verify(VerifyCode);
>>    
>>    const ValAuth_Save = Multifactor.toJSON()
>>```
>
></details>
> 
>#### Client
>
>```javascript
>    const ValAccount_Client = new ValApi.ValClient({
>        Account: ValAuth_Save,
>        Region: "ap",  // <---------- Example Region //OR //ValApi.Resource.Region.data.AsiaPacific
>    });
>
>    const GetUserInfo = await ValAccount_Client.Player.GetUserInfo();
>
>    const Valorant_Puuid = GetUserInfo.sub;  // <---------- This is Player UUID
>    const Valorant_Account = ValAccount_Client.toJSON();  // <---------- This is Valorant Account
>```
>
>#### API
>
>```javascript
>    const GetStore = await ValAccount_Client.Store.GetStorefront(Valorant_Puuid);
>    const Bundle = GetStore.FeaturedBundle.Bundles[0]
>    for(const Items of Bundle.Items){
>        const _Price = Items.BasePrice
>        const _Currency = ValApi.Resource.Currency[Items.CurrencyID]
>        const _id = Items.Item.ItemID
>
>        console.log(`[ ID: ${_id}, Price: ${_Price} ${_Currency} ]`)
>    }
>```

</details>

<!-- Riot API -->
<details><summary>Riot API</summary>

>#### Client
>
>```javascript
>    const RiotApi_Client = new ValApi.RiotApi({
>        key: 'ABCDEF-ghi1j234-k5l6-78mn-9012-345op678q901',  // <---------- Example API Key
>        region: ValApi.Resource.Region.data.NorthAmerica,  // <---------- Example Region
>    })
>```
>
>#### API
>
>```javascript
>    const getContent = await RiotApi_Client.ContentV1.Contents(ValApi.Resource.Locale.data.Japanese_Japan)
>    console.log(getContent)
>```

</details>

<!-- Resource -->
<details><summary>Resource</summary>

>```javascript
>   const Currency[] = ValApi.Resource.Currency['85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741']
>   const Currency. = ValApi.Resource.Currency.data.ValorantPoints
>```

</details>

# Epilogue

Thanks For Use My Package,
On [GitHub](https://github.com/KTNG-3/val-api) Will Update Before This Package Update.

***

- [Website](https://ingkth.wordpress.com/)
- *Report Bug*
  - [Github](https://github.com/KTNG-3/val-api/issues)
  - [Discord](https://discord.gg/pbyWbUYjyt)
    - INg3_#9509
- *Special Thanks*
  - [Techchrism](https://github.com/techchrism/valorant-api-docs) (API Docs)
  - [RumbleMike](https://github.com/RumbleMike/ValorantClientAPI) (API Docs)
  - [Valorant Community Developer Discord](https://discord.gg/sCgvpXJfEE)
  - [Play Valorant](https://playvalorant.com/) (VALORANT)
  - [developer.riotgames.com](https://developer.riotgames.com/) (Official Api From Riot Games)
- *Legal*
  - >**@ing3kth/val-api** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
  - [MIT License](https://github.com/KTNG-3/val-api/blob/main/LICENSE)