/**
 * Dofusdude
 * The last API for everything Dofus 🤯  ### JS Quickstart ```js var dofusdude = require(\"dofusdude-js\");  new dofusdude.AllItemsApi().getItemsAllSearch(   \"en\",   \"dofus2\",   \"nidas\",   { filterTypeName: \"hat\" },   (err, data, response) => {     console.log(data[0]);   } ); ```  ### Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue at the Docs Repo.  ## Main Features - 🥷 **seamless auto-update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **blazingly fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **search by relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅  - Monsters ❌ - Classes ❌ - Spells ❌ - Professions ❌   ### Maybes? I don't know what for 🤷 - Sidekicks ❌ - Haven Bags ❌ - Map ❌   ## Future I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers.  Examples: _I need to know where I can drop the all the items I need to craft set X!_  _Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!_  Nearly everything can be done. But I want to make sure somebody also wants it.  If you have anything or you are just interested in the project, join the [Discord](https://discord.gg/3EtHskZD8h).  ### Versioning Updating an API is a hard problem. This is why we'll keep it simple:  Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag.  ## Get started! 🥳 Scroll down and try it for yourself!  If you are ready to use them in your project, think about [generating a client 🧙](https://github.com/OpenAPITools/openapi-generator) or use one of our pre generated SDKs linked at the top.  Awesome Projects using this API:  - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [luwnarya.fr](https://luwnarya.fr)  
 *
 * The version of the OpenAPI document: 0.5.5
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
import ConditionEntry from './model/ConditionEntry';
import Cosmetic from './model/Cosmetic';
import EffectsEntry from './model/EffectsEntry';
import EffectsEntryType from './model/EffectsEntryType';
import Equipment from './model/Equipment';
import EquipmentParentSet from './model/EquipmentParentSet';
import EquipmentSet from './model/EquipmentSet';
import GetMetaAlmanaxBonuses200ResponseInner from './model/GetMetaAlmanaxBonuses200ResponseInner';
import ImageUrls from './model/ImageUrls';
import ItemListEntry from './model/ItemListEntry';
import ItemsListEntryTyped from './model/ItemsListEntryTyped';
import ItemsListEntryTypedType from './model/ItemsListEntryTypedType';
import ItemsListPaged from './model/ItemsListPaged';
import LinksPaged from './model/LinksPaged';
import Mount from './model/Mount';
import MountListEntry from './model/MountListEntry';
import MountsListPaged from './model/MountsListPaged';
import RecipeEntry from './model/RecipeEntry';
import Resource from './model/Resource';
import SetListEntry from './model/SetListEntry';
import SetsListPaged from './model/SetsListPaged';
import Weapon from './model/Weapon';
import WeaponRange from './model/WeaponRange';
import AllItemsApi from './api/AllItemsApi';
import AlmanaxApi from './api/AlmanaxApi';
import ConsumablesApi from './api/ConsumablesApi';
import CosmeticsApi from './api/CosmeticsApi';
import EquipmentApi from './api/EquipmentApi';
import MetaApi from './api/MetaApi';
import MountsApi from './api/MountsApi';
import QuestItemsApi from './api/QuestItemsApi';
import ResourcesApi from './api/ResourcesApi';
import SetsApi from './api/SetsApi';


/**
* The last API for everything Dofus 🤯  ### JS Quickstart &#x60;&#x60;&#x60;js var dofusdude &#x3D; require(\&quot;dofusdude-js\&quot;);  new dofusdude.AllItemsApi().getItemsAllSearch(   \&quot;en\&quot;,   \&quot;dofus2\&quot;,   \&quot;nidas\&quot;,   { filterTypeName: \&quot;hat\&quot; },   (err, data, response) &#x3D;&gt; {     console.log(data[0]);   } ); &#x60;&#x60;&#x60;  ### Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue at the Docs Repo.  ## Main Features - 🥷 **seamless auto-update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **blazingly fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **search by relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅  - Monsters ❌ - Classes ❌ - Spells ❌ - Professions ❌   ### Maybes? I don&#39;t know what for 🤷 - Sidekicks ❌ - Haven Bags ❌ - Map ❌   ## Future I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers.  Examples: _I need to know where I can drop the all the items I need to craft set X!_  _Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!_  Nearly everything can be done. But I want to make sure somebody also wants it.  If you have anything or you are just interested in the project, join the [Discord](https://discord.gg/3EtHskZD8h).  ### Versioning Updating an API is a hard problem. This is why we&#39;ll keep it simple:  Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag.  ## Get started! 🥳 Scroll down and try it for yourself!  If you are ready to use them in your project, think about [generating a client 🧙](https://github.com/OpenAPITools/openapi-generator) or use one of our pre generated SDKs linked at the top.  Awesome Projects using this API:  - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [luwnarya.fr](https://luwnarya.fr)  .<br>
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
* @version 0.5.5
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
     * The ConditionEntry model constructor.
     * @property {module:model/ConditionEntry}
     */
    ConditionEntry,

    /**
     * The Cosmetic model constructor.
     * @property {module:model/Cosmetic}
     */
    Cosmetic,

    /**
     * The EffectsEntry model constructor.
     * @property {module:model/EffectsEntry}
     */
    EffectsEntry,

    /**
     * The EffectsEntryType model constructor.
     * @property {module:model/EffectsEntryType}
     */
    EffectsEntryType,

    /**
     * The Equipment model constructor.
     * @property {module:model/Equipment}
     */
    Equipment,

    /**
     * The EquipmentParentSet model constructor.
     * @property {module:model/EquipmentParentSet}
     */
    EquipmentParentSet,

    /**
     * The EquipmentSet model constructor.
     * @property {module:model/EquipmentSet}
     */
    EquipmentSet,

    /**
     * The GetMetaAlmanaxBonuses200ResponseInner model constructor.
     * @property {module:model/GetMetaAlmanaxBonuses200ResponseInner}
     */
    GetMetaAlmanaxBonuses200ResponseInner,

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
    * The AllItemsApi service constructor.
    * @property {module:api/AllItemsApi}
    */
    AllItemsApi,

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
    SetsApi
};
