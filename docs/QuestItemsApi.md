# dofusdude.QuestItemsApi

All URIs are relative to *https://api.dofusdu.de/dofus2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemQuestSingle**](QuestItemsApi.md#getItemQuestSingle) | **GET** /{language}/items/quest/{ankama_id} | Single Quest Items
[**getItemsQuestList**](QuestItemsApi.md#getItemsQuestList) | **GET** /{language}/items/quest | List Quest Items
[**getItemsQuestSearch**](QuestItemsApi.md#getItemsQuestSearch) | **GET** /{language}/items/quest/search | Search Quest Items



## getItemQuestSingle

> Resource getItemQuestSingle(language, ankamaId)

Single Quest Items

Retrieve a specific quest item with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.QuestItemsApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 25256; // Number | identifier
apiInstance.getItemQuestSingle(language, ankamaId, (error, data, response) => {
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


## getItemsQuestList

> ItemsListPaged getItemsQuestList(language, opts)

List Quest Items

Retrieve a list of quest items.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.QuestItemsApi();
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
apiInstance.getItemsQuestList(language, opts, (error, data, response) => {
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


## getItemsQuestSearch

> [ItemListEntry] getItemsQuestSearch(language, query, opts)

Search Quest Items

Search in all names and descriptions of quest items with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.QuestItemsApi();
let language = "language_example"; // String | a valid language code
let query = sufo; // String | case sensitive search query
let opts = {
  'filterTypeName': "filterTypeName_example", // String | only results with the translated type name
  'filterMinLevel': 56, // Number | only results which level is equal or above this value
  'filterMaxLevel': 56 // Number | only results which level is equal or below this value
};
apiInstance.getItemsQuestSearch(language, query, opts, (error, data, response) => {
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

