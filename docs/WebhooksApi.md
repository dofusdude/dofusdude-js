# dofusdude.WebhooksApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWebhooksAlmanaxId**](WebhooksApi.md#deleteWebhooksAlmanaxId) | **DELETE** /webhooks/almanax/{id} | Unregister Almanax Hook
[**deleteWebhooksRssId**](WebhooksApi.md#deleteWebhooksRssId) | **DELETE** /webhooks/rss/{id} | Unregister RSS Hook
[**deleteWebhooksTwitterId**](WebhooksApi.md#deleteWebhooksTwitterId) | **DELETE** /webhooks/twitter/{id} | Unregister Twitter Hook
[**getMetaWebhooksAlmanax**](WebhooksApi.md#getMetaWebhooksAlmanax) | **GET** /meta/webhooks/almanax | Get Almanax Hook Metainfo
[**getMetaWebhooksRss**](WebhooksApi.md#getMetaWebhooksRss) | **GET** /meta/webhooks/rss | Get RSS Hook Metainfo
[**getMetaWebhooksTwitter**](WebhooksApi.md#getMetaWebhooksTwitter) | **GET** /meta/webhooks/twitter | Get Twitter Hook Metainfo
[**getWebhooksAlmanaxId**](WebhooksApi.md#getWebhooksAlmanaxId) | **GET** /webhooks/almanax/{id} | Get Almanax Hook
[**getWebhooksRssId**](WebhooksApi.md#getWebhooksRssId) | **GET** /webhooks/rss/{id} | Get RSS Hook
[**getWebhooksTwitterId**](WebhooksApi.md#getWebhooksTwitterId) | **GET** /webhooks/twitter/{id} | Get Twitter Hook
[**postWebhooksAlmanax**](WebhooksApi.md#postWebhooksAlmanax) | **POST** /webhooks/almanax | Register Almanax Hook
[**postWebhooksRss**](WebhooksApi.md#postWebhooksRss) | **POST** /webhooks/rss | Register RSS Hook
[**postWebhooksTwitter**](WebhooksApi.md#postWebhooksTwitter) | **POST** /webhooks/twitter | Register Twitter Hook
[**putWebhooksAlmanaxId**](WebhooksApi.md#putWebhooksAlmanaxId) | **PUT** /webhooks/almanax/{id} | Update Almanax Hook
[**putWebhooksRssId**](WebhooksApi.md#putWebhooksRssId) | **PUT** /webhooks/rss/{id} | Update RSS Hook
[**putWebhooksTwitterId**](WebhooksApi.md#putWebhooksTwitterId) | **PUT** /webhooks/twitter/{id} | Update Twitter Hook



## deleteWebhooksAlmanaxId

> deleteWebhooksAlmanaxId(id)

Unregister Almanax Hook

Delete a Webhook from the service.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
apiInstance.deleteWebhooksAlmanaxId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteWebhooksRssId

> deleteWebhooksRssId(id)

Unregister RSS Hook

Delete a Webhook from the service.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
apiInstance.deleteWebhooksRssId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteWebhooksTwitterId

> deleteWebhooksTwitterId(id)

Unregister Twitter Hook

Delete a Webhook from the service.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
apiInstance.deleteWebhooksTwitterId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getMetaWebhooksAlmanax

> GetMetaWebhooksTwitter200Response getMetaWebhooksAlmanax()

Get Almanax Hook Metainfo

Get a list of all available subscriptions. 

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
apiInstance.getMetaWebhooksAlmanax((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetMetaWebhooksTwitter200Response**](GetMetaWebhooksTwitter200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetaWebhooksRss

> GetMetaWebhooksTwitter200Response getMetaWebhooksRss()

Get RSS Hook Metainfo

Get a list of all available subscriptions. 

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
apiInstance.getMetaWebhooksRss((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetMetaWebhooksTwitter200Response**](GetMetaWebhooksTwitter200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetaWebhooksTwitter

> GetMetaWebhooksTwitter200Response getMetaWebhooksTwitter()

Get Twitter Hook Metainfo

Get a list of all available subscriptions. 

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
apiInstance.getMetaWebhooksTwitter((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetMetaWebhooksTwitter200Response**](GetMetaWebhooksTwitter200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooksAlmanaxId

> AlmanaxWebhook getWebhooksAlmanaxId(id)

Get Almanax Hook

Retrieve details about an existing Almanax Webhook with a given uuid.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
apiInstance.getWebhooksAlmanaxId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 

### Return type

[**AlmanaxWebhook**](AlmanaxWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooksRssId

> RssWebhook getWebhooksRssId(id)

Get RSS Hook

Retrieve details about an existing RSS Webhook with a given uuid.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
apiInstance.getWebhooksRssId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 

### Return type

[**RssWebhook**](RssWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooksTwitterId

> TwitterWebhook getWebhooksTwitterId(id)

Get Twitter Hook

Retrieve details about an existing Twitter Webhook with a given uuid.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
apiInstance.getWebhooksTwitterId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 

### Return type

[**TwitterWebhook**](TwitterWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postWebhooksAlmanax

> postWebhooksAlmanax(opts)

Register Almanax Hook

Register a new Webhook to post Almanax updates.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let opts = {
  'createAlmanaxWebhook': {"bonus_whitelist":null,"bonus_blacklist":null,"subscriptions":["dofus3_fr"],"format":"discord","callback":"https://discord.com/api/webhooks/XYZ","daily_settings":{"timezone":"Europe/Paris","midnight_offset":0},"iso_date":false,"mentions":{"kolossium-experience":[{"discord_id":1234,"is_role":true,"ping_days_before":null}]},"intervals":["daily"],"weekly_weekday":"sunday"} // CreateAlmanaxWebhook | 
};
apiInstance.postWebhooksAlmanax(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAlmanaxWebhook** | [**CreateAlmanaxWebhook**](CreateAlmanaxWebhook.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postWebhooksRss

> postWebhooksRss(opts)

Register RSS Hook

Register a new Webhook to post RSS news as soon as they are posted.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let opts = {
  'createRSSWebhook': {"whitelist":["retro"],"blacklist":null,"subscriptions":["dofus3-en-official-news"],"format":"discord","preview_length":2000,"callback":"https://discord.com/api/webhooks/XYZ"} // CreateRSSWebhook | 
};
apiInstance.postWebhooksRss(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRSSWebhook** | [**CreateRSSWebhook**](CreateRSSWebhook.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postWebhooksTwitter

> postWebhooksTwitter(opts)

Register Twitter Hook

Register a new Webhook to post Twitter updates as soon as they are posted.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let opts = {
  'createTwitterWebhook': {"whitelist":null,"blacklist":null,"subscriptions":["DOFUSfr"],"format":"discord","preview_length":280,"callback":"https://discord.com/api/webhooks/XYZ"} // CreateTwitterWebhook | 
};
apiInstance.postWebhooksTwitter(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTwitterWebhook** | [**CreateTwitterWebhook**](CreateTwitterWebhook.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putWebhooksAlmanaxId

> AlmanaxWebhook putWebhooksAlmanaxId(id, opts)

Update Almanax Hook

Update the details of an Almanax Webhook. All fields are optional and arrays will be overwritten, so always put all selected items of an array.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
let opts = {
  'putAlmanaxWebhook': {"bonus_whitelist":[],"bonus_blacklist":null,"subscriptions":null,"daily_settings":{"timezone":"Europe/Paris","midnight_offset":0},"iso_date":false,"mentions":{"kolossium-experience":[{"discord_id":1234,"is_role":true,"ping_days_before":null}]},"intervals":["daily"],"weekly_weekday":"sunday"} // PutAlmanaxWebhook | 
};
apiInstance.putWebhooksAlmanaxId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 
 **putAlmanaxWebhook** | [**PutAlmanaxWebhook**](PutAlmanaxWebhook.md)|  | [optional] 

### Return type

[**AlmanaxWebhook**](AlmanaxWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putWebhooksRssId

> RssWebhook putWebhooksRssId(id, opts)

Update RSS Hook

Update the details of a RSS Webhook. All fields are optional and arrays will be overwritten, so always put all selected items of an array.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
let opts = {
  'putRSSWebhook': {"whitelist":null,"blacklist":null,"subscriptions":null,"preview_length":60} // PutRSSWebhook | 
};
apiInstance.putWebhooksRssId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 
 **putRSSWebhook** | [**PutRSSWebhook**](PutRSSWebhook.md)|  | [optional] 

### Return type

[**RssWebhook**](RssWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putWebhooksTwitterId

> TwitterWebhook putWebhooksTwitterId(id, opts)

Update Twitter Hook

Update the details of a Twitter Webhook. All fields are optional and arrays will be overwritten, so always put all selected items of an array.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.WebhooksApi();
let id = "id_example"; // String | the ID returned from the API when creating the webhook
let opts = {
  'putTwitterWebhook': {"whitelist":["retro"],"blacklist":null,"subscriptions":["dofus3-en-official-changelog"],"preview_length":null} // PutTwitterWebhook | 
};
apiInstance.putWebhooksTwitterId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID returned from the API when creating the webhook | 
 **putTwitterWebhook** | [**PutTwitterWebhook**](PutTwitterWebhook.md)|  | [optional] 

### Return type

[**TwitterWebhook**](TwitterWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

