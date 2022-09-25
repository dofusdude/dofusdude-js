# dofusdude.ConsumablesApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemsConsumablesList**](ConsumablesApi.md#getItemsConsumablesList) | **GET** /{game}/{language}/items/consumables | List Consumables
[**getItemsConsumablesSearch**](ConsumablesApi.md#getItemsConsumablesSearch) | **GET** /{game}/{language}/items/consumables/search | Search Consumables
[**getItemsConsumablesSingle**](ConsumablesApi.md#getItemsConsumablesSingle) | **GET** /{game}/{language}/items/consumables/{ankama_id} | Single Consumables



## getItemsConsumablesList

> ItemsListPaged getItemsConsumablesList(language, game, opts)

List Consumables

Retrieve a list of consumable items.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ConsumablesApi();
let language = "language_example"; // String | a valid language code
let game = dofus2; // String | 
let opts = {
  'sortLevel': asc, // String | sort the resulting list by level, default unsorted
  'filterTypeName': Chest, // String | only results with the translated type name
  'filterMinLevel': 150, // Number | only results which level is equal or above this value
  'filterMaxLevel': 180, // Number | only results which level is equal or below this value
  'pageSize': 2, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 1, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsItem': recipe // String | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
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
 **game** | **String**|  | 
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


## getItemsConsumablesSearch

> [ItemListEntry] getItemsConsumablesSearch(language, game, query, opts)

Search Consumables

Search in all names and descriptions of consumable items with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ConsumablesApi();
let language = "language_example"; // String | a valid language code
let game = dofus2; // String | 
let query = Wholewrite; // String | case sensitive search query
let opts = {
  'filterTypeName': Bread, // String | only results with the translated type name
  'filterMinLevel': 1, // Number | only results which level is equal or above this value
  'filterMaxLevel': 200 // Number | only results which level is equal or below this value
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
 **game** | **String**|  | 
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
let game = dofus2; // String | 
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
 **game** | **String**|  | 

### Return type

[**Resource**](Resource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

