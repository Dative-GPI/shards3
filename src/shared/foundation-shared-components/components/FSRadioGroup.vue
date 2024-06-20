<template>
  <FSCol
    width="hug"
    :gap="$props.gap"
  >
    <FSRadio
      v-for="(item, index) in $props.values"
      :selected="isSelected(item.value)"
      :description="item.description"
      :editable="$props.editable"
      :color="$props.color"
      :label="item.label"
      :item="item.item"
      :key="index"
      :modelValue="item.value"
      @update:modelValue="onToggle"
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
    </FSRadio>
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
      type: Array as PropType<{ value: string | boolean | number, label?: string, description?: string, item: any | null }[]>,
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