# dofusdude.MappedEntityCollectionMonstersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ankamaId** | **Number** |  | 
**name** | **String** |  | 
**imageUrls** | [**Images**](Images.md) |  | [optional] 
**race** | [**MonsterRace**](MonsterRace.md) |  | 
**grades** | [**[MonsterGrade]**](MonsterGrade.md) | Variants of this monster. Each has its own combat level, statistics and assigned spells. The monster grade number is not a spell grade number or combat level. | 
**spawnLocations** | [**[MonsterSpawnLocation]**](MonsterSpawnLocation.md) | Known spawn subareas and their geographic parents. This is not live population data or a per-map spawn probability. Maps listed within a subarea are not guaranteed individual spawn points. | 
**drops** | [**[MonsterDrop]**](MonsterDrop.md) |  | 
**globalDrops** | [**[MonsterGlobalDrop]**](MonsterGlobalDrop.md) |  | [optional] 
**appearance** | [**ClassAppearance**](ClassAppearance.md) |  | [optional] 
**isBounty** | **Boolean** |  | [optional] 
**correspondingMiniBoss** | [**CombatReference**](CombatReference.md) |  | [optional] 
**summonCost** | **Number** |  | [optional] 
**speedAdjust** | **Number** |  | [optional] 
**scaleGradeReference** | **Number** |  | [optional] 
**achievements** | [**[CombatReference]**](CombatReference.md) |  | [optional] 
**souls** | **[{String: Object}]** |  | [optional] 
**characteristicRatios** | **[[Number]]** |  | [optional] 


