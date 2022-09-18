# DofusdudeApi.AlmanaxApi

All URIs are relative to *https://api.dofusdu.de/dofus2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlmanaxDate**](AlmanaxApi.md#getAlmanaxDate) | **GET** /{language}/almanax/{date} | Single Almanax Date
[**getAlmanaxRange**](AlmanaxApi.md#getAlmanaxRange) | **GET** /{language}/almanax | Almanax Range



## getAlmanaxDate

> AlmanaxEntry getAlmanaxDate(language, date)

Single Almanax Date

Get a single date. There are not more details in the returned object than the normal range endpoint.

### Example

```javascript
import DofusdudeApi from 'dofusdude_api';

let apiInstance = new DofusdudeApi.AlmanaxApi();
let language = "language_example"; // String | code
let date = "date_example"; // String | yyyy-mm-dd
apiInstance.getAlmanaxDate(language, date, (error, data, response) => {
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
 **language** | **String**| code | 
 **date** | **String**| yyyy-mm-dd | 

### Return type

[**AlmanaxEntry**](AlmanaxEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlmanaxRange

> [AlmanaxEntry] getAlmanaxRange(language, opts)

Almanax Range

Get a range of dates, defaults to today + 6 following days but can specified by the query parameters.   filter[bonus_type] can be used seperately and does not have an effect on the other parameters.  range[from] changes the start date, everything else defaults to 6 following dates from this start date.  range[to] when used without anything else, it will use today as start date and this parameter as end. All ranges are inclusive.  range[from] + range[to] &#x3D; inclusive range over the specified dates, should never be farther apart than 35 days.  range[from|to] + range[size] no need to specify the date, just following days with [from] (0 is today) or go backwards in time with only [to] and [size].  Not all combinations are listed but this should give you an idea how to they could work.

### Example

```javascript
import DofusdudeApi from 'dofusdude_api';

let apiInstance = new DofusdudeApi.AlmanaxApi();
let language = "language_example"; // String | code
let opts = {
  'filterBonusType': experience-points, // String | ids from meta/{language}/almanax/bonuses
  'rangeFrom': "rangeFrom_example", // String | yyyy-mm-dd
  'rangeTo': "rangeTo_example", // String | yyyy-mm-dd
  'rangeSize': 56, // Number | size of the returned range
  'timezone': "'Europe/Paris'" // String | determine what the current time is. If you live in Brazil, \"today\" will be hours apart from Paris. Use your timezone to get results relative to your location.
};
apiInstance.getAlmanaxRange(language, opts, (error, data, response) => {
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
 **language** | **String**| code | 
 **filterBonusType** | **String**| ids from meta/{language}/almanax/bonuses | [optional] 
 **rangeFrom** | **String**| yyyy-mm-dd | [optional] 
 **rangeTo** | **String**| yyyy-mm-dd | [optional] 
 **rangeSize** | **Number**| size of the returned range | [optional] 
 **timezone** | **String**| determine what the current time is. If you live in Brazil, \&quot;today\&quot; will be hours apart from Paris. Use your timezone to get results relative to your location. | [optional] [default to &#39;Europe/Paris&#39;]

### Return type

[**[AlmanaxEntry]**](AlmanaxEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

