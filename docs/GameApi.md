# dofusdude.GameApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGameSearch**](GameApi.md#getGameSearch) | **GET** /{game}/v1/{language}/search | Game Search
[**getItemsAllSearch**](GameApi.md#getItemsAllSearch) | **GET** /{game}/v1/{language}/items/search | Search All Items



## getGameSearch

> [GameSearch] getGameSearch(language, game, query, opts)

Game Search

Search in all names and descriptions of all supported types in the game. For the list of supported types see the endpoint /dofus3/meta/search/types.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let query = "paztek"; // String | search query
let opts = {
  'filterSearchIndex': ["null"], // [String] | only results with all specific type
  'limit': 8, // Number | maximum number of returned results
  'fieldsItem': ["null"], // [String] | adds fields from the item search to the list entries if the hit is a item. Multiple comma separated values allowed.
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english item type name, including \"mount\" and \"set\" from filter[type]. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getGameSearch(language, game, query, opts, (error, data, response) => {
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
 **query** | **String**| search query | 
 **filterSearchIndex** | [**[String]**](String.md)| only results with all specific type | [optional] 
 **limit** | **Number**| maximum number of returned results | [optional] [default to 8]
 **fieldsItem** | [**[String]**](String.md)| adds fields from the item search to the list entries if the hit is a item. Multiple comma separated values allowed. | [optional] 
 **filterTypeNameId** | [**[String]**](String.md)| multi-filter results with the english item type name, including \&quot;mount\&quot; and \&quot;set\&quot; from filter[type]. Add with \&quot;wood\&quot; or \&quot;+wood\&quot; and exclude with \&quot;-wood\&quot;. | [optional] 

### Return type

[**[GameSearch]**](GameSearch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsAllSearch

> [ListItemGeneral] getItemsAllSearch(language, game, query, opts)

Search All Items

Search in all names and descriptions of Dofus items (including all subtypes) with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameApi();
let language = "fr"; // String | a valid language code
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let query = "atcham"; // String | case sensitive search query
let opts = {
  'filterMinLevel': 190, // Number | only results which level is equal or above this value
  'filterMaxLevel': 200, // Number | only results which level is equal or below this value
  'limit': 8, // Number | maximum number of returned results
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getItemsAllSearch(language, game, query, opts, (error, data, response) => {
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

[**[ListItemGeneral]**](ListItemGeneral.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

