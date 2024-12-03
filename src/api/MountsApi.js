/**
 * dofusdude
 * # Open Ankama Developer Community The all-in-one toolbelt for your next Ankama related project.  ## Versions - [Dofus 2](https://docs.dofusdu.de/dofus2/) - [Dofus 3](https://docs.dofusdu.de/dofus3/)   - v1 [latest] (you are here)   ## Client SDKs - [Javascript](https://github.com/dofusdude/dofusdude-js) `npm i dofusdude-js --save` - [Typescript](https://github.com/dofusdude/dofusdude-ts) `npm i dofusdude-ts --save` - [Go](https://github.com/dofusdude/dodugo) `go get -u github.com/dofusdude/dodugo` - [Python](https://github.com/dofusdude/dofusdude-py) `pip install dofusdude` - [Java](https://github.com/dofusdude/dofusdude-java) Maven with GitHub packages setup  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 10 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Almanax Discord Integration** Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 3 Beta** from stable to bleeding edge by replacing /dofus3 with /dofus3beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_, _de_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing.  - 🕵️ **Official Sources** generated from actual data from the game.  ... and much more on the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h). 
 *
 * The version of the OpenAPI document: 1.0.0-rc.8
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import ListMounts from '../model/ListMounts';
import Mount from '../model/Mount';

/**
* Mounts service.
* @module api/MountsApi
* @version 1.0.0-rc.8
*/
export default class MountsApi {

    /**
    * Constructs a new MountsApi. 
    * @alias module:api/MountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllMountsList operation.
     * @callback module:api/MountsApi~getAllMountsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListMounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Mounts
     * Retrieve all mounts with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]=-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header 'Accept-Encoding: gzip' for saving bandwidth. You will need to uncompress it on your end. Example with cURL: ``` curl -sH 'Accept-Encoding: gzip' <api-endpoint> | gunzip - ```
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {Object} opts Optional parameters
     * @param {String} [filterFamilyName] only results with the translated family name
     * @param {module:model/String} [acceptEncoding] optional compression for saving bandwidth
     * @param {Number} [filterFamilyId] only results with the unique family id
     * @param {module:api/MountsApi~getAllMountsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListMounts}
     */
    getAllMountsList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getAllMountsList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getAllMountsList");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'filter[family.name]': opts['filterFamilyName'],
        'filter[family.id]': opts['filterFamilyId']
      };
      let headerParams = {
        'Accept-Encoding': opts['acceptEncoding']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListMounts;
      return this.apiClient.callApi(
        '/{game}/v1/{language}/mounts/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMountsList operation.
     * @callback module:api/MountsApi~getMountsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListMounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Mounts
     * Retrieve a list of mounts.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {Object} opts Optional parameters
     * @param {String} [filterFamilyName] only results with the translated family name
     * @param {Number} [pageSize] size of the results from the list. -1 disables pagination and gets all in one response.
     * @param {Number} [pageNumber] page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
     * @param {Array.<module:model/String>} [fieldsMount] adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
     * @param {Number} [filterFamilyId] only results with the unique family id
     * @param {module:api/MountsApi~getMountsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListMounts}
     */
    getMountsList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getMountsList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getMountsList");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'filter[family.name]': opts['filterFamilyName'],
        'page[size]': opts['pageSize'],
        'page[number]': opts['pageNumber'],
        'fields[mount]': this.apiClient.buildCollectionParam(opts['fieldsMount'], 'csv'),
        'filter[family.id]': opts['filterFamilyId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListMounts;
      return this.apiClient.callApi(
        '/{game}/v1/{language}/mounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMountsSearch operation.
     * @callback module:api/MountsApi~getMountsSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Mount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Mounts
     * Search in all names and descriptions of mounts with a query.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {String} query case sensitive search query
     * @param {Object} opts Optional parameters
     * @param {String} [filterFamilyName] only results with the translated family name
     * @param {Number} [limit = 8)] maximum number of returned results
     * @param {Number} [filterFamilyId] only results with the unique family id
     * @param {module:api/MountsApi~getMountsSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Mount>}
     */
    getMountsSearch(language, game, query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getMountsSearch");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getMountsSearch");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getMountsSearch");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'query': query,
        'filter[family.name]': opts['filterFamilyName'],
        'limit': opts['limit'],
        'filter[family.id]': opts['filterFamilyId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Mount];
      return this.apiClient.callApi(
        '/{game}/v1/{language}/mounts/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMountsSingle operation.
     * @callback module:api/MountsApi~getMountsSingleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Mount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Mounts
     * Retrieve a specific mount with id.
     * @param {module:model/String} language a valid language code
     * @param {Number} ankamaId identifier
     * @param {module:model/String} game game main 'dofus3' or beta channel 'dofus3beta'
     * @param {module:api/MountsApi~getMountsSingleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Mount}
     */
    getMountsSingle(language, ankamaId, game, callback) {
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getMountsSingle");
      }
      // verify the required parameter 'ankamaId' is set
      if (ankamaId === undefined || ankamaId === null) {
        throw new Error("Missing the required parameter 'ankamaId' when calling getMountsSingle");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getMountsSingle");
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
      let returnType = Mount;
      return this.apiClient.callApi(
        '/{game}/v1/{language}/mounts/{ankama_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
