/**
 * dofusdude
 * # A project for you - the developer. The all-in-one toolbelt for your next Ankama related project.  ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude - [PHP](https://github.com/dofusdude/dofusdude-php)  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.  ... and much more on the Roadmap on my Discord.   ## Deploy now. Use forever. Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  ## Thank you! I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.  The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply donate to that cause, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude).
 *
 * The version of the OpenAPI document: 0.8.3
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ConditionEntry from './ConditionEntry';
import ConditionTreeNode from './ConditionTreeNode';
import EffectsEntry from './EffectsEntry';
import ImageUrls from './ImageUrls';
import ItemListEntryParentSet from './ItemListEntryParentSet';
import ItemListEntryRange from './ItemListEntryRange';
import ItemsListEntryTypedType from './ItemsListEntryTypedType';
import RecipeEntry from './RecipeEntry';

/**
 * The ItemListEntry model module.
 * @module model/ItemListEntry
 * @version 0.8.3
 */
class ItemListEntry {
    /**
     * Constructs a new <code>ItemListEntry</code>.
     * @alias module:model/ItemListEntry
     */
    constructor() { 
        
        ItemListEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemListEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemListEntry} obj Optional instance to populate.
     * @return {module:model/ItemListEntry} The populated <code>ItemListEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemListEntry();

            if (data.hasOwnProperty('ankama_id')) {
                obj['ankama_id'] = ApiClient.convertToType(data['ankama_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ItemsListEntryTypedType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('image_urls')) {
                obj['image_urls'] = ImageUrls.constructFromObject(data['image_urls']);
            }
            if (data.hasOwnProperty('recipe')) {
                obj['recipe'] = ApiClient.convertToType(data['recipe'], [RecipeEntry]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [ConditionEntry]);
            }
            if (data.hasOwnProperty('condition_tree')) {
                obj['condition_tree'] = ConditionTreeNode.constructFromObject(data['condition_tree']);
            }
            if (data.hasOwnProperty('effects')) {
                obj['effects'] = ApiClient.convertToType(data['effects'], [EffectsEntry]);
            }
            if (data.hasOwnProperty('is_weapon')) {
                obj['is_weapon'] = ApiClient.convertToType(data['is_weapon'], 'Boolean');
            }
            if (data.hasOwnProperty('pods')) {
                obj['pods'] = ApiClient.convertToType(data['pods'], 'Number');
            }
            if (data.hasOwnProperty('parent_set')) {
                obj['parent_set'] = ItemListEntryParentSet.constructFromObject(data['parent_set']);
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
                obj['range'] = ItemListEntryRange.constructFromObject(data['range']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemListEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemListEntry</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `type`
        if (data['type']) { // data not null
          ItemsListEntryTypedType.validateJSON(data['type']);
        }
        // validate the optional field `image_urls`
        if (data['image_urls']) { // data not null
          ImageUrls.validateJSON(data['image_urls']);
        }
        if (data['recipe']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['recipe'])) {
                throw new Error("Expected the field `recipe` to be an array in the JSON data but got " + data['recipe']);
            }
            // validate the optional field `recipe` (array)
            for (const item of data['recipe']) {
                RecipeEntry.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                ConditionEntry.validateJSON(item);
            };
        }
        // validate the optional field `condition_tree`
        if (data['condition_tree']) { // data not null
          ConditionTreeNode.validateJSON(data['condition_tree']);
        }
        if (data['effects']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['effects'])) {
                throw new Error("Expected the field `effects` to be an array in the JSON data but got " + data['effects']);
            }
            // validate the optional field `effects` (array)
            for (const item of data['effects']) {
                EffectsEntry.validateJSON(item);
            };
        }
        // validate the optional field `parent_set`
        if (data['parent_set']) { // data not null
          ItemListEntryParentSet.validateJSON(data['parent_set']);
        }
        // validate the optional field `range`
        if (data['range']) { // data not null
          ItemListEntryRange.validateJSON(data['range']);
        }

        return true;
    }


}



/**
 * @member {Number} ankama_id
 */
ItemListEntry.prototype['ankama_id'] = undefined;

/**
 * @member {String} name
 */
ItemListEntry.prototype['name'] = undefined;

/**
 * @member {module:model/ItemsListEntryTypedType} type
 */
ItemListEntry.prototype['type'] = undefined;

/**
 * @member {Number} level
 */
ItemListEntry.prototype['level'] = undefined;

/**
 * @member {module:model/ImageUrls} image_urls
 */
ItemListEntry.prototype['image_urls'] = undefined;

/**
 * @member {Array.<module:model/RecipeEntry>} recipe
 */
ItemListEntry.prototype['recipe'] = undefined;

/**
 * @member {String} description
 */
ItemListEntry.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/ConditionEntry>} conditions
 */
ItemListEntry.prototype['conditions'] = undefined;

/**
 * @member {module:model/ConditionTreeNode} condition_tree
 */
ItemListEntry.prototype['condition_tree'] = undefined;

/**
 * @member {Array.<module:model/EffectsEntry>} effects
 */
ItemListEntry.prototype['effects'] = undefined;

/**
 * @member {Boolean} is_weapon
 */
ItemListEntry.prototype['is_weapon'] = undefined;

/**
 * @member {Number} pods
 */
ItemListEntry.prototype['pods'] = undefined;

/**
 * @member {module:model/ItemListEntryParentSet} parent_set
 */
ItemListEntry.prototype['parent_set'] = undefined;

/**
 * @member {Number} critical_hit_probability
 */
ItemListEntry.prototype['critical_hit_probability'] = undefined;

/**
 * @member {Number} critical_hit_bonus
 */
ItemListEntry.prototype['critical_hit_bonus'] = undefined;

/**
 * @member {Boolean} is_two_handed
 */
ItemListEntry.prototype['is_two_handed'] = undefined;

/**
 * @member {Number} max_cast_per_turn
 */
ItemListEntry.prototype['max_cast_per_turn'] = undefined;

/**
 * @member {Number} ap_cost
 */
ItemListEntry.prototype['ap_cost'] = undefined;

/**
 * @member {module:model/ItemListEntryRange} range
 */
ItemListEntry.prototype['range'] = undefined;






export default ItemListEntry;

