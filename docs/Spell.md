# dofusdude.Spell

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ankamaId** | **Number** |  | 
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**iconId** | **Number** |  | [optional] 
**adminName** | **String** |  | [optional] 
**order** | **Number** |  | [optional] 
**imageUrls** | [**Images**](Images.md) |  | [optional] 
**type** | [**SpellType**](SpellType.md) |  | [optional] 
**basePreviewZone** | [**EffectZone**](EffectZone.md) |  | [optional] 
**classes** | [**[CombatReference]**](CombatReference.md) | Reverse references to playable classes associated with this spell. These are compact references, not complete class documents. | [optional] 
**monsters** | [**[CombatReference]**](CombatReference.md) | Reverse references to monsters associated with this spell. Use a monster&#39;s grade-specific assignments to determine which spell grade it uses. | [optional] 
**levels** | [**[SpellLevel]**](SpellLevel.md) | Available spell grades. Despite the field name, entries are not player levels. A grade-filtered detail response contains only the requested entry while retaining the parent spell object. | 
**scripts** | [**[SpellScriptUsage]**](SpellScriptUsage.md) |  | [optional] 
**criticalScripts** | [**[SpellScriptUsage]**](SpellScriptUsage.md) |  | [optional] 


