<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :messages="messages"
  >
    <FSRow>
      <FSRow
        :wrap="false"
      >
        <FSSelectField
          :editable="$props.editable"
          :items="daysObject"
          :hideHeader="true"
          :clearable="false"
          :style="style"
          :rules="$props.rules"
          :validateOn="validateOn"
          :validationValue="$props.modelValue"
          :modelValue="dayStart"
          @update:modelValue="onChangeDayStart"
        />
        <FSClock
          class="fs-time-slot-field-number"
          :editable="$props.editable"
          :color="ColorEnum.Light"
          :slider="false"
          :style="style"
          :modelValue="$props.modelValue[0][1]"
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
          :modelValue="dayEnd"
          @update:modelValue="onChangeDayEnd"
        />
        <FSClock
          class="fs-time-slot-field-number"
          :editable="$props.editable"
          :color="ColorEnum.Light"
          :slider="false"
          :style="style"
          :modelValue="$props.modelValue[1][1]"
          @update:modelValue="onChangeHourEnd"
        />
      </FSRow>
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { Days } from "@dative-gpi/foundation-shared-domain/models";

import FSSelectField from "./FSSelectField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSClock from "../FSClock.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTimeSlotField",
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
      type: Array as PropType<number[][] | null>,
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { validateOn, blurred, getMessages } = useRules();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);
    
    const daysObject: { id: number; label: string }[]  = Object.keys(Days).reduce((acc, key) => {
      if (isNaN(Number(key))) {
        acc.push({
          id: Days[key],
          label: key
        });
      }
      return acc;
    }, [] as { id: number, label: string }[]);

    const style = computed((): { [key: string] : string | undefined } => {
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

    const dayStart = computed((): number => {
      if (props.modelValue) {
        return props.modelValue[1][0] === 7 ? 7 : props.modelValue[0][0];
      }
      return 0;
    });

    const dayEnd = computed((): number => {
      if (props.modelValue) {
        return props.modelValue[0][0] === 7 ? 7 : props.modelValue[1][0];
      }
      return 0;
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onChangeDayStart = (value: number) => {
      if (value === 7) {
        if (props.modelValue) {
          emit("update:modelValue", [[7, props.modelValue[0][1]], [7, props.modelValue[1][1]]]);
          return;
        }
        emit("update:modelValue", [[7, 0], [7, 0]]);
        return;
      }
      if (props.modelValue) {
        if (props.modelValue[1][0] === 7) {
          emit("update:modelValue", [[value, props.modelValue[0][1]], [value, props.modelValue[1][1]]]);
          return;
        }
        emit("update:modelValue", [[value, props.modelValue[0][1]], props.modelValue[1]]);
        return;
      }
      emit("update:modelValue", [[value, 0], [value, 0]]);
    };

    const onChangeHourStart = (value: number) => {
      if (props.modelValue) {
        emit("update:modelValue", [[props.modelValue[0][0], value], props.modelValue[1]]);
        return;
      }
      emit("update:modelValue", [[0, value], [0, 0]]);
    };

    const onChangeDayEnd = (value: number) => {
      if (value === 7) {
        if (props.modelValue) {
          emit("update:modelValue", [[7, props.modelValue[0][1]], [7, props.modelValue[1][1]]]);
          return;
        }
        emit("update:modelValue", [[7, 0], [7, 0]]);
        return;
      }
      if (props.modelValue) {
        if (props.modelValue[0][0] === 7) {
          emit("update:modelValue", [[value, props.modelValue[0][1]], [value, props.modelValue[1][1]]]);
          return;
        }
        emit("update:modelValue", [props.modelValue[0], [value, props.modelValue[1][1]]]);
        return;
      }
      emit("update:modelValue", [[value, 0], [value, 0]]);
    };

    const onChangeHourEnd = (value: number) => {
      if (props.modelValue) {
        emit("update:modelValue", [props.modelValue[0], [props.modelValue[1][0], value]]);
        return;
      }
      emit("update:modelValue", [[0, 0], [0, value]]);
    };

    return {
      daysObject,
      validateOn,
      ColorEnum,
      dayStart,
      messages,
      blurred,
      dayEnd,
      style,
      onChangeHourStart,
      onChangeDayStart,
      onChangeHourEnd,
      onChangeDayEnd
    };
  }
});
</script>