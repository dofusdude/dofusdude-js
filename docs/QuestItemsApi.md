# dofusdude.QuestItemsApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllItemsQuestList**](QuestItemsApi.md#getAllItemsQuestList) | **GET** /{game}/v1/{language}/items/quest/all | List All Quest Items
[**getItemQuestSingle**](QuestItemsApi.md#getItemQuestSingle) | **GET** /{game}/v1/{language}/items/quest/{ankama_id} | Single Quest Items
[**getItemsQuestList**](QuestItemsApi.md#getItemsQuestList) | **GET** /{game}/v1/{language}/items/quest | List Quest Items
[**getItemsQuestSearch**](QuestItemsApi.md#getItemsQuestSearch) | **GET** /{game}/v1/{language}/items/quest/search | Search Quest Items



## getAllItemsQuestList

> ListItems getAllItemsQuestList(language, game, opts)

List All Quest Items

Retrieve all quest items with one request. This endpoint is just an alias for the a list with disabled pagination (page[size]&#x3D;-1) and all fields[type] set.  If you want everything unfiltered, delete the other query parameters.  Be careful with testing or (god forbid) using /all in your browser, the returned json is huge and will slow down the browser!  Tip: set the HTTP Header &#39;Accept-Encoding: gzip&#39; for saving bandwidth. You will need to uncompress it on your end. Example with cURL: &#x60;&#x60;&#x60; curl -sH &#39;Accept-Encoding: gzip&#39; &lt;api-endpoint&gt; | gunzip - &#x60;&#x60;&#x60;

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.QuestItemsApi();
let language = "fr"; // String | a valid language code
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let opts = {
  'sortLevel': "desc", // String | sort the resulting list by level, default unsorted
  'filterMinLevel': 1, // Number | only results which level is equal or above this value
  'filterMaxLevel': 50, // Number | only results which level is equal or below this value
  'acceptEncoding': "acceptEncoding_example", // String | optional compression for saving bandwidth
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getAllItemsQuestList(language, game, opts, (error, data, response) => {
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


## getItemQuestSingle

> Resource getItemQuestSingle(language, ankamaId, game)

Single Quest Items

Retrieve a specific quest item with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.QuestItemsApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 25256; // Number | identifier
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
apiInstance.getItemQuestSingle(language, ankamaId, game, (error, data, response) => {
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


## getItemsQuestList

> ListItems getItemsQuestList(language, game, opts)

List Quest Items

Retrieve a list of quest items.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.QuestItemsApi();
let language = "fr"; // String | a valid language code
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let opts = {
  'sortLevel': "desc", // String | sort the resulting list by level, default unsorted
  'filterMinLevel': 1, // Number | only results which level is equal or above this value
  'filterMaxLevel': 50, // Number | only results which level is equal or below this value
  'pageSize': 5, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 1, // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
  'fieldsItem': ["null"], // [String] | adds fields from their detail endpoint to the item list entries. Multiple comma separated values allowed.
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getItemsQuestList(language, game, opts, (error, data, response) => {
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


## getItemsQuestSearch

> [ListItem] getItemsQuestSearch(language, game, query, opts)

Search Quest Items

Search in all names and descriptions of quest items with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.QuestItemsApi();
let language = "es"; // String | a valid language code
let game = "dofus3"; // String | game main 'dofus3' or beta channel 'dofus3beta'
let query = "Ficha"; // String | case sensitive search query
let opts = {
  'filterMinLevel': 60, // Number | only results which level is equal or above this value
  'filterMaxLevel': 70, // Number | only results which level is equal or below this value
  'limit': 8, // Number | maximum number of returned results
  'filterTypeNameId': ["null"] // [String] | multi-filter results with the english type name. Add with \"wood\" or \"+wood\" and exclude with \"-wood\".
};
apiInstance.getItemsQuestSearch(language, game, query, opts, (error, data, response) => {
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

