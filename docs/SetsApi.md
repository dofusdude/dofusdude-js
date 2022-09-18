# dofusdude.SetsApi

All URIs are relative to *https://api.dofusdu.de/dofus2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSetsList**](SetsApi.md#getSetsList) | **GET** /{language}/sets | List Sets
[**getSetsSearch**](SetsApi.md#getSetsSearch) | **GET** /{language}/sets/search | Search Sets
[**getSetsSingle**](SetsApi.md#getSetsSingle) | **GET** /{language}/sets/{ankama_id} | Single Sets



## getSetsList

> SetsListPaged getSetsList(language, opts)

List Sets

Retrieve a list of sets.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.SetsApi();
let language = "language_example"; // String | a valid language code
let opts = {
  'sortLevel': "sortLevel_example", // String | sort the resulting list by level, default unsorted
  'filterMinHighestEquipmentLevel': 56, // Number | only results where the equipment with the highest level is above or equal to this value
  'filterMaxHighestEquipmentLevel': 56, // Number | only results where the equipment with the highest level is below or equal to this value
  'pageSize': 56, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 56 // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
};
apiInstance.getSetsList(language, opts, (error, data, response) => {
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
 **filterMinHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is above or equal to this value | [optional] 
 **filterMaxHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is below or equal to this value | [optional] 
 **pageSize** | **Number**| size of the results from the list. -1 disables pagination and gets all in one response. | [optional] 
 **pageNumber** | **Number**| page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16. | [optional] 

### Return type

[**SetsListPaged**](SetsListPaged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSetsSearch

> [SetListEntry] getSetsSearch(language, query, opts)

Search Sets

Search in all names and descriptions of sets with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.SetsApi();
let language = "language_example"; // String | a valid language code
let query = Des; // String | case sensitive search query
let opts = {
  'filterMinHighestEquipmentLevel': 56, // Number | only results where the equipment with the highest level is above or equal to this value
  'filterMaxHighestEquipmentLevel': 56 // Number | only results where the equipment with the highest level is below or equal to this value
};
apiInstance.getSetsSearch(language, query, opts, (error, data, response) => {
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
 **filterMinHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is above or equal to this value | [optional] 
 **filterMaxHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is below or equal to this value | [optional] 

### Return type

[**[SetListEntry]**](SetListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSetsSingle

> EquipmentSet getSetsSingle(language, ankamaId)

Single Sets

Retrieve a specific set with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.SetsApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 499; // Number | identifier
apiInstance.getSetsSingle(language, ankamaId, (error, data, response) => {
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

[**EquipmentSet**](EquipmentSet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

