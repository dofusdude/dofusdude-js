/**
 * dofusdude
 * # A project for you - the developer. The all-in-one toolbelt for your next Ankama related project.  ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude - [PHP](https://github.com/dofusdude/dofusdude-php)  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering game assets to high-res images with up to 800x800 px.  ... and much more on the Roadmap on my Discord.   ## Deploy now. Use forever. Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  ## Thank you! I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.  The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply donate to that cause, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude).
 *
 * The version of the OpenAPI document: 0.8.2
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateTwitterWebhook model module.
 * @module model/CreateTwitterWebhook
 * @version 0.8.2
 */
class CreateTwitterWebhook {
    /**
     * Constructs a new <code>CreateTwitterWebhook</code>.
     * 
     * @alias module:model/CreateTwitterWebhook
     * @param subscriptions {Array.<String>} Get the available subscriptions with /meta/webhooks/twitter
     * @param format {module:model/CreateTwitterWebhook.FormatEnum} 
     * @param callback {String} Discord Webhook URL
     */
    constructor(subscriptions, format, callback) { 
        
        CreateTwitterWebhook.initialize(this, subscriptions, format, callback);
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
     * Constructs a <code>CreateTwitterWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTwitterWebhook} obj Optional instance to populate.
     * @return {module:model/CreateTwitterWebhook} The populated <code>CreateTwitterWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTwitterWebhook();

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
     * Validates the JSON data with respect to <code>CreateTwitterWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTwitterWebhook</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateTwitterWebhook.RequiredProperties) {
            if (!data[property]) {
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

CreateTwitterWebhook.RequiredProperties = ["subscriptions", "format", "callback"];

/**
 * @member {Array.<String>} whitelist
 */
CreateTwitterWebhook.prototype['whitelist'] = undefined;

/**
 * @member {Array.<String>} blacklist
 */
CreateTwitterWebhook.prototype['blacklist'] = undefined;

/**
 * Get the available subscriptions with /meta/webhooks/twitter
 * @member {Array.<String>} subscriptions
 */
CreateTwitterWebhook.prototype['subscriptions'] = undefined;

/**
 * @member {module:model/CreateTwitterWebhook.FormatEnum} format
 */
CreateTwitterWebhook.prototype['format'] = undefined;

/**
 * @member {Number} preview_length
 */
CreateTwitterWebhook.prototype['preview_length'] = undefined;

/**
 * Discord Webhook URL
 * @member {String} callback
 */
CreateTwitterWebhook.prototype['callback'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
CreateTwitterWebhook['FormatEnum'] = {

    /**
     * value: "discord"
     * @const
     */
    "discord": "discord"
};



export default CreateTwitterWebhook;

