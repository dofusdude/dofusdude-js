/**
 * Dofusdude
 * # A project for you - the developer. The free, always-up-to-date, low-latency, insert-buzzword-here Ankama API for your next cool project!  ## Client SDKs Don't write types or functions yourself - I already (kinda) did! 😉 - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude - [PHP](https://github.com/dofusdude/dofusdude-php)  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related Twitter, RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅ - Monsters ❌ - Spells ❌  ... and much more on the Roadmap on my Discord.   ## Deploy now. Use forever. Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  ## Only the beginning... 🤯 I want this project to be useful and not just add plain GET-categories no one needs.  There is a long list of features I want to add (see the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h)). But they are all focussed on you, the developers. So please let me know what you need. I will change the list based on demand.  # Get started! 🥳 Scroll down and try it for yourself!  Or see how these other awesome projects use it: - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [DofuStuffSimulator](https://dofusstuffsimulator.netlify.app/)  I highly recommend using the SDKs for quick results. I use them myself for parts of the API.  ## Thank you! I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.  The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply  donate, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude). 
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ImageUrls from './ImageUrls';
import ItemsListEntryTypedType from './ItemsListEntryTypedType';

/**
 * The ItemsListEntryTyped model module.
 * @module model/ItemsListEntryTyped
 * @version 0.8.0
 */
class ItemsListEntryTyped {
    /**
     * Constructs a new <code>ItemsListEntryTyped</code>.
     * @alias module:model/ItemsListEntryTyped
     */
    constructor() { 
        
        ItemsListEntryTyped.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemsListEntryTyped</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemsListEntryTyped} obj Optional instance to populate.
     * @return {module:model/ItemsListEntryTyped} The populated <code>ItemsListEntryTyped</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemsListEntryTyped();

            if (data.hasOwnProperty('ankama_id')) {
                obj['ankama_id'] = ApiClient.convertToType(data['ankama_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ItemsListEntryTypedType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('item_subtype')) {
                obj['item_subtype'] = ApiClient.convertToType(data['item_subtype'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('image_urls')) {
                obj['image_urls'] = ImageUrls.constructFromObject(data['image_urls']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemsListEntryTyped</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemsListEntryTyped</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `type`
        if (data['type']) { // data not null
          ItemsListEntryTypedType.validateJSON(data['type']);
        }
        // ensure the json data is a string
        if (data['item_subtype'] && !(typeof data['item_subtype'] === 'string' || data['item_subtype'] instanceof String)) {
            throw new Error("Expected the field `item_subtype` to be a primitive type in the JSON string but got " + data['item_subtype']);
        }
        // validate the optional field `image_urls`
        if (data['image_urls']) { // data not null
          ImageUrls.validateJSON(data['image_urls']);
        }

        return true;
    }


}



/**
 * @member {Number} ankama_id
 */
ItemsListEntryTyped.prototype['ankama_id'] = undefined;

/**
 * @member {String} name
 */
ItemsListEntryTyped.prototype['name'] = undefined;

/**
 * @member {module:model/ItemsListEntryTypedType} type
 */
ItemsListEntryTyped.prototype['type'] = undefined;

/**
 * The API item category. Can be used to build the request URL for this particular item. Always english.
 * @member {String} item_subtype
 */
ItemsListEntryTyped.prototype['item_subtype'] = undefined;

/**
 * @member {Number} level
 */
ItemsListEntryTyped.prototype['level'] = undefined;

/**
 * @member {module:model/ImageUrls} image_urls
 */
ItemsListEntryTyped.prototype['image_urls'] = undefined;






export default ItemsListEntryTyped;

