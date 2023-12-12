[githubrepo_image]: https://github.com/valapi/.github/blob/main/128_valapi.png?raw=true
[githubrepo_url]: https://github.com/valapi
[download_image]: https://badgen.net/npm/dt/@valapi/auth?icon=npm
[download_url]: https://www.npmjs.com/package/@valapi/auth
[size_image]: https://packagephobia.com/badge?p=@valapi/auth
[size_url]: https://packagephobia.com/result?p=@valapi/auth
[vulnerabilities_image]: https://snyk.io/test/npm/@valapi/auth/badge.svg
[vulnerabilities_url]: https://snyk.io/test/npm/@valapi/auth
[license_image]: https://badgen.net/badge/license/MIT/blue
[license_url]: https://github.com/valapi/.github/blob/main/LICENSE
[github_image]: https://badgen.net/badge/icon/github?icon=github&label
[github_url]: https://github.com/valapi/node-valapi/tree/master/packages/@valapi/auth
[discord_image]: https://badgen.net/badge/icon/discord?icon=discord&label
[discord_url]: https://discord.gg/pbyWbUYjyt

<div align="center">
  
# Valorant API - Authentication
  
[![Profile][githubrepo_image]][github_url]
  
Valorant Authentication
  
[![Downloads][download_image]][download_url]
[![install size][size_image]][size_url]
[![Known Vulnerabilities][vulnerabilities_image]][vulnerabilities_url]

[![LICENSE][license_image]][license_url]
[![Github][github_image]][github_url]
[![Discord][discord_image]][discord_url]

</div>

---

> -   **@valapi/auth** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
> -   **@valapi/auth** was created under [Riot Games' "Legal Jibber Jabber"](https://www.riotgames.com/en/legal) policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
> -   [MIT License][license_url]

## Installation

**NPM:**

```bash
npm install @valapi/auth
```

**PNPM:**

```bash
pnpm add @valapi/auth
```

## Guide

Full Guide: **[valapi.github.io](https://valapi.github.io/build/PACKAGE/auth/Intro.html)**

```typescript
import { AuthClient } from "@valapi/auth";
```

### Client

```typescript
const authClient = new AuthClient();
```

### Auth

```typescript
await authClient.login("BestUsername", "SuperSecretPassword");
```

```typescript
if (client.authenticationInfo.isMultifactor === true) {
    const verificationCode = 428793;

    await authClient.verify(verificationCode);
}
```

**Subject** (PlayerUUID)

```typescript
const subject = authClient.getSubject();
```

### Cookie

```typescript
const authClient = await AuthClient.fromCookie(cookie);
```

**Save**

```typescript
const authClient = AuthClient.fromJSON(oldAuthClient.toJSON());

if (Date.now() >= client.getExpirationDate()) {
    await authClient.refresh();
}
```
