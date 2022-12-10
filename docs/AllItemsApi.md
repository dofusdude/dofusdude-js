# dofusdude.AllItemsApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemsAllSearch**](AllItemsApi.md#getItemsAllSearch) | **GET** /{game}/{language}/items/search | Search All Items



## getItemsAllSearch

> [ItemsListEntryTyped] getItemsAllSearch(language, game, query, opts)

Search All Items

Search in all names and descriptions of Dofus items (including all subtypes) with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.AllItemsApi();
let language = fr; // String | a valid language code
let game = dofus2; // String | 
let query = atcham; // String | case sensitive search query
let opts = {
  'filterTypeName': Bottes, // String | only results with the translated type name across all item_subtypes
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

