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
 * The AlmanaxWebhookDailySettings model module.
 * @module model/AlmanaxWebhookDailySettings
 * @version 0.9.4
 */
class AlmanaxWebhookDailySettings {
    /**
     * Constructs a new <code>AlmanaxWebhookDailySettings</code>.
     * @alias module:model/AlmanaxWebhookDailySettings
     */
    constructor() { 
        
        AlmanaxWebhookDailySettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['timezone'] = 'Europe/Paris';
        obj['midnight_offset'] = 0;
    }

    /**
     * Constructs a <code>AlmanaxWebhookDailySettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlmanaxWebhookDailySettings} obj Optional instance to populate.
     * @return {module:model/AlmanaxWebhookDailySettings} The populated <code>AlmanaxWebhookDailySettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlmanaxWebhookDailySettings();

            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('midnight_offset')) {
                obj['midnight_offset'] = ApiClient.convertToType(data['midnight_offset'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AlmanaxWebhookDailySettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AlmanaxWebhookDailySettings</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }

        return true;
    }


}



/**
 * Timezone of your community to determine midnight.
 * @member {String} timezone
 * @default 'Europe/Paris'
 */
AlmanaxWebhookDailySettings.prototype['timezone'] = 'Europe/Paris';

/**
 * Hours added to midnight at the selected timezone. 8 = 8:00 in the morning.
 * @member {Number} midnight_offset
 * @default 0
 */
AlmanaxWebhookDailySettings.prototype['midnight_offset'] = 0;






export default AlmanaxWebhookDailySettings;

