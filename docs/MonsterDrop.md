# dofusdude.MonsterDrop

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | [**CombatReference**](CombatReference.md) |  | 
**ratesPercent** | [**[MonsterDropRatesPercentInner]**](MonsterDropRatesPercentInner.md) | Base drop percentages indexed by MonsterGrade.grade, not spell grade or array position. A value of 5 means 5 percent, not 0.05 percent. These are not spawn percentages. | 
**hasConditions** | **Boolean** | The source reports restrictions. Can be true without a complete client-side condition tree because server-only predicates are not exposed. | 
**dropId** | **Number** |  | [optional] 
**count** | **Number** |  | [optional] 
**condition** | **{String: Object}** |  | [optional] 
**hiddenIfInvalidConditions** | **Boolean** |  | [optional] 
**disableDropModifier** | **Boolean** |  | [optional] 
**specificCoefficients** | **[{String: Object}]** |  | [optional] 


