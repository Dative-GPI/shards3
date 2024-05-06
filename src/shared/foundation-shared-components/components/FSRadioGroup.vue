<template>
  <FSCol
    width="hug"
    :gap="$props.gap"
  >
    <FSRadio
      v-for="(item, index) in $props.values"
      :key="index"
      :label="item.label"
      :description="item.description"
      :selected="isSelected(item.value)"
      :color="$props.color"
      :editable="$props.editable"
      :modelValue="item.value"
      @update:modelValue="onToggle"
    />
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRadio from "./FSRadio.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSRadioGroup",
  components: {
    FSRadio,
    FSCol
  },
  props: {
    gap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "8px"
    },
    values: {
      type: Array as PropType<{ value: string | boolean | number, label?: string, description?: string }[]>,
      required: true,
      default: null
    },
    modelValue: {
      type: [String, Boolean, Number],
      required: false,
      default: 0
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const isSelected = (item: String | Boolean | Number): boolean => {
      return item == props.modelValue;
    };

    const onToggle = (item: String | Boolean | Number): void => {
      if (item != props.modelValue) {
        emit("update:modelValue", item);
      }
    };

    return {
      isSelected,
      onToggle
    };
  }
});
</script>