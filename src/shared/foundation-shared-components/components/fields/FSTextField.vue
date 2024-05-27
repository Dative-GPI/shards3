<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :messages="messages"
  >
    <v-text-field
      class="fs-text-field"
      variant="outlined"
      :style="style"
      :type="$props.type"
      :hideDetails="true"
      :readonly="!$props.editable"
      :clearable="$props.clearable && $props.editable && !!$props.modelValue"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      @blur="blurred = true"
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
        <FSButton
          v-if="$props.clearable && $props.editable && !!$props.modelValue"
          icon="mdi-close"
          variant="icon"
          :color="ColorEnum.Dark"
          @click="$emit('update:modelValue', null)"
        />
      </template>
    </v-text-field>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSBaseField from "./FSBaseField.vue";
import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSTextField",
  components: {
    FSBaseField,
    FSButton
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
    type: {
      type: String as PropType<"text" | "password" | "number">,
      required: false,
      default: "text"
    },
    modelValue: {
      type: String as PropType<string | null>,
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
    const { validateOn, blurred, getMessages } = useRules();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | null | undefined } => {
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
        "--fs-text-field-error-border-color" : errors.base
      };
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    return {
      validateOn,
      ColorEnum,
      messages,
      blurred,
      style
    };
  }
});
</script>