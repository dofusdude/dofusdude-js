# dofusdude.WorldArea

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ankamaId** | **Number** |  | 
**name** | **String** |  | 
**worldMapId** | **Number** | World-map context supplied on super-area records. | [optional] 
**areas** | [**[CombatReference]**](CombatReference.md) | Child area references supplied on super-area records. | [optional] 
**level** | **Number** | Suggested geographic difficulty level supplied on subarea records. Not a monster grade or the level of every monster there. | [optional] 
**dungeonId** | **Number** | Dungeon association when supplied by the subarea data. | [optional] 
**maps** | [**[WorldMapReference]**](WorldMapReference.md) | Map membership supplied on subarea records. Does not imply a spawn on every map. | [optional] 
**superArea** | [**CombatReference**](CombatReference.md) |  | [optional] 
**area** | [**CombatReference**](CombatReference.md) |  | [optional] 
**subareas** | [**[CombatReference]**](CombatReference.md) |  | [optional] 
**monsters** | [**[CombatReference]**](CombatReference.md) |  | [optional] 


