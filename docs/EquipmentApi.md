# dofusdude.EquipmentApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemsEquipmentList**](EquipmentApi.md#getItemsEquipmentList) | **GET** /{game}/{language}/items/equipment | List Equipment
[**getItemsEquipmentSearch**](EquipmentApi.md#getItemsEquipmentSearch) | **GET** /{game}/{language}/items/equipment/search | Search Equipment
[**getItemsEquipmentSingle**](EquipmentApi.md#getItemsEquipmentSingle) | **GET** /{game}/{language}/items/equipment/{ankama_id} | Single Equipment



## getItemsEquipmentList

> ItemsListPaged getItemsEquipmentList(language, game, opts)

List Equipment

Retrieve a list of equipment items.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.EquipmentApi();
let language = en; // String | a valid language code
let game = dofus2; // String | 
let opts = {
  'sortLevel': desc, // String | sort the resulting list by level, default unsorted
  'filterTypeName': Sword, // String | only results with the translated type name
  'filterMinLevel': 10, // Number | only results which level is equal or above this value
  'filterMaxLevel': 60, // Number | only results which level is equal or below this value
  'pageSize': 5, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 1, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsItem': recipe // String | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
};
apiInstance.getItemsEquipmentList(language, game, opts, (error, data, response) => {
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


## getItemsEquipmentSearch

> [ItemListEntry] getItemsEquipmentSearch(language, game, query, opts)

Search Equipment

Search in all names and descriptions of equipment items with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.EquipmentApi();
let language = "language_example"; // String | a valid language code
let game = dofus2; // String | 
let query = nidas; // String | case sensitive search query
let opts = {
  'filterTypeName': boots, // String | only results with the translated type name
  'filterMinLevel': 150, // Number | only results which level is equal or above this value
  'filterMaxLevel': 200 // Number | only results which level is equal or below this value
};
apiInstance.getItemsEquipmentSearch(language, game, query, opts, (error, data, response) => {
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


## getItemsEquipmentSingle

> Weapon getItemsEquipmentSingle(language, ankamaId, game)

Single Equipment

Retrieve a specific equipment item with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.EquipmentApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 26009; // Number | identifier
let game = dofus2; // String | 
apiInstance.getItemsEquipmentSingle(language, ankamaId, game, (error, data, response) => {
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

[**Weapon**](Weapon.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

