<template>
  <FSForm
    v-model="valid"
  >
    <FSRow
      align="bottom-left"
    >
      <FSCol
        width="hug"
      >
        <FSDateSettingSelector
          :rules="[v => v != null]"
          :variant="variant"
          :lastPeriod="lastPeriod"
          :modelValue="localDateSetting"
          @update:modelValue="localDateSettingChange"
          v-bind="$attrs"
        />
      </FSCol>
      <FSCol
        v-if="pastSettings.includes(localDateSetting)"
        width="hug"
      >
        <FSNumberField
          :rules="[v => v > 0]"
          :modelValue="localDateValue"
          @update:modelValue="localDateValueChange"
          v-bind="$attrs"
        />
      </FSCol>
      <FSCol
        v-if="[DateSetting.Expression].includes(localDateSetting)"
        width="hug"
      >
        <FSTextField
          :label="$tr('ui.common.start', 'Start')"
          :rules="[v => validateExpression(v, variant)]"
          :modelValue="localStartDate"
          @update:modelValue="localStartDateChange"
          v-bind="$attrs"
        />
      </FSCol>
      <FSCol
        v-if="[DateSetting.Expression].includes(localDateSetting)"
        width="hug"
      >
        <FSTextField
          :label="$tr('ui.common.end', 'End')"
          :rules="[v => validateExpression(v, variant)]"
          :modelValue="localEndDate"
          @update:modelValue="localEndDateChange"
          v-bind="$attrs"
        />
      </FSCol>
      <FSCol
        v-if="[DateSetting.Pick].includes(localDateSetting)"
        width="hug"
      >
        <FSDateTimeRangeField
          :label="$tr('ui.common.pick-time-range', 'Pick time range')"
          :model-value="[
            parseForPicker(localStartDate)!,
            parseForPicker(localEndDate)!
          ]"
          @update:model-value="onPickDates"
          v-bind="$attrs"
        />
      </FSCol>
    </FSRow>
  </FSForm>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref} from "vue";

import _ from "lodash";

import { DateSetting } from "@dative-gpi/foundation-shared-domain/models";

import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSForm from "../FSForm.vue";
import FSRow from "../FSRow.vue";
import FSTextField from "./FSTextField.vue";
import FSNumberField from "./FSNumberField.vue";
import FSDateTimeRangeField from "./FSDateTimeRangeField.vue";
import FSDateSettingSelector from "./FSDateSettingSelector.vue";


export default defineComponent({
  name: "FSDateBuilder",
  components: {
    FSForm,
    FSRow,
    FSTextField,
    FSNumberField,
    FSDateTimeRangeField,
    FSDateSettingSelector,
  },
  props: {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    variant : {
      type: String as PropType<"default" | "before-after">,
      required: false,
      default: "default"
    },
    lastPeriod: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  emits: ["update:startDate", "update:endDate"],
  setup(props, { emit }) {

    const { parseForPicker,formatFromPicker, formatCurrentForPicker, validateExpression } = useAppTimeZone();

    const localDateSetting = ref<DateSetting>(props.variant === "default" ? DateSetting.PastDays : DateSetting.DaysBeforeAfter);
    const localDateValue = ref<number>(1);
    const localStartDate = ref<string>("now - 1d");
    const localEndDate = ref<string>("now");

    const valid = ref<boolean>(false);

    const pastSettings = computed((): DateSetting[] => {
      return [
        DateSetting.PastHours, DateSetting.PastDays, DateSetting.PastWeeks, DateSetting.PastMonths, DateSetting.PastYears,
        DateSetting.MinutesBeforeAfter, DateSetting.HoursBeforeAfter, DateSetting.DaysBeforeAfter, DateSetting.WeeksBeforeAfter,
        DateSetting.MinutesBefore, DateSetting.HoursBefore, DateSetting.DaysBefore, DateSetting.WeeksBefore
      ];
    });

    const localStartDateChange = (value: string) => {
      debouncedStartDate(value);
    }

    const onStartDateChange = (value: string) => {
      localStartDate.value = value;
      if (valid.value) {
        emit("update:startDate", value);
      }
    }

    const debouncedStartDate = _.debounce(onStartDateChange, 1000);

    const localEndDateChange = (value: string) => {
      debouncedEndDate(value);
    }

    const onEndDateChange = (value: string) => {
      localEndDate.value = value;
      if (valid.value) {
        emit("update:endDate", value);
      }
    }

    const debouncedEndDate = _.debounce(onEndDateChange, 1000);

    const localDateSettingChange = (value: DateSetting) => {
      localDateSetting.value = value;
      switch (value) {
        case DateSetting.None: return;
        case DateSetting.PastHours: {
          localStartDate.value = `now - ${localDateValue.value}h`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.PastDays: {
          localStartDate.value = `now - ${localDateValue.value}d`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.PastWeeks: {
          localStartDate.value = `now - ${localDateValue.value}w`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.PastMonths: {
          localStartDate.value = `now - ${localDateValue.value}M`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.PastYears: {
          localStartDate.value = `now - ${localDateValue.value}y`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.CurrentHour: {
          localStartDate.value = "now/h";
          localEndDate.value = "now";
          break;
        }
        case DateSetting.CurrentDay: {
          localStartDate.value = "now/d";
          localEndDate.value = "now";
          break;
        }
        case DateSetting.CurrentWeek: {
          localStartDate.value = "now/w";
          localEndDate.value = "now";
          break;
        }
        case DateSetting.CurrentMonth: {
          localStartDate.value = "now/M";
          localEndDate.value = "now";
          break;
        }
        case DateSetting.CurrentYear: {
          localStartDate.value = "now/y";
          localEndDate.value = "now";
          break;
        }
        case DateSetting.LastDay: {
          localStartDate.value = `now - 1d/d`;
          localEndDate.value = "now/d";
          break;
        }
        case DateSetting.LastWeek: {
          localStartDate.value = `now - 1w/w`;
          localEndDate.value = "now/w";
          break;
        }
        case DateSetting.LastMonth: {
          localStartDate.value = `now - 1M/M`;
          localEndDate.value = "now/M";
          break;
        }
        case DateSetting.LastYear: {
          localStartDate.value = `now - 1y/y`;
          localEndDate.value = "now/y";
          break;
        }
        case DateSetting.SinceLastDay: {
          localStartDate.value = `now - 1d/d`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.SinceLastWeek: {
          localStartDate.value = `now - 1w/w`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.SinceLastMonth: {
          localStartDate.value = `now - 1M/M`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.SinceLastYear: {
          localStartDate.value = `now - 1y/y`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.LastPeriod: {
          localStartDate.value = "from - to + from";
          localEndDate.value = "from";
          break;
        }
        case DateSetting.MinutesBeforeAfter: {
          localStartDate.value = `alertstart - ${localDateValue.value}m`;
          localEndDate.value = `alertend + ${localDateValue.value}m`;
          break;
        }
        case DateSetting.HoursBeforeAfter: {
          localStartDate.value = `alertstart - ${localDateValue.value}h`;
          localEndDate.value = `alertend + ${localDateValue.value}h`;
          break;
        }
        case DateSetting.DaysBeforeAfter: {
          localStartDate.value = `alertstart - ${localDateValue.value}d`;
          localEndDate.value = `alertend + ${localDateValue.value}d`;
          break;
        }
        case DateSetting.WeeksBeforeAfter: {
          localStartDate.value = `alertstart - ${localDateValue.value}w`;
          localEndDate.value = `alertend + ${localDateValue.value}w`;
          break;
        }
        case DateSetting.MinutesBefore: {
          localStartDate.value = `alertstart - ${localDateValue.value}m`;
          localEndDate.value = "alertend";
          break;
        }
        case DateSetting.HoursBefore: {
          localStartDate.value = `alertstart - ${localDateValue.value}h`;
          localEndDate.value = "alertend";
          break;
        }
        case DateSetting.DaysBefore: {
          localStartDate.value = `alertstart - ${localDateValue.value}d`;
          localEndDate.value = "alertend";
          break;
        }
        case DateSetting.WeeksBefore: {
          localStartDate.value = `alertstart - ${localDateValue.value}w`;
          localEndDate.value = "alertend";
          break;
        }
        case DateSetting.Expression: {
          if (props.variant === "before-after") {
            localStartDate.value = `alertstart - ${localDateValue.value}d`;
            localEndDate.value = "alertend";
          }
          else {
            localStartDate.value = `now - ${localDateValue.value}d`;
            localEndDate.value = "now";
          }
          break;
        }
        case DateSetting.Pick: {
          localEndDate.value = formatCurrentForPicker(0);
          localStartDate.value = formatCurrentForPicker(-1);
          break;
        }
      }
      emit("update:startDate", localStartDate.value);
      emit("update:endDate", localEndDate.value);
    }

    const localDateValueChange = (value: number) => {

      localDateValue.value = value ? value : 1;

      switch (localDateSetting.value) {
        case DateSetting.None: return;
        case DateSetting.PastHours: {
          localStartDate.value = `now - ${localDateValue.value}h`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.PastDays: {
          localStartDate.value = `now - ${localDateValue.value}d`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.PastWeeks: {
          localStartDate.value = `now - ${localDateValue.value}w`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.PastMonths: {
          localStartDate.value = `now - ${localDateValue.value}M`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.PastYears: {
          localStartDate.value = `now - ${localDateValue.value}y`;
          localEndDate.value = "now";
          break;
        }
        case DateSetting.MinutesBeforeAfter: {
          localStartDate.value = `alertstart - ${localDateValue.value}m`;
          localEndDate.value = `alertend + ${localDateValue.value}m`;
          break;
        }
        case DateSetting.HoursBeforeAfter: {
          localStartDate.value = `alertstart - ${localDateValue.value}h`;
          localEndDate.value = `alertend + ${localDateValue.value}h`;
          break;
        }
        case DateSetting.DaysBeforeAfter: {
          localStartDate.value = `alertstart - ${localDateValue.value}d`;
          localEndDate.value = `alertend + ${localDateValue.value}d`;
          break;
        }
        case DateSetting.WeeksBeforeAfter: {
          localStartDate.value = `alertstart - ${localDateValue.value}w`;
          localEndDate.value = `alertend + ${localDateValue.value}w`;
          break;
        }
        case DateSetting.MinutesBefore: {
          localStartDate.value = `alertstart - ${localDateValue.value}m`;
          localEndDate.value = "alertend";
          break;
        }
        case DateSetting.HoursBefore: {
          localStartDate.value = `alertstart - ${localDateValue.value}h`;
          localEndDate.value = "alertend";
          break;
        }
        case DateSetting.DaysBefore: {
          localStartDate.value = `alertstart - ${localDateValue.value}d`;
          localEndDate.value = "alertend";
          break;
        }
        case DateSetting.WeeksBefore: {
          localStartDate.value = `alertstart - ${localDateValue.value}w`;
          localEndDate.value = "alertend";
          break;
        }
      }
      emit("update:startDate", localStartDate.value);
      emit("update:endDate", localEndDate.value);
    }

    const onPickDates = (value: number[] | null) => {
      if (!value) {
        localEndDate.value = formatCurrentForPicker(0);
        localStartDate.value = formatCurrentForPicker(-1);
        if (valid.value) {
          emit("update:startDate", localStartDate.value);
          emit("update:endDate", localEndDate.value);
        }
      }
      else {
        if (value && value[0] != null && formatFromPicker(value[0]) !== localStartDate.value) {
          localStartDate.value = formatFromPicker(value[0]);
          if (valid.value) {
            emit("update:startDate", localStartDate.value);
          }
        }
        if (value && value[1] != null && formatFromPicker(value[1]) !== localEndDate.value) {
          localEndDate.value = formatFromPicker(value[1]);
          if (valid.value) {
            emit("update:endDate", localEndDate.value);
          }
        }
      }
    }

    return {
      pastSettings,
      DateSetting,
      localDateSetting,
      localDateValue,
      localStartDate,
      localEndDate,
      valid,
      localStartDateChange,
      localEndDateChange,
      localDateSettingChange,
      localDateValueChange,
      onPickDates,
      parseForPicker,
      validateExpression,
    }
  }
})
</script>
