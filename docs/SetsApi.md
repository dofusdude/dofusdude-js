# dofusdude.SetsApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSetsList**](SetsApi.md#getAllSetsList) | **GET** /{game}/v1/{language}/sets/all | List All Sets
[**getSetsList**](SetsApi.md#getSetsList) | **GET** /{game}/v1/{language}/sets | List Sets
[**getSetsSearch**](SetsApi.md#getSetsSearch) | **GET** /{game}/v1/{language}/sets/search | Search Sets
[**getSetsSingle**](SetsApi.md#getSetsSingle) | **GET** /{game}/v1/{language}/sets/{ankama_id} | Single Sets



## getAllSetsList

> ListSets getAllSetsList(language, game, opts)

List All Sets

Retrieve all sets with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]&#x3D;-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header &#39;Accept-Encoding: gzip&#39; for saving bandwidth. You will need to uncompress it on your end. Example with cURL: &#x60;&#x60;&#x60; curl -sH &#39;Accept-Encoding: gzip&#39; &lt;api-endpoint&gt; | gunzip - &#x60;&#x60;&#x60;

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.SetsApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3"; // String | dofus3 | dofus3beta
let opts = {
  'sortLevel': "asc", // String | sort the resulting list by level, default unsorted
  'filterMinHighestEquipmentLevel': 190, // Number | only results where the equipment with the highest level is above or equal to this value
  'filterMaxHighestEquipmentLevel': 200, // Number | only results where the equipment with the highest level is below or equal to this value
  'acceptEncoding': "acceptEncoding_example", // String | optional compression for saving bandwidth
  'filterContainsCosmeticsOnly': true, // Boolean | filter sets based on if they only got cosmetic items in it. If true, the item ids are for the cosmetic endpoints instead of equipment.
  'filterContainsCosmetics': true // Boolean | filter sets based on if they got cosmetic items in it.
};
apiInstance.getAllSetsList(language, game, opts, (error, data, response) => {
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
 **game** | **String**| dofus3 | dofus3beta | 
 **sortLevel** | **String**| sort the resulting list by level, default unsorted | [optional] 
 **filterMinHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is above or equal to this value | [optional] 
 **filterMaxHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is below or equal to this value | [optional] 
 **acceptEncoding** | **String**| optional compression for saving bandwidth | [optional] 
 **filterContainsCosmeticsOnly** | **Boolean**| filter sets based on if they only got cosmetic items in it. If true, the item ids are for the cosmetic endpoints instead of equipment. | [optional] 
 **filterContainsCosmetics** | **Boolean**| filter sets based on if they got cosmetic items in it. | [optional] 

### Return type

[**ListSets**](ListSets.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSetsList

> ListSets getSetsList(language, game, opts)

List Sets

Retrieve a list of sets.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.SetsApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3"; // String | dofus3 | dofus3beta
let opts = {
  'sortLevel': "asc", // String | sort the resulting list by level, default unsorted
  'filterMinHighestEquipmentLevel': 190, // Number | only results where the equipment with the highest level is above or equal to this value
  'filterMaxHighestEquipmentLevel': 200, // Number | only results where the equipment with the highest level is below or equal to this value
  'pageSize': 20, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 1, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsSet': ["null"], // [String] | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
  'filterContainsCosmeticsOnly': true, // Boolean | filter sets based on if they only got cosmetic items in it. If true, the item ids are for the cosmetic endpoints instead of equipment.
  'filterContainsCosmetics': true // Boolean | filter sets based on if they got cosmetic items in it.
};
apiInstance.getSetsList(language, game, opts, (error, data, response) => {
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
 **game** | **String**| dofus3 | dofus3beta | 
 **sortLevel** | **String**| sort the resulting list by level, default unsorted | [optional] 
 **filterMinHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is above or equal to this value | [optional] 
 **filterMaxHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is below or equal to this value | [optional] 
 **pageSize** | **Number**| size of the results from the list. -1 disables pagination and gets all in one response. | [optional] 
 **pageNumber** | **Number**| page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16. | [optional] 
 **fieldsSet** | [**[String]**](String.md)| adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed. | [optional] 
 **filterContainsCosmeticsOnly** | **Boolean**| filter sets based on if they only got cosmetic items in it. If true, the item ids are for the cosmetic endpoints instead of equipment. | [optional] 
 **filterContainsCosmetics** | **Boolean**| filter sets based on if they got cosmetic items in it. | [optional] 

### Return type

[**ListSets**](ListSets.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSetsSearch

> [ListSet] getSetsSearch(language, game, query, opts)

Search Sets

Search in all names and descriptions of sets with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.SetsApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3"; // String | dofus3 | dofus3beta
let query = "Des"; // String | case sensitive search query
let opts = {
  'filterMinHighestEquipmentLevel': 195, // Number | only results where the equipment with the highest level is above or equal to this value
  'filterMaxHighestEquipmentLevel': 200, // Number | only results where the equipment with the highest level is below or equal to this value
  'limit': 8, // Number | maximum number of returned results
  'filterIsCosmetic': true // Boolean | filter sets based on if they only got cosmetic items in it. If true, the item ids are for the cosmetic endpoints instead of equipment.
};
apiInstance.getSetsSearch(language, game, query, opts, (error, data, response) => {
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
 **game** | **String**| dofus3 | dofus3beta | 
 **query** | **String**| case sensitive search query | 
 **filterMinHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is above or equal to this value | [optional] 
 **filterMaxHighestEquipmentLevel** | **Number**| only results where the equipment with the highest level is below or equal to this value | [optional] 
 **limit** | **Number**| maximum number of returned results | [optional] [default to 8]
 **filterIsCosmetic** | **Boolean**| filter sets based on if they only got cosmetic items in it. If true, the item ids are for the cosmetic endpoints instead of equipment. | [optional] 

### Return type

[**[ListSet]**](ListSet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSetsSingle

> Set getSetsSingle(language, ankamaId, game)

Single Sets

Retrieve a specific set with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.SetsApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 499; // Number | identifier
let game = "dofus3"; // String | dofus3 | dofus3beta
apiInstance.getSetsSingle(language, ankamaId, game, (error, data, response) => {
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
 **game** | **String**| dofus3 | dofus3beta | 

### Return type

[**Set**](Set.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

