<template>
  <FSCol
    class="fs-gradient-field"
  >
    <FSBaseField
      :label="$props.label"
      :description="$props.description"
      :required="$props.required"
      :editable="$props.editable"
      v-bind="$attrs"
    >
      <FSRow>
        <FSColorField
          v-for="colorIndex in $props.colorCount"
          :allowOpacity="$props.allowOpacity"
          :modelValue="$props.modelValue[colorIndex - 1]"
          :required="$props.required"
          :editable="$props.editable"
          :key="colorIndex"
          @update:modelValue="$emit('update:modelValue', $props.modelValue.map((color, i) => colorIndex === i + 1 ? $event : color))"
        />
      </FSRow>
      <FSSelectField
        class="fs-gradient-field-select"
        :editable="$props.editable"
        :clearable="false"
        :items="items"
        modelValue="custom"
        @update:modelValue="$emit('update:modelValue', allGradients[$event])"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSRow
            class="fs-gradient-field-preview"
            height="12px"
            width="100%"
            align="center-center"
            :style="{
              '--fs-gradient-field-background': `linear-gradient(to right, ${encodeGradientCssColors(allGradients[item.id])})`
            }"
          />
        </template>
      </FSSelectField>
    </FSBaseField>
  </FSCol>
</template>

<script lang="ts">
import { type PropType, defineComponent, computed } from "vue";

import { groupedGradients } from "../../utils";
import { useColors } from "../../composables";

import FSSelectField from "./FSSelectField.vue";
import FSColorField from "./FSColorField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSGradientField",
  components: {
    FSSelectField,
    FSColorField,
    FSBaseField,
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
    colorCount: {
      type: Number,
      required: false,
      default: 2
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: true
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
    allowOpacity: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getColors } = useColors();

    const presetGradients = groupedGradients[props.colorCount];

    const allGradients = computed<Record<string, string[]>>(() => {
      return {
        'custom': [
          ...props.modelValue
        ],
        ...presetGradients
      }
    });

    const items = Object.keys(allGradients.value).map((key) => ({
      id: key,
      label: null
    }));

    const encodeGradientCssColors = (colors: string[]) => {
      return colors.map((color) => getColors(color).base).join(", ");
    };

    return {
      allGradients,
      items,
      encodeGradientCssColors
    };
  }
});
</script>