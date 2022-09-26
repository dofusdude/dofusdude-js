# dofusdude.MountsApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllMountsList**](MountsApi.md#getAllMountsList) | **GET** /{game}/{language}/mounts/all | List All Mounts
[**getMountsList**](MountsApi.md#getMountsList) | **GET** /{game}/{language}/mounts | List Mounts
[**getMountsSearch**](MountsApi.md#getMountsSearch) | **GET** /{game}/{language}/mounts/search | Search Mounts
[**getMountsSingle**](MountsApi.md#getMountsSingle) | **GET** /{game}/{language}/mounts/{ankama_id} | Single Mounts



## getAllMountsList

> MountsListPaged getAllMountsList(language, game, opts)

List All Mounts

Retrieve all mounts with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]&#x3D;-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header &#39;Accept-Encoding: gzip&#39; for saving bandwidth. You will need to uncompress it on your end. Example with cURL: &#x60;&#x60;&#x60; curl -sH &#39;Accept-Encoding: gzip&#39; &lt;api-endpoint&gt; | gunzip - &#x60;&#x60;&#x60;

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MountsApi();
let language = "language_example"; // String | a valid language code
let game = dofus2; // String | 
let opts = {
  'filterFamilyName': Dragoturkey, // String | only results with the translated family name
  'acceptEncoding': "acceptEncoding_example" // String | optional compression for saving bandwidth
};
apiInstance.getAllMountsList(language, game, opts, (error, data, response) => {
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
 **filterFamilyName** | **String**| only results with the translated family name | [optional] 
 **acceptEncoding** | **String**| optional compression for saving bandwidth | [optional] 

### Return type

[**MountsListPaged**](MountsListPaged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMountsList

> MountsListPaged getMountsList(language, game, opts)

List Mounts

Retrieve a list of mounts.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MountsApi();
let language = "language_example"; // String | a valid language code
let game = dofus2; // String | 
let opts = {
  'filterFamilyName': Dragoturkey, // String | only results with the translated family name
  'pageSize': 10, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 1, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsMount': ["effects"] // [String] | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
};
apiInstance.getMountsList(language, game, opts, (error, data, response) => {
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
 **filterFamilyName** | **String**| only results with the translated family name | [optional] 
 **pageSize** | **Number**| size of the results from the list. -1 disables pagination and gets all in one response. | [optional] 
 **pageNumber** | **Number**| page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16. | [optional] 
 **fieldsMount** | [**[String]**](String.md)| adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed. | [optional] 

### Return type

[**MountsListPaged**](MountsListPaged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMountsSearch

> [MountListEntry] getMountsSearch(language, game, query, opts)

Search Mounts

Search in all names and descriptions of mounts with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MountsApi();
let language = fr; // String | a valid language code
let game = dofus2; // String | 
let query = Dorée; // String | case sensitive search query
let opts = {
  'filterFamilyName': Dragodinde // String | only results with the translated family name
};
apiInstance.getMountsSearch(language, game, query, opts, (error, data, response) => {
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
 **filterFamilyName** | **String**| only results with the translated family name | [optional] 

### Return type

[**[MountListEntry]**](MountListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMountsSingle

> Mount getMountsSingle(language, ankamaId, game)

Single Mounts

Retrieve a specific mount with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MountsApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 180; // Number | identifier
let game = dofus2; // String | 
apiInstance.getMountsSingle(language, ankamaId, game, (error, data, response) => {
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

[**Mount**](Mount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

