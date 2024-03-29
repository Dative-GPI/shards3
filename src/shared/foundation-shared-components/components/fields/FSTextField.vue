<template>
  <FSCol>
    <slot v-if="!$props.hideHeader" name="label">
      <FSRow
        height="16px"
        :wrap="false"
      >
        <FSSpan
          v-if="$props.label"
          class="fs-text-field-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-text-field-label"
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
          class="fs-text-field-messages"
          font="text-overline"
          :style="style"
        >
          {{ messages.join(", ") }}
        </FSSpan>
      </FSRow>
    </slot>
    <v-text-field
      class="fs-text-field"
      clearIcon="mdi-close"
      variant="outlined"
      :style="style"
      :type="$props.type"
      :hideDetails="true"
      :readonly="!$props.editable"
      :clearable="$props.editable && !!$props.modelValue"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      @blur="blurred = true"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </v-text-field>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-text-field-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTextField",
  components: {
    FSSpan,
    FSCol,
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
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | undefined } => {
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

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    return {
      validateOn,
      messages,
      blurred,
      slots,
      style
    };
  }
});
</script>