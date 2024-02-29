<template>
  <FSCol>
    <slot v-if="!$props.hideHeader" name="label">
      <FSRow :wrap="false">
        <FSSpan
          v-if="$props.label"
          class="fs-select-field-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-select-field-label"
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
          class="fs-select-field-messages"
          font="text-overline"
          :style="style"
        >
          {{ messages.join(", ") }}
        </FSSpan>
      </FSRow>
    </slot>
    <v-select
      class="fs-select-field"
      menuIcon="mdi-chevron-down"
      clearIcon="mdi-close"
      variant="outlined"
      :hideDetails="true"
      :items="$props.items"
      :itemTitle="$props.itemTitle"
      :itemValue="$props.itemValue"
      :readonly="!$props.editable"
      :clearable="$props.editable && $props.clearable"
      :error="messages.length > 0"
      :style="style"
      :modelValue="$props.modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </v-select>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-select-field-description"
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

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSSelectField",
  components: {
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    itemValue: {
      type: String,
      required: false,
      default: "id"
    },
    itemTitle: {
      type: String,
      required: false,
      default: "label"
    },
    modelValue: {
      type: [Array, String, Number] as PropType<(string | number)[] | string | number>,
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
    clearable: {
      type: Boolean,
      required: false,
      default: true
    },
    rules: {
      type: Array as PropType<Function[]>,
      required: false,
      default: () => []
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getColors } = useColors();
    const { slots } = useSlots();
    
    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-select-field-cursor"             : "default",
          "--fs-select-field-border-color"       : lights.base,
          "--fs-select-field-color"              : lights.dark,
          "--fs-select-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-select-field-cursor"             : "pointer",
        "--fs-select-field-border-color"       : lights.dark,
        "--fs-select-field-color"              : darks.base,
        "--fs-select-field-active-border-color": darks.dark,
        "--fs-select-field-error-color"        : errors.base,
        "--fs-select-field-error-border-color" : errors.base
      };
    });

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
      messages,
      slots,
      style
    };
  }
});
</script>