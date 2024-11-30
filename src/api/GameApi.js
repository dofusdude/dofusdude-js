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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import GameSearch from '../model/GameSearch';
import ListItemGeneral from '../model/ListItemGeneral';

/**
* Game service.
* @module api/GameApi
* @version 1.0.0-rc.5
*/
export default class GameApi {

    /**
    * Constructs a new GameApi. 
    * @alias module:api/GameApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getGameSearch operation.
     * @callback module:api/GameApi~getGameSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GameSearch>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Game Search
     * Search in all names and descriptions of all supported types in the game. For the list of supported types see the endpoint /dofus3/meta/search/types.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {String} query search query
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} [filterSearchIndex] only results with all specific type
     * @param {Number} [limit = 8)] maximum number of returned results
     * @param {Array.<module:model/String>} [fieldsItem] adds fields from the item search to the list entries if the hit is a item. Multiple comma separated values allowed.
     * @param {Array.<String>} [filterTypeNameId] multi-filter results with the english item type name, including \"mount\" and \"set\" from filter[type]. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
     * @param {module:api/GameApi~getGameSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GameSearch>}
     */
    getGameSearch(language, game, query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getGameSearch");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getGameSearch");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getGameSearch");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'query': query,
        'filter[search_index]': this.apiClient.buildCollectionParam(opts['filterSearchIndex'], 'csv'),
        'limit': opts['limit'],
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
      let returnType = [GameSearch];
      return this.apiClient.callApi(
        '/{game}/v1/{language}/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemsAllSearch operation.
     * @callback module:api/GameApi~getItemsAllSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListItemGeneral>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search All Items
     * Search in all names and descriptions of Dofus items (including all subtypes) with a query.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {String} query case sensitive search query
     * @param {Object} opts Optional parameters
     * @param {Number} [filterMinLevel] only results which level is equal or above this value
     * @param {Number} [filterMaxLevel] only results which level is equal or below this value
     * @param {Number} [limit = 8)] maximum number of returned results
     * @param {Array.<String>} [filterTypeNameId] multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
     * @param {module:api/GameApi~getItemsAllSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListItemGeneral>}
     */
    getItemsAllSearch(language, game, query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsAllSearch");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsAllSearch");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getItemsAllSearch");
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
      let returnType = [ListItemGeneral];
      return this.apiClient.callApi(
        '/{game}/v1/{language}/items/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
