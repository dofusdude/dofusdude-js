/**
 * Dofusdude
 * The last API for everything Dofus 🤯 <h2>Main Features</h2> <ul> <li>🥷 <b>seamless auto-update</b> load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.</li>  <li>⚡ <b>blazingly fast</b> all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.</li>  <li>🩸 <b>Dofus 2 Beta</b> from stable to bleeding edge by replacing /dofus2 with /dofus2beta.</li>  <li>🗣️ <b>multilingual</b> supporting <em>en</em>, <em>fr</em>, <em>es</em>, <em>pt</em> including the dropped languages from the Dofus website <em>de</em> and <em>it</em>.</li>  <li>🧠 <b>search by relevance</b> allowing typos in name and description, handled by language specific text analysis and indexing by the powerful <a href=\"https://www.meilisearch.com\">Meilisearch</a> written in Rust.</li>  <li>🕵️ <b>complete</b> actual data from the game including items invisible to the encyclopedia like quest items.</li>  <li>🖼️ <b>HD images</b> rendering vector graphics into PNGs up to 800x800 px in the background.</li>  </ul>   <h2>Current state</h2> <ul> <li>Weapons ✅</li> <li>Equipment ✅</li> <li>Sets ✅</li> <li>Resources ✅</li> <li>Consumables ✅</li> <li>Pets ✅</li> <li>Mounts ✅</li> <li>Cosmetics/Ceremonial Items ✅</li> <li>Harnesses ✅</li> <li>Quest Items ✅</li> <li>Almanax ✅</li> </ul>  <ul> <li>Monsters ❌</li> <li>Classes ❌</li> <li>Spells ❌</li> <li>Professions ❌ </li> </ul>   <h3>Maybes? I don't know what for 🤷</h3> <ul> <li>Sidekicks ❌</li> <li>Haven Bags ❌</li> <li>Map ❌</li> </ul>   <h2>Future</h2> I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers. <br>Examples: <p><em>I need to know where I can drop the all the items I need to craft set X!</em></p> <p><em>Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!</em></p> <p>Nearly everything can be done. But I want to make sure somebody also wants it. If you have anything or you are just interested in the project, join the <a href=\"https://discord.gg/3EtHskZD8h\">Discord</a>.</p>  <h3>Versioning</h3> <p>Updating an API is a hard problem. This is why we'll keep it simple:  Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever. </p> <p>There is one exception! <b>The API will <em>always</em> choose being up-to-date over everything else</b>. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too. </p> <p> We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag. </p>  <h2>Get started! 🥳</h2> <p>Scroll down and try it for yourself!</p> <p>If you are ready to use them in your project, think about <a href=\"https://github.com/OpenAPITools/openapi-generator\">generating a client 🧙</a> from the <a href=\"https://raw.githubusercontent.com/dofusdude/api-docs/main/openapi-3.0.yaml\">OpenAPI 3.0 Spec</a> to get started quickly.</p>  <p>Awesome Projects using this API:</p> <ul> <li><a href=\"https://github.com/Kaysoro/KaellyBot\">KaellyBot</a> by Kaysoro</li> <li><a href=\"https://dofuscraftlist-dev.netlify.app\">Dofus Craftlist</a> by Lystina</li> <li><a href=\"https://almanaxapp.netlify.app\">AlmanaxApp</a> by Lystina</li> <li><a href=\"https://luwnarya.fr\">luwnarya.fr</a></li> </ul>  My old <a href=\"https://alm.dofusdu.de/swagger\">Almanax API v1</a> is an example for using a <a href=\"https://github.com/dofusdude/almanax-api/tree/main/src/main/java/org/acme/openapi\">generated Client</a> from the OpenAPI Spec.  
 *
 * The version of the OpenAPI document: 0.5.1
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
* The last API for everything Dofus 🤯 &lt;h2&gt;Main Features&lt;/h2&gt; &lt;ul&gt; &lt;li&gt;🥷 &lt;b&gt;seamless auto-update&lt;/b&gt; load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.&lt;/li&gt;  &lt;li&gt;⚡ &lt;b&gt;blazingly fast&lt;/b&gt; all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.&lt;/li&gt;  &lt;li&gt;🩸 &lt;b&gt;Dofus 2 Beta&lt;/b&gt; from stable to bleeding edge by replacing /dofus2 with /dofus2beta.&lt;/li&gt;  &lt;li&gt;🗣️ &lt;b&gt;multilingual&lt;/b&gt; supporting &lt;em&gt;en&lt;/em&gt;, &lt;em&gt;fr&lt;/em&gt;, &lt;em&gt;es&lt;/em&gt;, &lt;em&gt;pt&lt;/em&gt; including the dropped languages from the Dofus website &lt;em&gt;de&lt;/em&gt; and &lt;em&gt;it&lt;/em&gt;.&lt;/li&gt;  &lt;li&gt;🧠 &lt;b&gt;search by relevance&lt;/b&gt; allowing typos in name and description, handled by language specific text analysis and indexing by the powerful &lt;a href&#x3D;\&quot;https://www.meilisearch.com\&quot;&gt;Meilisearch&lt;/a&gt; written in Rust.&lt;/li&gt;  &lt;li&gt;🕵️ &lt;b&gt;complete&lt;/b&gt; actual data from the game including items invisible to the encyclopedia like quest items.&lt;/li&gt;  &lt;li&gt;🖼️ &lt;b&gt;HD images&lt;/b&gt; rendering vector graphics into PNGs up to 800x800 px in the background.&lt;/li&gt;  &lt;/ul&gt;   &lt;h2&gt;Current state&lt;/h2&gt; &lt;ul&gt; &lt;li&gt;Weapons ✅&lt;/li&gt; &lt;li&gt;Equipment ✅&lt;/li&gt; &lt;li&gt;Sets ✅&lt;/li&gt; &lt;li&gt;Resources ✅&lt;/li&gt; &lt;li&gt;Consumables ✅&lt;/li&gt; &lt;li&gt;Pets ✅&lt;/li&gt; &lt;li&gt;Mounts ✅&lt;/li&gt; &lt;li&gt;Cosmetics/Ceremonial Items ✅&lt;/li&gt; &lt;li&gt;Harnesses ✅&lt;/li&gt; &lt;li&gt;Quest Items ✅&lt;/li&gt; &lt;li&gt;Almanax ✅&lt;/li&gt; &lt;/ul&gt;  &lt;ul&gt; &lt;li&gt;Monsters ❌&lt;/li&gt; &lt;li&gt;Classes ❌&lt;/li&gt; &lt;li&gt;Spells ❌&lt;/li&gt; &lt;li&gt;Professions ❌ &lt;/li&gt; &lt;/ul&gt;   &lt;h3&gt;Maybes? I don&#39;t know what for 🤷&lt;/h3&gt; &lt;ul&gt; &lt;li&gt;Sidekicks ❌&lt;/li&gt; &lt;li&gt;Haven Bags ❌&lt;/li&gt; &lt;li&gt;Map ❌&lt;/li&gt; &lt;/ul&gt;   &lt;h2&gt;Future&lt;/h2&gt; I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers. &lt;br&gt;Examples: &lt;p&gt;&lt;em&gt;I need to know where I can drop the all the items I need to craft set X!&lt;/em&gt;&lt;/p&gt; &lt;p&gt;&lt;em&gt;Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!&lt;/em&gt;&lt;/p&gt; &lt;p&gt;Nearly everything can be done. But I want to make sure somebody also wants it. If you have anything or you are just interested in the project, join the &lt;a href&#x3D;\&quot;https://discord.gg/3EtHskZD8h\&quot;&gt;Discord&lt;/a&gt;.&lt;/p&gt;  &lt;h3&gt;Versioning&lt;/h3&gt; &lt;p&gt;Updating an API is a hard problem. This is why we&#39;ll keep it simple:  Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever. &lt;/p&gt; &lt;p&gt;There is one exception! &lt;b&gt;The API will &lt;em&gt;always&lt;/em&gt; choose being up-to-date over everything else&lt;/b&gt;. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too. &lt;/p&gt; &lt;p&gt; We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag. &lt;/p&gt;  &lt;h2&gt;Get started! 🥳&lt;/h2&gt; &lt;p&gt;Scroll down and try it for yourself!&lt;/p&gt; &lt;p&gt;If you are ready to use them in your project, think about &lt;a href&#x3D;\&quot;https://github.com/OpenAPITools/openapi-generator\&quot;&gt;generating a client 🧙&lt;/a&gt; from the &lt;a href&#x3D;\&quot;https://raw.githubusercontent.com/dofusdude/api-docs/main/openapi-3.0.yaml\&quot;&gt;OpenAPI 3.0 Spec&lt;/a&gt; to get started quickly.&lt;/p&gt;  &lt;p&gt;Awesome Projects using this API:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;a href&#x3D;\&quot;https://github.com/Kaysoro/KaellyBot\&quot;&gt;KaellyBot&lt;/a&gt; by Kaysoro&lt;/li&gt; &lt;li&gt;&lt;a href&#x3D;\&quot;https://dofuscraftlist-dev.netlify.app\&quot;&gt;Dofus Craftlist&lt;/a&gt; by Lystina&lt;/li&gt; &lt;li&gt;&lt;a href&#x3D;\&quot;https://almanaxapp.netlify.app\&quot;&gt;AlmanaxApp&lt;/a&gt; by Lystina&lt;/li&gt; &lt;li&gt;&lt;a href&#x3D;\&quot;https://luwnarya.fr\&quot;&gt;luwnarya.fr&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;  My old &lt;a href&#x3D;\&quot;https://alm.dofusdu.de/swagger\&quot;&gt;Almanax API v1&lt;/a&gt; is an example for using a &lt;a href&#x3D;\&quot;https://github.com/dofusdude/almanax-api/tree/main/src/main/java/org/acme/openapi\&quot;&gt;generated Client&lt;/a&gt; from the OpenAPI Spec.  .<br>
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
* @version 0.5.1
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
