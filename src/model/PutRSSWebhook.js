/**
 * dofusdude
 * # A project for you - the developer. The all-in-one toolbelt for your next Ankama related project.  ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [PHP](https://github.com/dofusdude/dofusdude-php) - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 0.9.4
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PutRSSWebhook model module.
 * @module model/PutRSSWebhook
 * @version 0.9.4
 */
class PutRSSWebhook {
    /**
     * Constructs a new <code>PutRSSWebhook</code>.
     * 
     * @alias module:model/PutRSSWebhook
     */
    constructor() { 
        
        PutRSSWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRSSWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRSSWebhook} obj Optional instance to populate.
     * @return {module:model/PutRSSWebhook} The populated <code>PutRSSWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRSSWebhook();

            if (data.hasOwnProperty('whitelist')) {
                obj['whitelist'] = ApiClient.convertToType(data['whitelist'], ['String']);
            }
            if (data.hasOwnProperty('blacklist')) {
                obj['blacklist'] = ApiClient.convertToType(data['blacklist'], ['String']);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], ['String']);
            }
            if (data.hasOwnProperty('preview_length')) {
                obj['preview_length'] = ApiClient.convertToType(data['preview_length'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PutRSSWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PutRSSWebhook</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['whitelist'])) {
            throw new Error("Expected the field `whitelist` to be an array in the JSON data but got " + data['whitelist']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['blacklist'])) {
            throw new Error("Expected the field `blacklist` to be an array in the JSON data but got " + data['blacklist']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['subscriptions'])) {
            throw new Error("Expected the field `subscriptions` to be an array in the JSON data but got " + data['subscriptions']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} whitelist
 */
PutRSSWebhook.prototype['whitelist'] = undefined;

/**
 * @member {Array.<String>} blacklist
 */
PutRSSWebhook.prototype['blacklist'] = undefined;

/**
 * Get the available subscriptions with /meta/webhooks/rss
 * @member {Array.<String>} subscriptions
 */
PutRSSWebhook.prototype['subscriptions'] = undefined;

/**
 * @member {Number} preview_length
 */
PutRSSWebhook.prototype['preview_length'] = undefined;






export default PutRSSWebhook;

