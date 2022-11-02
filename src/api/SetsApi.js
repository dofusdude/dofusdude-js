/**
 * Dofusdude
 * # A project for you - the developer. The free, always-up-to-date, low-latency, insert-buzzword-here Ankama API for your next cool project!  ## Client SDKs Don't write types or functions yourself - I already (kinda) did! 😉 - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related Twitter, RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅ - Monsters ❌ - Spells ❌  ... and much more on the Roadmap on my Discord.   ## Deploy now. Use forever. Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  ## Only the beginning... 🤯 I want this project to be useful and not just add plain GET-categories no one needs.  There is a long list of features I want to add (see the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h)). But they are all focussed on you, the developers. So please let me know what you need. I will change the list based on demand.  # Get started! 🥳 Scroll down and try it for yourself!  Or see how these other awesome projects use it: - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [luwnarya.fr](https://luwnarya.fr)  I highly recommend using the SDKs for quick results. I use them myself for microservices for the API.  ## Thank you! I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.  The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply  donate, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude).  
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import EquipmentSet from '../model/EquipmentSet';
import SetListEntry from '../model/SetListEntry';
import SetsListPaged from '../model/SetsListPaged';

/**
* Sets service.
* @module api/SetsApi
* @version 0.7.0
*/
export default class SetsApi {

    /**
    * Constructs a new SetsApi. 
    * @alias module:api/SetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllSetsList operation.
     * @callback module:api/SetsApi~getAllSetsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SetsListPaged} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Sets
     * Retrieve all sets with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]=-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header 'Accept-Encoding: gzip' for saving bandwidth. You will need to uncompress it on your end. Example with cURL: ``` curl -sH 'Accept-Encoding: gzip' <api-endpoint> | gunzip - ```
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sortLevel sort the resulting list by level, default unsorted
     * @param {Number} opts.filterMinHighestEquipmentLevel only results where the equipment with the highest level is above or equal to this value
     * @param {Number} opts.filterMaxHighestEquipmentLevel only results where the equipment with the highest level is below or equal to this value
     * @param {module:model/String} opts.acceptEncoding optional compression for saving bandwidth
     * @param {module:api/SetsApi~getAllSetsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SetsListPaged}
     */
    getAllSetsList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getAllSetsList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getAllSetsList");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'sort[level]': opts['sortLevel'],
        'filter[min_highest_equipment_level]': opts['filterMinHighestEquipmentLevel'],
        'filter[max_highest_equipment_level]': opts['filterMaxHighestEquipmentLevel']
      };
      let headerParams = {
        'Accept-Encoding': opts['acceptEncoding']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SetsListPaged;
      return this.apiClient.callApi(
        '/{game}/{language}/sets/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSetsList operation.
     * @callback module:api/SetsApi~getSetsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SetsListPaged} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Sets
     * Retrieve a list of sets.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sortLevel sort the resulting list by level, default unsorted
     * @param {Number} opts.filterMinHighestEquipmentLevel only results where the equipment with the highest level is above or equal to this value
     * @param {Number} opts.filterMaxHighestEquipmentLevel only results where the equipment with the highest level is below or equal to this value
     * @param {Number} opts.pageSize size of the results from the list. -1 disables pagination and gets all in one response.
     * @param {Number} opts.pageNumber page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
     * @param {Array.<module:model/String>} opts.fieldsSet adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
     * @param {module:api/SetsApi~getSetsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SetsListPaged}
     */
    getSetsList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getSetsList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getSetsList");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'sort[level]': opts['sortLevel'],
        'filter[min_highest_equipment_level]': opts['filterMinHighestEquipmentLevel'],
        'filter[max_highest_equipment_level]': opts['filterMaxHighestEquipmentLevel'],
        'page[size]': opts['pageSize'],
        'page[number]': opts['pageNumber'],
        'fields[set]': this.apiClient.buildCollectionParam(opts['fieldsSet'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SetsListPaged;
      return this.apiClient.callApi(
        '/{game}/{language}/sets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSetsSearch operation.
     * @callback module:api/SetsApi~getSetsSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SetListEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Sets
     * Search in all names and descriptions of sets with a query.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game 
     * @param {String} query case sensitive search query
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterMinHighestEquipmentLevel only results where the equipment with the highest level is above or equal to this value
     * @param {Number} opts.filterMaxHighestEquipmentLevel only results where the equipment with the highest level is below or equal to this value
     * @param {module:api/SetsApi~getSetsSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SetListEntry>}
     */
    getSetsSearch(language, game, query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getSetsSearch");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getSetsSearch");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getSetsSearch");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'query': query,
        'filter[min_highest_equipment_level]': opts['filterMinHighestEquipmentLevel'],
        'filter[max_highest_equipment_level]': opts['filterMaxHighestEquipmentLevel']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SetListEntry];
      return this.apiClient.callApi(
        '/{game}/{language}/sets/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSetsSingle operation.
     * @callback module:api/SetsApi~getSetsSingleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EquipmentSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Sets
     * Retrieve a specific set with id.
     * @param {module:model/String} language a valid language code
     * @param {Number} ankamaId identifier
     * @param {module:model/String} game 
     * @param {module:api/SetsApi~getSetsSingleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EquipmentSet}
     */
    getSetsSingle(language, ankamaId, game, callback) {
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getSetsSingle");
      }
      // verify the required parameter 'ankamaId' is set
      if (ankamaId === undefined || ankamaId === null) {
        throw new Error("Missing the required parameter 'ankamaId' when calling getSetsSingle");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getSetsSingle");
      }

      let pathParams = {
        'language': language,
        'ankama_id': ankamaId,
        'game': game
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EquipmentSet;
      return this.apiClient.callApi(
        '/{game}/{language}/sets/{ankama_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
