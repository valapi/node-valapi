[githubrepo_image]: https://github.com/valapi/.github/blob/main/128_valapi.png?raw=true
[githubrepo_url]: https://github.com/valapi
[download_image]: https://badgen.net/npm/dt/@valapi/riot-api?icon=npm
[download_url]: https://www.npmjs.com/package/@valapi/riot-api
[size_image]: https://packagephobia.com/badge?p=@valapi/riot-api
[size_url]: https://packagephobia.com/result?p=@valapi/riot-api
[vulnerabilities_image]: https://snyk.io/test/npm/@valapi/riot-api/badge.svg
[vulnerabilities_url]: https://snyk.io/test/npm/@valapi/riot-api
[license_image]: https://badgen.net/badge/license/MIT/blue
[license_url]: https://github.com/valapi/.github/blob/main/LICENSE
[github_image]: https://badgen.net/badge/icon/github?icon=github&label
[github_url]: https://github.com/valapi/node-valapi/tree/master/packages/@valapi/riot-api
[discord_image]: https://badgen.net/badge/icon/discord?icon=discord&label
[discord_url]: https://discord.gg/pbyWbUYjyt

<div align="center">
  
# Valorant API - Riot API
  
[![Profile][githubrepo_image]][github_url]
  
Official Api From Riot Games
  
[![Downloads][download_image]][download_url]
[![install size][size_image]][size_url]
[![Known Vulnerabilities][vulnerabilities_image]][vulnerabilities_url]

[![LICENSE][license_image]][license_url]
[![Github][github_image]][github_url]
[![Discord][discord_image]][discord_url]

</div>

---

> -   **@valapi/riot-api** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
> -   **@valapi/riot-api** was created under [Riot Games' "Legal Jibber Jabber"](https://www.riotgames.com/en/legal) policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
> -   [MIT License][license_url]

## Installation

**NPM:**

```bash
npm install @valapi/riot-api
```

**PNPM:**

```bash
pnpm add @valapi/riot-api
```

## Guide

Full Guide: **[valapi.github.io](https://valapi.github.io/build/API/riot-api/Intro.html)**

```typescript
import { RiotApi } from "@valapi/riot-api";
```

### Client

```typescript
const riotApi = new RiotApi({
    apiKey: "LoooooongApiKey_123456789",
    region: "ap"
});
```

### API

```typescript
const status = await riotApi.StatusV1.platformData();

console.log(status.data);
```

```typescript
const accountData = await riotApi.AccountV1.byRiotId("PRX f0rsakeN", "Huh");

console.log(accountData.data);
```
