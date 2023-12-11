[githubrepo_image]: https://github.com/valapi/.github/blob/main/128_valapi.png?raw=true
[githubrepo_url]: https://github.com/valapi
[license_image]: https://badgen.net/badge/license/MIT/blue
[license_url]: https://github.com/valapi/.github/blob/main/LICENSE
[github_image]: https://badgen.net/badge/icon/github?icon=github&label
[github_url]: https://github.com/valapi/node-valapi
[discord_image]: https://badgen.net/badge/icon/discord?icon=discord&label
[discord_url]: https://discord.gg/pbyWbUYjyt

<div align="center">

# node-valapi

[![Profile][githubrepo_image]][github_url]

NodeJS packages that make more easier to use Valorant API

[![LICENSE][license_image]][license_url]
[![Github][github_image]][github_url]
[![Discord][discord_image]][discord_url]

</div>

---

> -   **node-valapi** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
> -   **node-valapi** was created under [Riot Games' "Legal Jibber Jabber"](https://www.riotgames.com/en/legal) policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
> -   [MIT License][license_url]

## Projects

- [valorant.ts](./packages/valorant.ts)
- [@valapi/auth](./packages/@valapi/auth)
- [@valapi/lib](./packages/@valapi/lib)
- [@valapi/riot-api](./packages/@valapi/riot-api)
- [@valapi/valorant-api.com](./packages/@valapi/valorant-api.com)
- [@valapi/web-client](./packages/@valapi/web-client)

## Release

```bash
npm run build
```

```bash
npm publish --workspaces
```

Delete compiled files *(after build)*

```bash
npm run clean
```

## Testing

```bash
npm run test
```

**dotenv**

Regions: [valapi.github.io/build-in/Region](https://valapi.github.io/build/PACKAGE/build-in/Region.html)

```dosini
# multi-factor must be "disable"
VAL_REGION="na"
VAL_USER="RiotUsername"
VAL_PASS="Passowrd"

# multi-factor must be "enable"
VAL_MFA_REGION="ap"
VAL_MFA_USER="RiotUsername"
VAL_MFA_PASS="Password"

# https://developer.riotgames.com
VAL_RIOT_API="API_KEY_123"
```
