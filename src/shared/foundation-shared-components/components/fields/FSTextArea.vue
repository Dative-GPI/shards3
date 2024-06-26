<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :messages="messages"
  >
    <v-textarea
      class="fs-text-area"
      variant="outlined"
      :style="style"
      :class="classes"
      :rows="$props.rows"
      :persistentClear="true"
      :hideDetails="true"
      :noResize="true"
      :autoGrow="$props.autoGrow"
      :readonly="!$props.editable"
      :clearable="$props.clearable && $props.editable && !!$props.modelValue"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
      <template
        #clear
      >
        <FSCol
          align="center-center"
        >
          <FSButton
            v-if="$props.clearable && $props.editable && !!$props.modelValue"
            icon="mdi-close"
            variant="icon"
            :color="ColorEnum.Dark"
            @click="$emit('update:modelValue', null)"
          />
        </FSCol>
      </template>
    </v-textarea>
  </FSBaseField>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import { useColors, useBreakpoints, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSBaseField from "./FSBaseField.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSTextArea",
  components: {
    FSBaseField,
    FSCol
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
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    rows: {
      type: Number,
      required: false,
      default: 1
    },
    autoGrow: {
      type: Boolean,
      required: false,
      default: true
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
    clearable: {
      type: Boolean,
      required: false,
      default: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { validateOn, getMessages } = useRules();
    const { isMobileSized } = useBreakpoints();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | null | undefined } => {
      let height: string | undefined = undefined;
      let fieldHeight: string | undefined = undefined;
      if (!props.autoGrow) {
        const base = isMobileSized.value ? 34 : 38;
        const row = isMobileSized.value ? 14 : 16;
        if (props.rows > 1) {
          height = `${base + (props.rows - 1) * row}px`;
        }
        else {
          height = `${base}px`;
        }
        fieldHeight = `${props.rows * row}px`;
      }
      if (!props.editable) {
        return {
          "--fs-text-area-cursor"             : "default",
          "--fs-text-area-border-color"       : lights.base,
          "--fs-text-area-color"              : lights.dark,
          "--fs-text-area-active-border-color": lights.base,
          "--fs-text-area-height"             : height,
          "--fs-text-area-field-height"       : fieldHeight
        };
      }
      return {
        "--fs-text-area-cursor"             : "text",
        "--fs-text-area-border-color"       : lights.dark,
        "--fs-text-area-color"              : darks.base,
        "--fs-text-area-active-border-color": darks.dark,
        "--fs-text-area-error-border-color" : errors.base,
        "--fs-text-area-height"             : height,
        "--fs-text-area-field-height"       : fieldHeight
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-text-area"];
      if (props.autoGrow) {
        classNames.push("fs-text-area-auto-grow");
      }
      return classNames;
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    return {
      validateOn,
      ColorEnum,
      messages,
      classes,
      style
    };
  }
});
</script>