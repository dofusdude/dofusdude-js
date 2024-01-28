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
import AlmanaxEntryBonus from './AlmanaxEntryBonus';
import AlmanaxEntryTribute from './AlmanaxEntryTribute';

/**
 * The AlmanaxEntry model module.
 * @module model/AlmanaxEntry
 * @version 0.8.2
 */
class AlmanaxEntry {
    /**
     * Constructs a new <code>AlmanaxEntry</code>.
     * @alias module:model/AlmanaxEntry
     */
    constructor() { 
        
        AlmanaxEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AlmanaxEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlmanaxEntry} obj Optional instance to populate.
     * @return {module:model/AlmanaxEntry} The populated <code>AlmanaxEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlmanaxEntry();

            if (data.hasOwnProperty('bonus')) {
                obj['bonus'] = AlmanaxEntryBonus.constructFromObject(data['bonus']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('tribute')) {
                obj['tribute'] = AlmanaxEntryTribute.constructFromObject(data['tribute']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AlmanaxEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AlmanaxEntry</code>.
     */
    static validateJSON(data) {
        // validate the optional field `bonus`
        if (data['bonus']) { // data not null
          AlmanaxEntryBonus.validateJSON(data['bonus']);
        }
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }
        // validate the optional field `tribute`
        if (data['tribute']) { // data not null
          AlmanaxEntryTribute.validateJSON(data['tribute']);
        }

        return true;
    }


}



/**
 * @member {module:model/AlmanaxEntryBonus} bonus
 */
AlmanaxEntry.prototype['bonus'] = undefined;

/**
 * @member {String} date
 */
AlmanaxEntry.prototype['date'] = undefined;

/**
 * @member {module:model/AlmanaxEntryTribute} tribute
 */
AlmanaxEntry.prototype['tribute'] = undefined;






export default AlmanaxEntry;

