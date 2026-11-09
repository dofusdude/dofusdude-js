# dofusdude.SpellEffect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Localized effect category, such as Air damage. This is not a spell ID or a structured game reference. | [optional] 
**min** | **Number** |  | [optional] 
**max** | **Number** |  | [optional] 
**duration** | **Number** | Effect duration in fight turns as represented by the source. Not a real-time duration in seconds. | [optional] 
**delay** | **Number** | Delay before the effect in fight turns as represented by the source. | [optional] 
**random** | **Number** | Source random-selection value. Do not interpret it as a percentage without the effect&#39;s selection rules. | [optional] 
**group** | **Number** |  | [optional] 
**dispellable** | **Number** |  | [optional] 
**effectUid** | **Number** | Stable identifier of this concrete effect instance. | [optional] 
**targetId** | **Number** |  | [optional] 
**triggeredDuration** | **Number** |  | [optional] 
**displayZero** | **Boolean** |  | [optional] 
**modifier** | **Number** |  | [optional] 
**zone** | [**EffectZone**](EffectZone.md) |  | [optional] 
**targetMask** | [**TargetMask**](TargetMask.md) |  | [optional] 
**triggers** | [**SpellTriggers**](SpellTriggers.md) |  | [optional] 
**templated** | **String** | Localized effect text suitable for display. Numeric effect properties remain available separately. | [optional] 


