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


import ApiClient from "../ApiClient";
import ItemListEntry from '../model/ItemListEntry';
import ItemsListPaged from '../model/ItemsListPaged';
import Weapon from '../model/Weapon';

/**
* Equipment service.
* @module api/EquipmentApi
* @version 0.8.2
*/
export default class EquipmentApi {

    /**
    * Constructs a new EquipmentApi. 
    * @alias module:api/EquipmentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllItemsEquipmentList operation.
     * @callback module:api/EquipmentApi~getAllItemsEquipmentListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemsListPaged} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Equipment
     * Retrieve all equipment items with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]=-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header 'Accept-Encoding: gzip' for saving bandwidth. You will need to uncompress it on your end. Example with cURL: ``` curl -sH 'Accept-Encoding: gzip' <api-endpoint> | gunzip - ```
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [sortLevel] sort the resulting list by level, default unsorted
     * @param {String} [filterTypeName] only results with the translated type name
     * @param {Number} [filterMinLevel] only results which level is equal or above this value
     * @param {Number} [filterMaxLevel] only results which level is equal or below this value
     * @param {module:model/String} [acceptEncoding] optional compression for saving bandwidth
     * @param {module:api/EquipmentApi~getAllItemsEquipmentListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemsListPaged}
     */
    getAllItemsEquipmentList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getAllItemsEquipmentList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getAllItemsEquipmentList");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'sort[level]': opts['sortLevel'],
        'filter[type_name]': opts['filterTypeName'],
        'filter[min_level]': opts['filterMinLevel'],
        'filter[max_level]': opts['filterMaxLevel']
      };
      let headerParams = {
        'Accept-Encoding': opts['acceptEncoding']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ItemsListPaged;
      return this.apiClient.callApi(
        '/{game}/{language}/items/equipment/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemsEquipmentList operation.
     * @callback module:api/EquipmentApi~getItemsEquipmentListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemsListPaged} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Equipment
     * Retrieve a list of equipment items.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [sortLevel] sort the resulting list by level, default unsorted
     * @param {String} [filterTypeName] only results with the translated type name
     * @param {Number} [filterMinLevel] only results which level is equal or above this value
     * @param {Number} [filterMaxLevel] only results which level is equal or below this value
     * @param {Number} [pageSize] size of the results from the list. -1 disables pagination and gets all in one response.
     * @param {Number} [pageNumber] page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
     * @param {Array.<module:model/String>} [fieldsItem] adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
     * @param {module:api/EquipmentApi~getItemsEquipmentListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemsListPaged}
     */
    getItemsEquipmentList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsEquipmentList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsEquipmentList");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'sort[level]': opts['sortLevel'],
        'filter[type_name]': opts['filterTypeName'],
        'filter[min_level]': opts['filterMinLevel'],
        'filter[max_level]': opts['filterMaxLevel'],
        'page[size]': opts['pageSize'],
        'page[number]': opts['pageNumber'],
        'fields[item]': this.apiClient.buildCollectionParam(opts['fieldsItem'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ItemsListPaged;
      return this.apiClient.callApi(
        '/{game}/{language}/items/equipment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemsEquipmentSearch operation.
     * @callback module:api/EquipmentApi~getItemsEquipmentSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemListEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Equipment
     * Search in all names and descriptions of equipment items with a query.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game 
     * @param {String} query case sensitive search query
     * @param {Object} opts Optional parameters
     * @param {String} [filterTypeName] only results with the translated type name
     * @param {Number} [filterMinLevel] only results which level is equal or above this value
     * @param {Number} [filterMaxLevel] only results which level is equal or below this value
     * @param {Number} [limit = 8)] maximum number of returned results
     * @param {module:api/EquipmentApi~getItemsEquipmentSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ItemListEntry>}
     */
    getItemsEquipmentSearch(language, game, query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsEquipmentSearch");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsEquipmentSearch");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getItemsEquipmentSearch");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'query': query,
        'filter[type_name]': opts['filterTypeName'],
        'filter[min_level]': opts['filterMinLevel'],
        'filter[max_level]': opts['filterMaxLevel'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ItemListEntry];
      return this.apiClient.callApi(
        '/{game}/{language}/items/equipment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemsEquipmentSingle operation.
     * @callback module:api/EquipmentApi~getItemsEquipmentSingleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Weapon} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Equipment
     * Retrieve a specific equipment item with id.
     * @param {module:model/String} language a valid language code
     * @param {Number} ankamaId identifier
     * @param {module:model/String} game 
     * @param {module:api/EquipmentApi~getItemsEquipmentSingleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Weapon}
     */
    getItemsEquipmentSingle(language, ankamaId, game, callback) {
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsEquipmentSingle");
      }
      // verify the required parameter 'ankamaId' is set
      if (ankamaId === undefined || ankamaId === null) {
        throw new Error("Missing the required parameter 'ankamaId' when calling getItemsEquipmentSingle");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsEquipmentSingle");
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
      let returnType = Weapon;
      return this.apiClient.callApi(
        '/{game}/{language}/items/equipment/{ankama_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
