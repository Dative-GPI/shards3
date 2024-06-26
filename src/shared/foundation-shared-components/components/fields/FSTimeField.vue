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
      <FSNumberField
        :validationValue="$props.modelValue"
        :editable="$props.editable"
        :validateOn="validateOn"
        :rules="$props.rules"
        :hideHeader="true"
        :messages="messages"
        :modelValue="innerTime"
        @update:modelValue="onSubmitValue"
        v-bind="$attrs"
      >
        <template
          v-for="(_, name) in numberSlots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="name"
            v-bind="slotData"
          />
        </template>
      </FSNumberField>
      <FSSelectField
        class="fs-time-field-select"
        :editable="$props.editable"
        :hideHeader="true"
        :clearable="false"
        :items="timeScale"
        :modelValue="selectedUnit.id"
        @update:modelValue="onSubmitTimeScale"
      >
        <template
          v-for="(_, name) in selectSlots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="name"
            v-bind="slotData"
          />
        </template>
      </FSSelectField>
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent, ref } from "vue";

import { useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { getTimeScaleIndex, timeScale } from "@dative-gpi/foundation-shared-components/utils";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSNumberField from "./FSNumberField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTimeField",
  components: {
    FSNumberField,
    FSSelectField,
    FSBaseField,
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
      type: Number as PropType<number | null>,
      required: false,
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
    const { validateOn, getMessages } = useRules();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);
    
    const innerTime = ref(0);
    const selectedUnit = ref(timeScale[0]);

    if (props.modelValue) {
      if (getTimeScaleIndex(props.modelValue) !== 0) {
        selectedUnit.value = timeScale[getTimeScaleIndex(props.modelValue)];
        innerTime.value = props.modelValue / selectedUnit.value.id;
      }
      else {
        innerTime.value = props.modelValue;
      }
    }

    const style = computed((): { [key: string] : string | null | undefined } => {
      if (!props.editable) {
        return {
          "--fs-time-field-cursor"             : "default",
          "--fs-time-field-border-color"       : lights.base,
          "--fs-time-field-color"              : lights.dark,
          "--fs-time-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-time-field-cursor"             : "text",
        "--fs-time-field-border-color"       : lights.dark,
        "--fs-time-field-color"              : darks.base,
        "--fs-time-field-active-border-color": darks.dark,
        "--fs-time-field-error-color"        : errors.base,
        "--fs-time-field-error-border-color" : errors.base
      };
    });

    const numberSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("number-")).reduce((acc, key) => {
        acc[key.substring("number-".length)] = slots[key];
        return acc;
      }, {});
    });

    const selectSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("select-")).reduce((acc, key) => {
        acc[key.substring("select-".length)] = slots[key];
        return acc;
      }, {});
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onSubmitValue = (value: number): void => {
      innerTime.value = value;
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    const onSubmitTimeScale = (value: number): void => {
      selectedUnit.value = timeScale.find((item) => item.id === value);
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    return {
      selectedUnit,
      numberSlots,
      selectSlots,
      validateOn,
      innerTime,
      timeScale,
      messages,
      style,
      onSubmitTimeScale,
      onSubmitValue
    };
  }
});
</script>
