# dofusdude.SpellLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ankamaId** | **Number** | ID of the spell-level definition. Different from the parent spell ID and from the grade number. Used by explicit spell-level references such as script spell_level_ids. | [optional] 
**grade** | **Number** | Number identifying this variant within its spell. Select by this value, not by the array position. Used by the spell detail endpoint&#39;s grade parameter. | [optional] 
**apCost** | **Number** | Action points required to cast this spell grade. | [optional] 
**criticalHitProbability** | **Number** | Base critical-hit percentage recorded for this spell grade, before fighter-specific modifiers. | [optional] 
**minPlayerLevel** | **Number** | Player-level requirement recorded for this spell grade. This is not its grade number or a monster combat level. | [optional] 
**minRange** | **Number** | Minimum casting range in combat cells. | [optional] 
**maxRange** | **Number** | Maximum casting range in combat cells as defined by this grade. | [optional] 
**maxCastPerTurn** | **Number** | Per-caster cast limit within a turn as recorded by the source. | [optional] 
**maxCastPerTarget** | **Number** |  | [optional] 
**maxGlobalCastPerTurn** | **Number** |  | [optional] 
**maxGlobalCastPerTarget** | **Number** |  | [optional] 
**minCastInterval** | **Number** | Minimum interval between casts, measured in fight turns. | [optional] 
**initialCooldown** | **Number** | Initial wait before casting, measured in fight turns. | [optional] 
**globalCooldown** | **Number** |  | [optional] 
**ignorePrisonGlyph** | **Boolean** |  | [optional] 
**spellBreed** | **Number** |  | [optional] 
**statesCriterion** | [**EligibilityNode**](EligibilityNode.md) | Available client-side state requirements for this spell grade. Null does not assert that the server imposes no restriction. | [optional] 
**previewZones** | [**[SpellPreviewZone]**](SpellPreviewZone.md) | Client preview and activation geometry for this grade. Use each effect&#39;s zone for its actual effect-area definition. | [optional] 
**effects** | [**[SpellEffect]**](SpellEffect.md) | Normal-cast effects for this grade. Each entry has independent targeting and area geometry. | [optional] 
**criticalEffects** | [**[SpellEffect]**](SpellEffect.md) | Critical-cast effects for this grade. Keep separate from normal effects rather than applying both arrays to every cast. | [optional] 


