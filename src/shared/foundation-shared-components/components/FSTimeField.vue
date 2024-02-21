<template>    
  <FSRow height="fill">
      <FSNumberField
        class="fs-time-field-number"
        :label="$props.label"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :editable="$props.editable"
        :description="$props.description"
        :clearable="false"
        :modelValue="innerTime"
        @update:modelValue="onSubmitValue"
      >
        <template v-if="!$props.hideHeader" #label>
          <slot name="label">
            <FSRow :wrap="false">
              <FSSpan
                v-if="$props.label"
                class="fs-time-field-label"
                font="text-overline"
                :style="style"
              >
                {{ $props.label }}
              </FSSpan>
              <FSSpan
                v-if="$props.label && $props.required"
                class="fs-time-field-label"
                style="margin-left: -8px;"
                font="text-overline"
                :ellipsis="false"
                :style="style"
              >
                *
              </FSSpan>
              <v-spacer style="min-width: 40px;" />
              <FSSpan
                v-if="messages.length > 0"
                class="fs-time-field-messages"
                font="text-overline"
                :style="style"
              >
                {{ messages.join(", ") }}
              </FSSpan>
            </FSRow>
          </slot>
        </template>
        <template #append> 
          <FSSelectField
            class="fs-time-field-select"
            :items="timeScale"
            :clearable="false"
            :hideHeader="true"
            :required="$props.required"
            :editable="$props.editable"
            :modelValue="selectedUnit.id"
            @update:modelValue="onSubmitTimeScale"
          />
        </template>
      </FSNumberField>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, ref,  PropType } from "vue";

import { getTimeScaleIndex, timeScale } from "@dative-gpi/foundation-shared-components/utils";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSNumberField from "./FSNumberField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSRow from "./FSRow.vue";
import FSCol from "./FSCol.vue";
import FSSpan from "./FSSpan.vue";

export default defineComponent({
  name: "FSTimeField",
  components: {
    FSNumberField,
    FSSelectField,
    FSRow,
    FSCol,
    FSSpan
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
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

    /**
     * @description: Returns the style for the time field
     */
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

    /**
     * @description: Returns the error messages for the time field
     */
    const messages = computed((): string[] => {
      const messages = [];
      for (const rule of props.rules) {
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
