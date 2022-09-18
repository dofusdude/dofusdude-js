# DofusdudeApi.ResourcesApi

All URIs are relative to *https://api.dofusdu.de/dofus2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemsResourceSearch**](ResourcesApi.md#getItemsResourceSearch) | **GET** /{language}/items/resources/search | Search Resources
[**getItemsResourcesList**](ResourcesApi.md#getItemsResourcesList) | **GET** /{language}/items/resources | List Resources
[**getItemsResourcesSingle**](ResourcesApi.md#getItemsResourcesSingle) | **GET** /{language}/items/resources/{ankama_id} | Single Resources



## getItemsResourceSearch

> [ItemListEntry] getItemsResourceSearch(language, query, opts)

Search Resources

Search in all names and descriptions of resource items with a query.

### Example

```javascript
import DofusdudeApi from 'dofusdude_api';

let apiInstance = new DofusdudeApi.ResourcesApi();
let language = "language_example"; // String | a valid language code
let query = farak; // String | case sensitive search query
let opts = {
  'filterTypeName': "filterTypeName_example", // String | only results with the translated type name
  'filterMinLevel': 56, // Number | only results which level is equal or above this value
  'filterMaxLevel': 56 // Number | only results which level is equal or below this value
};
apiInstance.getItemsResourceSearch(language, query, opts, (error, data, response) => {
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
 **query** | **String**| case sensitive search query | 
 **filterTypeName** | **String**| only results with the translated type name | [optional] 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 

### Return type

[**[ItemListEntry]**](ItemListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsResourcesList

> ItemsListPaged getItemsResourcesList(language, opts)

List Resources

Retrieve a list of resource items.

### Example

```javascript
import DofusdudeApi from 'dofusdude_api';

let apiInstance = new DofusdudeApi.ResourcesApi();
let language = "language_example"; // String | a valid language code
let opts = {
  'sortLevel': "sortLevel_example", // String | sort the resulting list by level, default unsorted
  'filterTypeName': "filterTypeName_example", // String | only results with the translated type name
  'filterMinLevel': 56, // Number | only results which level is equal or above this value
  'filterMaxLevel': 56, // Number | only results which level is equal or below this value
  'pageSize': 56, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 56, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsItem': recipe // String | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
};
apiInstance.getItemsResourcesList(language, opts, (error, data, response) => {
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
 **sortLevel** | **String**| sort the resulting list by level, default unsorted | [optional] 
 **filterTypeName** | **String**| only results with the translated type name | [optional] 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 
 **pageSize** | **Number**| size of the results from the list. -1 disables pagination and gets all in one response. | [optional] 
 **pageNumber** | **Number**| page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16. | [optional] 
 **fieldsItem** | **String**| adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed. | [optional] 

### Return type

[**ItemsListPaged**](ItemsListPaged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsResourcesSingle

> Resource getItemsResourcesSingle(language, ankamaId)

Single Resources

Retrieve a specific resource item with id.

### Example

```javascript
import DofusdudeApi from 'dofusdude_api';

let apiInstance = new DofusdudeApi.ResourcesApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 7295; // Number | identifier
apiInstance.getItemsResourcesSingle(language, ankamaId, (error, data, response) => {
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

### Return type

[**Resource**](Resource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

