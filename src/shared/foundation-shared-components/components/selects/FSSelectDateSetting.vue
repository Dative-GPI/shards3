<template>
  <FSSelectField
    :editable="$props.editable"
    :items="dateSettings"
    :hideHeader="true"
    :clearable="false"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { DateSetting } from "@dative-gpi/foundation-shared-domain/models";

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
      required: true
    },
    lastPeriod: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const dateSettings = computed((): { id: DateSetting, label: string }[] => {
      if (props.variant === "before-after") {
        return [
          { id: DateSetting.Pick, label: $tr("ui.common.pick-dates", "Pick dates") },
          { id: DateSetting.MinutesBeforeAfter, label: $tr("ui.common.x-minutes-before-after-hour", "x Minutes before/after") },
          { id: DateSetting.HoursBeforeAfter, label: $tr("ui.common.x-hours-before-after-hour", "x Hours before/after") },
          { id: DateSetting.DaysBeforeAfter, label: $tr("ui.common.x-days-before-after-hour", "x Days before/after") },
          { id: DateSetting.WeeksBeforeAfter, label: $tr("ui.common.x-weeks-before-after-hour", "x Weeks before/after") },
          { id: DateSetting.MinutesBefore, label: $tr("ui.common.x-minutes-before", "x Minutes before") },
          { id: DateSetting.HoursBefore, label: $tr("ui.common.x-hours-before", "x Hours before") },
          { id: DateSetting.DaysBefore, label: $tr("ui.common.x-days-before", "x Days before") },
          { id: DateSetting.WeeksBefore, label: $tr("ui.common.x-weeks-before", "x Weeks before") },
        ];
      }
      let dateSettings = [
        { id: DateSetting.Pick, label: $tr("ui.common.pick-dates", "Pick dates") },
        { id: DateSetting.CurrentHour, label: $tr("ui.common.this-hour", "This hour") },
        { id: DateSetting.CurrentDay, label: $tr("ui.common.this-day", "This day") },
        { id: DateSetting.CurrentWeek, label: $tr("ui.common.this-week", "This week") },
        { id: DateSetting.CurrentMonth, label: $tr("ui.common.this-month", "This month") },
        { id: DateSetting.CurrentYear, label: $tr("ui.common.this-year", "This year") },
        { id: DateSetting.LastDay, label: $tr("ui.common.last-day", "Last day") },
        { id: DateSetting.LastWeek, label: $tr("ui.common.last-week", "Last week") },
        { id: DateSetting.LastMonth, label: $tr("ui.common.last-month", "Last month") },
        { id: DateSetting.LastYear, label: $tr("ui.common.last-year", "Last year") },
        { id: DateSetting.SinceLastDay, label: $tr("ui.common.since-last-day", "Since last day") },
        { id: DateSetting.SinceLastWeek, label: $tr("ui.common.since-last-week", "Since last week") },
        { id: DateSetting.SinceLastMonth, label: $tr("ui.common.since-last-month", "Since last month") },
        { id: DateSetting.SinceLastYear, label: $tr("ui.common.since-last-year", "Since last year") },
        { id: DateSetting.PastHours, label: $tr("ui.common.past-x-hours", "Past x hours") },
        { id: DateSetting.PastDays, label: $tr("ui.common.past-x-days", "Past x days") },
        { id: DateSetting.PastWeeks, label: $tr("ui.common.past-x-weeks", "Past x weeks") },
        { id: DateSetting.PastMonths, label: $tr("ui.common.past-x-months", "Past x months") },
        { id: DateSetting.PastYears, label: $tr("ui.common.past-x-years", "Past x years") },
        { id: DateSetting.Expression, label: $tr("ui.common.expression", "Expression") }
      ];
      if (props.lastPeriod) {
        dateSettings.push({ id: DateSetting.LastPeriod, label: $tr("ui.common.last-period", "Last period") });
      }
      return dateSettings;
    })

    return {
      dateSettings
    };
  }
});
</script>