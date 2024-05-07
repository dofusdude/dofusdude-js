# dofusdude.MetaApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGameSearchTypes**](MetaApi.md#getGameSearchTypes) | **GET** /dofus2/meta/search/types | Available Game Search Types
[**getMetaAlmanaxBonuses**](MetaApi.md#getMetaAlmanaxBonuses) | **GET** /dofus2/meta/{language}/almanax/bonuses | Available Almanax Bonuses
[**getMetaAlmanaxBonusesSearch**](MetaApi.md#getMetaAlmanaxBonusesSearch) | **GET** /dofus2/meta/{language}/almanax/bonuses/search | Search Available Almanax Bonuses
[**getMetaElements**](MetaApi.md#getMetaElements) | **GET** /dofus2/meta/elements | Effects and Condition Elements



## getGameSearchTypes

> [String] getGameSearchTypes()

Available Game Search Types

Get all types for /{game}/{lang}/search available for filtering. All names are english for comparing them inside applications. Order is fixed so you can compare indices instead of strings.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MetaApi();
apiInstance.getGameSearchTypes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

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
let language = "fr"; // String | 
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
 **language** | **String**|  | 

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

> [String] getMetaElements()

Effects and Condition Elements

Get the mappings for all specific elements that are linked in the dataset. All names are english. Translations are not needed because of a global unique id which is the index inside the array. Future elements will get a higher id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MetaApi();
apiInstance.getMetaElements((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

