# dofusdude.ConsumablesApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllItemsConsumablesList**](ConsumablesApi.md#getAllItemsConsumablesList) | **GET** /{game}/v1/{language}/items/consumables/all | List All Consumables
[**getItemsConsumablesList**](ConsumablesApi.md#getItemsConsumablesList) | **GET** /{game}/v1/{language}/items/consumables | List Consumables
[**getItemsConsumablesSearch**](ConsumablesApi.md#getItemsConsumablesSearch) | **GET** /{game}/v1/{language}/items/consumables/search | Search Consumables
[**getItemsConsumablesSingle**](ConsumablesApi.md#getItemsConsumablesSingle) | **GET** /{game}/v1/{language}/items/consumables/{ankama_id} | Single Consumables



## getAllItemsConsumablesList

> ListItems getAllItemsConsumablesList(language, game, opts)

List All Consumables

Retrieve all consumable items with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]&#x3D;-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header &#39;Accept-Encoding: gzip&#39; for saving bandwidth. You will need to uncompress it on your end. Example with cURL: &#x60;&#x60;&#x60; curl -sH &#39;Accept-Encoding: gzip&#39; &lt;api-endpoint&gt; | gunzip - &#x60;&#x60;&#x60;

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ConsumablesApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3beta"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let opts = {
  'sortLevel': "asc", // String | sort the resulting list by level, default unsorted
  'filterMinLevel': 150, // Number | only results which level is equal or above this value
  'filterMaxLevel': 180, // Number | only results which level is equal or below this value
  'acceptEncoding': "acceptEncoding_example", // String | optional compression for saving bandwidth
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getAllItemsConsumablesList(language, game, opts, (error, data, response) => {
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
 **language** | **String**| a valid language code | 
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 
 **sortLevel** | **String**| sort the resulting list by level, default unsorted | [optional] 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 
 **acceptEncoding** | **String**| optional compression for saving bandwidth | [optional] 
 **filterTypeNameId** | [**[String]**](String.md)| multi-filter results with the english type name. Add with \&quot;wood\&quot; or \&quot;+wood\&quot; and exclude with \&quot;-wood\&quot;. | [optional] 

### Return type

[**ListItems**](ListItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsConsumablesList

> ListItems getItemsConsumablesList(language, game, opts)

List Consumables

Retrieve a list of consumable items.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ConsumablesApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3beta"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let opts = {
  'sortLevel': "asc", // String | sort the resulting list by level, default unsorted
  'filterMinLevel': 150, // Number | only results which level is equal or above this value
  'filterMaxLevel': 180, // Number | only results which level is equal or below this value
  'pageSize': 2, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 1, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsItem': ["null"], // [String] | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getItemsConsumablesList(language, game, opts, (error, data, response) => {
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
 **language** | **String**| a valid language code | 
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 
 **sortLevel** | **String**| sort the resulting list by level, default unsorted | [optional] 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 
 **pageSize** | **Number**| size of the results from the list. -1 disables pagination and gets all in one response. | [optional] 
 **pageNumber** | **Number**| page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16. | [optional] 
 **fieldsItem** | [**[String]**](String.md)| adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed. | [optional] 
 **filterTypeNameId** | [**[String]**](String.md)| multi-filter results with the english type name. Add with \&quot;wood\&quot; or \&quot;+wood\&quot; and exclude with \&quot;-wood\&quot;. | [optional] 

### Return type

[**ListItems**](ListItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsConsumablesSearch

> [ListItem] getItemsConsumablesSearch(language, game, query, opts)

Search Consumables

Search in all names and descriptions of consumable items with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ConsumablesApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3beta"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let query = "Wholewrite"; // String | case sensitive search query
let opts = {
  'filterMinLevel': 1, // Number | only results which level is equal or above this value
  'filterMaxLevel': 200, // Number | only results which level is equal or below this value
  'limit': 8, // Number | maximum number of returned results
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getItemsConsumablesSearch(language, game, query, opts, (error, data, response) => {
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
 **language** | **String**| a valid language code | 
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 
 **query** | **String**| case sensitive search query | 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 
 **limit** | **Number**| maximum number of returned results | [optional] [default to 8]
 **filterTypeNameId** | [**[String]**](String.md)| multi-filter results with the english type name. Add with \&quot;wood\&quot; or \&quot;+wood\&quot; and exclude with \&quot;-wood\&quot;. | [optional] 

### Return type

[**[ListItem]**](ListItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsConsumablesSingle

> Resource getItemsConsumablesSingle(language, ankamaId, game)

Single Consumables

Retrieve a specific consumable item with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ConsumablesApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 17206; // Number | identifier
let game = "dofus3beta"; // String | game main 'dofus3' or beta channel 'dofus3beta'
apiInstance.getItemsConsumablesSingle(language, ankamaId, game, (error, data, response) => {
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
 **language** | **String**| a valid language code | 
 **ankamaId** | **Number**| identifier | 
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 

### Return type

[**Resource**](Resource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

