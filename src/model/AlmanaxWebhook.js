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
import AlmanaxWebhookDailySettings from './AlmanaxWebhookDailySettings';
import CreateAlmanaxWebhookMentionsValueInner from './CreateAlmanaxWebhookMentionsValueInner';

/**
 * The AlmanaxWebhook model module.
 * @module model/AlmanaxWebhook
 * @version 1.0.0-rc.2
 */
class AlmanaxWebhook {
    /**
     * Constructs a new <code>AlmanaxWebhook</code>.
     * 
     * @alias module:model/AlmanaxWebhook
     */
    constructor() { 
        
        AlmanaxWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['iso_date'] = false;
    }

    /**
     * Constructs a <code>AlmanaxWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlmanaxWebhook} obj Optional instance to populate.
     * @return {module:model/AlmanaxWebhook} The populated <code>AlmanaxWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlmanaxWebhook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('daily_settings')) {
                obj['daily_settings'] = AlmanaxWebhookDailySettings.constructFromObject(data['daily_settings']);
            }
            if (data.hasOwnProperty('bonus_whitelist')) {
                obj['bonus_whitelist'] = ApiClient.convertToType(data['bonus_whitelist'], ['String']);
            }
            if (data.hasOwnProperty('bonus_blacklist')) {
                obj['bonus_blacklist'] = ApiClient.convertToType(data['bonus_blacklist'], ['String']);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], ['String']);
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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('last_fired_at')) {
                obj['last_fired_at'] = ApiClient.convertToType(data['last_fired_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AlmanaxWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AlmanaxWebhook</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `daily_settings`
        if (data['daily_settings']) { // data not null
          AlmanaxWebhookDailySettings.validateJSON(data['daily_settings']);
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



/**
 * @member {String} id
 */
AlmanaxWebhook.prototype['id'] = undefined;

/**
 * @member {module:model/AlmanaxWebhookDailySettings} daily_settings
 */
AlmanaxWebhook.prototype['daily_settings'] = undefined;

/**
 * Only post when these bonuses come up. From all available bonuses (ids) from /dofus3/meta/{language}/almanax/bonuses.
 * @member {Array.<String>} bonus_whitelist
 */
AlmanaxWebhook.prototype['bonus_whitelist'] = undefined;

/**
 * Skip the day when these bonuses come up. From all available bonuses (ids) from /dofus3/meta/{language}/almanax/bonuses
 * @member {Array.<String>} bonus_blacklist
 */
AlmanaxWebhook.prototype['bonus_blacklist'] = undefined;

/**
 * Get the available subscriptions with /meta/webhooks/almanax
 * @member {Array.<String>} subscriptions
 */
AlmanaxWebhook.prototype['subscriptions'] = undefined;

/**
 * If false, it will use common local time formats and weekday translations. If true, the format is YYYY-MM-DD.
 * @member {Boolean} iso_date
 * @default false
 */
AlmanaxWebhook.prototype['iso_date'] = false;

/**
 * Almanax bonus ids mapped to array of mentions.
 * @member {Object.<String, Array.<module:model/CreateAlmanaxWebhookMentionsValueInner>>} mentions
 */
AlmanaxWebhook.prototype['mentions'] = undefined;

/**
 * - Daily posts each day, filtering with Black/Whitelist and mentions are applied daily. - Weekly posts the next 7 days (excluding the posting day) once per week at the specified time. With only weekly selected, of all mentions, only prior notices will come through daily. The 7 day preview gets filtered by the Black/Whitelist. - Monthly posts a preview of the next month from first to last date. The post will be on the last day of a month (ignoring day of the week) at the specified time. Mentions and filtering works like weekly. The biggest difference between daily and the other two is that daily always posts the current day while monthly and weekly only show future days. You can always combine the intervals by selecting multiple intervals for one hook or create multiple hooks for the same channel with different settings to get every highly specific combination you want.
 * @member {Array.<module:model/AlmanaxWebhook.IntervalsEnum>} intervals
 */
AlmanaxWebhook.prototype['intervals'] = undefined;

/**
 * When to post the weekly preview at the specified time.
 * @member {module:model/AlmanaxWebhook.WeeklyWeekdayEnum} weekly_weekday
 */
AlmanaxWebhook.prototype['weekly_weekday'] = undefined;

/**
 * @member {Date} created_at
 */
AlmanaxWebhook.prototype['created_at'] = undefined;

/**
 * @member {Date} last_fired_at
 */
AlmanaxWebhook.prototype['last_fired_at'] = undefined;

/**
 * @member {Date} updated_at
 */
AlmanaxWebhook.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>intervals</code> property.
 * @enum {String}
 * @readonly
 */
AlmanaxWebhook['IntervalsEnum'] = {

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
AlmanaxWebhook['WeeklyWeekdayEnum'] = {

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



export default AlmanaxWebhook;

