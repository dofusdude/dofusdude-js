# dofusdude.AlmanaxApi

All URIs are relative to *https://api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlmanaxDate**](AlmanaxApi.md#getAlmanaxDate) | **GET** /dofus3/v1/{language}/almanax/{date} | Single Almanax Date
[**getAlmanaxRange**](AlmanaxApi.md#getAlmanaxRange) | **GET** /dofus3/v1/{language}/almanax | Almanax Range



## getAlmanaxDate

> Almanax getAlmanaxDate(language, date, opts)

Single Almanax Date

Get a single date. There are not more details in the returned object than the normal range endpoint.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.AlmanaxApi();
let language = "fr"; // String | code
let date = new Date("Sat Jan 25 00:00:00 UTC 2025"); // Date | yyyy-mm-dd
let opts = {
  'level': 56 // Number | character level for the reward_xp field
};
apiInstance.getAlmanaxDate(language, date, opts, (error, data, response) => {
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
 **date** | **Date**| yyyy-mm-dd | 
 **level** | **Number**| character level for the reward_xp field | [optional] 

### Return type

[**Almanax**](Almanax.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlmanaxRange

> [Almanax] getAlmanaxRange(language, opts)

Almanax Range

Get a range of dates, defaults to today + 6 following days but can specified by the query parameters.   filter[bonus_type] can be used seperately and does not have an effect on the other parameters.  range[from] changes the start date, everything else defaults to 6 following dates from this start date.  range[to] when used without anything else, it will use today as start date and this parameter as end. All ranges are inclusive.  range[from] + range[to] &#x3D; inclusive range over the specified dates, should never be farther apart than 35 days.  range[from|to] + range[size] no need to specify the date, just following days with [from] (0 is today) or go backwards in time with only [to] and [size].  Not all combinations are listed but this should give you an idea how to they could work.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.AlmanaxApi();
let language = "fr"; // String | code
let opts = {
  'filterBonusType': "experience-points", // String | ids from meta/{language}/almanax/bonuses
  'rangeFrom': new Date("2013-10-20"), // Date | yyyy-mm-dd
  'rangeTo': new Date("2013-10-20"), // Date | yyyy-mm-dd
  'rangeSize': -1, // Number | Size of the returned range. Disable to fully use the range by setting size to -1.
  'timezone': "Europe/Paris", // String | determine what the current time is. If you live in Brazil, \"today\" will be hours apart from Paris. Use your timezone to get results relative to your location.
  'level': 56 // Number | character level for the reward_xp field
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
 **rangeFrom** | **Date**| yyyy-mm-dd | [optional] 
 **rangeTo** | **Date**| yyyy-mm-dd | [optional] 
 **rangeSize** | **Number**| Size of the returned range. Disable to fully use the range by setting size to -1. | [optional] 
 **timezone** | **String**| determine what the current time is. If you live in Brazil, \&quot;today\&quot; will be hours apart from Paris. Use your timezone to get results relative to your location. | [optional] [default to &#39;Europe/Paris&#39;]
 **level** | **Number**| character level for the reward_xp field | [optional] 

### Return type

[**[Almanax]**](Almanax.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

