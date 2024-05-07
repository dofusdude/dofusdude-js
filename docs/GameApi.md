# dofusdude.GameApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGameSearch**](GameApi.md#getGameSearch) | **GET** /{game}/{language}/search | Game Search
[**getItemsAllSearch**](GameApi.md#getItemsAllSearch) | **GET** /{game}/{language}/items/search | Search All Items



## getGameSearch

> [GetGameSearch200ResponseInner] getGameSearch(language, game, query, opts)

Game Search

Search in all names and descriptions of all supported types in the game. For the list of supported types see the endpoint /dofus2/meta/search/types.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameApi();
let language = "language_example"; // String | a valid language code
let game = "dofus2"; // String | 
let query = "paztek"; // String | search query
let opts = {
  'filterType': ["null"], // [String] | only results with all specific type
  'limit': 8, // Number | maximum number of returned results
  'fieldsItem': ["null"] // [String] | adds fields from the item search to the list entries if the hit is a item. Multiple comma separated values allowed.
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
 **game** | **String**|  | 
 **query** | **String**| search query | 
 **filterType** | [**[String]**](String.md)| only results with all specific type | [optional] 
 **limit** | **Number**| maximum number of returned results | [optional] [default to 8]
 **fieldsItem** | [**[String]**](String.md)| adds fields from the item search to the list entries if the hit is a item. Multiple comma separated values allowed. | [optional] 

### Return type

[**[GetGameSearch200ResponseInner]**](GetGameSearch200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsAllSearch

> [ItemsListEntryTyped] getItemsAllSearch(language, game, query, opts)

Search All Items

Search in all names and descriptions of Dofus items (including all subtypes) with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameApi();
let language = "fr"; // String | a valid language code
let game = "dofus2"; // String | 
let query = "atcham"; // String | case sensitive search query
let opts = {
  'filterTypeName': "Bottes", // String | only results with the translated type name across all item_subtypes
  'filterMinLevel': 190, // Number | only results which level is equal or above this value
  'filterMaxLevel': 200, // Number | only results which level is equal or below this value
  'limit': 8 // Number | maximum number of returned results
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
 **game** | **String**|  | 
 **query** | **String**| case sensitive search query | 
 **filterTypeName** | **String**| only results with the translated type name across all item_subtypes | [optional] 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 
 **limit** | **Number**| maximum number of returned results | [optional] [default to 8]

### Return type

[**[ItemsListEntryTyped]**](ItemsListEntryTyped.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

