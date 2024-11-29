# dofusdude.AlmanaxWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**dailySettings** | [**AlmanaxWebhookDailySettings**](AlmanaxWebhookDailySettings.md) |  | [optional] 
**bonusWhitelist** | **[String]** | Only post when these bonuses come up. From all available bonuses (ids) from /dofus3/meta/{language}/almanax/bonuses. | [optional] 
**bonusBlacklist** | **[String]** | Skip the day when these bonuses come up. From all available bonuses (ids) from /dofus3/meta/{language}/almanax/bonuses | [optional] 
**subscriptions** | **[String]** | Get the available subscriptions with /meta/webhooks/almanax | [optional] 
**isoDate** | **Boolean** | If false, it will use common local time formats and weekday translations. If true, the format is YYYY-MM-DD. | [optional] [default to false]
**mentions** | **{String: [CreateAlmanaxWebhookMentionsValueInner]}** | Almanax bonus ids mapped to array of mentions. | [optional] 
**intervals** | **[String]** | - Daily posts each day, filtering with Black/Whitelist and mentions are applied daily. - Weekly posts the next 7 days (excluding the posting day) once per week at the specified time. With only weekly selected, of all mentions, only prior notices will come through daily. The 7 day preview gets filtered by the Black/Whitelist. - Monthly posts a preview of the next month from first to last date. The post will be on the last day of a month (ignoring day of the week) at the specified time. Mentions and filtering works like weekly. The biggest difference between daily and the other two is that daily always posts the current day while monthly and weekly only show future days. You can always combine the intervals by selecting multiple intervals for one hook or create multiple hooks for the same channel with different settings to get every highly specific combination you want. | [optional] 
**weeklyWeekday** | **String** | When to post the weekly preview at the specified time. | [optional] 
**createdAt** | **Date** |  | [optional] 
**lastFiredAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 



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




