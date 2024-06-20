<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :messages="messages"
  >
    <FSForm
      v-model="valid"
    >
      <FSRow
        :wrap="false"
      >
        <FSSelectDateSetting
          :lastPeriod="$props.lastPeriod"
          :editable="$props.editable"
          :variant="$props.variant"
          :modelValue="localDateSetting"
          @update:modelValue="localDateSettingChange"
        />
        <FSNumberField
          v-if="pastSettings.includes(localDateSetting)"
          :rules="[NumberRules.required(), NumberRules.min(0)]"
          :editable="$props.editable"
          :hideHeader="true"
          :modelValue="localDateValue"
          @update:modelValue="localDateValueChange"
        />
        <template
          v-else-if="localDateSetting === DateSetting.Expression"
        >
          <FSRow
            align="center-left"
            :wrap="false"
          >
            <FSIcon>
              mdi-clock-start
            </FSIcon>
            <FSTextField
              :rules="[TextRules.required(), DateRules.validateExpression($props.variant)]"
              :editable="$props.editable"
              :hideHeader="true"
              :modelValue="localStartDate"
              @update:modelValue="localStartDateChange"
            />
          </FSRow>
          <FSRow
            align="center-left"
            :wrap="false"
          >
            <FSIcon>
              mdi-clock-end
            </FSIcon>
            <FSTextField
              :rules="[TextRules.required(), DateRules.validateExpression($props.variant)]"
              :editable="$props.editable"
              :hideHeader="true"
              :modelValue="localEndDate"
              @update:modelValue="localEndDateChange"
            />
          </FSRow>
        </template>
        <FSDateTimeRangeField
          v-else-if="localDateSetting === DateSetting.Pick"
          :rules="[DateRules.required()]"
          :editable="$props.editable"
          :hideHeader="true"
          :modelValue="[parseForPicker(localStartDate)!, parseForPicker(localEndDate)!]"
          @update:modelValue="onPickDates"
        />
      </FSRow>
    </FSForm>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref} from "vue";
import _ from "lodash";

import { DateRules, NumberRules, TextRules } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";
import { useRules } from "@dative-gpi/foundation-shared-components/composables";
import { DateSetting } from "@dative-gpi/foundation-shared-domain/models";

import FSSelectDateSetting from "../selects/FSSelectDateSetting.vue";
import FSDateTimeRangeField from "./FSDateTimeRangeField.vue";
import FSNumberField from "./FSNumberField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSTextField from "./FSTextField.vue";
import FSForm from "../FSForm.vue";
import FSIcon from "../FSIcon.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTermField",
  components: {
    FSDateTimeRangeField,
    FSSelectDateSetting,
    FSNumberField,
    FSBaseField,
    FSTextField,
    FSForm,
    FSIcon,
    FSRow
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    variant : {
      type: String as PropType<"default" | "before-after">,
      required: false,
      default: "default"
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    lastPeriod: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:startDate", "update:endDate"],
  setup(props, { emit }) {
    const { parseForPicker,formatFromPicker, formatCurrentForPicker } = useAppTimeZone();
    const { getMessages } = useRules();

    const localDateSetting = ref<DateSetting>(DateSetting.PastDays);
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

    const messages = computed((): string[] => {
      return props.messages ??
        getMessages(props.startDate, props.rules).concat(getMessages(props.endDate, props.rules));
    });

    const localStartDateChange = (value: string) => {
      debouncedStartDate(value);
    };

    const onStartDateChange = (value: string) => {
      localStartDate.value = value;
      if (valid.value) {
        emit("update:startDate", value);
      }
    };

    const debouncedStartDate = _.debounce(onStartDateChange, 1000);

    const localEndDateChange = (value: string) => {
      debouncedEndDate(value);
    };

    const onEndDateChange = (value: string) => {
      localEndDate.value = value;
      if (valid.value) {
        emit("update:endDate", value);
      }
    };

    const debouncedEndDate = _.debounce(onEndDateChange, 1000);

    const localDateSettingChange = (value: DateSetting) => {
      localDateSetting.value = value;
      switch (value) {
        case DateSetting.None:
          return;
        case DateSetting.PastHours:
          localStartDate.value = `now - ${localDateValue.value}h`;
          localEndDate.value = "now";
          break;
        case DateSetting.PastDays:
          localStartDate.value = `now - ${localDateValue.value}d`;
          localEndDate.value = "now";
          break;
        case DateSetting.PastWeeks:
          localStartDate.value = `now - ${localDateValue.value}w`;
          localEndDate.value = "now";
          break;
        case DateSetting.PastMonths:
          localStartDate.value = `now - ${localDateValue.value}M`;
          localEndDate.value = "now";
          break;
        case DateSetting.PastYears:
          localStartDate.value = `now - ${localDateValue.value}y`;
          localEndDate.value = "now";
          break;
        case DateSetting.CurrentHour:
          localStartDate.value = "now/h";
          localEndDate.value = "now";
          break;
        case DateSetting.CurrentDay:
          localStartDate.value = "now/d";
          localEndDate.value = "now";
          break;
        case DateSetting.CurrentWeek:
          localStartDate.value = "now/w";
          localEndDate.value = "now";
          break;
        case DateSetting.CurrentMonth:
          localStartDate.value = "now/M";
          localEndDate.value = "now";
          break;
        case DateSetting.CurrentYear:
          localStartDate.value = "now/y";
          localEndDate.value = "now";
          break;
        case DateSetting.LastDay:
          localStartDate.value = `now - 1d/d`;
          localEndDate.value = "now/d";
          break;
        case DateSetting.LastWeek:
          localStartDate.value = `now - 1w/w`;
          localEndDate.value = "now/w";
          break;
        case DateSetting.LastMonth:
          localStartDate.value = `now - 1M/M`;
          localEndDate.value = "now/M";
          break;
        case DateSetting.LastYear:
          localStartDate.value = `now - 1y/y`;
          localEndDate.value = "now/y";
          break;
        case DateSetting.SinceLastDay:
          localStartDate.value = `now - 1d/d`;
          localEndDate.value = "now";
          break;
        case DateSetting.SinceLastWeek:
          localStartDate.value = `now - 1w/w`;
          localEndDate.value = "now";
          break;
        case DateSetting.SinceLastMonth:
          localStartDate.value = `now - 1M/M`;
          localEndDate.value = "now";
          break;
        case DateSetting.SinceLastYear:
          localStartDate.value = `now - 1y/y`;
          localEndDate.value = "now";
          break;
        case DateSetting.LastPeriod:
          localStartDate.value = "from - to + from";
          localEndDate.value = "from";
          break;
        case DateSetting.MinutesBeforeAfter:
          localStartDate.value = `alertstart - ${localDateValue.value}m`;
          localEndDate.value = `alertend + ${localDateValue.value}m`;
          break;
        case DateSetting.HoursBeforeAfter:
          localStartDate.value = `alertstart - ${localDateValue.value}h`;
          localEndDate.value = `alertend + ${localDateValue.value}h`;
          break;
        case DateSetting.DaysBeforeAfter:
          localStartDate.value = `alertstart - ${localDateValue.value}d`;
          localEndDate.value = `alertend + ${localDateValue.value}d`;
          break;
        case DateSetting.WeeksBeforeAfter:
          localStartDate.value = `alertstart - ${localDateValue.value}w`;
          localEndDate.value = `alertend + ${localDateValue.value}w`;
          break;
        case DateSetting.MinutesBefore:
          localStartDate.value = `alertstart - ${localDateValue.value}m`;
          localEndDate.value = "alertend";
          break;
        case DateSetting.HoursBefore:
          localStartDate.value = `alertstart - ${localDateValue.value}h`;
          localEndDate.value = "alertend";
          break;
        case DateSetting.DaysBefore:
          localStartDate.value = `alertstart - ${localDateValue.value}d`;
          localEndDate.value = "alertend";
          break;
        case DateSetting.WeeksBefore:
          localStartDate.value = `alertstart - ${localDateValue.value}w`;
          localEndDate.value = "alertend";
          break;
        case DateSetting.Expression:
          if (props.variant === "before-after") {
            localStartDate.value = `alertstart - ${localDateValue.value}d`;
            localEndDate.value = "alertend";
          }
          else {
            localStartDate.value = `now - ${localDateValue.value}d`;
            localEndDate.value = "now";
          }
          break;
        case DateSetting.Pick:
          localEndDate.value = formatCurrentForPicker(0);
          localStartDate.value = formatCurrentForPicker(-1);
          break;
      }
      emit("update:startDate", localStartDate.value);
      emit("update:endDate", localEndDate.value);
    };

    const localDateValueChange = (value: number) => {
      localDateValue.value = value ? value : 1;

      switch (localDateSetting.value) {
        case DateSetting.None:
          return;
        case DateSetting.PastHours:
          localStartDate.value = `now - ${localDateValue.value}h`;
          localEndDate.value = "now";
          break;
        case DateSetting.PastDays:
          localStartDate.value = `now - ${localDateValue.value}d`;
          localEndDate.value = "now";
          break;
        case DateSetting.PastWeeks:
          localStartDate.value = `now - ${localDateValue.value}w`;
          localEndDate.value = "now";
          break;
        case DateSetting.PastMonths:
          localStartDate.value = `now - ${localDateValue.value}M`;
          localEndDate.value = "now";
          break;
        case DateSetting.PastYears:
          localStartDate.value = `now - ${localDateValue.value}y`;
          localEndDate.value = "now";
          break;
        case DateSetting.MinutesBeforeAfter:
          localStartDate.value = `alertstart - ${localDateValue.value}m`;
          localEndDate.value = `alertend + ${localDateValue.value}m`;
          break;
        case DateSetting.HoursBeforeAfter:
          localStartDate.value = `alertstart - ${localDateValue.value}h`;
          localEndDate.value = `alertend + ${localDateValue.value}h`;
          break;
        case DateSetting.DaysBeforeAfter:
          localStartDate.value = `alertstart - ${localDateValue.value}d`;
          localEndDate.value = `alertend + ${localDateValue.value}d`;
          break;
        case DateSetting.WeeksBeforeAfter:
          localStartDate.value = `alertstart - ${localDateValue.value}w`;
          localEndDate.value = `alertend + ${localDateValue.value}w`;
          break;
        case DateSetting.MinutesBefore:
          localStartDate.value = `alertstart - ${localDateValue.value}m`;
          localEndDate.value = "alertend";
          break;
        case DateSetting.HoursBefore:
          localStartDate.value = `alertstart - ${localDateValue.value}h`;
          localEndDate.value = "alertend";
          break;
        case DateSetting.DaysBefore:
          localStartDate.value = `alertstart - ${localDateValue.value}d`;
          localEndDate.value = "alertend";
          break;
        case DateSetting.WeeksBefore:
          localStartDate.value = `alertstart - ${localDateValue.value}w`;
          localEndDate.value = "alertend";
          break;
      }
      emit("update:startDate", localStartDate.value);
      emit("update:endDate", localEndDate.value);
    };

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
    };

    const reset = (): void => {
      localStartDate.value = props.startDate;
      localEndDate.value = props.endDate;

      if (props.variant === "before-after") {
        if (props.endDate === "alertend") {
          let match = /^alertstart-([\d]+)([mhdw])$/g.exec(props.startDate.replaceAll(" ", ""));
          if (match != null) {
            localDateValue.value = parseInt(match[1]);
            switch (match[2]) {
              case 'm': {
                localDateSetting.value = DateSetting.MinutesBefore;
                return;
              }
              case 'h': {
                localDateSetting.value = DateSetting.HoursBefore;
                return;
              }
              case 'd': {
                localDateSetting.value = DateSetting.DaysBefore;
                return;
              }
              case 'w': {
                localDateSetting.value = DateSetting.WeeksBefore;
                return;
              }
              default: {
                localDateSetting.value = DateSetting.Expression;
                localDateValue.value = 1;
                return;
              }
            }
          }
        }
        
        if (
          /^alertstart-([\d]+)([mhdw])$/g.test(props.startDate.replaceAll(" ", "")) &&
          /^alertend\+([\d]+)([mhdw])$/g.test(props.endDate.replaceAll(" ", ""))
        ) {
          let startMatch = /^alertstart-([\d]+)([mhdw])$/g.exec(props.startDate.replaceAll(" ", ""));
          let endMatch = /^alertend\+([\d]+)([mhdw])$/g.exec(props.endDate.replaceAll(" ", ""));
          if (startMatch != null && endMatch != null && startMatch[1] === endMatch[1] && startMatch[2] === endMatch[2]) {
            localDateValue.value = parseInt(startMatch[1]);
            switch(startMatch[2]) {
              case 'm': {
                localDateSetting.value = DateSetting.MinutesBeforeAfter;
                return;
              }
              case 'h': {
                localDateSetting.value = DateSetting.HoursBeforeAfter;
                return;
              }
              case 'd': {
                localDateSetting.value = DateSetting.DaysBeforeAfter;
                return;
              }
              case 'w': {
                localDateSetting.value = DateSetting.WeeksBeforeAfter;
                return;
              }
              default: {
                localDateSetting.value = DateSetting.Expression;
                localDateValue.value = 1;
                return;
              }
            }
          }
        }

        localDateSetting.value = DateSetting.Expression;
        localDateValue.value = 1;
        return;
      }

      if (props.lastPeriod && props.endDate === "from" && props.startDate === "from - to + from") {
        localDateSetting.value = DateSetting.LastPeriod;
        return;
      }
      if (props.endDate === "now/d" && props.startDate === "now - 1d/d") {
        localDateSetting.value = DateSetting.LastDay;
        return;
      }
      if (props.endDate === "now/w" && props.startDate === "now - 1w/w") {
        localDateSetting.value = DateSetting.LastWeek;
        return;
      }
      if (props.endDate === "now/M" && props.startDate === "now - 1M/M") {
        localDateSetting.value = DateSetting.LastMonth;
        return;
      }
      if (props.endDate === "now/y" && props.startDate === "now - 1y/y") {
        localDateSetting.value = DateSetting.LastYear;
        return;
      }

      if (props.endDate === "now") {
        let match = /^now-1([dwMy])\/([dwMy])$/g.exec(props.startDate.replaceAll(" ", ""));
        if (match != null) {
          localDateValue.value = 1;
          switch (match[1]) {
            case 'd': {
              localDateSetting.value = DateSetting.SinceLastDay;
              return;
            }
            case 'w': {
              localDateSetting.value = DateSetting.SinceLastWeek;
              return;
            }
            case 'M': {
              localDateSetting.value = DateSetting.SinceLastMonth;
              return;
            }
            case 'y': {
              localDateSetting.value = DateSetting.SinceLastYear;
              return;
            }
            default: {
              localDateSetting.value = DateSetting.Expression;
              return;
            }
          }
        }
        match = /^now-([\d]+)([hdwMy])$/g.exec(props.startDate.replaceAll(" ", ""));
        if (match != null) {
          localDateValue.value = parseInt(match[1]);
          switch (match[2]) {
            case 'h': {
              localDateSetting.value = DateSetting.PastHours;
              return;
            }
            case 'd': {
              localDateSetting.value = DateSetting.PastDays;
              return;
            }
            case 'w': {
              localDateSetting.value = DateSetting.PastWeeks;
              return;
            }
            case 'M': {
              localDateSetting.value = DateSetting.PastMonths;
              return;
            }
            case 'y': {
              localDateSetting.value = DateSetting.PastYears;
              return;
            }
            default: {
              localDateSetting.value = DateSetting.Expression;
              localDateValue.value = 1;
              return;
            }
          }
        }

        match = /^now\/([hdwMy])$/g.exec(props.startDate.replaceAll(" ", ""));
        if (match != null) {
          localDateValue.value = 1;
          switch (match[1]) {
            case 'h': {
              localDateSetting.value = DateSetting.CurrentHour;
              return;
            }
            case 'd': {
              localDateSetting.value = DateSetting.CurrentDay;
              return;
            }
            case 'w': {
              localDateSetting.value = DateSetting.CurrentWeek;
              return;
            }
            case 'M': {
              localDateSetting.value = DateSetting.CurrentMonth;
              return;
            }
            case 'y': {
              localDateSetting.value = DateSetting.CurrentYear;
              return;
            }
            default: {
              localDateSetting.value = DateSetting.Expression;
              return;
            }
          }
        }
      }

      if (parseForPicker(props.endDate) != null && parseForPicker(props.startDate) != null) {
        localDateSetting.value = DateSetting.Pick;
        localDateValue.value = 1;
        return;
      }

      localDateSetting.value = DateSetting.Expression;
      localDateValue.value = 1;
    };

    onMounted(() => {
      reset();
    });

    return {
      localDateSetting,
      localDateValue,
      localStartDate,
      localEndDate,
      pastSettings,
      DateSetting,
      NumberRules,
      DateRules,
      TextRules,
      messages,
      valid,
      localDateSettingChange,
      localDateValueChange,
      localStartDateChange,
      localEndDateChange,
      parseForPicker,
      onPickDates
    };
  }
});
</script>