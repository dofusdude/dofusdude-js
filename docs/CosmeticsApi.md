# dofusdude.CosmeticsApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllCosmeticsList**](CosmeticsApi.md#getAllCosmeticsList) | **GET** /{game}/{language}/items/cosmetics/all | List All Cosmetics
[**getCosmeticsList**](CosmeticsApi.md#getCosmeticsList) | **GET** /{game}/{language}/items/cosmetics | List Cosmetics
[**getCosmeticsSearch**](CosmeticsApi.md#getCosmeticsSearch) | **GET** /{game}/{language}/items/cosmetics/search | Search Cosmetics
[**getCosmeticsSingle**](CosmeticsApi.md#getCosmeticsSingle) | **GET** /{game}/{language}/items/cosmetics/{ankama_id} | Single Cosmetics



## getAllCosmeticsList

> ItemsListPaged getAllCosmeticsList(language, game, opts)

List All Cosmetics

Retrieve all cosmetic items with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]&#x3D;-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header &#39;Accept-Encoding: gzip&#39; for saving bandwidth. You will need to uncompress it on your end. Example with cURL: &#x60;&#x60;&#x60; curl -sH &#39;Accept-Encoding: gzip&#39; &lt;api-endpoint&gt; | gunzip - &#x60;&#x60;&#x60;

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.CosmeticsApi();
let language = "fr"; // String | a valid language code
let game = "dofus2"; // String | 
let opts = {
  'sortLevel': "asc", // String | sort the resulting list by level, default unsorted
  'filterTypeName': "Chapeau d'apparat", // String | only results with the translated type name
  'filterMinLevel': 1, // Number | only results which level is equal or above this value
  'filterMaxLevel': 5, // Number | only results which level is equal or below this value
  'acceptEncoding': "acceptEncoding_example" // String | optional compression for saving bandwidth
};
apiInstance.getAllCosmeticsList(language, game, opts, (error, data, response) => {
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
 **acceptEncoding** | **String**| optional compression for saving bandwidth | [optional] 

### Return type

[**ItemsListPaged**](ItemsListPaged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCosmeticsList

> ItemsListPaged getCosmeticsList(language, game, opts)

List Cosmetics

Retrieve a list of cosmetic items.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.CosmeticsApi();
let language = "fr"; // String | a valid language code
let game = "dofus2"; // String | 
let opts = {
  'sortLevel': "asc", // String | sort the resulting list by level, default unsorted
  'filterTypeName': "Chapeau d'apparat", // String | only results with the translated type name
  'filterMinLevel': 1, // Number | only results which level is equal or above this value
  'filterMaxLevel': 5, // Number | only results which level is equal or below this value
  'pageSize': 5, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 1, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsItem': ["null"] // [String] | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
};
apiInstance.getCosmeticsList(language, game, opts, (error, data, response) => {
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
 **fieldsItem** | [**[String]**](String.md)| adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed. | [optional] 

### Return type

[**ItemsListPaged**](ItemsListPaged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCosmeticsSearch

> [ItemListEntry] getCosmeticsSearch(language, game, query, opts)

Search Cosmetics

Search in all names and descriptions of cosmetic items with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.CosmeticsApi();
let language = "language_example"; // String | a valid language code
let game = "dofus2"; // String | 
let query = "nedora"; // String | case sensitive search query
let opts = {
  'filterTypeName': "Costume", // String | only results with the translated type name
  'filterMinLevel': 1, // Number | only results which level is equal or above this value
  'filterMaxLevel': 2, // Number | only results which level is equal or below this value
  'limit': 8 // Number | maximum number of returned results
};
apiInstance.getCosmeticsSearch(language, game, query, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum number of returned results | [optional] [default to 8]

### Return type

[**[ItemListEntry]**](ItemListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCosmeticsSingle

> Cosmetic getCosmeticsSingle(language, ankamaId, game)

Single Cosmetics

Retrieve a specific cosmetic item with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.CosmeticsApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 24132; // Number | identifier
let game = "dofus2"; // String | 
apiInstance.getCosmeticsSingle(language, ankamaId, game, (error, data, response) => {
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

[**Cosmetic**](Cosmetic.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

