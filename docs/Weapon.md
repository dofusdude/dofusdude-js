# DofusdudeApi.Weapon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ankamaId** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**type** | [**ItemsListEntryTypedType**](ItemsListEntryTypedType.md) |  | [optional] 
**isWeapon** | **Boolean** | always true when the item is a weapon. Many fields are now available. Always check for this flag first when getting single equipment items. | [optional] 
**level** | **Number** |  | [optional] 
**pods** | **Number** |  | [optional] 
**imageUrls** | [**ImageUrls**](ImageUrls.md) |  | [optional] 
**hasEffects** | **Boolean** |  | [optional] 
**effects** | [**[EffectsEntry]**](EffectsEntry.md) |  | [optional] 
**hasConditions** | **Boolean** |  | [optional] 
**conditions** | [**[ConditionEntry]**](ConditionEntry.md) |  | [optional] 
**criticalHitProbability** | **Number** |  | [optional] 
**criticalHitBonus** | **Number** |  | [optional] 
**isTwoHanded** | **Boolean** |  | [optional] 
**maxCastPerTurn** | **Number** |  | [optional] 
**apCost** | **Number** |  | [optional] 
**range** | [**WeaponRange**](WeaponRange.md) |  | [optional] 
**hasRecipe** | **Boolean** |  | [optional] 
**recipe** | [**[RecipeEntry]**](RecipeEntry.md) |  | [optional] 
**hasParentSet** | **Boolean** |  | [optional] 
**parentSet** | [**EquipmentParentSet**](EquipmentParentSet.md) |  | [optional] 


