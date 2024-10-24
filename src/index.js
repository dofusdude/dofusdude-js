/**
 * dofusdude
 * # A project for you - the developer. The all-in-one toolbelt for your next Ankama related project.  ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [PHP](https://github.com/dofusdude/dofusdude-php) - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 0.9.4
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AlmanaxEntry from './model/AlmanaxEntry';
import AlmanaxEntryBonus from './model/AlmanaxEntryBonus';
import AlmanaxEntryTribute from './model/AlmanaxEntryTribute';
import AlmanaxEntryTributeItem from './model/AlmanaxEntryTributeItem';
import AlmanaxWebhook from './model/AlmanaxWebhook';
import AlmanaxWebhookDailySettings from './model/AlmanaxWebhookDailySettings';
import ConditionEntry from './model/ConditionEntry';
import ConditionTreeLeaf from './model/ConditionTreeLeaf';
import ConditionTreeNode from './model/ConditionTreeNode';
import ConditionTreeRelation from './model/ConditionTreeRelation';
import CreateAlmanaxWebhook from './model/CreateAlmanaxWebhook';
import CreateAlmanaxWebhookDailySettings from './model/CreateAlmanaxWebhookDailySettings';
import CreateAlmanaxWebhookMentionsValueInner from './model/CreateAlmanaxWebhookMentionsValueInner';
import CreateRSSWebhook from './model/CreateRSSWebhook';
import CreateTwitterWebhook from './model/CreateTwitterWebhook';
import EffectsEntry from './model/EffectsEntry';
import Equipment from './model/Equipment';
import EquipmentSet from './model/EquipmentSet';
import GetGameSearch200ResponseInner from './model/GetGameSearch200ResponseInner';
import GetMetaAlmanaxBonuses200ResponseInner from './model/GetMetaAlmanaxBonuses200ResponseInner';
import GetMetaVersion200Response from './model/GetMetaVersion200Response';
import GetMetaWebhooksTwitter200Response from './model/GetMetaWebhooksTwitter200Response';
import ImageUrls from './model/ImageUrls';
import ItemListEntry from './model/ItemListEntry';
import ItemListEntryParentSet from './model/ItemListEntryParentSet';
import ItemListEntryRange from './model/ItemListEntryRange';
import ItemsListEntryTyped from './model/ItemsListEntryTyped';
import ItemsListEntryTypedType from './model/ItemsListEntryTypedType';
import ItemsListPaged from './model/ItemsListPaged';
import LinksPaged from './model/LinksPaged';
import Mount from './model/Mount';
import MountListEntry from './model/MountListEntry';
import MountsListPaged from './model/MountsListPaged';
import PutAlmanaxWebhook from './model/PutAlmanaxWebhook';
import PutRSSWebhook from './model/PutRSSWebhook';
import PutTwitterWebhook from './model/PutTwitterWebhook';
import RecipeEntry from './model/RecipeEntry';
import Resource from './model/Resource';
import ResourceType from './model/ResourceType';
import RssWebhook from './model/RssWebhook';
import SetEffectsEntry from './model/SetEffectsEntry';
import SetEffectsEntryType from './model/SetEffectsEntryType';
import SetListEntry from './model/SetListEntry';
import SetsListPaged from './model/SetsListPaged';
import TwitterWebhook from './model/TwitterWebhook';
import Weapon from './model/Weapon';
import WeaponRange from './model/WeaponRange';
import AlmanaxApi from './api/AlmanaxApi';
import ConsumablesApi from './api/ConsumablesApi';
import CosmeticsApi from './api/CosmeticsApi';
import EquipmentApi from './api/EquipmentApi';
import GameApi from './api/GameApi';
import MetaApi from './api/MetaApi';
import MountsApi from './api/MountsApi';
import QuestItemsApi from './api/QuestItemsApi';
import ResourcesApi from './api/ResourcesApi';
import SetsApi from './api/SetsApi';
import WebhooksApi from './api/WebhooksApi';


/**
* # A project for you - the developer. The all-in-one toolbelt for your next Ankama related project.  ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) &#x60;npm i dofusdude-js --save&#x60; - [Typescript](https://github.com/dofusdude/dofusdude-ts) &#x60;npm i dofusdude-ts --save&#x60; - [Go](https://github.com/dofusdude/dodugo) &#x60;go get -u github.com/dofusdude/dodugo&#x60; - [Python](https://github.com/dofusdude/dofusdude-py) &#x60;pip install dofusdude&#x60; - [PHP](https://github.com/dofusdude/dofusdude-php) - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var dofusdude = require('index'); // See note below*.
* var xxxSvc = new dofusdude.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new dofusdude.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new dofusdude.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new dofusdude.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.9.4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AlmanaxEntry model constructor.
     * @property {module:model/AlmanaxEntry}
     */
    AlmanaxEntry,

    /**
     * The AlmanaxEntryBonus model constructor.
     * @property {module:model/AlmanaxEntryBonus}
     */
    AlmanaxEntryBonus,

    /**
     * The AlmanaxEntryTribute model constructor.
     * @property {module:model/AlmanaxEntryTribute}
     */
    AlmanaxEntryTribute,

    /**
     * The AlmanaxEntryTributeItem model constructor.
     * @property {module:model/AlmanaxEntryTributeItem}
     */
    AlmanaxEntryTributeItem,

    /**
     * The AlmanaxWebhook model constructor.
     * @property {module:model/AlmanaxWebhook}
     */
    AlmanaxWebhook,

    /**
     * The AlmanaxWebhookDailySettings model constructor.
     * @property {module:model/AlmanaxWebhookDailySettings}
     */
    AlmanaxWebhookDailySettings,

    /**
     * The ConditionEntry model constructor.
     * @property {module:model/ConditionEntry}
     */
    ConditionEntry,

    /**
     * The ConditionTreeLeaf model constructor.
     * @property {module:model/ConditionTreeLeaf}
     */
    ConditionTreeLeaf,

    /**
     * The ConditionTreeNode model constructor.
     * @property {module:model/ConditionTreeNode}
     */
    ConditionTreeNode,

    /**
     * The ConditionTreeRelation model constructor.
     * @property {module:model/ConditionTreeRelation}
     */
    ConditionTreeRelation,

    /**
     * The CreateAlmanaxWebhook model constructor.
     * @property {module:model/CreateAlmanaxWebhook}
     */
    CreateAlmanaxWebhook,

    /**
     * The CreateAlmanaxWebhookDailySettings model constructor.
     * @property {module:model/CreateAlmanaxWebhookDailySettings}
     */
    CreateAlmanaxWebhookDailySettings,

    /**
     * The CreateAlmanaxWebhookMentionsValueInner model constructor.
     * @property {module:model/CreateAlmanaxWebhookMentionsValueInner}
     */
    CreateAlmanaxWebhookMentionsValueInner,

    /**
     * The CreateRSSWebhook model constructor.
     * @property {module:model/CreateRSSWebhook}
     */
    CreateRSSWebhook,

    /**
     * The CreateTwitterWebhook model constructor.
     * @property {module:model/CreateTwitterWebhook}
     */
    CreateTwitterWebhook,

    /**
     * The EffectsEntry model constructor.
     * @property {module:model/EffectsEntry}
     */
    EffectsEntry,

    /**
     * The Equipment model constructor.
     * @property {module:model/Equipment}
     */
    Equipment,

    /**
     * The EquipmentSet model constructor.
     * @property {module:model/EquipmentSet}
     */
    EquipmentSet,

    /**
     * The GetGameSearch200ResponseInner model constructor.
     * @property {module:model/GetGameSearch200ResponseInner}
     */
    GetGameSearch200ResponseInner,

    /**
     * The GetMetaAlmanaxBonuses200ResponseInner model constructor.
     * @property {module:model/GetMetaAlmanaxBonuses200ResponseInner}
     */
    GetMetaAlmanaxBonuses200ResponseInner,

    /**
     * The GetMetaVersion200Response model constructor.
     * @property {module:model/GetMetaVersion200Response}
     */
    GetMetaVersion200Response,

    /**
     * The GetMetaWebhooksTwitter200Response model constructor.
     * @property {module:model/GetMetaWebhooksTwitter200Response}
     */
    GetMetaWebhooksTwitter200Response,

    /**
     * The ImageUrls model constructor.
     * @property {module:model/ImageUrls}
     */
    ImageUrls,

    /**
     * The ItemListEntry model constructor.
     * @property {module:model/ItemListEntry}
     */
    ItemListEntry,

    /**
     * The ItemListEntryParentSet model constructor.
     * @property {module:model/ItemListEntryParentSet}
     */
    ItemListEntryParentSet,

    /**
     * The ItemListEntryRange model constructor.
     * @property {module:model/ItemListEntryRange}
     */
    ItemListEntryRange,

    /**
     * The ItemsListEntryTyped model constructor.
     * @property {module:model/ItemsListEntryTyped}
     */
    ItemsListEntryTyped,

    /**
     * The ItemsListEntryTypedType model constructor.
     * @property {module:model/ItemsListEntryTypedType}
     */
    ItemsListEntryTypedType,

    /**
     * The ItemsListPaged model constructor.
     * @property {module:model/ItemsListPaged}
     */
    ItemsListPaged,

    /**
     * The LinksPaged model constructor.
     * @property {module:model/LinksPaged}
     */
    LinksPaged,

    /**
     * The Mount model constructor.
     * @property {module:model/Mount}
     */
    Mount,

    /**
     * The MountListEntry model constructor.
     * @property {module:model/MountListEntry}
     */
    MountListEntry,

    /**
     * The MountsListPaged model constructor.
     * @property {module:model/MountsListPaged}
     */
    MountsListPaged,

    /**
     * The PutAlmanaxWebhook model constructor.
     * @property {module:model/PutAlmanaxWebhook}
     */
    PutAlmanaxWebhook,

    /**
     * The PutRSSWebhook model constructor.
     * @property {module:model/PutRSSWebhook}
     */
    PutRSSWebhook,

    /**
     * The PutTwitterWebhook model constructor.
     * @property {module:model/PutTwitterWebhook}
     */
    PutTwitterWebhook,

    /**
     * The RecipeEntry model constructor.
     * @property {module:model/RecipeEntry}
     */
    RecipeEntry,

    /**
     * The Resource model constructor.
     * @property {module:model/Resource}
     */
    Resource,

    /**
     * The ResourceType model constructor.
     * @property {module:model/ResourceType}
     */
    ResourceType,

    /**
     * The RssWebhook model constructor.
     * @property {module:model/RssWebhook}
     */
    RssWebhook,

    /**
     * The SetEffectsEntry model constructor.
     * @property {module:model/SetEffectsEntry}
     */
    SetEffectsEntry,

    /**
     * The SetEffectsEntryType model constructor.
     * @property {module:model/SetEffectsEntryType}
     */
    SetEffectsEntryType,

    /**
     * The SetListEntry model constructor.
     * @property {module:model/SetListEntry}
     */
    SetListEntry,

    /**
     * The SetsListPaged model constructor.
     * @property {module:model/SetsListPaged}
     */
    SetsListPaged,

    /**
     * The TwitterWebhook model constructor.
     * @property {module:model/TwitterWebhook}
     */
    TwitterWebhook,

    /**
     * The Weapon model constructor.
     * @property {module:model/Weapon}
     */
    Weapon,

    /**
     * The WeaponRange model constructor.
     * @property {module:model/WeaponRange}
     */
    WeaponRange,

    /**
    * The AlmanaxApi service constructor.
    * @property {module:api/AlmanaxApi}
    */
    AlmanaxApi,

    /**
    * The ConsumablesApi service constructor.
    * @property {module:api/ConsumablesApi}
    */
    ConsumablesApi,

    /**
    * The CosmeticsApi service constructor.
    * @property {module:api/CosmeticsApi}
    */
    CosmeticsApi,

    /**
    * The EquipmentApi service constructor.
    * @property {module:api/EquipmentApi}
    */
    EquipmentApi,

    /**
    * The GameApi service constructor.
    * @property {module:api/GameApi}
    */
    GameApi,

    /**
    * The MetaApi service constructor.
    * @property {module:api/MetaApi}
    */
    MetaApi,

    /**
    * The MountsApi service constructor.
    * @property {module:api/MountsApi}
    */
    MountsApi,

    /**
    * The QuestItemsApi service constructor.
    * @property {module:api/QuestItemsApi}
    */
    QuestItemsApi,

    /**
    * The ResourcesApi service constructor.
    * @property {module:api/ResourcesApi}
    */
    ResourcesApi,

    /**
    * The SetsApi service constructor.
    * @property {module:api/SetsApi}
    */
    SetsApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi
};
