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
        class="fs-gradient-select-field"
        :clearable="false"
        :editable="$props.editable"
        :items="items"
        :modelValue="JSON.stringify($props.modelValue)"
        @update:modelValue="$emit('update:modelValue', presetGradients[$event])"
      >
        <template
          v-slot:selection="{ item }"
        >
          <FSRow
            class="fs-gradient-field-preview"
            height="fill"
            width="100%"
            :style="{ '--fs-gradient-field-background': `linear-gradient(to right, ${encodeGradientCssColors(JSON.parse(item.value))})` }"
          >
            <span />
          </FSRow>
        </template>
        <template
          v-slot:item="{ item, props }"
        >
          <v-list-item
            v-bind="props"
          >
            <template
              #title
            >
              <FSRow
                class="fs-gradient-field-preview"
                height="fill"
                width="100%"
                :style="{ '--fs-gradient-field-background': `linear-gradient(to right, ${encodeGradientCssColors(presetGradients[item.value])})` }"
              >
                <span />
              </FSRow>
            </template>
          </v-list-item>
        </template>
      </FSSelectField>
    </FSBaseField>
  </FSCol>
</template>

<script lang="ts">
import { type PropType, defineComponent } from "vue";

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
    const items = Object.keys(presetGradients)

    const encodeGradientCssColors = (colors: string[]) => {
      return colors.map((color) => getColors(color).base).join(", ");
    };

    return {
      presetGradients,
      items,
      encodeGradientCssColors
    };
  }
});
</script>