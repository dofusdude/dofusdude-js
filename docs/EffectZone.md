# dofusdude.EffectZone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw** | **String** | Original compact zone encoding when the source provides one. | [optional] 
**shape** | [**ZoneShape**](ZoneShape.md) |  | 
**size** | **Number** | Effective outer size of the area. A point has size 0. Whole-map and custom-cell shapes omit it. | [optional] 
**minSize** | **Number** | Effective inner size for hollow or minimum-size shapes. Omitted when the shape has no inner boundary. | [optional] 
**cellIds** | **[Number]** |  | 
**damageDecreaseStepPercent** | **Number** |  | [optional] 
**maxDamageDecreaseApplyCount** | **Number** |  | [optional] 
**forcedDirection** | **Number** |  | [optional] 
**includeCarried** | **Boolean** |  | [optional] 
**stopAtTarget** | **Boolean** |  | [optional] 
**onlyAffectInSightLine** | **Boolean** |  | [optional] 


