# dofusdude.MountsApi

All URIs are relative to *https://api.dofusdu.de/dofus2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMountsList**](MountsApi.md#getMountsList) | **GET** /{language}/mounts | List Mounts
[**getMountsSearch**](MountsApi.md#getMountsSearch) | **GET** /{language}/mounts/search | Search Mounts
[**getMountsSingle**](MountsApi.md#getMountsSingle) | **GET** /{language}/mounts/{ankama_id} | Single Mounts



## getMountsList

> MountsListPaged getMountsList(language, opts)

List Mounts

Retrieve a list of mounts.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MountsApi();
let language = "language_example"; // String | a valid language code
let opts = {
  'filterFamilyName': "filterFamilyName_example", // String | only results with the translated family name
  'pageSize': 56, // Number | size of the results from the list. -1 disables pagination and gets all in one response.
  'pageNumber': 56 // Number | page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16.
};
apiInstance.getMountsList(language, opts, (error, data, response) => {
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
 **filterFamilyName** | **String**| only results with the translated family name | [optional] 
 **pageSize** | **Number**| size of the results from the list. -1 disables pagination and gets all in one response. | [optional] 
 **pageNumber** | **Number**| page number based on the current page[size]. So you could get page 1 with 8 entrys and page 2 would have entries 8 to 16. | [optional] 

### Return type

[**MountsListPaged**](MountsListPaged.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMountsSearch

> [MountListEntry] getMountsSearch(language, query, opts)

Search Mounts

Search in all names and descriptions of mounts with a query.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MountsApi();
let language = "language_example"; // String | a valid language code
let query = almond; // String | case sensitive search query
let opts = {
  'filterFamilyName': rhineetle // String | only results with the translated family name
};
apiInstance.getMountsSearch(language, query, opts, (error, data, response) => {
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
 **filterFamilyName** | **String**| only results with the translated family name | [optional] 

### Return type

[**[MountListEntry]**](MountListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMountsSingle

> Mount getMountsSingle(language, ankamaId)

Single Mounts

Retrieve a specific mount with id.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.MountsApi();
let language = "language_example"; // String | a valid language code
let ankamaId = 180; // Number | identifier
apiInstance.getMountsSingle(language, ankamaId, (error, data, response) => {
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

[**Mount**](Mount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

