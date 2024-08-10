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

Documentation: [valapi.github.io/docs](https://valapi.github.io/docs)

Guide: [valapi.github.io/guide](https://valapi.github.io/guide)

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

```typescript
import { Auth } from "@valapi/auth";
```

```typescript
const auth = new Auth();
```

### Captcha

_This is only an example function_

```typescript
const data = await auth.captcha();

const captchaResponse = await getCaptchaResponse(data); // P1_eyJ...
```

### Auth

```typescript
await auth.login({
    username: "BestUsername",
    password: "SuperSecretPassword",
    captcha: captchaResponse
});
```

```typescript
if (auth.isMultifactor) {
    const loginCode = 428793;

    await auth.multifactor(loginCode);
}
```

**Subject** (PlayerUUID)

```typescript
const subject = auth.subject;
```

**Serialize**

```typescript
const auth = new Auth({ user: oldAuth.toJSON() });

if (!auth.isAuthenticated) {
    await auth.reauthorize();
}
```
