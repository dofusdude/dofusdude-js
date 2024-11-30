/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0-rc.5
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ItemSubtype model module.
 * @module model/ItemSubtype
 * @version 1.0.0-rc.5
 */
class ItemSubtype {
    /**
     * Constructs a new <code>ItemSubtype</code>.
     * @alias module:model/ItemSubtype
     */
    constructor() { 
        
        ItemSubtype.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemSubtype</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemSubtype} obj Optional instance to populate.
     * @return {module:model/ItemSubtype} The populated <code>ItemSubtype</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemSubtype();

            if (data.hasOwnProperty('ankama_id')) {
                obj['ankama_id'] = ApiClient.convertToType(data['ankama_id'], 'Number');
            }
            if (data.hasOwnProperty('name_id')) {
                obj['name_id'] = ApiClient.convertToType(data['name_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemSubtype</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemSubtype</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name_id'] && !(typeof data['name_id'] === 'string' || data['name_id'] instanceof String)) {
            throw new Error("Expected the field `name_id` to be a primitive type in the JSON string but got " + data['name_id']);
        }

        return true;
    }


}



/**
 * @member {Number} ankama_id
 */
ItemSubtype.prototype['ankama_id'] = undefined;

/**
 * unique
 * @member {String} name_id
 */
ItemSubtype.prototype['name_id'] = undefined;






export default ItemSubtype;

