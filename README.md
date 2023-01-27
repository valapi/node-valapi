<div align="center">

# Valorant API - Support Multifactor

[![Profile](https://github.com/valapi/.github/blob/main/128_valapi.png?raw=true)](https://github.com/valapi)

NodeJS package that make more easier to use Valorant API

[![Downloads](https://badgen.net/npm/dt/valorant.ts?icon=npm)](https://www.npmjs.com/package/valorant.ts)
[![install size](https://packagephobia.com/badge?p=valorant.ts)](https://packagephobia.com/result?p=valorant.ts)
[![Known Vulnerabilities](https://snyk.io/test/npm/valorant.ts/badge.svg)](https://snyk.io/test/npm/valorant.ts)

[![LICENSE](https://badgen.net/badge/license/MIT/blue)](https://github.com/valapi/.github/blob/main/LICENSE)
[![Github](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/valapi)
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/pbyWbUYjyt)

</div>

---

> -   **@valapi** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
> -   **@valapi** was created under [Riot Games' "Legal Jibber Jabber"](https://www.riotgames.com/en/legal)
> -   [MIT License](https://github.com/valapi/.github/blob/main/LICENSE)

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
        -   Crosshair Compiler (wip)
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

Full Guide: **https://valapi.github.io/docs**

### Example

**Authentication**

```javascript
await AuthClient.login("BestUsername", "SuperSecretPassword");
```

Two-Factor Authentication

```javascript
await AuthClient.verify(428793 /* <--- Verification Code */)
```

**API**

Daily Offers

```javascript
aawait ValorantApiCom.Weapons.getSkinLevels();
```

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

const data = await AuthClient.Store.getStorefront(AuthClient.getSubject());

for (const ItemID of data.data.SkinsPanelLayout.SingleItemOffers) {
    console.log(
        await getOffersOf(ItemID)
    );
}
```

## Contact

-   Discord: INg3\_#9509
-   Discord Server: https://discord.com/invite/pbyWbUYjyt
-   Github: https://github.com/KTNG-3
