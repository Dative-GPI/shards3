<template>
  <FSTextField
    type="number"
    :editable="$props.editable"
    :modelValue="$props.modelValue?.toString()"
    @update:modelValue="(value) => $emit('update:modelValue', isNaN(parseFloat(value)) ? 0 : parseFloat(value))"
    v-bind="$attrs"
  >
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </FSTextField>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSTextField from "./FSTextField.vue";

export default defineComponent({
  name: "FSNumberField",
  components: {
    FSTextField
  },
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"]
});
</script>