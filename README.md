# dofusdude-js

dofusdude - JavaScript client for dofusdude-js
# A project for you - the developer.
The all-in-one toolbelt for your next Ankama related project.

## Client SDKs
- [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save
- [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save
- [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo
- [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude
- [PHP](https://github.com/dofusdude/dofusdude-php)

Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.

Your favorite language is missing? Please let me know!

# Main Features
- 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.

- ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.

- 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.

- 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.

- 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.

- 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.

- 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.

- 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.

... and much more on the Roadmap on my Discord. 

## Deploy now. Use forever.
Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility.

There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.

## Thank you!
I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.

The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply donate to that cause, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude).
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.8.1
- Package version: 0.8.1
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


var api = new dofusdude.AlmanaxApi()
var language = fr; // {String} code
var date = Tue Jul 14 00:00:00 UTC 2020; // {Date} yyyy-mm-dd
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAlmanaxDate(language, date, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.dofusdu.de*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*dofusdude.AlmanaxApi* | [**getAlmanaxDate**](docs/AlmanaxApi.md#getAlmanaxDate) | **GET** /dofus2/{language}/almanax/{date} | Single Almanax Date
*dofusdude.AlmanaxApi* | [**getAlmanaxRange**](docs/AlmanaxApi.md#getAlmanaxRange) | **GET** /dofus2/{language}/almanax | Almanax Range
*dofusdude.ConsumablesApi* | [**getAllItemsConsumablesList**](docs/ConsumablesApi.md#getAllItemsConsumablesList) | **GET** /{game}/{language}/items/consumables/all | List All Consumables
*dofusdude.ConsumablesApi* | [**getItemsConsumablesList**](docs/ConsumablesApi.md#getItemsConsumablesList) | **GET** /{game}/{language}/items/consumables | List Consumables
*dofusdude.ConsumablesApi* | [**getItemsConsumablesSearch**](docs/ConsumablesApi.md#getItemsConsumablesSearch) | **GET** /{game}/{language}/items/consumables/search | Search Consumables
*dofusdude.ConsumablesApi* | [**getItemsConsumablesSingle**](docs/ConsumablesApi.md#getItemsConsumablesSingle) | **GET** /{game}/{language}/items/consumables/{ankama_id} | Single Consumables
*dofusdude.CosmeticsApi* | [**getAllCosmeticsList**](docs/CosmeticsApi.md#getAllCosmeticsList) | **GET** /{game}/{language}/items/cosmetics/all | List All Cosmetics
*dofusdude.CosmeticsApi* | [**getCosmeticsList**](docs/CosmeticsApi.md#getCosmeticsList) | **GET** /{game}/{language}/items/cosmetics | List Cosmetics
*dofusdude.CosmeticsApi* | [**getCosmeticsSearch**](docs/CosmeticsApi.md#getCosmeticsSearch) | **GET** /{game}/{language}/items/cosmetics/search | Search Cosmetics
*dofusdude.CosmeticsApi* | [**getCosmeticsSingle**](docs/CosmeticsApi.md#getCosmeticsSingle) | **GET** /{game}/{language}/items/cosmetics/{ankama_id} | Single Cosmetics
*dofusdude.EquipmentApi* | [**getAllItemsEquipmentList**](docs/EquipmentApi.md#getAllItemsEquipmentList) | **GET** /{game}/{language}/items/equipment/all | List All Equipment
*dofusdude.EquipmentApi* | [**getItemsEquipmentList**](docs/EquipmentApi.md#getItemsEquipmentList) | **GET** /{game}/{language}/items/equipment | List Equipment
*dofusdude.EquipmentApi* | [**getItemsEquipmentSearch**](docs/EquipmentApi.md#getItemsEquipmentSearch) | **GET** /{game}/{language}/items/equipment/search | Search Equipment
*dofusdude.EquipmentApi* | [**getItemsEquipmentSingle**](docs/EquipmentApi.md#getItemsEquipmentSingle) | **GET** /{game}/{language}/items/equipment/{ankama_id} | Single Equipment
*dofusdude.GameApi* | [**getGameSearch**](docs/GameApi.md#getGameSearch) | **GET** /{game}/{language}/search | Game Search
*dofusdude.GameApi* | [**getItemsAllSearch**](docs/GameApi.md#getItemsAllSearch) | **GET** /{game}/{language}/items/search | Search All Items
*dofusdude.MetaApi* | [**getGameSearchTypes**](docs/MetaApi.md#getGameSearchTypes) | **GET** /dofus2/meta/search/types | Available Game Search Types
*dofusdude.MetaApi* | [**getMetaAlmanaxBonuses**](docs/MetaApi.md#getMetaAlmanaxBonuses) | **GET** /dofus2/meta/{language}/almanax/bonuses | Available Almanax Bonuses
*dofusdude.MetaApi* | [**getMetaAlmanaxBonusesSearch**](docs/MetaApi.md#getMetaAlmanaxBonusesSearch) | **GET** /dofus2/meta/{language}/almanax/bonuses/search | Search Available Almanax Bonuses
*dofusdude.MetaApi* | [**getMetaElements**](docs/MetaApi.md#getMetaElements) | **GET** /dofus2/meta/elements | Effects and Condition Elements
*dofusdude.MountsApi* | [**getAllMountsList**](docs/MountsApi.md#getAllMountsList) | **GET** /{game}/{language}/mounts/all | List All Mounts
*dofusdude.MountsApi* | [**getMountsList**](docs/MountsApi.md#getMountsList) | **GET** /{game}/{language}/mounts | List Mounts
*dofusdude.MountsApi* | [**getMountsSearch**](docs/MountsApi.md#getMountsSearch) | **GET** /{game}/{language}/mounts/search | Search Mounts
*dofusdude.MountsApi* | [**getMountsSingle**](docs/MountsApi.md#getMountsSingle) | **GET** /{game}/{language}/mounts/{ankama_id} | Single Mounts
*dofusdude.QuestItemsApi* | [**getAllItemsQuestList**](docs/QuestItemsApi.md#getAllItemsQuestList) | **GET** /{game}/{language}/items/quest/all | List All Quest Items
*dofusdude.QuestItemsApi* | [**getItemQuestSingle**](docs/QuestItemsApi.md#getItemQuestSingle) | **GET** /{game}/{language}/items/quest/{ankama_id} | Single Quest Items
*dofusdude.QuestItemsApi* | [**getItemsQuestList**](docs/QuestItemsApi.md#getItemsQuestList) | **GET** /{game}/{language}/items/quest | List Quest Items
*dofusdude.QuestItemsApi* | [**getItemsQuestSearch**](docs/QuestItemsApi.md#getItemsQuestSearch) | **GET** /{game}/{language}/items/quest/search | Search Quest Items
*dofusdude.ResourcesApi* | [**getAllItemsResourcesList**](docs/ResourcesApi.md#getAllItemsResourcesList) | **GET** /{game}/{language}/items/resources/all | List All Resources
*dofusdude.ResourcesApi* | [**getItemsResourceSearch**](docs/ResourcesApi.md#getItemsResourceSearch) | **GET** /{game}/{language}/items/resources/search | Search Resources
*dofusdude.ResourcesApi* | [**getItemsResourcesList**](docs/ResourcesApi.md#getItemsResourcesList) | **GET** /{game}/{language}/items/resources | List Resources
*dofusdude.ResourcesApi* | [**getItemsResourcesSingle**](docs/ResourcesApi.md#getItemsResourcesSingle) | **GET** /{game}/{language}/items/resources/{ankama_id} | Single Resources
*dofusdude.SetsApi* | [**getAllSetsList**](docs/SetsApi.md#getAllSetsList) | **GET** /{game}/{language}/sets/all | List All Sets
*dofusdude.SetsApi* | [**getSetsList**](docs/SetsApi.md#getSetsList) | **GET** /{game}/{language}/sets | List Sets
*dofusdude.SetsApi* | [**getSetsSearch**](docs/SetsApi.md#getSetsSearch) | **GET** /{game}/{language}/sets/search | Search Sets
*dofusdude.SetsApi* | [**getSetsSingle**](docs/SetsApi.md#getSetsSingle) | **GET** /{game}/{language}/sets/{ankama_id} | Single Sets
*dofusdude.WebhooksApi* | [**deleteWebhooksAlmanaxId**](docs/WebhooksApi.md#deleteWebhooksAlmanaxId) | **DELETE** /webhooks/almanax/{id} | Unregister Almanax Hook
*dofusdude.WebhooksApi* | [**deleteWebhooksRssId**](docs/WebhooksApi.md#deleteWebhooksRssId) | **DELETE** /webhooks/rss/{id} | Unregister RSS Hook
*dofusdude.WebhooksApi* | [**deleteWebhooksTwitterId**](docs/WebhooksApi.md#deleteWebhooksTwitterId) | **DELETE** /webhooks/twitter/{id} | Unregister Twitter Hook
*dofusdude.WebhooksApi* | [**getMetaWebhooksAlmanax**](docs/WebhooksApi.md#getMetaWebhooksAlmanax) | **GET** /meta/webhooks/almanax | Get Almanax Hook Metainfo
*dofusdude.WebhooksApi* | [**getMetaWebhooksRss**](docs/WebhooksApi.md#getMetaWebhooksRss) | **GET** /meta/webhooks/rss | Get RSS Hook Metainfo
*dofusdude.WebhooksApi* | [**getMetaWebhooksTwitter**](docs/WebhooksApi.md#getMetaWebhooksTwitter) | **GET** /meta/webhooks/twitter | Get Twitter Hook Metainfo
*dofusdude.WebhooksApi* | [**getWebhooksAlmanaxId**](docs/WebhooksApi.md#getWebhooksAlmanaxId) | **GET** /webhooks/almanax/{id} | Get Almanax Hook
*dofusdude.WebhooksApi* | [**getWebhooksRssId**](docs/WebhooksApi.md#getWebhooksRssId) | **GET** /webhooks/rss/{id} | Get RSS Hook
*dofusdude.WebhooksApi* | [**getWebhooksTwitterId**](docs/WebhooksApi.md#getWebhooksTwitterId) | **GET** /webhooks/twitter/{id} | Get Twitter Hook
*dofusdude.WebhooksApi* | [**postWebhooksAlmanax**](docs/WebhooksApi.md#postWebhooksAlmanax) | **POST** /webhooks/almanax | Register Almanax Hook
*dofusdude.WebhooksApi* | [**postWebhooksRss**](docs/WebhooksApi.md#postWebhooksRss) | **POST** /webhooks/rss | Register RSS Hook
*dofusdude.WebhooksApi* | [**postWebhooksTwitter**](docs/WebhooksApi.md#postWebhooksTwitter) | **POST** /webhooks/twitter | Register Twitter Hook
*dofusdude.WebhooksApi* | [**putWebhooksAlmanaxId**](docs/WebhooksApi.md#putWebhooksAlmanaxId) | **PUT** /webhooks/almanax/{id} | Update Almanax Hook
*dofusdude.WebhooksApi* | [**putWebhooksRssId**](docs/WebhooksApi.md#putWebhooksRssId) | **PUT** /webhooks/rss/{id} | Update RSS Hook
*dofusdude.WebhooksApi* | [**putWebhooksTwitterId**](docs/WebhooksApi.md#putWebhooksTwitterId) | **PUT** /webhooks/twitter/{id} | Update Twitter Hook


## Documentation for Models

 - [dofusdude.AlmanaxEntry](docs/AlmanaxEntry.md)
 - [dofusdude.AlmanaxEntryBonus](docs/AlmanaxEntryBonus.md)
 - [dofusdude.AlmanaxEntryTribute](docs/AlmanaxEntryTribute.md)
 - [dofusdude.AlmanaxEntryTributeItem](docs/AlmanaxEntryTributeItem.md)
 - [dofusdude.AlmanaxWebhook](docs/AlmanaxWebhook.md)
 - [dofusdude.AlmanaxWebhookDailySettings](docs/AlmanaxWebhookDailySettings.md)
 - [dofusdude.ConditionEntry](docs/ConditionEntry.md)
 - [dofusdude.ConditionTreeLeaf](docs/ConditionTreeLeaf.md)
 - [dofusdude.ConditionTreeNode](docs/ConditionTreeNode.md)
 - [dofusdude.ConditionTreeRelation](docs/ConditionTreeRelation.md)
 - [dofusdude.Cosmetic](docs/Cosmetic.md)
 - [dofusdude.CosmeticType](docs/CosmeticType.md)
 - [dofusdude.CreateAlmanaxWebhook](docs/CreateAlmanaxWebhook.md)
 - [dofusdude.CreateAlmanaxWebhookDailySettings](docs/CreateAlmanaxWebhookDailySettings.md)
 - [dofusdude.CreateAlmanaxWebhookMentionsValueInner](docs/CreateAlmanaxWebhookMentionsValueInner.md)
 - [dofusdude.CreateRSSWebhook](docs/CreateRSSWebhook.md)
 - [dofusdude.CreateTwitterWebhook](docs/CreateTwitterWebhook.md)
 - [dofusdude.EffectsEntry](docs/EffectsEntry.md)
 - [dofusdude.EffectsEntryType](docs/EffectsEntryType.md)
 - [dofusdude.Equipment](docs/Equipment.md)
 - [dofusdude.EquipmentParentSet](docs/EquipmentParentSet.md)
 - [dofusdude.EquipmentSet](docs/EquipmentSet.md)
 - [dofusdude.GetGameSearch200ResponseInner](docs/GetGameSearch200ResponseInner.md)
 - [dofusdude.GetMetaAlmanaxBonuses200ResponseInner](docs/GetMetaAlmanaxBonuses200ResponseInner.md)
 - [dofusdude.GetMetaWebhooksTwitter200Response](docs/GetMetaWebhooksTwitter200Response.md)
 - [dofusdude.ImageUrls](docs/ImageUrls.md)
 - [dofusdude.ItemListEntry](docs/ItemListEntry.md)
 - [dofusdude.ItemsListEntryTyped](docs/ItemsListEntryTyped.md)
 - [dofusdude.ItemsListEntryTypedType](docs/ItemsListEntryTypedType.md)
 - [dofusdude.ItemsListPaged](docs/ItemsListPaged.md)
 - [dofusdude.LinksPaged](docs/LinksPaged.md)
 - [dofusdude.Mount](docs/Mount.md)
 - [dofusdude.MountListEntry](docs/MountListEntry.md)
 - [dofusdude.MountsListPaged](docs/MountsListPaged.md)
 - [dofusdude.PutAlmanaxWebhook](docs/PutAlmanaxWebhook.md)
 - [dofusdude.PutRSSWebhook](docs/PutRSSWebhook.md)
 - [dofusdude.PutTwitterWebhook](docs/PutTwitterWebhook.md)
 - [dofusdude.RecipeEntry](docs/RecipeEntry.md)
 - [dofusdude.Resource](docs/Resource.md)
 - [dofusdude.RssWebhook](docs/RssWebhook.md)
 - [dofusdude.SetListEntry](docs/SetListEntry.md)
 - [dofusdude.SetsListPaged](docs/SetsListPaged.md)
 - [dofusdude.TwitterWebhook](docs/TwitterWebhook.md)
 - [dofusdude.Weapon](docs/Weapon.md)
 - [dofusdude.WeaponRange](docs/WeaponRange.md)


## Documentation for Authorization

Endpoints do not require authorization.

