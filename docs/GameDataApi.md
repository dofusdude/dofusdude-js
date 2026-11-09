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

Returns every complete geographic area record, including its super-area reference and child subareas, without pagination. These relationships describe geography rather than combat effect zones.

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

Returns full playable-class definitions without pagination, including their assigned spells and each spell&#39;s available grades. Classes do not have monster grades. For smaller responses use the paginated classes endpoint or request one class by ID.

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

Returns complete monster definitions without pagination. Grades group each variant&#39;s statistics and spell assignments. Drop percentages are indexed by monster grade. Known spawn subareas are not live population or per-map spawn probabilities. Spell expansion is optional. This bulk response can be large, so prefer pagination when possible.

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

Returns complete spell definitions and all available grades without pagination. Each grade has its own costs, casting rules, normal effects and critical effects. Bulk responses can be large. Prefer pagination for interactive or incremental use.

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

Returns complete subareas, map membership and monster references without pagination. Maps belong to the subarea but are not guaranteed spawn locations for every associated monster. Prefer pagination for smaller responses.

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

Returns every complete super-area record and its child area references without pagination. A super-area groups geographic areas and supplies a world-map context. It is not a spell effect zone.

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

Returns an area&#39;s parent super-area and child subarea references. References contain an ID and localized name, not a complete nested record. Use the corresponding resource endpoint to load details. Matching numeric IDs in different resource types do not establish a relationship.

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

Lists geographic area summaries. An area belongs to a super-area and groups subareas. Request fields[areas]&#x3D;all or an area detail record for those relationships. Use QUERY rather than GET for structured JSON filtering and sorting.

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

Returns a playable class, also called a breed in the client data. Its spells array contains full spell definitions. Each spell has its own levels array of spell grades. The class itself does not have grades, and a spell grade is not a character level.  Characteristic cost tiers describe point costs. Appearance bone and skin IDs are asset-renderer inputs, not image URLs. Use image_urls for ready-to-display artwork. IDs identify records independently of their translated names. Assigned spells can also be requested from the spells endpoint without loading the class again.

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

Lists playable classes, also called breeds in the client data. Results are compact summaries by default. Request fields[classes]&#x3D;all for class characteristics, appearance and full assigned spell definitions. Spell grades belong to each spell, not to the class. Use the detail endpoint for one full class. Existing GET pagination and field parameters remain unchanged. Use QUERY for structured JSON filtering.

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

Returns a monster definition. race is its family and race.super_race is the broader monster grouping. Neither is a playable class. Each entry in grades is one monster variant with a grade number, a separate combat level, statistics and assigned spells. Select by explicit grade values, not array positions or a fixed assumed grade count.  Spell assignments belong to the enclosing monster grade. Their grade values identify spell variants and need not equal the monster grade. Default assignments contain URLs that already select the assigned spell grade. Follow them unchanged. include&#x3D;spells.grade embeds just the assigned variant in each spell&#39;s levels array. include&#x3D;spells embeds every available spell grade instead. These are optional expansions of an independently addressable resource.  Match drops[].rates_percent[].grade to the monster grade, not the spell grade. Percentages are base drop rates before player-specific modifiers. global_drops provides ranges instead of that grade-rate table. Client condition trees preserve and/or grouping but exclude server-only predicates. A missing tree does not guarantee eligibility, even when has_conditions is true.  spawn_locations identifies known spawn subareas and their geographic parents. subarea_maps lists subarea membership, not guaranteed spawn maps. preferred is a source preference flag, not a probability. The endpoint does not report live presence or per-map spawn percentages.

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

Lists monster summaries. Request fields[monsters]&#x3D;all or the monster detail endpoint for variants, statistics, drop rates and known spawn subareas. A monster grade is a variant with its own combat level, not that level itself. Optional include values expand spell assignments. GET retains its existing pagination, field and include parameters. Use QUERY for structured filtering and sorting.

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

Returns a spell and its available grades in levels. A grade is a variant with its own action-point cost, range, casting limits and effects. Select by levels[].grade, not array position. levels[].ankama_id is the separate spell-level record ID. min_player_level records a player-level requirement and is not a grade number.  Pass grade to return only that variant inside the same spell object. An unavailable grade returns 404. For example, /spells/10198?grade&#x3D;1 selects spell grade 1. This does not imply that monster grade 1 is the only monster variant using it.  Keep normal effects and critical_effects separate. Each effect has its own combat-cell zone, target_mask and triggers. These describe where, who and when it affects. Preview and script zones do not replace effect zones. Use resolved names and descriptions instead of decoding raw tokens. Templated text is localized display text, not a formula to parse. This endpoint supplies definitions, not a full fight simulation or final damage calculation.

### Example

```javascript
import dofusdude from 'dofusdude-js';

let apiInstance = new dofusdude.GameDataApi();
let game = "game_example"; // String | 
let language = "language_example"; // String | 
let ankamaId = 201; // Number | 
let opts = {
  'grade': 56 // Number | Select the spell variant identified by its explicit grade number, not its spell-level record ID or a player level. Returns the spell object with only that grade in levels. An unavailable grade returns 404.
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
 **grade** | **Number**| Select the spell variant identified by its explicit grade number, not its spell-level record ID or a player level. Returns the spell object with only that grade in levels. An unavailable grade returns 404. | [optional] 

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

Lists independent spell records as compact summaries. Request fields[spells]&#x3D;all for their grades and effects, or use the spell detail endpoint for one spell. The levels field contains spell variants called grades, not player levels. Existing GET pagination and field parameters remain unchanged. Structured filters and sorting belong to QUERY and do not trim grades from matching spell records.

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

Returns one geographic subarea with its parent area and super-area, maps and monster references. Its level is a geographic difficulty indicator, not a monster grade or the combat level of every associated monster.  A map&#39;s ankama_id identifies the map. Interpret position_x and position_y with world_map_id because coordinates alone are not globally unique. Map membership does not prove that a monster spawns on every map or is currently present. Monster references can be followed through the monster endpoint for grade-specific statistics, base drop rates and known spawn subareas. This endpoint does not provide spawn percentages.

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

Lists subarea summaries. A subarea belongs to an area and super-area and contains maps. Request fields[subareas]&#x3D;all or a detail record for map membership and monster associations. Associations are not live monster presence or per-map spawn probabilities.

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

Returns one broad geographic region with its child areas and world_map_id. Follow child area IDs to the areas endpoint to continue toward subareas and maps. World geography is independent of spell and weapon combat-cell geometry.

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

Lists summaries of the broadest geographic regions. The hierarchy is super-area to area to subarea to map. These world areas are unrelated to combat-cell effect zones. Request fields[super_areas]&#x3D;all or a detail record for child area references and world-map context.

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

Searches localized geographic area names by relevance and returns compact summaries. Use the detail endpoint to obtain the parent super-area and child subareas.

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

Searches localized class names by relevance and returns compact summaries. Search is distinct from structured filtering. Use a returned ankama_id with the class detail endpoint for characteristics, appearance and assigned spell definitions.

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

Searches localized monster names by relevance and returns summaries. Each result identifies a monster definition, not one combat-level variant. Use the detail endpoint for grades, taxonomy, drops and known spawn subareas.

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

Searches localized spell names by relevance and returns compact summaries. The result ID identifies the spell, not a grade. Request the detail endpoint for available grades, or pass grade to that detail endpoint to select one variant.

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

Searches localized subarea names by relevance and returns summaries. Use the detail endpoint for parent areas, map positions and monster associations. Search results do not indicate live monster populations.

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

Searches localized super-area names by relevance. Results are geographic-region summaries. Use a returned ID with the detail endpoint for child areas and world-map context.

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

