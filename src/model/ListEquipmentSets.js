/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0-rc.6
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ListEquipmentSet from './ListEquipmentSet';
import PagedLinks from './PagedLinks';

/**
 * The ListEquipmentSets model module.
 * @module model/ListEquipmentSets
 * @version 1.0.0-rc.6
 */
class ListEquipmentSets {
    /**
     * Constructs a new <code>ListEquipmentSets</code>.
     * @alias module:model/ListEquipmentSets
     */
    constructor() { 
        
        ListEquipmentSets.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListEquipmentSets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListEquipmentSets} obj Optional instance to populate.
     * @return {module:model/ListEquipmentSets} The populated <code>ListEquipmentSets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListEquipmentSets();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = PagedLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('sets')) {
                obj['sets'] = ApiClient.convertToType(data['sets'], [ListEquipmentSet]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListEquipmentSets</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListEquipmentSets</code>.
     */
    static validateJSON(data) {
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          PagedLinks.validateJSON(data['_links']);
        }
        if (data['sets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sets'])) {
                throw new Error("Expected the field `sets` to be an array in the JSON data but got " + data['sets']);
            }
            // validate the optional field `sets` (array)
            for (const item of data['sets']) {
                ListEquipmentSet.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/PagedLinks} _links
 */
ListEquipmentSets.prototype['_links'] = undefined;

/**
 * @member {Array.<module:model/ListEquipmentSet>} sets
 */
ListEquipmentSets.prototype['sets'] = undefined;






export default ListEquipmentSets;

