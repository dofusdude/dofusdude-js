# dofusdude.ResourcesApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllItemsResourcesList**](ResourcesApi.md#getAllItemsResourcesList) | **GET** /{game}/v1/{language}/items/resources/all | List All Resources
[**getItemsResourceSearch**](ResourcesApi.md#getItemsResourceSearch) | **GET** /{game}/v1/{language}/items/resources/search | Search Resources
[**getItemsResourcesList**](ResourcesApi.md#getItemsResourcesList) | **GET** /{game}/v1/{language}/items/resources | List Resources
[**getItemsResourcesSingle**](ResourcesApi.md#getItemsResourcesSingle) | **GET** /{game}/v1/{language}/items/resources/{ankama_id} | Single Resources



## getAllItemsResourcesList

> ListItems getAllItemsResourcesList(language, game, opts)

List All Resources

Retrieve all resource items with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]&#x3D;-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header &#39;Accept-Encoding: gzip&#39; for saving bandwidth. You will need to uncompress it on your end. Example with cURL: &#x60;&#x60;&#x60; curl -sH &#39;Accept-Encoding: gzip&#39; &lt;api-endpoint&gt; | gunzip - &#x60;&#x60;&#x60;

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ResourcesApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let opts = {
  'sortLevel': "desc", // String | sort the resulting list by level, default unsorted
  'filterMinLevel': 160, // Number | only results which level is equal or above this value
  'filterMaxLevel': 190, // Number | only results which level is equal or below this value
  'acceptEncoding': "acceptEncoding_example", // String | optional compression for saving bandwidth
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getAllItemsResourcesList(language, game, opts, (error, data, response) => {
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
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 
 **sortLevel** | **String**| sort the resulting list by level, default unsorted | [optional] 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 
 **acceptEncoding** | **String**| optional compression for saving bandwidth | [optional] 
 **filterTypeNameId** | [**[String]**](String.md)| multi-filter results with the english type name. Add with \&quot;wood\&quot; or \&quot;+wood\&quot; and exclude with \&quot;-wood\&quot;. | [optional] 

### Return type

[**ListItems**](ListItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsResourceSearch

> [ListItem] getItemsResourceSearch(language, game, query, opts)

Search Resources

Search in all names and descriptions of resource items with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ResourcesApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let query = "snowdew"; // String | case sensitive search query
let opts = {
  'filterMinLevel': 150, // Number | only results which level is equal or above this value
  'filterMaxLevel': 200, // Number | only results which level is equal or below this value
  'limit': 8, // Number | maximum number of returned results
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getItemsResourceSearch(language, game, query, opts, (error, data, response) => {
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
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 
 **query** | **String**| case sensitive search query | 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 
 **limit** | **Number**| maximum number of returned results | [optional] [default to 8]
 **filterTypeNameId** | [**[String]**](String.md)| multi-filter results with the english type name. Add with \&quot;wood\&quot; or \&quot;+wood\&quot; and exclude with \&quot;-wood\&quot;. | [optional] 

### Return type

[**[ListItem]**](ListItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsResourcesList

> ListItems getItemsResourcesList(language, game, opts)

List Resources

Retrieve a list of resource items.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ResourcesApi();
let language = "language_example"; // String | a valid language code
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let opts = {
  'sortLevel': "desc", // String | sort the resulting list by level, default unsorted
  'filterMinLevel': 160, // Number | only results which level is equal or above this value
  'filterMaxLevel': 190, // Number | only results which level is equal or below this value
  'pageSize': 10, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 1, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsItem': ["null"], // [String] | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getItemsResourcesList(language, game, opts, (error, data, response) => {
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
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 
 **sortLevel** | **String**| sort the resulting list by level, default unsorted | [optional] 
 **filterMinLevel** | **Number**| only results which level is equal or above this value | [optional] 
 **filterMaxLevel** | **Number**| only results which level is equal or below this value | [optional] 
 **pageSize** | **Number**| size of the results from the list. -1 disables pagination and gets all in one response. | [optional] 
 **pageNumber** | **Number**| page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16. | [optional] 
 **fieldsItem** | [**[String]**](String.md)| adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed. | [optional] 
 **filterTypeNameId** | [**[String]**](String.md)| multi-filter results with the english type name. Add with \&quot;wood\&quot; or \&quot;+wood\&quot; and exclude with \&quot;-wood\&quot;. | [optional] 

### Return type

[**ListItems**](ListItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemsResourcesSingle

> Resource getItemsResourcesSingle(language, ankamaId, game)

Single Resources

Retrieve a specific resource item with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.ResourcesApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 7295; // Number | identifier
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
apiInstance.getItemsResourcesSingle(language, ankamaId, game, (error, data, response) => {
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
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 

### Return type

[**Resource**](Resource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

