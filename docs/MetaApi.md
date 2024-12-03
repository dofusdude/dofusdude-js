# dofusdude.MetaApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGameSearchTypes**](MetaApi.md#getGameSearchTypes) | **GET** /{game}/v1/meta/search/types | Available Game Search Types
[**getItemTypes**](MetaApi.md#getItemTypes) | **GET** /{game}/v1/meta/items/types | Available Item Types
[**getMetaAlmanaxBonuses**](MetaApi.md#getMetaAlmanaxBonuses) | **GET** /dofus3/v1/meta/{language}/almanax/bonuses | Available Almanax Bonuses
[**getMetaAlmanaxBonusesSearch**](MetaApi.md#getMetaAlmanaxBonusesSearch) | **GET** /dofus3/v1/meta/{language}/almanax/bonuses/search | Search Available Almanax Bonuses
[**getMetaElements**](MetaApi.md#getMetaElements) | **GET** /{game}/v1/meta/elements | Effects and Condition Elements
[**getMetaVersion**](MetaApi.md#getMetaVersion) | **GET** /{game}/v1/meta/version | Game Version



## getGameSearchTypes

> [String] getGameSearchTypes(game)

Available Game Search Types

Get all types for /{game}/v1/{lang}/search available for filtering. All names are english for comparing them inside applications. Order is fixed so you can compare indices instead of strings.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MetaApi();
let game = "game_example"; // String | game main 'dofus3' or beta channel 'dofus3beta'
apiInstance.getGameSearchTypes(game, (error, data, response) => {
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
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemTypes

> [String] getItemTypes(game)

Available Item Types

Get all types of all items. Primarily used for filtering more detailed types in listings or search endpoints. All names are english for comparing them inside applications. Ordering is not guaranteed to persist with game updates.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MetaApi();
let game = "game_example"; // String | game main 'dofus3' or beta channel 'dofus3beta'
apiInstance.getItemTypes(game, (error, data, response) => {
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
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetaAlmanaxBonuses

> [GetMetaAlmanaxBonuses200ResponseInner] getMetaAlmanaxBonuses(language)

Available Almanax Bonuses

Get all the available bonuses and their id for filtering them in the range endpoint.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MetaApi();
let language = "fr"; // String | a valid language code
apiInstance.getMetaAlmanaxBonuses(language, (error, data, response) => {
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

### Return type

[**[GetMetaAlmanaxBonuses200ResponseInner]**](GetMetaAlmanaxBonuses200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetaAlmanaxBonusesSearch

> [GetMetaAlmanaxBonuses200ResponseInner] getMetaAlmanaxBonusesSearch(language, query, opts)

Search Available Almanax Bonuses

Search all the available bonuses and their id for filtering them in the range endpoint.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MetaApi();
let language = "fr"; // String | a valid language code
let query = "abond"; // String | case sensitive search query
let opts = {
  'limit': 56 // Number | maximum number of returned results
};
apiInstance.getMetaAlmanaxBonusesSearch(language, query, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum number of returned results | [optional] 

### Return type

[**[GetMetaAlmanaxBonuses200ResponseInner]**](GetMetaAlmanaxBonuses200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetaElements

> [String] getMetaElements(game)

Effects and Condition Elements

Get the mappings for all specific elements that are linked in the dataset. All names are english. Translations are not needed because of a global unique id which is the index inside the array. Future elements will get a higher id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MetaApi();
let game = "game_example"; // String | game main 'dofus3' or beta channel 'dofus3beta'
apiInstance.getMetaElements(game, (error, data, response) => {
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
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetaVersion

> Version getMetaVersion(game)

Game Version

The current game version of the hosted data.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MetaApi();
let game = "dofus3beta"; // String | game main 'dofus3' or beta channel 'dofus3beta'
apiInstance.getMetaVersion(game, (error, data, response) => {
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
 **game** | **String**| game main &#39;dofus3&#39; or beta channel &#39;dofus3beta&#39; | 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

