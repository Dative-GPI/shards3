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
          :key="colorIndex"
          :modelValue="$props.modelValue[colorIndex-1]"
          :required="$props.required"
          :editable="$props.editable"
          @update:modelValue="($event, index) => $emit('update:modelValue', $props.modelValue.map((color, i) => colorIndex === i + 1 ? $event : color))"
        />
      </FSRow>
      <FSSelectField
        class="fs-gradient-select-field"
        :items="items"
        @update:modelValue="$emit('update:modelValue', JSON.parse($event))"
        :clearable="false"
        :editable="$props.editable"
        :modelValue="JSON.stringify($props.modelValue)"
      >
        <template
          v-slot:selection="{ item }"
        >
          <FSRow
            height="fill"
            width="100%"
            class="fs-gradient-field-preview"
            :style="{ '--fs-gradient-field-background': `linear-gradient(to right, ${JSON.parse(item.value).join(', ')})` }"
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
                height="fill"
                width="100%"
                class="fs-gradient-field-preview"
                :style="{ '--fs-gradient-field-background': `linear-gradient(to right, ${JSON.parse(item.value).join(', ')})` }"
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

import FSColorField from "./FSColorField.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";
import FSBaseField from "./FSBaseField.vue";
import FSSelectField from "./FSSelectField.vue";
import { groupedGradients } from "../../utils";

export default defineComponent({
  name: "FSGradientField",
  components: {
    FSBaseField,
    FSColorField,
    FSCol,
    FSRow,
    FSSelectField
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
    colorCount: {
      type: Number,
      required: false,
      default: 2
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const items = groupedGradients[props.colorCount] ?? [];

    return {
      items
    };
  }
});
</script>