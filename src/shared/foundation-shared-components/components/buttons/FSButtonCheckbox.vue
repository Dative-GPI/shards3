<template>
  <FSButton
    :editable="$props.editable"
    :prependIcon="prependIcon"
    :load="$props.load"
    :variant="variant"
    @click.stop="onClick"
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
  </FSButton>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSButtonCheckbox",
  components: {
    FSButton
  },
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    load: {
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
    const prependIcon = computed((): string => {
      return props.modelValue ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline";
    });

    const variant = computed((): "full" | "standard" => {
      return props.modelValue ? "full" : "standard";
    });

    const onClick = (): void => {
      if (props.editable && !props.load) {
        emit("update:modelValue", !props.modelValue);
      }
    };

    return {
      prependIcon,
      variant,
      onClick
    };
  }
});
</script>