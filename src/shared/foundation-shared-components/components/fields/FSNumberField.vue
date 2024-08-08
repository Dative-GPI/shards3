<template>
  <FSTextField
    class="fs-number-field"
    :editable="$props.editable"
    :modelValue="$props.modelValue?.toString()"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
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
  </FSTextField>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSTextField from "./FSTextField.vue";

export default defineComponent({
  name: "FSNumberField",
  components: {
    FSTextField
  },
  props: {
    modelValue: {
      type: Number as PropType<number | null>,
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
  setup(_, { emit }) {
    const onUpdate = (value: string) => {
      const match = /([0-9 ]*[,.]?)?[0-9]+/.exec(value);
      if (match && !isNaN(parseFloat(match[0].replace(",", ".").replace(" ", "")))) {
        emit("update:modelValue", parseFloat(match[0].replace(",", ".").replace(" ", "")));
      }
      else {
        emit("update:modelValue", 0);
      }
    };

    return {
      onUpdate
    };
  }
});
</script>