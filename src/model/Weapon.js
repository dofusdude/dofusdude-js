/**
 * Dofusdude
 * The last API for everything Dofus 🤯  ```js var dofusdude = require(\"dofusdude-js\");  new dofusdude.AllItemsApi().getItemsAllSearch(   \"en\",   \"dofus2\",   \"nidas\",   { filterTypeName: \"hat\" },   (err, data, response) => {     console.log(data[0]);   } ); ```  ### Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue at the Docs Repo.  ## Main Features - 🥷 **seamless auto-update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **blazingly fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **search by relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅  - Monsters ❌ - Classes ❌ - Spells ❌ - Professions ❌   ### Maybes? I don't know what for 🤷 - Sidekicks ❌ - Haven Bags ❌ - Map ❌   ## Future I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers.  Examples: _I need to know where I can drop the all the items I need to craft set X!_  _Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!_  Nearly everything can be done. But I want to make sure somebody also wants it.  If you have anything or you are just interested in the project, join the [Discord](https://discord.gg/3EtHskZD8h).  ### Versioning Updating an API is a hard problem. This is why we'll keep it simple:  Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag.  ## Get started! 🥳 Scroll down and try it for yourself!  If you are ready to use them in your project, think about [generating a client 🧙](https://github.com/OpenAPITools/openapi-generator) or use one of our pre generated SDKs linked at the top.  Awesome Projects using this API:  - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [luwnarya.fr](https://luwnarya.fr)  
 *
 * The version of the OpenAPI document: 0.5.3
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ConditionEntry from './ConditionEntry';
import EffectsEntry from './EffectsEntry';
import EquipmentParentSet from './EquipmentParentSet';
import ImageUrls from './ImageUrls';
import ItemsListEntryTypedType from './ItemsListEntryTypedType';
import RecipeEntry from './RecipeEntry';
import WeaponRange from './WeaponRange';

/**
 * The Weapon model module.
 * @module model/Weapon
 * @version 0.5.3
 */
class Weapon {
    /**
     * Constructs a new <code>Weapon</code>.
     * 
     * @alias module:model/Weapon
     */
    constructor() { 
        
        Weapon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Weapon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Weapon} obj Optional instance to populate.
     * @return {module:model/Weapon} The populated <code>Weapon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Weapon();

            if (data.hasOwnProperty('ankama_id')) {
                obj['ankama_id'] = ApiClient.convertToType(data['ankama_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ItemsListEntryTypedType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('is_weapon')) {
                obj['is_weapon'] = ApiClient.convertToType(data['is_weapon'], 'Boolean');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('pods')) {
                obj['pods'] = ApiClient.convertToType(data['pods'], 'Number');
            }
            if (data.hasOwnProperty('image_urls')) {
                obj['image_urls'] = ImageUrls.constructFromObject(data['image_urls']);
            }
            if (data.hasOwnProperty('has_effects')) {
                obj['has_effects'] = ApiClient.convertToType(data['has_effects'], 'Boolean');
            }
            if (data.hasOwnProperty('effects')) {
                obj['effects'] = ApiClient.convertToType(data['effects'], [EffectsEntry]);
            }
            if (data.hasOwnProperty('has_conditions')) {
                obj['has_conditions'] = ApiClient.convertToType(data['has_conditions'], 'Boolean');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [ConditionEntry]);
            }
            if (data.hasOwnProperty('critical_hit_probability')) {
                obj['critical_hit_probability'] = ApiClient.convertToType(data['critical_hit_probability'], 'Number');
            }
            if (data.hasOwnProperty('critical_hit_bonus')) {
                obj['critical_hit_bonus'] = ApiClient.convertToType(data['critical_hit_bonus'], 'Number');
            }
            if (data.hasOwnProperty('is_two_handed')) {
                obj['is_two_handed'] = ApiClient.convertToType(data['is_two_handed'], 'Boolean');
            }
            if (data.hasOwnProperty('max_cast_per_turn')) {
                obj['max_cast_per_turn'] = ApiClient.convertToType(data['max_cast_per_turn'], 'Number');
            }
            if (data.hasOwnProperty('ap_cost')) {
                obj['ap_cost'] = ApiClient.convertToType(data['ap_cost'], 'Number');
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = WeaponRange.constructFromObject(data['range']);
            }
            if (data.hasOwnProperty('has_recipe')) {
                obj['has_recipe'] = ApiClient.convertToType(data['has_recipe'], 'Boolean');
            }
            if (data.hasOwnProperty('recipe')) {
                obj['recipe'] = ApiClient.convertToType(data['recipe'], [RecipeEntry]);
            }
            if (data.hasOwnProperty('has_parent_set')) {
                obj['has_parent_set'] = ApiClient.convertToType(data['has_parent_set'], 'Boolean');
            }
            if (data.hasOwnProperty('parent_set')) {
                obj['parent_set'] = EquipmentParentSet.constructFromObject(data['parent_set']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} ankama_id
 */
Weapon.prototype['ankama_id'] = undefined;

/**
 * @member {String} name
 */
Weapon.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Weapon.prototype['description'] = undefined;

/**
 * @member {module:model/ItemsListEntryTypedType} type
 */
Weapon.prototype['type'] = undefined;

/**
 * always true when the item is a weapon. Many fields are now available. Always check for this flag first when getting single equipment items.
 * @member {Boolean} is_weapon
 */
Weapon.prototype['is_weapon'] = undefined;

/**
 * @member {Number} level
 */
Weapon.prototype['level'] = undefined;

/**
 * @member {Number} pods
 */
Weapon.prototype['pods'] = undefined;

/**
 * @member {module:model/ImageUrls} image_urls
 */
Weapon.prototype['image_urls'] = undefined;

/**
 * @member {Boolean} has_effects
 */
Weapon.prototype['has_effects'] = undefined;

/**
 * @member {Array.<module:model/EffectsEntry>} effects
 */
Weapon.prototype['effects'] = undefined;

/**
 * @member {Boolean} has_conditions
 */
Weapon.prototype['has_conditions'] = undefined;

/**
 * @member {Array.<module:model/ConditionEntry>} conditions
 */
Weapon.prototype['conditions'] = undefined;

/**
 * @member {Number} critical_hit_probability
 */
Weapon.prototype['critical_hit_probability'] = undefined;

/**
 * @member {Number} critical_hit_bonus
 */
Weapon.prototype['critical_hit_bonus'] = undefined;

/**
 * @member {Boolean} is_two_handed
 */
Weapon.prototype['is_two_handed'] = undefined;

/**
 * @member {Number} max_cast_per_turn
 */
Weapon.prototype['max_cast_per_turn'] = undefined;

/**
 * @member {Number} ap_cost
 */
Weapon.prototype['ap_cost'] = undefined;

/**
 * @member {module:model/WeaponRange} range
 */
Weapon.prototype['range'] = undefined;

/**
 * @member {Boolean} has_recipe
 */
Weapon.prototype['has_recipe'] = undefined;

/**
 * @member {Array.<module:model/RecipeEntry>} recipe
 */
Weapon.prototype['recipe'] = undefined;

/**
 * @member {Boolean} has_parent_set
 */
Weapon.prototype['has_parent_set'] = undefined;

/**
 * @member {module:model/EquipmentParentSet} parent_set
 */
Weapon.prototype['parent_set'] = undefined;






export default Weapon;

