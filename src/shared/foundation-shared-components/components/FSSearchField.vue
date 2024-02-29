<template>
  <FSTextField
    :label="$props.label"
    :description="$props.description"
    :color="$props.color"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :placeholder="$tr('ui.search.placeholder', 'Search...')"
    @keydown.enter="$emit('update:modelValue', innerValue)"
    v-model="innerValue"
    v-bind="$attrs"
  >
    <template v-if="$props.prependInnerIcon" #prepend-inner>
      <slot name="prepend-inner">
        <FSButton
          variant="icon"
          :icon="$props.prependInnerIcon"
          :editable="$props.editable"
          :color="ColorEnum.Dark"
          @click="$emit('update:modelValue', innerValue)"
        />
      </slot>
    </template>
    <template v-if="!$props.instant" #append>
      <slot name="append">
        <FSButton
          :prependIcon="$props.buttonPrependIcon"
          :label="$props.buttonLabel"
          :appendIcon="$props.buttonAppendIcon"
          :variant="$props.buttonVariant"
          :color="$props.buttonColor"
          :editable="$props.editable"
          @click="$emit('update:modelValue', innerValue)"
        />
      </slot>
    </template>
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </FSTextField>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSTextField from "./FSTextField.vue";
import FSButton from "./FSButton.vue";

export default defineComponent({
  name: "FSSearchField",
  components: {
    FSTextField,
    FSButton
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
    prependInnerIcon: {
      type: String,
      required: false,
      default: "mdi-magnify"
    },
    buttonPrependIcon: {
      type: String,
      required: false,
      default: null
    },
    buttonLabel: {
      type: String,
      required: false,
      default: null
    },
    buttonAppendIcon: {
      type: String,
      required: false,
      default: null
    },
    buttonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    instant: {
      type: Boolean,
      required: false,
      default: true
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const innerValue = ref(props.modelValue);

    watch(innerValue, () => {
      if (props.instant) {
        emit("update:modelValue", innerValue.value);
      }
    });

    return {
      ColorEnum,
      innerValue
    };
  }
});
</script>