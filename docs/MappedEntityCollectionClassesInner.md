# dofusdude.MappedEntityCollectionClassesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ankamaId** | **Number** |  | 
**name** | **String** |  | 
**imageUrls** | [**Images**](Images.md) |  | [optional] 
**description** | **String** |  | [optional] 
**gameplayDescription** | **String** |  | [optional] 
**complexity** | **Number** |  | [optional] 
**sortIndex** | **Number** |  | [optional] 
**creatureBonesId** | **Number** |  | [optional] 
**roles** | **[{String: Object}]** |  | [optional] 
**characteristicCosts** | **{String: [ClassCharacteristicCostsValueInner]}** | Characteristic point-cost tiers keyed by characteristic name. | [optional] 
**looks** | [**ClassLooks**](ClassLooks.md) |  | 
**spells** | [**[Spell]**](Spell.md) | Full spell definitions assigned to this playable class, including their own grades, effects and targeting. A class has no monster-grade dimension. The same spells are independently available from the spells endpoint. | 


