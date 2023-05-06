[githubrepo_image]: https://github.com/valapi/.github/blob/main/128_valapi.png?raw=true
[githubrepo_url]: https://github.com/valapi
[download_image]: https://badgen.net/npm/dt/valorant.ts?icon=npm
[download_url]: https://www.npmjs.com/package/valorant.ts
[size_image]: https://packagephobia.com/badge?p=valorant.ts
[size_url]: https://packagephobia.com/result?p=valorant.ts
[vulnerabilities_image]: https://snyk.io/test/npm/valorant.ts/badge.svg
[vulnerabilities_url]: https://snyk.io/test/npm/valorant.ts
[license_image]: https://badgen.net/badge/license/MIT/blue
[license_url]: https://github.com/valapi/.github/blob/main/LICENSE
[github_image]: https://badgen.net/badge/icon/github?icon=github&label
[github_url]: https://github.com/valapi/node-valapi/tree/master/packages/valorant.ts
[discord_image]: https://badgen.net/badge/icon/discord?icon=discord&label
[discord_url]: https://discord.gg/pbyWbUYjyt

<div align="center">

# Valorant API - Support Multifactor

[![Profile][githubrepo_image]][github_url]

NodeJS package that make more easier to use Valorant API

[![Downloads][download_image]][download_url]
[![install size][size_image]][size_url]
[![Known Vulnerabilities][vulnerabilities_image]][vulnerabilities_url]

[![LICENSE][license_image]][license_url]
[![Github][github_image]][github_url]
[![Discord][discord_image]][discord_url]

</div>

---

> -   **valorant.ts** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
> -   **valorant.ts** was created under [Riot Games' "Legal Jibber Jabber"](https://www.riotgames.com/en/legal) policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
> -   [MIT License][license_url]

## Why Valorant.ts ?

-   Support **Two-Factor Authentication**
-   All-In-One
    -   Authentication
    -   API
        -   [Riot API](https://developer.riotgames.com)
        -   <https://valorant-api.com>
        -   Web Client
    -   Utils
        -   Patch Notes
        -   Crosshair Compiler
    -   Resources
    -   -   Region
    -   -   Locale
-   Event Emitter
-   Open-source
-   [Typescript Support](https://www.typescriptlang.org)

## Installation

**NPM:**

```bash
npm install valorant.ts
```

**Yarn:**

```bash
yarn add valorant.ts
```

## Guide

Full Guide: **[valapi.github.io/guide](https://valapi.github.io/guide/MAIN/Intro.html)**

### Example

Authentication

```javascript
await AuthClient.login("BestUsername", "SuperSecretPassword");
```

Two-Factor Authentication

```javascript
await AuthClient.verify(428793 /* <--- Verification Code */);
```

Daily Offers

```javascript
async function getOffersOf(ItemsId: string) {
    let DisplayName = "";
    let DisplayIcon = "";

    const GetWeaponSkinLevel = await ValorantApiCom.Weapons.getSkinLevels();
    if (GetWeaponSkinLevel.data.data) {
        for (const _SkinLevel of GetWeaponSkinLevel.data.data) {
            if (_SkinLevel.uuid === ItemsId) {
                DisplayName = _SkinLevel.displayName;
                DisplayIcon = _SkinLevel.displayIcon;

                break;
            }
        }
    }

    return {
        Name: DisplayName,
        Icon: DisplayIcon
    };
}

const todayStore = await WebClient.Store.getStorefront(WebClient.getSubject());

for (const ItemID of todayStore.data.SkinsPanelLayout.SingleItemOffers) {
    console.log(await getOffersOf(ItemID));
}
```
