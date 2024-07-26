<template>
  <FSDialog
    :subtitle="$props.subtitle"
    :title="$props.title"
    :width="$props.width"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #body
    >
      <FSDialogMultiFormBody
        :subtitle="$props.subtitle"
        :steps="$props.steps"
        @click:submitButton="$emit('click:submitButton')"
        @click:cancelButton="$emit('update:modelValue', false)"
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
      </FSDialogMultiFormBody>
    </template>
  </FSDialog>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent } from "vue";

import FSDialogMultiFormBody from "./FSDialogMultiFormBody.vue";
import FSDialog from "./FSDialog.vue";

export default defineComponent({
  name: "FSDialogMultiForm",
  components: {
    FSDialogMultiFormBody,
    FSDialog  
  },
  props: {
    title: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    subtitle: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "auto"
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    steps: {
      type: Number,
      required: true
    },
  },
  emits: ["update:modelValue", "click:submitButton"],
  setup(props, { emit }) {

    return {
    };
  }
});
</script>