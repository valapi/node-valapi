[githubrepo_image]: https://github.com/valapi/.github/blob/main/128_valapi.png?raw=true
[githubrepo_url]: https://github.com/valapi
[download_image]: https://badgen.net/npm/dt/@valapi/valorant-api.com?icon=npm
[download_url]: https://www.npmjs.com/package/@valapi/valorant-api.com
[size_image]: https://packagephobia.com/badge?p=@valapi/valorant-api.com
[size_url]: https://packagephobia.com/result?p=@valapi/valorant-api.com
[vulnerabilities_image]: https://snyk.io/test/npm/@valapi/valorant-api.com/badge.svg
[vulnerabilities_url]: https://snyk.io/test/npm/@valapi/valorant-api.com
[license_image]: https://badgen.net/badge/license/MIT/blue
[license_url]: https://github.com/valapi/.github/blob/main/LICENSE
[github_image]: https://badgen.net/badge/icon/github?icon=github&label
[github_url]: https://github.com/valapi/node-valapi/tree/master/packages/@valapi/valorant-api.com
[discord_image]: https://badgen.net/badge/icon/discord?icon=discord&label
[discord_url]: https://discord.gg/pbyWbUYjyt

<div align="center">
  
# Valorant API - valorant-api.com
  
[![Profile][githubrepo_image]][githubrepo_url]
  
**Third-Party API** by Officer
  
[![Downloads][download_image]][download_url]
[![install size][size_image]][size_url]
[![Known Vulnerabilities][vulnerabilities_image]][vulnerabilities_url]

[![LICENSE][license_image]][license_url]
[![Github][github_image]][github_url]
[![Discord][discord_image]][discord_url]

Documentation: [valapi.github.io/docs](https://valapi.github.io/docs)
Guide: [valapi.github.io/guide](https://valapi.github.io/guide)

</div>

---

> -   **@valapi/valorant-api.com** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
> -   **@valapi/valorant-api.com** was created under [Riot Games' "Legal Jibber Jabber"](https://www.riotgames.com/en/legal) policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
> -   [MIT License][license_url]

## Installation

**NPM:**

```bash
npm install @valapi/valorant-api.com
```

**PNPM:**

```bash
pnpm add @valapi/valorant-api.com
```

## Guide

```typescript
import { ValorantApiCom } from "@valapi/valorant-api.com";
```

```typescript
const client = new ValorantApiCom({
    language: "en-US"
});
```

### API

```typescript
const versions = await client.Versions.get();

console.log(versions.data);
```

```typescript
const mapUuid = "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"; /* Ascent */
const map = await client.Maps.getByUuid(mapUuid);

console.log(events.data);
```
