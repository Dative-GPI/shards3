<template>
  <FSCol>
    <slot v-if="!$props.hideHeader" name="label">
      <FSRow :wrap="false">
        <FSSpan
          v-if="$props.label"
          class="fs-autocomplete-field-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-autocomplete-field-label"
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
          class="fs-autocomplete-field-messages"
          font="text-overline"
          :style="style"
        >
          {{ messages.join(", ") }}
        </FSSpan>
      </FSRow>
    </slot>
    <v-autocomplete
      menuIcon="mdi-chevron-down"
      clearIcon="mdi-close"
      variant="outlined"
      :style="style"
      :class="classes"
      :hideDetails="true"
      :items="$props.items"
      :autoSelectFirst="true"
      :multiple="$props.multiple"
      :itemTitle="$props.itemTitle"
      :itemValue="$props.itemValue"
      :readonly="!$props.editable"
      :clearable="$props.editable && !!$props.modelValue"
      :returnObject="$props.returnObject"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.modelValue"
      @update:modelValue="onUpdate"
      @blur="blurred = true"
      v-model:search="innerSearch"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </v-autocomplete>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-autocomplete-field-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";

import { useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteField",
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
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    returnObject: {
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
  emits: ["update:modelValue", "update:search"],
  setup: (props, { emit }) => {
    const { validateOn, blurred, getMessages } = useRules();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const innerSearch = ref("");

    const style = computed((): { [key: string] : string | undefined } => {
      if (!props.editable) {
        return {
          "--fs-autocomplete-field-cursor"             : "default",
          "--fs-autocomplete-field-border-color"       : lights.base,
          "--fs-autocomplete-field-color"              : lights.dark,
          "--fs-autocomplete-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-autocomplete-field-cursor"             : "text",
        "--fs-autocomplete-field-border-color"       : lights.dark,
        "--fs-autocomplete-field-color"              : darks.base,
        "--fs-autocomplete-field-active-border-color": darks.dark,
        "--fs-autocomplete-field-error-color"        : errors.base,
        "--fs-autocomplete-field-error-border-color" : errors.base
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-autocomplete-field"];
      if (props.multiple) {
        classNames.push("fs-autocomplete-multiple-field");
      }
      return classNames;
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onUpdate = (value: string[] | string) => {
      emit('update:modelValue', value);
      innerSearch.value = "";
    };

    watch(innerSearch, () => {
      emit("update:search", innerSearch.value);
    });

    return {
      validateOn,
      messages,
      blurred,
      slots,
      style,
      classes,
      innerSearch,
      onUpdate
    };
  }
});
</script>