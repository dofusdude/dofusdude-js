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
import CreateAlmanaxWebhookDailySettings from './CreateAlmanaxWebhookDailySettings';
import CreateAlmanaxWebhookMentionsValueInner from './CreateAlmanaxWebhookMentionsValueInner';

/**
 * The CreateAlmanaxWebhook model module.
 * @module model/CreateAlmanaxWebhook
 * @version 0.9.3
 */
class CreateAlmanaxWebhook {
    /**
     * Constructs a new <code>CreateAlmanaxWebhook</code>.
     * @alias module:model/CreateAlmanaxWebhook
     * @param subscriptions {Array.<String>} Get the available subscriptions with /meta/webhooks/almanax
     * @param format {module:model/CreateAlmanaxWebhook.FormatEnum} 
     * @param callback {String} Discord Webhook URL
     * @param intervals {Array.<module:model/CreateAlmanaxWebhook.IntervalsEnum>} - Daily posts each day, filtering with Black/Whitelist and mentions are applied daily. - Weekly posts the next 7 days (excluding the posting day) once per week at the specified time. With only weekly selected, of all mentions, only prior notices will come through daily. The 7 day preview gets filtered by the Black/Whitelist. - Monthly posts a preview of the next month from first to last date. The post will be on the last day of a month (ignoring day of the week) at the specified time. Mentions and filtering works like weekly. The biggest difference between daily and the other two is that daily always posts the current day while monthly and weekly only show future days. You can always combine the intervals by selecting multiple intervals for one hook or create multiple hooks for the same channel with different settings to get every highly specific combination you want.
     */
    constructor(subscriptions, format, callback, intervals) { 
        
        CreateAlmanaxWebhook.initialize(this, subscriptions, format, callback, intervals);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subscriptions, format, callback, intervals) { 
        obj['subscriptions'] = subscriptions;
        obj['format'] = format;
        obj['callback'] = callback;
        obj['iso_date'] = false;
        obj['intervals'] = intervals;
    }

    /**
     * Constructs a <code>CreateAlmanaxWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAlmanaxWebhook} obj Optional instance to populate.
     * @return {module:model/CreateAlmanaxWebhook} The populated <code>CreateAlmanaxWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAlmanaxWebhook();

            if (data.hasOwnProperty('bonus_whitelist')) {
                obj['bonus_whitelist'] = ApiClient.convertToType(data['bonus_whitelist'], ['String']);
            }
            if (data.hasOwnProperty('bonus_blacklist')) {
                obj['bonus_blacklist'] = ApiClient.convertToType(data['bonus_blacklist'], ['String']);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], ['String']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
            if (data.hasOwnProperty('daily_settings')) {
                obj['daily_settings'] = CreateAlmanaxWebhookDailySettings.constructFromObject(data['daily_settings']);
            }
            if (data.hasOwnProperty('iso_date')) {
                obj['iso_date'] = ApiClient.convertToType(data['iso_date'], 'Boolean');
            }
            if (data.hasOwnProperty('mentions')) {
                obj['mentions'] = ApiClient.convertToType(data['mentions'], {'String': [CreateAlmanaxWebhookMentionsValueInner]});
            }
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], ['String']);
            }
            if (data.hasOwnProperty('weekly_weekday')) {
                obj['weekly_weekday'] = ApiClient.convertToType(data['weekly_weekday'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAlmanaxWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAlmanaxWebhook</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateAlmanaxWebhook.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bonus_whitelist'])) {
            throw new Error("Expected the field `bonus_whitelist` to be an array in the JSON data but got " + data['bonus_whitelist']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bonus_blacklist'])) {
            throw new Error("Expected the field `bonus_blacklist` to be an array in the JSON data but got " + data['bonus_blacklist']);
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
        // validate the optional field `daily_settings`
        if (data['daily_settings']) { // data not null
          CreateAlmanaxWebhookDailySettings.validateJSON(data['daily_settings']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['intervals'])) {
            throw new Error("Expected the field `intervals` to be an array in the JSON data but got " + data['intervals']);
        }
        // ensure the json data is a string
        if (data['weekly_weekday'] && !(typeof data['weekly_weekday'] === 'string' || data['weekly_weekday'] instanceof String)) {
            throw new Error("Expected the field `weekly_weekday` to be a primitive type in the JSON string but got " + data['weekly_weekday']);
        }

        return true;
    }


}

CreateAlmanaxWebhook.RequiredProperties = ["subscriptions", "format", "callback", "intervals"];

/**
 * from all available bonuses (ids) from /dofus2/meta/{language}/almanax/bonuses
 * @member {Array.<String>} bonus_whitelist
 */
CreateAlmanaxWebhook.prototype['bonus_whitelist'] = undefined;

/**
 * from all available bonuses (ids) from /dofus2/meta/{language}/almanax/bonuses
 * @member {Array.<String>} bonus_blacklist
 */
CreateAlmanaxWebhook.prototype['bonus_blacklist'] = undefined;

/**
 * Get the available subscriptions with /meta/webhooks/almanax
 * @member {Array.<String>} subscriptions
 */
CreateAlmanaxWebhook.prototype['subscriptions'] = undefined;

/**
 * @member {module:model/CreateAlmanaxWebhook.FormatEnum} format
 */
CreateAlmanaxWebhook.prototype['format'] = undefined;

/**
 * Discord Webhook URL
 * @member {String} callback
 */
CreateAlmanaxWebhook.prototype['callback'] = undefined;

/**
 * @member {module:model/CreateAlmanaxWebhookDailySettings} daily_settings
 */
CreateAlmanaxWebhook.prototype['daily_settings'] = undefined;

/**
 * If false, it will use common local time formats and weekday translations. If true, the format is YYYY-MM-DD.
 * @member {Boolean} iso_date
 * @default false
 */
CreateAlmanaxWebhook.prototype['iso_date'] = false;

/**
 * Almanax bonus ids mapped to array of mentions.
 * @member {Object.<String, Array.<module:model/CreateAlmanaxWebhookMentionsValueInner>>} mentions
 */
CreateAlmanaxWebhook.prototype['mentions'] = undefined;

/**
 * - Daily posts each day, filtering with Black/Whitelist and mentions are applied daily. - Weekly posts the next 7 days (excluding the posting day) once per week at the specified time. With only weekly selected, of all mentions, only prior notices will come through daily. The 7 day preview gets filtered by the Black/Whitelist. - Monthly posts a preview of the next month from first to last date. The post will be on the last day of a month (ignoring day of the week) at the specified time. Mentions and filtering works like weekly. The biggest difference between daily and the other two is that daily always posts the current day while monthly and weekly only show future days. You can always combine the intervals by selecting multiple intervals for one hook or create multiple hooks for the same channel with different settings to get every highly specific combination you want.
 * @member {Array.<module:model/CreateAlmanaxWebhook.IntervalsEnum>} intervals
 */
CreateAlmanaxWebhook.prototype['intervals'] = undefined;

/**
 * When to post the weekly preview at the specified time.
 * @member {module:model/CreateAlmanaxWebhook.WeeklyWeekdayEnum} weekly_weekday
 */
CreateAlmanaxWebhook.prototype['weekly_weekday'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
CreateAlmanaxWebhook['FormatEnum'] = {

    /**
     * value: "discord"
     * @const
     */
    "discord": "discord"
};


/**
 * Allowed values for the <code>intervals</code> property.
 * @enum {String}
 * @readonly
 */
CreateAlmanaxWebhook['IntervalsEnum'] = {

    /**
     * value: "daily"
     * @const
     */
    "daily": "daily",

    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly",

    /**
     * value: "monthly"
     * @const
     */
    "monthly": "monthly"
};


/**
 * Allowed values for the <code>weekly_weekday</code> property.
 * @enum {String}
 * @readonly
 */
CreateAlmanaxWebhook['WeeklyWeekdayEnum'] = {

    /**
     * value: "sunday"
     * @const
     */
    "sunday": "sunday",

    /**
     * value: "monday"
     * @const
     */
    "monday": "monday",

    /**
     * value: "tuesday"
     * @const
     */
    "tuesday": "tuesday",

    /**
     * value: "wednesday"
     * @const
     */
    "wednesday": "wednesday",

    /**
     * value: "thursday"
     * @const
     */
    "thursday": "thursday",

    /**
     * value: "friday"
     * @const
     */
    "friday": "friday",

    /**
     * value: "saturday"
     * @const
     */
    "saturday": "saturday"
};



export default CreateAlmanaxWebhook;

