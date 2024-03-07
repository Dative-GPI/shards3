<template>
  <FSNumberField
    class="fs-time-field"
    :editable="$props.editable"
    :modelValue="innerTime"
    @update:modelValue="onSubmitValue"
    v-bind="$attrs"
  >
    <template #append> 
      <FSSelectField
        class="fs-time-field-select"
        :editable="$props.editable"
        :hideHeader="true"
        :clearable="false"
        :items="timeScale"
        :modelValue="selectedUnit.id"
        @update:modelValue="onSubmitTimeScale"
      />
    </template>
  </FSNumberField>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { getTimeScaleIndex, timeScale } from "@dative-gpi/foundation-shared-components/utils";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSNumberField from "./fields/FSNumberField.vue";
import FSSelectField from "./fields/FSSelectField.vue";

export default defineComponent({
  name: "FSTimeField",
  components: {
    FSNumberField,
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number,
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
    const innerTime = ref(props.modelValue);
    const selectedUnit = ref(timeScale[0]);

    if (getTimeScaleIndex(props.modelValue) !== 0) {
      selectedUnit.value = timeScale[getTimeScaleIndex(props.modelValue)];
      innerTime.value = props.modelValue / selectedUnit.value.id;
    }

    const errors = useColors().getColors(ColorEnum.Error);
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
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

    const onSubmitValue = (value: number): void => {
      innerTime.value = value;
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    const onSubmitTimeScale = (value: number): void => {
      selectedUnit.value = timeScale.find((item) => item.id === value);
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    return {
      style,
      innerTime,
      selectedUnit,
      timeScale,
      onSubmitValue,
      onSubmitTimeScale,
    };
  }
});
</script>
