/**
 * Dofusdude
 * # A project for you - the developer. The free, always-up-to-date, low-latency, insert-buzzword-here Ankama API for your next cool project!  ## Client SDKs Don't write types or functions yourself - I already (kinda) did! 😉 - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅ - Monsters ❌ - Spells ❌  ... and much more on the Roadmap on my Discord.   ## Deploy now. Use forever. Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  ## Only the beginning... 🤯 I want this project to be useful and not just add plain GET-categories no one needs.  There is a long list of features I want to add (see the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h)). But they are all focussed on you, the developers. So please let me know what you need. I will change the list based on demand.  # Get started! 🥳 Scroll down and try it for yourself!  Or see how these other awesome projects use it: - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [luwnarya.fr](https://luwnarya.fr)  I highly recommend using the SDKs for quick results. I use them myself for microservices for the API.  ## Thank you! I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.  The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply  donate, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude).  
 *
 * The version of the OpenAPI document: 0.5.6
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EffectsEntryType from './EffectsEntryType';

/**
 * The EffectsEntry model module.
 * @module model/EffectsEntry
 * @version 0.5.6
 */
class EffectsEntry {
    /**
     * Constructs a new <code>EffectsEntry</code>.
     * @alias module:model/EffectsEntry
     */
    constructor() { 
        
        EffectsEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EffectsEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EffectsEntry} obj Optional instance to populate.
     * @return {module:model/EffectsEntry} The populated <code>EffectsEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EffectsEntry();

            if (data.hasOwnProperty('int_minimum')) {
                obj['int_minimum'] = ApiClient.convertToType(data['int_minimum'], 'Number');
            }
            if (data.hasOwnProperty('int_maximum')) {
                obj['int_maximum'] = ApiClient.convertToType(data['int_maximum'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EffectsEntryType.constructFromObject(data['type']);
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


}

/**
 * minimum int value, can be a single if ignore_int_max and no ignore_int_min
 * @member {Number} int_minimum
 */
EffectsEntry.prototype['int_minimum'] = undefined;

/**
 * maximum int value, if not ignore_int_max and not ignore_int_min, the effect has a range value
 * @member {Number} int_maximum
 */
EffectsEntry.prototype['int_maximum'] = undefined;

/**
 * @member {module:model/EffectsEntryType} type
 */
EffectsEntry.prototype['type'] = undefined;

/**
 * ignore the int min field because the actual value is a string. For readability the templated field is the only important field in this case. 
 * @member {Boolean} ignore_int_min
 */
EffectsEntry.prototype['ignore_int_min'] = undefined;

/**
 * ignore the int max field, if ignore_int_min is true, int min is a single value
 * @member {Boolean} ignore_int_max
 */
EffectsEntry.prototype['ignore_int_max'] = undefined;

/**
 * all fields from above encoded in a single string
 * @member {String} formatted
 */
EffectsEntry.prototype['formatted'] = undefined;






export default EffectsEntry;

