# dofusdude.PutAlmanaxWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bonusWhitelist** | **[String]** | from all available bonuses (ids) from /dofus3/meta/{language}/almanax/bonuses. Delete old entries with empty array []. Just null changes nothing. | [optional] 
**bonusBlacklist** | **[String]** | from all available bonuses (ids) from /dofus3/meta/{language}/almanax/bonuses. Delete old entries with empty array []. Just null changes nothing. | [optional] 
**subscriptions** | **[String]** | Get the available subscriptions with /meta/webhooks/almanax | [optional] 
**dailySettings** | [**CreateAlmanaxWebhookDailySettings**](CreateAlmanaxWebhookDailySettings.md) |  | [optional] 
**isoDate** | **Boolean** | If false, it will use common local time formats and weekday translations. If true, the format is YYYY-MM-DD. | [optional] [default to false]
**mentions** | **{String: [CreateAlmanaxWebhookMentionsValueInner]}** | Almanax bonus ids mapped to array of mentions. | [optional] 
**intervals** | **[String]** |  | [optional] 
**weeklyWeekday** | **String** | When to post the weekly preview at the specified time. | [optional] 



## Enum: [IntervalsEnum]


* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)





## Enum: WeeklyWeekdayEnum


* `sunday` (value: `"sunday"`)

* `monday` (value: `"monday"`)

* `tuesday` (value: `"tuesday"`)

* `wednesday` (value: `"wednesday"`)

* `thursday` (value: `"thursday"`)

* `friday` (value: `"friday"`)

* `saturday` (value: `"saturday"`)




