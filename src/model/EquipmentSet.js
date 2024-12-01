/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0-rc.7
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Effect from './Effect';

/**
 * The EquipmentSet model module.
 * @module model/EquipmentSet
 * @version 1.0.0-rc.7
 */
class EquipmentSet {
    /**
     * Constructs a new <code>EquipmentSet</code>.
     * @alias module:model/EquipmentSet
     */
    constructor() { 
        
        EquipmentSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EquipmentSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EquipmentSet} obj Optional instance to populate.
     * @return {module:model/EquipmentSet} The populated <code>EquipmentSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EquipmentSet();

            if (data.hasOwnProperty('ankama_id')) {
                obj['ankama_id'] = ApiClient.convertToType(data['ankama_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('equipment_ids')) {
                obj['equipment_ids'] = ApiClient.convertToType(data['equipment_ids'], ['Number']);
            }
            if (data.hasOwnProperty('effects')) {
                obj['effects'] = ApiClient.convertToType(data['effects'], {'String': [Effect]});
            }
            if (data.hasOwnProperty('highest_equipment_level')) {
                obj['highest_equipment_level'] = ApiClient.convertToType(data['highest_equipment_level'], 'Number');
            }
            if (data.hasOwnProperty('contains_cosmetics')) {
                obj['contains_cosmetics'] = ApiClient.convertToType(data['contains_cosmetics'], 'Boolean');
            }
            if (data.hasOwnProperty('contains_cosmetics_only')) {
                obj['contains_cosmetics_only'] = ApiClient.convertToType(data['contains_cosmetics_only'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EquipmentSet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EquipmentSet</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['equipment_ids'])) {
            throw new Error("Expected the field `equipment_ids` to be an array in the JSON data but got " + data['equipment_ids']);
        }

        return true;
    }


}



/**
 * @member {Number} ankama_id
 */
EquipmentSet.prototype['ankama_id'] = undefined;

/**
 * @member {String} name
 */
EquipmentSet.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} equipment_ids
 */
EquipmentSet.prototype['equipment_ids'] = undefined;

/**
 * @member {Object.<String, Array.<module:model/Effect>>} effects
 */
EquipmentSet.prototype['effects'] = undefined;

/**
 * @member {Number} highest_equipment_level
 */
EquipmentSet.prototype['highest_equipment_level'] = undefined;

/**
 * @member {Boolean} contains_cosmetics
 */
EquipmentSet.prototype['contains_cosmetics'] = undefined;

/**
 * @member {Boolean} contains_cosmetics_only
 */
EquipmentSet.prototype['contains_cosmetics_only'] = undefined;






export default EquipmentSet;

