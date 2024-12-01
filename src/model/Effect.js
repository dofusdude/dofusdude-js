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
import EffectType from './EffectType';

/**
 * The Effect model module.
 * @module model/Effect
 * @version 1.0.0-rc.7
 */
class Effect {
    /**
     * Constructs a new <code>Effect</code>.
     * @alias module:model/Effect
     */
    constructor() { 
        
        Effect.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Effect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Effect} obj Optional instance to populate.
     * @return {module:model/Effect} The populated <code>Effect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Effect();

            if (data.hasOwnProperty('int_minimum')) {
                obj['int_minimum'] = ApiClient.convertToType(data['int_minimum'], 'Number');
            }
            if (data.hasOwnProperty('int_maximum')) {
                obj['int_maximum'] = ApiClient.convertToType(data['int_maximum'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EffectType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('ignore_int_min')) {
                obj['ignore_int_min'] = ApiClient.convertToType(data['ignore_int_min'], 'Boolean');
            }
            if (data.hasOwnProperty('ignore_int_max')) {
                obj['ignore_int_max'] = ApiClient.convertToType(data['ignore_int_max'], 'Boolean');
            }
            if (data.hasOwnProperty('formatted')) {
                obj['formatted'] = ApiClient.convertToType(data['formatted'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Effect</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Effect</code>.
     */
    static validateJSON(data) {
        // validate the optional field `type`
        if (data['type']) { // data not null
          EffectType.validateJSON(data['type']);
        }
        // ensure the json data is a string
        if (data['formatted'] && !(typeof data['formatted'] === 'string' || data['formatted'] instanceof String)) {
            throw new Error("Expected the field `formatted` to be a primitive type in the JSON string but got " + data['formatted']);
        }

        return true;
    }


}



/**
 * minimum int value, can be a single if ignore_int_max and no ignore_int_min
 * @member {Number} int_minimum
 */
Effect.prototype['int_minimum'] = undefined;

/**
 * maximum int value, if not ignore_int_max and not ignore_int_min, the effect has a range value
 * @member {Number} int_maximum
 */
Effect.prototype['int_maximum'] = undefined;

/**
 * @member {module:model/EffectType} type
 */
Effect.prototype['type'] = undefined;

/**
 * ignore the int min field because the actual value is a string. For readability the templated field is the only important field in this case. 
 * @member {Boolean} ignore_int_min
 */
Effect.prototype['ignore_int_min'] = undefined;

/**
 * ignore the int max field, if ignore_int_min is true, int min is a single value
 * @member {Boolean} ignore_int_max
 */
Effect.prototype['ignore_int_max'] = undefined;

/**
 * all fields from above encoded in a single string
 * @member {String} formatted
 */
Effect.prototype['formatted'] = undefined;






export default Effect;

