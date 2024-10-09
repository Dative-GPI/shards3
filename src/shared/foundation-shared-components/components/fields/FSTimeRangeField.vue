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
          :items="daysObject"
          :hideHeader="true"
          :clearable="false"
          :style="style"
          :modelValue="realTime?.startDay ?? 0"
          @update:modelValue="onChangeDayStart"
        />
        <FSClock
          class="fs-time-slot-field-number"
          :editable="$props.editable"
          :color="ColorEnum.Light"
          :slider="false"
          :style="style"
          :modelValue="startTime"
          @update:modelValue="onChangeHourStart"
        />
      </FSRow>
      <FSRow
        :wrap="false"
      >
        <FSSelectField
          class="fs-time-slot-field-select"
          :editable="$props.editable"
          :items="daysObject"
          :hideHeader="true"
          :clearable="false"
          :style="style"
          :modelValue="realTime?.endDay ?? 0"
          @update:modelValue="onChangeDayEnd"
        />
        <FSClock
          class="fs-time-slot-field-number"
          :editable="$props.editable"
          :color="ColorEnum.Light"
          :slider="false"
          :style="style"
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
      {{ modelValue }}
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useTranslations as useTranslationProvider } from "@dative-gpi/bones-ui/composables";
import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { DateType, Days } from "@dative-gpi/foundation-shared-domain/enums";

import FSSelectField from "./FSSelectField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSClock from "../FSClock.vue";
import FSRow from "../FSRow.vue";

import { applyOffset, type DateTimeRange } from "../../tools";

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
      type: Object as PropType<DateTimeRange | null>,
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
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);
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
    
    const daysObject: { id: number; label: string }[]  = Object.keys(Days).reduce((acc, key) => {
      if (isNaN(Number(key))) {
        acc.push({
          id: Days[key],
          label: key
        });
      }
      return acc;
    }, [] as { id: number, label: string }[]);

    const style = computed((): StyleValue => {
      if (!props.editable) {
        return {
          "--fs-time-slot-field-cursor"             : "default",
          "--fs-time-slot-field-border-color"       : lights.base,
          "--fs-time-slot-field-color"              : lights.dark,
          "--fs-time-slot-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-time-slot-field-cursor"             : "text",
        "--fs-time-slot-field-border-color"       : lights.dark,
        "--fs-time-slot-field-color"              : darks.base,
        "--fs-time-slot-field-active-border-color": darks.dark,
        "--fs-time-slot-field-error-color"        : errors.base,
        "--fs-time-slot-field-error-border-color" : errors.base
      };
    });

    const realTime = computed(() => {
      if (props.modelValue) {
        return applyOffset(props.modelValue, false);
      }
      return null;
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
      if (value === 7) {
        if (props.modelValue) {
          emit("update:modelValue",
               {
                 startDay: 7,
                 startHour: props.modelValue.startHour,
                 startMinute: props.modelValue.startMinute,
                 endDay: 7,
                 endHour: props.modelValue.endHour,
                 endMinute: props.modelValue.endMinute,
                 variant: props.modelValue.variant
               }
          );
          return;
        }
        emit("update:modelValue",
             {
               startDay: 7,
               startHour: 0,
               startMinute: 0,
               endDay: 7,
               endHour: 0,
               endMinute: 0,
               variant: DateType.Local
             }
        );
        return;
      }
      if (props.modelValue) {
        if (props.modelValue.endDay === 7) {
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
          return;
        }
        const t = applyOffset({
          startDay: value,
          startHour: props.modelValue.startHour,
          startMinute: props.modelValue.startMinute,
          endDay: props.modelValue.endDay,
          endHour: props.modelValue.endHour,
          endMinute: props.modelValue.endMinute,
          variant: props.modelValue.variant
        }, true);
        emit("update:modelValue", t);
        return;
      }
      emit("update:modelValue",{
        startDay: value,
        startHour: 0,
        startMinute: 0,
        endDay: value,
        endHour: 0,
        endMinute: 0,
        variant: DateType.Local
      });
    };


    const onChangeHourStart = (value: number) => {
      const innerHours = value ? Math.floor(value / (60 * 60 * 1000)) : 0;
      const innerMinutes = value ? Math.floor((value % (60 * 60 * 1000)) / (60 * 1000)) : 0;
      if (realTime.value) {
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
        return;
      }
      emit("update:modelValue", {
        startDay: 0,
        startHour: innerHours,
        startMinute: innerMinutes,
        endDay: 0,
        endHour: 0,
        endMinute: 0,
        variant: props.modelValue?.variant ?? DateType.Local
      });
    }

    const onChangeDayEnd = (value: number) => {
      if (value === 7) {
        if (props.modelValue) {
          emit("update:modelValue",
               {
                 startDay: 7,
                 startHour: props.modelValue.startHour,
                 startMinute: props.modelValue.startMinute,
                 endDay: 7,
                 endHour: props.modelValue.endHour,
                 endMinute: props.modelValue.endMinute
               }
          );
          return;
        }
        emit("update:modelValue",
             {
               startDay: 7,
               startHour: 0,
               startMinute: 0,
               endDay: 7,
               endHour: 0,
               endMinute: 0,
                variant: DateType.Local
             }
        );
        return;
      }
      if (props.modelValue) {
        if (props.modelValue.startDay === 7) {
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
        const t = applyOffset({
          startDay: props.modelValue.startDay,
          startHour: props.modelValue.startHour,
          startMinute: props.modelValue.startMinute,
          endDay: value,
          endHour: props.modelValue.endHour,
          endMinute: props.modelValue.endMinute,
          variant: props.modelValue.variant
        }, true);
        emit("update:modelValue", t);
        return;
      }
      emit("update:modelValue",{
        startDay: value,
        startHour: 0,
        startMinute: 0,
        endDay: value,
        endHour: 0,
        endMinute: 0,
        variant: DateType.Local
      });
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
        return;
      }
      emit("update:modelValue",{
        startDay: 0,
        startHour: 0,
        startMinute: 0,
        endDay: 0,
        endHour: innerHours,
        endMinute: innerMinutes,
        variant: props.modelValue?.variant ?? DateType.Local
      });
    }

    const onUpdateVariant = (value: DateType) => {
      if (realTime.value) {
        const t = applyOffset({
          startDay: realTime.value.startDay,
          startHour: realTime.value.startHour,
          startMinute: realTime.value.startMinute,
          endDay: realTime.value.endDay,
          endHour: realTime.value.endHour,
          endMinute: realTime.value.endMinute,
          variant: value
        }, true);
        emit("update:modelValue", {...props.modelValue, variant: value});
        return
      }
      emit("update:modelValue",{
        startDay: 0,
        startHour: 0,
        startMinute: 0,
        endDay: 0,
        endHour: 0,
        endMinute: 0,
        variant: value
      });
    };

    return {
      dateTypeItems,
      daysObject,
      validateOn,
      ColorEnum,
      startTime,
      realTime,
      messages,
      DateType,
      endTime,
      style,
      onChangeHourStart,
      onChangeDayStart,
      onChangeHourEnd,
      onUpdateVariant,
      onChangeDayEnd
    };
  }
});
</script>