<template>
  <FSSelectField
    class="fs-select-ui.date-setting"
    :items="dateSettings"
    :clearable="false"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { DateSetting } from "@dative-gpi/foundation-shared-domain/enums";

import FSSelectField from "../fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectDateSetting",
  components: {
    FSSelectField
  },
  props: {
    variant: {
      type: String as PropType<"default" | "before-after">,
      required: false,
      default: "default"
    },
    modelValue: {
      type: Number as PropType<DateSetting>,
      required: false,
      default: DateSetting.LastDay
    },
    lastPeriod: {
      type: Boolean,
      required: false,
      default: false
    },
    useNone: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const dateSettings = computed((): { id: DateSetting, label: string }[] => {
      if (props.variant === "before-after") {
        return [
          { id: DateSetting.Pick, label: $tr("ui.date-setting.pick-dates", "Pick dates") },
          { id: DateSetting.MinutesBeforeAfter, label: $tr("ui.date-setting.x-minutes-before-after-hour", "x Minutes before/after") },
          { id: DateSetting.HoursBeforeAfter, label: $tr("ui.date-setting.x-hours-before-after-hour", "x Hours before/after") },
          { id: DateSetting.DaysBeforeAfter, label: $tr("ui.date-setting.x-days-before-after-hour", "x Days before/after") },
          { id: DateSetting.WeeksBeforeAfter, label: $tr("ui.date-setting.x-weeks-before-after-hour", "x Weeks before/after") },
          { id: DateSetting.MinutesBefore, label: $tr("ui.date-setting.x-minutes-before", "x Minutes before") },
          { id: DateSetting.HoursBefore, label: $tr("ui.date-setting.x-hours-before", "x Hours before") },
          { id: DateSetting.DaysBefore, label: $tr("ui.date-setting.x-days-before", "x Days before") },
          { id: DateSetting.WeeksBefore, label: $tr("ui.date-setting.x-weeks-before", "x Weeks before") },
        ];
      }
      let dateSettings = [
        { id: DateSetting.Pick, label: $tr("ui.date-setting.pick-dates", "Pick dates") },
        { id: DateSetting.CurrentHour, label: $tr("ui.date-setting.this-hour", "This hour") },
        { id: DateSetting.CurrentDay, label: $tr("ui.date-setting.this-day", "This day") },
        { id: DateSetting.CurrentWeek, label: $tr("ui.date-setting.this-week", "This week") },
        { id: DateSetting.CurrentMonth, label: $tr("ui.date-setting.this-month", "This month") },
        { id: DateSetting.CurrentYear, label: $tr("ui.date-setting.this-year", "This year") },
        { id: DateSetting.LastDay, label: $tr("ui.date-setting.last-day", "Last day") },
        { id: DateSetting.LastWeek, label: $tr("ui.date-setting.last-week", "Last week") },
        { id: DateSetting.LastMonth, label: $tr("ui.date-setting.last-month", "Last month") },
        { id: DateSetting.LastYear, label: $tr("ui.date-setting.last-year", "Last year") },
        { id: DateSetting.SinceLastDay, label: $tr("ui.date-setting.since-last-day", "Since last day") },
        { id: DateSetting.SinceLastWeek, label: $tr("ui.date-setting.since-last-week", "Since last week") },
        { id: DateSetting.SinceLastMonth, label: $tr("ui.date-setting.since-last-month", "Since last month") },
        { id: DateSetting.SinceLastYear, label: $tr("ui.date-setting.since-last-year", "Since last year") },
        { id: DateSetting.PastHours, label: $tr("ui.date-setting.past-x-hours", "Past x hours") },
        { id: DateSetting.PastDays, label: $tr("ui.date-setting.past-x-days", "Past x days") },
        { id: DateSetting.PastWeeks, label: $tr("ui.date-setting.past-x-weeks", "Past x weeks") },
        { id: DateSetting.PastMonths, label: $tr("ui.date-setting.past-x-months", "Past x months") },
        { id: DateSetting.PastYears, label: $tr("ui.date-setting.past-x-years", "Past x years") },
        { id: DateSetting.Expression, label: $tr("ui.date-setting.expression", "Expression") }
      ];
      if (props.lastPeriod) {
        dateSettings.push({ id: DateSetting.LastPeriod, label: $tr("ui.date-setting.last-period", "Last period") });
      }
      if (props.useNone) {
        dateSettings.unshift({ id: DateSetting.None, label: $tr("ui.date-setting.none", "None") });
      }
      return dateSettings;
    })

    return {
      dateSettings
    };
  }
});
</script>