/**
 * Dofusdude
 * # A project for you - the developer. The free, always-up-to-date, low-latency, insert-buzzword-here Ankama API for your next cool project!  ## Client SDKs Don't write types or functions yourself - I already (kinda) did! 😉 - [Javascript](https://github.com/dofusdude/dofusdude-js) npm i dofusdude-js --save - [Typescript](https://github.com/dofusdude/dofusdude-ts) npm i dofusdude-ts --save - [Go](https://github.com/dofusdude/dodugo) go get -u github.com/dofusdude/dodugo - [Python](https://github.com/dofusdude/dofusdude-py) pip install dofusdude - [PHP](https://github.com/dofusdude/dofusdude-php)  Everything, including this site, is generated out of the [Docs Repo](https://github.com/dofusdude/api-docs). Consider it the Single Source of Truth. If there is a problem with the SDKs, create an issue there.  Your favorite language is missing? Please let me know!  # Main Features - 🥷 **Seamless Auto-Update** load data in the background when a new Dofus version is released and serving it within 2 minutes with atomic data source switching. No downtime and no effects for the user, just always up-to-date.  - ⚡ **Blazingly Fast** all data in-memory, aggressive caching over short time spans, HTTP/2 multiplexing, written in Go, optimized for low latency, hosted on bare metal in 🇩🇪.  - 📨 **Discord Integration** Ankama related Twitter, RSS and Almanax feeds to post to Discord servers with advanced features like filters or mentions. Use the endpoints as a dev or the official [Web Client](https://discord.dofusdude.com) as a user.  - 🩸 **Dofus 2 Beta** from stable to bleeding edge by replacing /dofus2 with /dofus2beta.  - 🗣️ **Multilingual** supporting _en_, _fr_, _es_, _pt_ including the dropped languages from the Dofus website _de_ and _it_.  - 🧠 **Search by Relevance** allowing typos in name and description, handled by language specific text analysis and indexing by the powerful [Meilisearch](https://www.meilisearch.com) written in Rust.  - 🕵️ **Complete** actual data from the game including items invisible to the encyclopedia like quest items.  - 🖼️ **HD Images** rendering vector graphics into PNGs up to 800x800 px in the background.   ## Current state - Weapons ✅ - Equipment ✅ - Sets ✅ - Resources ✅ - Consumables ✅ - Pets ✅ - Mounts ✅ - Cosmetics/Ceremonial Items ✅ - Harnesses ✅ - Quest Items ✅ - Almanax ✅ - Monsters ❌ - Spells ❌  ... and much more on the Roadmap on my Discord.   ## Deploy now. Use forever. Everything you see here on this site, you can use now and forever. Updates could introduce new fields, new paths or parameter but never break backwards compatibility, so no field or parameter will be deleted.  There is one exception! **The API will _always_ choose being up-to-date over everything else**. So if Ankama decides to drop languages from the game like they did with their website, the API will loose support for them, too.  ## Only the beginning... 🤯 I want this project to be useful and not just add plain GET-categories no one needs.  There is a long list of features I want to add (see the Roadmap on my [Discord](https://discord.gg/3EtHskZD8h)). But they are all focussed on you, the developers. So please let me know what you need. I will change the list based on demand.  # Get started! 🥳 Scroll down and try it for yourself!  Or see how these other awesome projects use it: - [KaellyBot](https://github.com/Kaysoro/KaellyBot) by Kaysoro - [Dofus Craftlist](https://dofuscraftlist-dev.netlify.app) by Lystina - [AlmanaxApp](https://almanaxapp.netlify.app) by Lystina - [DofuStuffSimulator](https://dofusstuffsimulator.netlify.app/)  I highly recommend using the SDKs for quick results. I use them myself for parts of the API.  ## Thank you! I highly welcome everyone on my [Discord](https://discord.gg/3EtHskZD8h) to just talk about projects and use cases or give feedback of any kind.  The servers have a fixed monthly cost to provide very fast responses. If you want to help me keeping them running or simply  donate, consider becoming a [GitHub Sponsor](https://github.com/sponsors/dofusdude). 
 *
 * The version of the OpenAPI document: 0.7.2
 * Contact: stelzo@steado.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AlmanaxWebhook from '../model/AlmanaxWebhook';
import CreateAlmanaxWebhook from '../model/CreateAlmanaxWebhook';
import CreateRSSWebhook from '../model/CreateRSSWebhook';
import CreateTwitterWebhook from '../model/CreateTwitterWebhook';
import GetMetaWebhooksTwitter200Response from '../model/GetMetaWebhooksTwitter200Response';
import PutAlmanaxWebhook from '../model/PutAlmanaxWebhook';
import PutRSSWebhook from '../model/PutRSSWebhook';
import PutTwitterWebhook from '../model/PutTwitterWebhook';
import RssWebhook from '../model/RssWebhook';
import TwitterWebhook from '../model/TwitterWebhook';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 0.7.2
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteWebhooksAlmanaxId operation.
     * @callback module:api/WebhooksApi~deleteWebhooksAlmanaxIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister Almanax Hook
     * Delete a Webhook from the service.
     * @param {String} id 
     * @param {module:api/WebhooksApi~deleteWebhooksAlmanaxIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWebhooksAlmanaxId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWebhooksAlmanaxId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/webhooks/almanax/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhooksRssId operation.
     * @callback module:api/WebhooksApi~deleteWebhooksRssIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister RSS Hook
     * Delete a Webhook from the service.
     * @param {String} id 
     * @param {module:api/WebhooksApi~deleteWebhooksRssIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWebhooksRssId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWebhooksRssId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/webhooks/rss/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhooksTwitterId operation.
     * @callback module:api/WebhooksApi~deleteWebhooksTwitterIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister Twitter Hook
     * Delete a Webhook from the service.
     * @param {String} id 
     * @param {module:api/WebhooksApi~deleteWebhooksTwitterIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWebhooksTwitterId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWebhooksTwitterId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/webhooks/twitter/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMetaWebhooksAlmanax operation.
     * @callback module:api/WebhooksApi~getMetaWebhooksAlmanaxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMetaWebhooksTwitter200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Almanax Hook Metainfo
     * Get a list of all available subscriptions. 
     * @param {module:api/WebhooksApi~getMetaWebhooksAlmanaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMetaWebhooksTwitter200Response}
     */
    getMetaWebhooksAlmanax(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = GetMetaWebhooksTwitter200Response;
      return this.apiClient.callApi(
        '/meta/webhooks/almanax', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMetaWebhooksRss operation.
     * @callback module:api/WebhooksApi~getMetaWebhooksRssCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMetaWebhooksTwitter200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get RSS Hook Metainfo
     * Get a list of all available subscriptions. 
     * @param {module:api/WebhooksApi~getMetaWebhooksRssCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMetaWebhooksTwitter200Response}
     */
    getMetaWebhooksRss(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = GetMetaWebhooksTwitter200Response;
      return this.apiClient.callApi(
        '/meta/webhooks/rss', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMetaWebhooksTwitter operation.
     * @callback module:api/WebhooksApi~getMetaWebhooksTwitterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMetaWebhooksTwitter200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Twitter Hook Metainfo
     * Get a list of all available subscriptions. 
     * @param {module:api/WebhooksApi~getMetaWebhooksTwitterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMetaWebhooksTwitter200Response}
     */
    getMetaWebhooksTwitter(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = GetMetaWebhooksTwitter200Response;
      return this.apiClient.callApi(
        '/meta/webhooks/twitter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhooksAlmanaxId operation.
     * @callback module:api/WebhooksApi~getWebhooksAlmanaxIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AlmanaxWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Almanax Hook
     * Retrieve details about an existing Almanax Webhook with a given uuid.
     * @param {String} id 
     * @param {module:api/WebhooksApi~getWebhooksAlmanaxIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AlmanaxWebhook}
     */
    getWebhooksAlmanaxId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWebhooksAlmanaxId");
      }

      let pathParams = {
        'id': id
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
      let returnType = AlmanaxWebhook;
      return this.apiClient.callApi(
        '/webhooks/almanax/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhooksRssId operation.
     * @callback module:api/WebhooksApi~getWebhooksRssIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RssWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get RSS Hook
     * Retrieve details about an existing RSS Webhook with a given uuid.
     * @param {String} id 
     * @param {module:api/WebhooksApi~getWebhooksRssIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RssWebhook}
     */
    getWebhooksRssId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWebhooksRssId");
      }

      let pathParams = {
        'id': id
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
      let returnType = RssWebhook;
      return this.apiClient.callApi(
        '/webhooks/rss/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhooksTwitterId operation.
     * @callback module:api/WebhooksApi~getWebhooksTwitterIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TwitterWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Twitter Hook
     * Retrieve details about an existing Twitter Webhook with a given uuid.
     * @param {String} id 
     * @param {module:api/WebhooksApi~getWebhooksTwitterIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TwitterWebhook}
     */
    getWebhooksTwitterId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWebhooksTwitterId");
      }

      let pathParams = {
        'id': id
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
      let returnType = TwitterWebhook;
      return this.apiClient.callApi(
        '/webhooks/twitter/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postWebhooksAlmanax operation.
     * @callback module:api/WebhooksApi~postWebhooksAlmanaxCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register Almanax Hook
     * Register a new Webhook to post Almanax updates.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAlmanaxWebhook} [createAlmanaxWebhook] 
     * @param {module:api/WebhooksApi~postWebhooksAlmanaxCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postWebhooksAlmanax(opts, callback) {
      opts = opts || {};
      let postBody = opts['createAlmanaxWebhook'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/webhooks/almanax', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postWebhooksRss operation.
     * @callback module:api/WebhooksApi~postWebhooksRssCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register RSS Hook
     * Register a new Webhook to post RSS news as soon as they are posted.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateRSSWebhook} [createRSSWebhook] 
     * @param {module:api/WebhooksApi~postWebhooksRssCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postWebhooksRss(opts, callback) {
      opts = opts || {};
      let postBody = opts['createRSSWebhook'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/webhooks/rss', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postWebhooksTwitter operation.
     * @callback module:api/WebhooksApi~postWebhooksTwitterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register Twitter Hook
     * Register a new Webhook to post Twitter updates as soon as they are posted.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTwitterWebhook} [createTwitterWebhook] 
     * @param {module:api/WebhooksApi~postWebhooksTwitterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postWebhooksTwitter(opts, callback) {
      opts = opts || {};
      let postBody = opts['createTwitterWebhook'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/webhooks/twitter', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putWebhooksAlmanaxId operation.
     * @callback module:api/WebhooksApi~putWebhooksAlmanaxIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AlmanaxWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Almanax Hook
     * Update the details of an Almanax Webhook. All fields are optional and arrays will be overwritten, so always put all selected items of an array.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PutAlmanaxWebhook} [putAlmanaxWebhook] 
     * @param {module:api/WebhooksApi~putWebhooksAlmanaxIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AlmanaxWebhook}
     */
    putWebhooksAlmanaxId(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['putAlmanaxWebhook'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putWebhooksAlmanaxId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AlmanaxWebhook;
      return this.apiClient.callApi(
        '/webhooks/almanax/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putWebhooksRssId operation.
     * @callback module:api/WebhooksApi~putWebhooksRssIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RssWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update RSS Hook
     * Update the details of a RSS Webhook. All fields are optional and arrays will be overwritten, so always put all selected items of an array.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PutRSSWebhook} [putRSSWebhook] 
     * @param {module:api/WebhooksApi~putWebhooksRssIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RssWebhook}
     */
    putWebhooksRssId(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['putRSSWebhook'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putWebhooksRssId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RssWebhook;
      return this.apiClient.callApi(
        '/webhooks/rss/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putWebhooksTwitterId operation.
     * @callback module:api/WebhooksApi~putWebhooksTwitterIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TwitterWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Twitter Hook
     * Update the details of a Twitter Webhook. All fields are optional and arrays will be overwritten, so always put all selected items of an array.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PutTwitterWebhook} [putTwitterWebhook] 
     * @param {module:api/WebhooksApi~putWebhooksTwitterIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TwitterWebhook}
     */
    putWebhooksTwitterId(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['putTwitterWebhook'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putWebhooksTwitterId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TwitterWebhook;
      return this.apiClient.callApi(
        '/webhooks/twitter/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
