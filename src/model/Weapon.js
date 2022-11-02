/**
 * Dofusdude
 * # A project for you - the developer. The free, always-up-to-date, low-latency, insert-buzzword-here Ankama API for your next cool project!  ## Client SDKs Don't write types or functions yourself - I already (kinda) did! 😉 - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related Twitter, RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅ - Monsters ❌ - Spells ❌  ... and much more on the Roadmap on my Discord.   ## Deploy now. Use forever. Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  ## Only the beginning... 🤯 I want this project to be useful and not just add plain GET-categories no one needs.  There is a long list of features I want to add (see the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h)). But they are all focussed on you, the developers. So please let me know what you need. I will change the list based on demand.  # Get started! 🥳 Scroll down and try it for yourself!  Or see how these other awesome projects use it: - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [luwnarya.fr](https://luwnarya.fr)  I highly recommend using the SDKs for quick results. I use them myself for microservices for the API.  ## Thank you! I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.  The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply  donate, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude).  
 *
 * The version of the OpenAPI document: 0.7.0
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
 * @version 0.7.0
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
            if (data.hasOwnProperty('effects')) {
                obj['effects'] = ApiClient.convertToType(data['effects'], [EffectsEntry]);
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
            if (data.hasOwnProperty('recipe')) {
                obj['recipe'] = ApiClient.convertToType(data['recipe'], [RecipeEntry]);
            }
            if (data.hasOwnProperty('parent_set')) {
                obj['parent_set'] = EquipmentParentSet.constructFromObject(data['parent_set']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Weapon</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Weapon</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `type`
        if (data['type']) { // data not null
          ItemsListEntryTypedType.validateJSON(data['type']);
        }
        // validate the optional field `image_urls`
        if (data['image_urls']) { // data not null
          ImageUrls.validateJSON(data['image_urls']);
        }
        if (data['effects']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['effects'])) {
                throw new Error("Expected the field `effects` to be an array in the JSON data but got " + data['effects']);
            }
            // validate the optional field `effects` (array)
            for (const item of data['effects']) {
                EffectsEntry.validateJsonObject(item);
            };
        }
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                ConditionEntry.validateJsonObject(item);
            };
        }
        // validate the optional field `range`
        if (data['range']) { // data not null
          WeaponRange.validateJSON(data['range']);
        }
        if (data['recipe']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['recipe'])) {
                throw new Error("Expected the field `recipe` to be an array in the JSON data but got " + data['recipe']);
            }
            // validate the optional field `recipe` (array)
            for (const item of data['recipe']) {
                RecipeEntry.validateJsonObject(item);
            };
        }
        // validate the optional field `parent_set`
        if (data['parent_set']) { // data not null
          EquipmentParentSet.validateJSON(data['parent_set']);
        }

        return true;
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
 * @member {Array.<module:model/EffectsEntry>} effects
 */
Weapon.prototype['effects'] = undefined;

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
 * @member {Array.<module:model/RecipeEntry>} recipe
 */
Weapon.prototype['recipe'] = undefined;

/**
 * @member {module:model/EquipmentParentSet} parent_set
 */
Weapon.prototype['parent_set'] = undefined;






export default Weapon;

