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
let language = "language_example"; // String | a valid language code
let game = dofus2; // String | 
let query = hat; // String | case sensitive search query
let opts = {
  'filterTypeName': "filterTypeName_example", // String | only results with the translated type name across all item_subtypes
  'filterMinLevel': 56, // Number | only results which level is equal or above this value
  'filterMaxLevel': 56 // Number | only results which level is equal or below this value
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

### Return type

[**[ItemsListEntryTyped]**](ItemsListEntryTyped.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

