# dofusdude.GameDataApi

All URIs are relative to *https://beta.api.dofusdu.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllAreas**](GameDataApi.md#getAllAreas) | **GET** /{game}/v1/{language}/areas/all | Get all areas
[**getAllClasses**](GameDataApi.md#getAllClasses) | **GET** /{game}/v1/{language}/classes/all | Get all classes
[**getAllMonsters**](GameDataApi.md#getAllMonsters) | **GET** /{game}/v1/{language}/monsters/all | Get all monsters
[**getAllSpells**](GameDataApi.md#getAllSpells) | **GET** /{game}/v1/{language}/spells/all | Get all spells
[**getAllSubareas**](GameDataApi.md#getAllSubareas) | **GET** /{game}/v1/{language}/subareas/all | Get all subareas
[**getAllSuperAreas**](GameDataApi.md#getAllSuperAreas) | **GET** /{game}/v1/{language}/super-areas/all | Get all super-areas
[**getAreaById**](GameDataApi.md#getAreaById) | **GET** /{game}/v1/{language}/areas/{ankama_id} | Get one area
[**getAreas**](GameDataApi.md#getAreas) | **GET** /{game}/v1/{language}/areas | List areas
[**getClassById**](GameDataApi.md#getClassById) | **GET** /{game}/v1/{language}/classes/{ankama_id} | Get one class
[**getClasses**](GameDataApi.md#getClasses) | **GET** /{game}/v1/{language}/classes | List classes
[**getMonsterById**](GameDataApi.md#getMonsterById) | **GET** /{game}/v1/{language}/monsters/{ankama_id} | Get one monster
[**getMonsters**](GameDataApi.md#getMonsters) | **GET** /{game}/v1/{language}/monsters | List monsters
[**getSpellById**](GameDataApi.md#getSpellById) | **GET** /{game}/v1/{language}/spells/{ankama_id} | Get one spell
[**getSpells**](GameDataApi.md#getSpells) | **GET** /{game}/v1/{language}/spells | List spells
[**getSubareaById**](GameDataApi.md#getSubareaById) | **GET** /{game}/v1/{language}/subareas/{ankama_id} | Get one subarea
[**getSubareas**](GameDataApi.md#getSubareas) | **GET** /{game}/v1/{language}/subareas | List subareas
[**getSuperAreaById**](GameDataApi.md#getSuperAreaById) | **GET** /{game}/v1/{language}/super-areas/{ankama_id} | Get one super-area
[**getSuperAreas**](GameDataApi.md#getSuperAreas) | **GET** /{game}/v1/{language}/super-areas | List super-areas
[**searchAreas**](GameDataApi.md#searchAreas) | **GET** /{game}/v1/{language}/areas/search | Search areas
[**searchClasses**](GameDataApi.md#searchClasses) | **GET** /{game}/v1/{language}/classes/search | Search classes
[**searchMonsters**](GameDataApi.md#searchMonsters) | **GET** /{game}/v1/{language}/monsters/search | Search monsters
[**searchSpells**](GameDataApi.md#searchSpells) | **GET** /{game}/v1/{language}/spells/search | Search spells
[**searchSubareas**](GameDataApi.md#searchSubareas) | **GET** /{game}/v1/{language}/subareas/search | Search subareas
[**searchSuperAreas**](GameDataApi.md#searchSuperAreas) | **GET** /{game}/v1/{language}/super-areas/search | Search super-areas



## getAllAreas

> MappedEntityCollection getAllAreas(game, language)

Get all areas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
apiInstance.getAllAreas(game, language, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllClasses

> MappedEntityCollection getAllClasses(game, language)

Get all classes

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
apiInstance.getAllClasses(game, language, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllMonsters

> MappedEntityCollection getAllMonsters(game, language, opts)

Get all monsters

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let opts = {
  'include': "include_example" // String | Optional spell expansion for monster responses. Leave include unset to return spell URLs. Use `spells.grade` to embed the assigned spell grade. Use `spells` to embed every available grade of each assigned spell.
};
apiInstance.getAllMonsters(game, language, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **include** | **String**| Optional spell expansion for monster responses. Leave include unset to return spell URLs. Use &#x60;spells.grade&#x60; to embed the assigned spell grade. Use &#x60;spells&#x60; to embed every available grade of each assigned spell. | [optional] 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllSpells

> MappedEntityCollection getAllSpells(game, language)

Get all spells

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
apiInstance.getAllSpells(game, language, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllSubareas

> MappedEntityCollection getAllSubareas(game, language)

Get all subareas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
apiInstance.getAllSubareas(game, language, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllSuperAreas

> MappedEntityCollection getAllSuperAreas(game, language)

Get all super-areas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
apiInstance.getAllSuperAreas(game, language, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAreaById

> WorldArea getAreaById(game, language, ankamaId)

Get one area

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let ankamaId = 0; // Number | 
apiInstance.getAreaById(game, language, ankamaId, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **ankamaId** | **Number**|  | 

### Return type

[**WorldArea**](WorldArea.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAreas

> MappedEntityCollection getAreas(game, language, opts)

List areas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let opts = {
  'pageNumber': 1, // Number | 
  'pageSize': 20, // Number | 
  'fieldsAreas': "fieldsAreas_example" // String | 
};
apiInstance.getAreas(game, language, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **pageNumber** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 20]
 **fieldsAreas** | **String**|  | [optional] 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClassById

> Class getClassById(game, language, ankamaId)

Get one class

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let ankamaId = 1; // Number | 
apiInstance.getClassById(game, language, ankamaId, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **ankamaId** | **Number**|  | 

### Return type

[**Class**](Class.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClasses

> MappedEntityCollection getClasses(game, language, opts)

List classes

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let opts = {
  'pageNumber': 1, // Number | 
  'pageSize': 20, // Number | 
  'fieldsClasses': "fieldsClasses_example" // String | 
};
apiInstance.getClasses(game, language, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **pageNumber** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 20]
 **fieldsClasses** | **String**|  | [optional] 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMonsterById

> Monster getMonsterById(game, language, ankamaId, opts)

Get one monster

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let ankamaId = 31; // Number | 
let opts = {
  'include': "include_example" // String | Optional spell expansion for monster responses. Leave include unset to return spell URLs. Use `spells.grade` to embed the assigned spell grade. Use `spells` to embed every available grade of each assigned spell.
};
apiInstance.getMonsterById(game, language, ankamaId, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **ankamaId** | **Number**|  | 
 **include** | **String**| Optional spell expansion for monster responses. Leave include unset to return spell URLs. Use &#x60;spells.grade&#x60; to embed the assigned spell grade. Use &#x60;spells&#x60; to embed every available grade of each assigned spell. | [optional] 

### Return type

[**Monster**](Monster.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMonsters

> MappedEntityCollection getMonsters(game, language, opts)

List monsters

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let opts = {
  'pageNumber': 1, // Number | 
  'pageSize': 20, // Number | 
  'fieldsMonsters': "fieldsMonsters_example", // String | 
  'include': "include_example" // String | Optional spell expansion for monster responses. Leave include unset to return spell URLs. Use `spells.grade` to embed the assigned spell grade. Use `spells` to embed every available grade of each assigned spell.
};
apiInstance.getMonsters(game, language, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **pageNumber** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 20]
 **fieldsMonsters** | **String**|  | [optional] 
 **include** | **String**| Optional spell expansion for monster responses. Leave include unset to return spell URLs. Use &#x60;spells.grade&#x60; to embed the assigned spell grade. Use &#x60;spells&#x60; to embed every available grade of each assigned spell. | [optional] 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpellById

> Spell getSpellById(game, language, ankamaId, opts)

Get one spell

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let ankamaId = 201; // Number | 
let opts = {
  'grade': 56 // Number | Return only the requested mapped spell grade in `levels`.
};
apiInstance.getSpellById(game, language, ankamaId, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **ankamaId** | **Number**|  | 
 **grade** | **Number**| Return only the requested mapped spell grade in &#x60;levels&#x60;. | [optional] 

### Return type

[**Spell**](Spell.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpells

> MappedEntityCollection getSpells(game, language, opts)

List spells

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let opts = {
  'pageNumber': 1, // Number | 
  'pageSize': 20, // Number | 
  'fieldsSpells': "fieldsSpells_example" // String | 
};
apiInstance.getSpells(game, language, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **pageNumber** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 20]
 **fieldsSpells** | **String**|  | [optional] 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubareaById

> WorldArea getSubareaById(game, language, ankamaId)

Get one subarea

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let ankamaId = 1; // Number | 
apiInstance.getSubareaById(game, language, ankamaId, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **ankamaId** | **Number**|  | 

### Return type

[**WorldArea**](WorldArea.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubareas

> MappedEntityCollection getSubareas(game, language, opts)

List subareas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let opts = {
  'pageNumber': 1, // Number | 
  'pageSize': 20, // Number | 
  'fieldsSubareas': "fieldsSubareas_example" // String | 
};
apiInstance.getSubareas(game, language, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **pageNumber** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 20]
 **fieldsSubareas** | **String**|  | [optional] 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSuperAreaById

> WorldArea getSuperAreaById(game, language, ankamaId)

Get one super-area

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let ankamaId = 0; // Number | 
apiInstance.getSuperAreaById(game, language, ankamaId, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **ankamaId** | **Number**|  | 

### Return type

[**WorldArea**](WorldArea.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSuperAreas

> MappedEntityCollection getSuperAreas(game, language, opts)

List super-areas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let opts = {
  'pageNumber': 1, // Number | 
  'pageSize': 20, // Number | 
  'fieldsSuperAreas': "fieldsSuperAreas_example" // String | 
};
apiInstance.getSuperAreas(game, language, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **pageNumber** | **Number**|  | [optional] [default to 1]
 **pageSize** | **Number**|  | [optional] [default to 20]
 **fieldsSuperAreas** | **String**|  | [optional] 

### Return type

[**MappedEntityCollection**](MappedEntityCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchAreas

> [MappedEntityListEntry] searchAreas(game, language, query, opts)

Search areas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let query = "query_example"; // String | 
let opts = {
  'limit': 8 // Number | 
};
apiInstance.searchAreas(game, language, query, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **query** | **String**|  | 
 **limit** | **Number**|  | [optional] [default to 8]

### Return type

[**[MappedEntityListEntry]**](MappedEntityListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchClasses

> [MappedEntityListEntry] searchClasses(game, language, query, opts)

Search classes

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let query = "query_example"; // String | 
let opts = {
  'limit': 8 // Number | 
};
apiInstance.searchClasses(game, language, query, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **query** | **String**|  | 
 **limit** | **Number**|  | [optional] [default to 8]

### Return type

[**[MappedEntityListEntry]**](MappedEntityListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchMonsters

> [MappedEntityListEntry] searchMonsters(game, language, query, opts)

Search monsters

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let query = "query_example"; // String | 
let opts = {
  'limit': 8 // Number | 
};
apiInstance.searchMonsters(game, language, query, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **query** | **String**|  | 
 **limit** | **Number**|  | [optional] [default to 8]

### Return type

[**[MappedEntityListEntry]**](MappedEntityListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSpells

> [MappedEntityListEntry] searchSpells(game, language, query, opts)

Search spells

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let query = "query_example"; // String | 
let opts = {
  'limit': 8 // Number | 
};
apiInstance.searchSpells(game, language, query, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **query** | **String**|  | 
 **limit** | **Number**|  | [optional] [default to 8]

### Return type

[**[MappedEntityListEntry]**](MappedEntityListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSubareas

> [MappedEntityListEntry] searchSubareas(game, language, query, opts)

Search subareas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let query = "query_example"; // String | 
let opts = {
  'limit': 8 // Number | 
};
apiInstance.searchSubareas(game, language, query, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **query** | **String**|  | 
 **limit** | **Number**|  | [optional] [default to 8]

### Return type

[**[MappedEntityListEntry]**](MappedEntityListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSuperAreas

> [MappedEntityListEntry] searchSuperAreas(game, language, query, opts)

Search super-areas

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let query = "query_example"; // String | 
let opts = {
  'limit': 8 // Number | 
};
apiInstance.searchSuperAreas(game, language, query, opts, (error, data, response) => {
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
 **game** | **String**|  | 
 **language** | **String**|  | 
 **query** | **String**|  | 
 **limit** | **Number**|  | [optional] [default to 8]

### Return type

[**[MappedEntityListEntry]**](MappedEntityListEntry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

