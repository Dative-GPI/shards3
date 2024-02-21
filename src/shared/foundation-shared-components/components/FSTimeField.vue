<template>    
  <FSRow height="fill">
    <FSCol class="fs-time-field-number">
      <FSNumberField
        class="fs-time-field-number"
        :label="$tr('ui.time-field.value', 'Value')"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :editable="$props.editable"
        :description="$props.description"
        :clearable="false"
        :modelValue="innerTime"
        @update:modelValue="onSubmitValue"
      />  
    </FSCol>
    <FSSelectField
      class="fs-time-field-select"
      :label="$tr('ui.time-field.time-unit', 'Time Unit')"
      :items="timeScale"
      :clearable="false"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      :modelValue="selectedUnit.id"
      @update:modelValue="onSubmitTimeScale"
    />
  </FSRow>
  <FSSpan
      v-if="messages.length > 0"
      class="fs-text-field-messages"
      font="text-overline"
      :style="style"
    >
      {{ messages.join(", ") }}
    </FSSpan>
</template>

<script lang="ts">
import { computed, defineComponent, ref,  PropType } from "vue";

import { getTimeScaleIndex, timeScale } from "@dative-gpi/foundation-shared-components/utils";
import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSNumberField from "./FSNumberField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSRow from "./FSRow.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSTimeField",
  components: {
    FSNumberField,
    FSSelectField,
    FSRow,
    FSCol
  },
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: ""
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
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    rules: {
      type: Array as PropType<Function[]>,
      required: false,
      default: () => []
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const innerTime = ref(props.modelValue);
    const selectedUnit = ref(timeScale[0]);

    const bestTimeScaleIndex: number = getTimeScaleIndex(props.modelValue);

    if (bestTimeScaleIndex !== 0) {
      selectedUnit.value = timeScale[bestTimeScaleIndex];
      innerTime.value = props.modelValue / selectedUnit.value.id;
    }

    const onSubmitValue = (value: number): void => {
      innerTime.value = value;
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    const onSubmitTimeScale = (value: number): void => {
      selectedUnit.value = timeScale.find((item) => item.id === value);
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    const errors = useColors().getColors(ColorEnum.Error);
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-text-field-cursor"             : "default",
          "--fs-text-field-border-color"       : lights.base,
          "--fs-text-field-color"              : lights.dark,
          "--fs-text-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-text-field-cursor"             : "text",
        "--fs-text-field-border-color"       : lights.dark,
        "--fs-text-field-color"              : darks.base,
        "--fs-text-field-active-border-color": darks.dark,
        "--fs-text-field-error-color"        : errors.base,
        "--fs-text-field-error-border-color" : errors.base
      };
    });

    const messages = computed((): string[] => {
      const messages = [];
      for (const rule of props.rules) {
        console.log("Props.ModelValue" + props.modelValue)
        const message = rule(props.modelValue ?? "");
        if (typeof(message) === "string") {
          messages.push(message);
        }
      }
      return messages;
    });

    return {
      onSubmitValue,
      onSubmitTimeScale,
      innerTime,
      selectedUnit,
      timeScale,
      messages,
      style
    };
  }
});
</script>
