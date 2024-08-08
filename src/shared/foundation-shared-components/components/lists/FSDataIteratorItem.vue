<template>
  <FSCard
    class="fs-data-iterator-item"
    padding="12px"
    width="100%"
    :color="$props.itemColor"
    :variant="variant"
    :style="style"
  >
    <FSCol>
      <slot
        name="item.top"
        v-bind="{ item: $props.item }"
      />
      <FSRow
        v-for="(header, index) in $props.headers"
        align="center-left"
        :wrap="false"
        :key="index"
      >
        <slot
          :name="`header.${header.value}`"
          v-bind="{ header }"
        >
          <FSRow
            align="center-left"
          >
            <FSText
              font="text-button"
            >
              {{ header.text }}
            </FSText>
          </FSRow>
        </slot>
        <slot
          :name="`item.${header.value}`"
          v-bind="{ item: $props.item }"
        >
          <FSRow
            align="center-left"
          >
            <FSText
              v-if="header.value"
            >
              {{ $props.item[header.value] }}
            </FSText>
          </FSRow>
        </slot>
      </FSRow>
      <slot
        name="item.bottom"
        v-bind="{ item: $props.item }"
      />
    </FSCol>
    <FSCard
      v-if="$props.showSelect"
      class="fs-data-iterator-item-checkbox"
      :color="$props.itemColor"
      :variant="variant"
      :border="false"
    >
      <FSCheckbox
        :color="$props.color"
        :modelValue="$props.modelValue"
        @update:modelValue="() => $emit('update:modelValue', $props.item)"
      />
    </FSCard>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { ColorEnum, type FSDataTableColumn } from "@dative-gpi/foundation-shared-components/models";

import FSCheckbox from "../FSCheckbox.vue";
import FSCard from "../FSCard.vue";
import FSText from "../FSText.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDataIteratorItem",
  components: {
    FSCheckbox,
    FSCard,
    FSText,
    FSRow
  },
  props: {
    headers: {
      type: Array as PropType<FSDataTableColumn[]>,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    itemTo: {
      type: Function,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    itemColor: {
      type: String as PropType<ColorEnum>,
      required: false,
      default: ColorEnum.Background
    },
    color: {
      type: String as PropType<ColorEnum>,
      required: false,
      default: ColorEnum.Primary
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false
    },
    showSelect: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const variant = computed((): "standard" | "background" => {
      switch (props.itemColor) {
        case ColorEnum.Background:
        case null: return "background";
        default:   return "standard";
      }
    });

    const style = computed((): StyleValue => ({
      "--fs-data-iterator-item-cursor": props.clickable ? "pointer" : "default"
    }));

    return {
      variant,
      style
    };
  }
});
</script>