# dofusdude-js

dofusdude - JavaScript client for dofusdude-js
The last API for everything Dofus 🤯

### JS Quickstart
```js
var dofusdude = require("dofusdude-js");

new dofusdude.AllItemsApi().getItemsAllSearch(
  "en",
  "dofus2",
  "nidas",
  { filterTypeName: "hat" },
  (err, data, response) => {
    console.log(data[0]);
  }
);
```

### Client SDKs
- [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save
- [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save
- [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo

Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue at the Docs Repo.

## Main Features
- 🥷 **seamless auto-update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.

- ⚡ **blazingly fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.

- 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.

- 🗣️ **multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.

- 🧠 **search by relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.

- 🕵️ **complete** actual data from the game including items invisible to the encyclopedia like quest items.

- 🖼️ **HD images** rendering vector graphics into PNGs up to 800x800 px in the background.


## Current state
- Weapons ✅
- Equipment ✅
- Sets ✅
- Resources ✅
- Consumables ✅
- Pets ✅
- Mounts ✅
- Cosmetics/Ceremonial Items ✅
- Harnesses ✅
- Quest Items ✅
- Almanax ✅

- Monsters ❌
- Classes ❌
- Spells ❌
- Professions ❌


### Maybes? I don't know what for 🤷
- Sidekicks ❌
- Haven Bags ❌
- Map ❌


## Future
I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers.

Examples:
_I need to know where I can drop the all the items I need to craft set X!_

_Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!_

Nearly everything can be done. But I want to make sure somebody also wants it.

If you have anything or you are just interested in the project, join the [Discord](https://discord.gg/3EtHskZD8h).

### Versioning
Updating an API is a hard problem. This is why we'll keep it simple:

Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever.

There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.

We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag.

## Get started! 🥳
Scroll down and try it for yourself!

If you are ready to use them in your project, think about [generating a client 🧙](https://github.com/OpenAPITools/openapi-generator) or use one of our pre generated SDKs linked at the top.

Awesome Projects using this API:

- [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro
- [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina
- [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina
- [luwnarya.fr](https://luwnarya.fr)


This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.5.4
- Package version: 0.5.4
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://discord.gg/3EtHskZD8h](https://discord.gg/3EtHskZD8h)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install dofusdude-js --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your dofusdude-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var dofusdude = require('dofusdude-js');


var api = new dofusdude.AllItemsApi()
var language = "language_example"; // {String} a valid language code
var game = dofus2; // {String} 
var query = hat; // {String} case sensitive search query
var opts = {
  'filterTypeName': "filterTypeName_example", // {String} only results with the translated type name across all item_subtypes
  'filterMinLevel': 56, // {Number} only results which level is equal or above this value
  'filterMaxLevel': 56 // {Number} only results which level is equal or below this value
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemsAllSearch(language, game, query, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.dofusdu.de*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*dofusdude.AllItemsApi* | [**getItemsAllSearch**](docs/AllItemsApi.md#getItemsAllSearch) | **GET** /{game}/{language}/items/search | Search All Items
*dofusdude.AlmanaxApi* | [**getAlmanaxDate**](docs/AlmanaxApi.md#getAlmanaxDate) | **GET** /dofus2/{language}/almanax/{date} | Single Almanax Date
*dofusdude.AlmanaxApi* | [**getAlmanaxRange**](docs/AlmanaxApi.md#getAlmanaxRange) | **GET** /dofus2/{language}/almanax | Almanax Range
*dofusdude.ConsumablesApi* | [**getItemsConsumablesList**](docs/ConsumablesApi.md#getItemsConsumablesList) | **GET** /{game}/{language}/items/consumables | List Consumables
*dofusdude.ConsumablesApi* | [**getItemsConsumablesSearch**](docs/ConsumablesApi.md#getItemsConsumablesSearch) | **GET** /{game}/{language}/items/consumables/search | Search Consumables
*dofusdude.ConsumablesApi* | [**getItemsConsumablesSingle**](docs/ConsumablesApi.md#getItemsConsumablesSingle) | **GET** /{game}/{language}/items/consumables/{ankama_id} | Single Consumables
*dofusdude.CosmeticsApi* | [**getCosmeticsList**](docs/CosmeticsApi.md#getCosmeticsList) | **GET** /{game}/{language}/items/cosmetics | List Cosmetics
*dofusdude.CosmeticsApi* | [**getCosmeticsSearch**](docs/CosmeticsApi.md#getCosmeticsSearch) | **GET** /{game}/{language}/items/cosmetics/search | Search Cosmetics
*dofusdude.CosmeticsApi* | [**getCosmeticsSingle**](docs/CosmeticsApi.md#getCosmeticsSingle) | **GET** /{game}/{language}/items/cosmetics/{ankama_id} | Single Cosmetics
*dofusdude.EquipmentApi* | [**getItemsEquipmentList**](docs/EquipmentApi.md#getItemsEquipmentList) | **GET** /{game}/{language}/items/equipment | List Equipment
*dofusdude.EquipmentApi* | [**getItemsEquipmentSearch**](docs/EquipmentApi.md#getItemsEquipmentSearch) | **GET** /{game}/{language}/items/equipment/search | Search Equipment
*dofusdude.EquipmentApi* | [**getItemsEquipmentSingle**](docs/EquipmentApi.md#getItemsEquipmentSingle) | **GET** /{game}/{language}/items/equipment/{ankama_id} | Single Equipment
*dofusdude.MetaApi* | [**getMetaAlmanaxBonuses**](docs/MetaApi.md#getMetaAlmanaxBonuses) | **GET** /dofus2/meta/{language}/almanax/bonuses | Available Almanax Bonuses
*dofusdude.MetaApi* | [**getMetaElements**](docs/MetaApi.md#getMetaElements) | **GET** /dofus2/meta/elements | Effects and Condition Elements
*dofusdude.MountsApi* | [**getMountsList**](docs/MountsApi.md#getMountsList) | **GET** /{game}/{language}/mounts | List Mounts
*dofusdude.MountsApi* | [**getMountsSearch**](docs/MountsApi.md#getMountsSearch) | **GET** /{game}/{language}/mounts/search | Search Mounts
*dofusdude.MountsApi* | [**getMountsSingle**](docs/MountsApi.md#getMountsSingle) | **GET** /{game}/{language}/mounts/{ankama_id} | Single Mounts
*dofusdude.QuestItemsApi* | [**getItemQuestSingle**](docs/QuestItemsApi.md#getItemQuestSingle) | **GET** /{game}/{language}/items/quest/{ankama_id} | Single Quest Items
*dofusdude.QuestItemsApi* | [**getItemsQuestList**](docs/QuestItemsApi.md#getItemsQuestList) | **GET** /{game}/{language}/items/quest | List Quest Items
*dofusdude.QuestItemsApi* | [**getItemsQuestSearch**](docs/QuestItemsApi.md#getItemsQuestSearch) | **GET** /{game}/{language}/items/quest/search | Search Quest Items
*dofusdude.ResourcesApi* | [**getItemsResourceSearch**](docs/ResourcesApi.md#getItemsResourceSearch) | **GET** /{game}/{language}/items/resources/search | Search Resources
*dofusdude.ResourcesApi* | [**getItemsResourcesList**](docs/ResourcesApi.md#getItemsResourcesList) | **GET** /{game}/{language}/items/resources | List Resources
*dofusdude.ResourcesApi* | [**getItemsResourcesSingle**](docs/ResourcesApi.md#getItemsResourcesSingle) | **GET** /{game}/{language}/items/resources/{ankama_id} | Single Resources
*dofusdude.SetsApi* | [**getSetsList**](docs/SetsApi.md#getSetsList) | **GET** /{game}/{language}/sets | List Sets
*dofusdude.SetsApi* | [**getSetsSearch**](docs/SetsApi.md#getSetsSearch) | **GET** /{game}/{language}/sets/search | Search Sets
*dofusdude.SetsApi* | [**getSetsSingle**](docs/SetsApi.md#getSetsSingle) | **GET** /{game}/{language}/sets/{ankama_id} | Single Sets


## Documentation for Models

 - [dofusdude.AlmanaxEntry](docs/AlmanaxEntry.md)
 - [dofusdude.AlmanaxEntryBonus](docs/AlmanaxEntryBonus.md)
 - [dofusdude.AlmanaxEntryTribute](docs/AlmanaxEntryTribute.md)
 - [dofusdude.AlmanaxEntryTributeItem](docs/AlmanaxEntryTributeItem.md)
 - [dofusdude.ConditionEntry](docs/ConditionEntry.md)
 - [dofusdude.Cosmetic](docs/Cosmetic.md)
 - [dofusdude.EffectsEntry](docs/EffectsEntry.md)
 - [dofusdude.EffectsEntryType](docs/EffectsEntryType.md)
 - [dofusdude.Equipment](docs/Equipment.md)
 - [dofusdude.EquipmentParentSet](docs/EquipmentParentSet.md)
 - [dofusdude.EquipmentSet](docs/EquipmentSet.md)
 - [dofusdude.GetMetaAlmanaxBonuses200ResponseInner](docs/GetMetaAlmanaxBonuses200ResponseInner.md)
 - [dofusdude.ImageUrls](docs/ImageUrls.md)
 - [dofusdude.ItemListEntry](docs/ItemListEntry.md)
 - [dofusdude.ItemsListEntryTyped](docs/ItemsListEntryTyped.md)
 - [dofusdude.ItemsListEntryTypedType](docs/ItemsListEntryTypedType.md)
 - [dofusdude.ItemsListPaged](docs/ItemsListPaged.md)
 - [dofusdude.LinksPaged](docs/LinksPaged.md)
 - [dofusdude.Mount](docs/Mount.md)
 - [dofusdude.MountListEntry](docs/MountListEntry.md)
 - [dofusdude.MountsListPaged](docs/MountsListPaged.md)
 - [dofusdude.RecipeEntry](docs/RecipeEntry.md)
 - [dofusdude.Resource](docs/Resource.md)
 - [dofusdude.SetListEntry](docs/SetListEntry.md)
 - [dofusdude.SetsListPaged](docs/SetsListPaged.md)
 - [dofusdude.Weapon](docs/Weapon.md)
 - [dofusdude.WeaponRange](docs/WeaponRange.md)


## Documentation for Authorization

All endpoints do not require authorization.
