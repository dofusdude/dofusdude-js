/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0-rc.2
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TranslatedId from './TranslatedId';

/**
 * The Condition model module.
 * @module model/Condition
 * @version 1.0.0-rc.2
 */
class Condition {
    /**
     * Constructs a new <code>Condition</code>.
     * @alias module:model/Condition
     */
    constructor() { 
        
        Condition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Condition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Condition} obj Optional instance to populate.
     * @return {module:model/Condition} The populated <code>Condition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Condition();

            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('int_value')) {
                obj['int_value'] = ApiClient.convertToType(data['int_value'], 'Number');
            }
            if (data.hasOwnProperty('element')) {
                obj['element'] = TranslatedId.constructFromObject(data['element']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Condition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Condition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['operator'] && !(typeof data['operator'] === 'string' || data['operator'] instanceof String)) {
            throw new Error("Expected the field `operator` to be a primitive type in the JSON string but got " + data['operator']);
        }
        // validate the optional field `element`
        if (data['element']) { // data not null
          TranslatedId.validateJSON(data['element']);
        }

        return true;
    }


}



/**
 * @member {String} operator
 */
Condition.prototype['operator'] = undefined;

/**
 * @member {Number} int_value
 */
Condition.prototype['int_value'] = undefined;

/**
 * @member {module:model/TranslatedId} element
 */
Condition.prototype['element'] = undefined;






export default Condition;

