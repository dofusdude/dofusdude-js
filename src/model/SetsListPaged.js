/**
 * dofusdude
 * # A project for you - the developer. The all-in-one toolbelt for your next Ankama related project.  ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [PHP](https://github.com/dofusdude/dofusdude-php) - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 0.9.3
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LinksPaged from './LinksPaged';
import SetListEntry from './SetListEntry';

/**
 * The SetsListPaged model module.
 * @module model/SetsListPaged
 * @version 0.9.3
 */
class SetsListPaged {
    /**
     * Constructs a new <code>SetsListPaged</code>.
     * @alias module:model/SetsListPaged
     */
    constructor() { 
        
        SetsListPaged.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetsListPaged</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetsListPaged} obj Optional instance to populate.
     * @return {module:model/SetsListPaged} The populated <code>SetsListPaged</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetsListPaged();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksPaged.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('sets')) {
                obj['sets'] = ApiClient.convertToType(data['sets'], [SetListEntry]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetsListPaged</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetsListPaged</code>.
     */
    static validateJSON(data) {
        // validate the optional field `_links`
        if (data['_links']) { // data not null
          LinksPaged.validateJSON(data['_links']);
        }
        if (data['sets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sets'])) {
                throw new Error("Expected the field `sets` to be an array in the JSON data but got " + data['sets']);
            }
            // validate the optional field `sets` (array)
            for (const item of data['sets']) {
                SetListEntry.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/LinksPaged} _links
 */
SetsListPaged.prototype['_links'] = undefined;

/**
 * @member {Array.<module:model/SetListEntry>} sets
 */
SetsListPaged.prototype['sets'] = undefined;






export default SetsListPaged;

