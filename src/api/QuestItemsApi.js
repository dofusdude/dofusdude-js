/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import ListItem from '../model/ListItem';
import ListItems from '../model/ListItems';
import Resource from '../model/Resource';

/**
* QuestItems service.
* @module api/QuestItemsApi
* @version 1.0.0
*/
export default class QuestItemsApi {

    /**
    * Constructs a new QuestItemsApi. 
    * @alias module:api/QuestItemsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllItemsQuestList operation.
     * @callback module:api/QuestItemsApi~getAllItemsQuestListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListItems} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Quest Items
     * Retrieve all quest items with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]=-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header 'Accept-Encoding: gzip' for saving bandwidth. You will need to uncompress it on your end. Example with cURL: ``` curl -sH 'Accept-Encoding: gzip' <api-endpoint> | gunzip - ```
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [sortLevel] sort the resulting list by level, default unsorted
     * @param {Number} [filterMinLevel] only results which level is equal or above this value
     * @param {Number} [filterMaxLevel] only results which level is equal or below this value
     * @param {module:model/String} [acceptEncoding] optional compression for saving bandwidth
     * @param {Array.<String>} [filterTypeNameId] multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
     * @param {module:api/QuestItemsApi~getAllItemsQuestListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListItems}
     */
    getAllItemsQuestList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getAllItemsQuestList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getAllItemsQuestList");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'sort[level]': opts['sortLevel'],
        'filter[min_level]': opts['filterMinLevel'],
        'filter[max_level]': opts['filterMaxLevel'],
        'filter[type.name_id]': this.apiClient.buildCollectionParam(opts['filterTypeNameId'], 'csv')
      };
      let headerParams = {
        'Accept-Encoding': opts['acceptEncoding']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListItems;
      return this.apiClient.callApi(
        '/{game}/v1/{language}/items/quest/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemQuestSingle operation.
     * @callback module:api/QuestItemsApi~getItemQuestSingleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Resource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Quest Items
     * Retrieve a specific quest item with id.
     * @param {module:model/String} language a valid language code
     * @param {Number} ankamaId identifier
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {module:api/QuestItemsApi~getItemQuestSingleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Resource}
     */
    getItemQuestSingle(language, ankamaId, game, callback) {
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemQuestSingle");
      }
      // verify the required parameter 'ankamaId' is set
      if (ankamaId === undefined || ankamaId === null) {
        throw new Error("Missing the required parameter 'ankamaId' when calling getItemQuestSingle");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemQuestSingle");
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
      let returnType = Resource;
      return this.apiClient.callApi(
        '/{game}/v1/{language}/items/quest/{ankama_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemsQuestList operation.
     * @callback module:api/QuestItemsApi~getItemsQuestListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListItems} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Quest Items
     * Retrieve a list of quest items.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [sortLevel] sort the resulting list by level, default unsorted
     * @param {Number} [filterMinLevel] only results which level is equal or above this value
     * @param {Number} [filterMaxLevel] only results which level is equal or below this value
     * @param {Number} [pageSize] size of the results from the list. -1 disables pagination and gets all in one response.
     * @param {Number} [pageNumber] page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
     * @param {Array.<module:model/String>} [fieldsItem] adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
     * @param {Array.<String>} [filterTypeNameId] multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
     * @param {module:api/QuestItemsApi~getItemsQuestListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListItems}
     */
    getItemsQuestList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsQuestList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsQuestList");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'sort[level]': opts['sortLevel'],
        'filter[min_level]': opts['filterMinLevel'],
        'filter[max_level]': opts['filterMaxLevel'],
        'page[size]': opts['pageSize'],
        'page[number]': opts['pageNumber'],
        'fields[item]': this.apiClient.buildCollectionParam(opts['fieldsItem'], 'csv'),
        'filter[type.name_id]': this.apiClient.buildCollectionParam(opts['filterTypeNameId'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListItems;
      return this.apiClient.callApi(
        '/{game}/v1/{language}/items/quest', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemsQuestSearch operation.
     * @callback module:api/QuestItemsApi~getItemsQuestSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Quest Items
     * Search in all names and descriptions of quest items with a query.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {String} query case sensitive search query
     * @param {Object} opts Optional parameters
     * @param {Number} [filterMinLevel] only results which level is equal or above this value
     * @param {Number} [filterMaxLevel] only results which level is equal or below this value
     * @param {Number} [limit = 8)] maximum number of returned results
     * @param {Array.<String>} [filterTypeNameId] multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
     * @param {module:api/QuestItemsApi~getItemsQuestSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListItem>}
     */
    getItemsQuestSearch(language, game, query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsQuestSearch");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsQuestSearch");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getItemsQuestSearch");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'query': query,
        'filter[min_level]': opts['filterMinLevel'],
        'filter[max_level]': opts['filterMaxLevel'],
        'limit': opts['limit'],
        'filter[type.name_id]': this.apiClient.buildCollectionParam(opts['filterTypeNameId'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ListItem];
      return this.apiClient.callApi(
        '/{game}/v1/{language}/items/quest/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
