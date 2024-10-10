<template>
  <FSBaseField
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :label="$props.label"
    :messages="messages"
  >
    <FSRow>
      <FSRow
        :wrap="false"
      >
        <FSSelectField
          :validationValue="$props.modelValue"
          :editable="$props.editable"
          :validateOn="validateOn"
          :rules="$props.rules"
          :items="daysItems"
          :hideHeader="true"
          :clearable="false"
          :modelValue="realTime?.startDay ?? 0"
          @update:modelValue="onChangeDayStart"
        />
        <FSClock
          :editable="$props.editable"
          :color="ColorEnum.Light"
          :slider="false"
          :modelValue="startTime"
          @update:modelValue="onChangeHourStart"
        />
      </FSRow>
      <FSRow
        :wrap="false"
      >
        <FSSelectField
          :editable="$props.editable"
          :items="daysItems"
          :hideHeader="true"
          :clearable="false"
          :modelValue="realTime?.endDay ?? 0"
          @update:modelValue="onChangeDayEnd"
        />
        <FSClock
          :editable="$props.editable"
          :color="ColorEnum.Light"
          :slider="false"
          :modelValue="endTime"
          @update:modelValue="onChangeHourEnd"
        />
      </FSRow>
      <FSSelectField
        v-if="$props.showVariant"
        width="hug"
        :label="$tr('ui.common.type', 'Type')"
        :items="dateTypeItems"
        :hideHeader="true"
        :clearable="false"
        :modelValue="modelValue?.variant ?? DateType.Local"
        @update:modelValue="onUpdateVariant"
      />
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationProvider } from "@dative-gpi/bones-ui/composables";
import { useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { DateType, Days } from "@dative-gpi/foundation-shared-domain/enums";
import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";

import FSSelectField from "./FSSelectField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSClock from "../FSClock.vue";
import FSRow from "../FSRow.vue";

import { applyOffset, dayLabel, type DateTimeRange } from "../../tools";

export default defineComponent({
  name: "FSTimeRangeField",
  components: {
    FSSelectField,
    FSBaseField,
    FSClock,
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
    modelValue: {
      type: Object as PropType<DateTimeRange>,
      required: true,
      default: null
    },
    hideHeader: {
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
    },
    showVariant: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { $tr } = useTranslationProvider();
    const { validateOn, getMessages } = useRules();

    const dateTypeItems = [
      {
        id: DateType.Local,
        label: $tr('ui.common.local', 'Local')
      },
      {
        id: DateType.UTC,
        label: $tr('ui.common.utc', 'UTC')
      }
    ];

    const daysItems = computed(()=>{
      return getEnumEntries(Days).map((f)=>{
        return {
          id: f.value as number,
          label: dayLabel(f.value)
        }
      })
    });

    const realTime = computed(() => {
      return applyOffset(props.modelValue, false);
    });

    const startTime = computed((): number => {
      if (realTime.value) {
        return realTime.value.startHour * 60 * 60 * 1000 + realTime.value.startMinute * 60 * 1000;
      }
      return 0;
    });

    const endTime = computed((): number => {
      if (realTime.value) {
        return realTime.value.endHour * 60 * 60 * 1000 + realTime.value.endMinute * 60 * 1000;
      }
      return 0;
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onChangeDayStart = (value: number) => {
      if (value === Days.AllDays) {
        emit("update:modelValue",
             {
               startDay: value,
               startHour: props.modelValue.startHour,
               startMinute: props.modelValue.startMinute,
               endDay: value,
               endHour: props.modelValue.endHour,
               endMinute: props.modelValue.endMinute,
               variant: props.modelValue.variant
             }
        );
      }
      else {
        const t = applyOffset({
          startDay: value,
          startHour: realTime.value.startHour,
          startMinute: realTime.value.startMinute,
          endDay: props.modelValue.endDay == Days.AllDays ? value : realTime.value.endDay,
          endHour: realTime.value.endHour,
          endMinute: realTime.value.endMinute,
          variant: realTime.value.variant
        }, true); 
        emit("update:modelValue",t);
      }
    };


    const onChangeHourStart = (value: number) => {
      const innerHours = value ? Math.floor(value / (60 * 60 * 1000)) : 0;
      const innerMinutes = value ? Math.floor((value % (60 * 60 * 1000)) / (60 * 1000)) : 0;
      const t = {
        startDay: realTime.value.startDay,
        startHour: innerHours,
        startMinute: innerMinutes,
        endDay: realTime.value.endDay,
        endHour: realTime.value.endHour,
        endMinute: realTime.value.endMinute,
        variant: realTime.value.variant
      };
      const newTime = applyOffset(t, true);
      emit("update:modelValue", newTime);
    }

    const onChangeDayEnd = (value: number) => {

      if (value === Days.AllDays) {
        emit("update:modelValue",{
          startDay: value,
          startHour: props.modelValue.startHour,
          startMinute: props.modelValue.startMinute,
          endDay: value,
          endHour: props.modelValue.endHour,
          endMinute: props.modelValue.endMinute,
          variant: props.modelValue.variant
        });
        return;
      }
      else {
        const t = applyOffset({
          startDay: props.modelValue.startDay == Days.AllDays ? value : realTime.value.startDay,
          startHour: realTime.value.startHour,
          startMinute: realTime.value.startMinute,
          endDay: value,
          endHour: realTime.value.endHour,
          endMinute: realTime.value.endMinute,
          variant: realTime.value.variant
        }, true);
        emit("update:modelValue", t);
      }
    };

    const onChangeHourEnd = (value: number) => {
      const innerHours = value ? Math.floor(value / (60 * 60 * 1000)) : 0;
      const innerMinutes = value ? Math.floor((value % (60 * 60 * 1000)) / (60 * 1000)) : 0;
      if (realTime.value) {
        const t = {
          startDay: realTime.value.startDay,
          startHour: realTime.value.startHour,
          startMinute: realTime.value.startMinute,
          endDay: realTime.value.endDay,
          endHour: innerHours,
          endMinute: innerMinutes,
          variant: realTime.value.variant
        };
        const newTime = applyOffset(t, true);
        emit("update:modelValue", newTime);
      }
    }

    const onUpdateVariant = (value: DateType) => {
      const t = applyOffset({
        startDay: realTime.value.startDay,
        startHour: realTime.value.startHour,
        startMinute: realTime.value.startMinute,
        endDay: realTime.value.endDay,
        endHour: realTime.value.endHour,
        endMinute: realTime.value.endMinute,
        variant: value
      }, true);
      emit("update:modelValue", t );
    };

    return {
      dateTypeItems,
      validateOn,
      daysItems,
      ColorEnum,
      startTime,
      realTime,
      messages,
      DateType,
      endTime,
      onChangeHourStart,
      onChangeDayStart,
      onChangeHourEnd,
      onUpdateVariant,
      onChangeDayEnd
    };
  }
});
</script>