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
 * The CreateRSSWebhook model module.
 * @module model/CreateRSSWebhook
 * @version 1.0.0-rc.5
 */
class CreateRSSWebhook {
    /**
     * Constructs a new <code>CreateRSSWebhook</code>.
     * 
     * @alias module:model/CreateRSSWebhook
     * @param subscriptions {Array.<String>} Get the available subscriptions with /meta/webhooks/rss
     * @param format {module:model/CreateRSSWebhook.FormatEnum} 
     * @param callback {String} Discord Webhook URL
     */
    constructor(subscriptions, format, callback) { 
        
        CreateRSSWebhook.initialize(this, subscriptions, format, callback);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subscriptions, format, callback) { 
        obj['subscriptions'] = subscriptions;
        obj['format'] = format;
        obj['callback'] = callback;
    }

    /**
     * Constructs a <code>CreateRSSWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRSSWebhook} obj Optional instance to populate.
     * @return {module:model/CreateRSSWebhook} The populated <code>CreateRSSWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRSSWebhook();

            if (data.hasOwnProperty('whitelist')) {
                obj['whitelist'] = ApiClient.convertToType(data['whitelist'], ['String']);
            }
            if (data.hasOwnProperty('blacklist')) {
                obj['blacklist'] = ApiClient.convertToType(data['blacklist'], ['String']);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], ['String']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('preview_length')) {
                obj['preview_length'] = ApiClient.convertToType(data['preview_length'], 'Number');
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateRSSWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRSSWebhook</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateRSSWebhook.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
        // ensure the json data is a string
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }
        // ensure the json data is a string
        if (data['callback'] && !(typeof data['callback'] === 'string' || data['callback'] instanceof String)) {
            throw new Error("Expected the field `callback` to be a primitive type in the JSON string but got " + data['callback']);
        }

        return true;
    }


}

CreateRSSWebhook.RequiredProperties = ["subscriptions", "format", "callback"];

/**
 * @member {Array.<String>} whitelist
 */
CreateRSSWebhook.prototype['whitelist'] = undefined;

/**
 * @member {Array.<String>} blacklist
 */
CreateRSSWebhook.prototype['blacklist'] = undefined;

/**
 * Get the available subscriptions with /meta/webhooks/rss
 * @member {Array.<String>} subscriptions
 */
CreateRSSWebhook.prototype['subscriptions'] = undefined;

/**
 * @member {module:model/CreateRSSWebhook.FormatEnum} format
 */
CreateRSSWebhook.prototype['format'] = undefined;

/**
 * @member {Number} preview_length
 */
CreateRSSWebhook.prototype['preview_length'] = undefined;

/**
 * Discord Webhook URL
 * @member {String} callback
 */
CreateRSSWebhook.prototype['callback'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
CreateRSSWebhook['FormatEnum'] = {

    /**
     * value: "discord"
     * @const
     */
    "discord": "discord"
};



export default CreateRSSWebhook;

