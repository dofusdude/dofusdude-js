/**
 * Dofusdude
 * The last API for everything Dofus 🤯 <h2>Main Features</h2> <ul> <li>🥷 <b>seamless auto-update</b> load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.</li>  <li>⚡ <b>blazingly fast</b> all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.</li>  <li>🩸 <b>Dofus 2 Beta</b> from stable to bleeding edge by replacing /dofus2 with /dofus2beta.</li>  <li>🗣️ <b>multilingual</b> supporting <em>en</em>, <em>fr</em>, <em>es</em>, <em>pt</em> including the dropped languages from the Dofus website <em>de</em> and <em>it</em>.</li>  <li>🧠 <b>search by relevance</b> allowing typos in name and description, handled by language specific text analysis and indexing by the powerful <a href=\"https://www.meilisearch.com\">Meilisearch</a> written in Rust.</li>  <li>🕵️ <b>complete</b> actual data from the game including items invisible to the encyclopedia like quest items.</li>  <li>🖼️ <b>HD images</b> rendering vector graphics into PNGs up to 800x800 px in the background.</li>  </ul>   <h2>Current state</h2> <ul> <li>Weapons ✅</li> <li>Equipment ✅</li> <li>Sets ✅</li> <li>Resources ✅</li> <li>Consumables ✅</li> <li>Pets ✅</li> <li>Mounts ✅</li> <li>Cosmetics/Ceremonial Items ✅</li> <li>Harnesses ✅</li> <li>Quest Items ✅</li> <li>Almanax ✅</li> </ul>  <ul> <li>Monsters ❌</li> <li>Classes ❌</li> <li>Spells ❌</li> <li>Professions ❌ </li> </ul>   <h3>Maybes? I don't know what for 🤷</h3> <ul> <li>Sidekicks ❌</li> <li>Haven Bags ❌</li> <li>Map ❌</li> </ul>   <h2>Future</h2> I want this project to be useful and not just add plain categories no one needs. More and more features will be added to enhance the quality based on the needs of you, the developers. <br>Examples: <p><em>I need to know where I can drop the all the items I need to craft set X!</em></p> <p><em>Please get a detailed always up-to-date spell description so I can calculate the damage for my set builder site!</em></p> <p>Nearly everything can be done. But I want to make sure somebody also wants it. If you have anything or you are just interested in the project, join the <a href=\"https://discord.gg/3EtHskZD8h\">Discord</a>.</p>  <h3>Versioning</h3> <p>Updating an API is a hard problem. This is why we'll keep it simple:  Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted. Ever. </p> <p>There is one exception! <b>The API will <em>always</em> choose being up-to-date over everything else</b>. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too. </p> <p> We can prevent this specific use case with a nice community but even then, it would be hidden behind a feature flag. </p>  <h2>Get started! 🥳</h2> <p>Scroll down and try it for yourself!</p> <p>If you are ready to use them in your project, think about <a href=\"https://github.com/OpenAPITools/openapi-generator\">generating a client 🧙</a> from the <a href=\"https://raw.githubusercontent.com/dofusdude/api-docs/main/openapi-3.0.yaml\">OpenAPI 3.0 Spec</a> to get started quickly.</p>  <p>Awesome Projects using this API:</p> <ul> <li><a href=\"https://github.com/Kaysoro/KaellyBot\">KaellyBot</a> by Kaysoro</li> <li><a href=\"https://dofuscraftlist-dev.netlify.app\">Dofus Craftlist</a> by Lystina</li> <li><a href=\"https://almanaxapp.netlify.app\">AlmanaxApp</a> by Lystina</li> <li><a href=\"https://luwnarya.fr\">luwnarya.fr</a></li> </ul>  My old <a href=\"https://alm.dofusdu.de/swagger\">Almanax API v1</a> is an example for using a <a href=\"https://github.com/dofusdude/almanax-api/tree/main/src/main/java/org/acme/openapi\">generated Client</a> from the OpenAPI Spec.  
 *
 * The version of the OpenAPI document: 0.5.1
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
import Resource from '../model/Resource';

/**
* Consumables service.
* @module api/ConsumablesApi
* @version 0.5.1
*/
export default class ConsumablesApi {

    /**
    * Constructs a new ConsumablesApi. 
    * @alias module:api/ConsumablesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getItemsConsumablesList operation.
     * @callback module:api/ConsumablesApi~getItemsConsumablesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemsListPaged} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Consumables
     * Retrieve a list of consumable items.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sortLevel sort the resulting list by level, default unsorted
     * @param {String} opts.filterTypeName only results with the translated type name
     * @param {Number} opts.filterMinLevel only results which level is equal or above this value
     * @param {Number} opts.filterMaxLevel only results which level is equal or below this value
     * @param {Number} opts.pageSize size of the results from the list. -1 disables pagination and gets all in one response.
     * @param {Number} opts.pageNumber page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
     * @param {String} opts.fieldsItem adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
     * @param {module:api/ConsumablesApi~getItemsConsumablesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemsListPaged}
     */
    getItemsConsumablesList(language, game, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsConsumablesList");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsConsumablesList");
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
        'fields[item]': opts['fieldsItem']
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
        '/{game}/{language}/items/consumables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemsConsumablesSearch operation.
     * @callback module:api/ConsumablesApi~getItemsConsumablesSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemListEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Consumables
     * Search in all names and descriptions of consumable items with a query.
     * @param {module:model/String} language a valid language code
     * @param {module:model/String} game 
     * @param {String} query case sensitive search query
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterTypeName only results with the translated type name
     * @param {Number} opts.filterMinLevel only results which level is equal or above this value
     * @param {Number} opts.filterMaxLevel only results which level is equal or below this value
     * @param {module:api/ConsumablesApi~getItemsConsumablesSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ItemListEntry>}
     */
    getItemsConsumablesSearch(language, game, query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsConsumablesSearch");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsConsumablesSearch");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getItemsConsumablesSearch");
      }

      let pathParams = {
        'language': language,
        'game': game
      };
      let queryParams = {
        'query': query,
        'filter[type_name]': opts['filterTypeName'],
        'filter[min_level]': opts['filterMinLevel'],
        'filter[max_level]': opts['filterMaxLevel']
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
        '/{game}/{language}/items/consumables/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemsConsumablesSingle operation.
     * @callback module:api/ConsumablesApi~getItemsConsumablesSingleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Resource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Single Consumables
     * Retrieve a specific consumable item with id.
     * @param {module:model/String} language a valid language code
     * @param {Number} ankamaId identifier
     * @param {module:model/String} game 
     * @param {module:api/ConsumablesApi~getItemsConsumablesSingleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Resource}
     */
    getItemsConsumablesSingle(language, ankamaId, game, callback) {
      let postBody = null;
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling getItemsConsumablesSingle");
      }
      // verify the required parameter 'ankamaId' is set
      if (ankamaId === undefined || ankamaId === null) {
        throw new Error("Missing the required parameter 'ankamaId' when calling getItemsConsumablesSingle");
      }
      // verify the required parameter 'game' is set
      if (game === undefined || game === null) {
        throw new Error("Missing the required parameter 'game' when calling getItemsConsumablesSingle");
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
        '/{game}/{language}/items/consumables/{ankama_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
