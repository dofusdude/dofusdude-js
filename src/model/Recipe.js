/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0-rc.8
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Recipe model module.
 * @module model/Recipe
 * @version 1.0.0-rc.8
 */
class Recipe {
    /**
     * Constructs a new <code>Recipe</code>.
     * @alias module:model/Recipe
     */
    constructor() { 
        
        Recipe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Recipe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Recipe} obj Optional instance to populate.
     * @return {module:model/Recipe} The populated <code>Recipe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Recipe();

            if (data.hasOwnProperty('item_ankama_id')) {
                obj['item_ankama_id'] = ApiClient.convertToType(data['item_ankama_id'], 'Number');
            }
            if (data.hasOwnProperty('item_subtype')) {
                obj['item_subtype'] = ApiClient.convertToType(data['item_subtype'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Recipe</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Recipe</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['item_subtype'] && !(typeof data['item_subtype'] === 'string' || data['item_subtype'] instanceof String)) {
            throw new Error("Expected the field `item_subtype` to be a primitive type in the JSON string but got " + data['item_subtype']);
        }

        return true;
    }


}



/**
 * @member {Number} item_ankama_id
 */
Recipe.prototype['item_ankama_id'] = undefined;

/**
 * @member {String} item_subtype
 */
Recipe.prototype['item_subtype'] = undefined;

/**
 * @member {Number} quantity
 */
Recipe.prototype['quantity'] = undefined;






export default Recipe;

