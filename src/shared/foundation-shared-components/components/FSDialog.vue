<template>
  <v-dialog
    transition="dialog-bottom-transition"
    :class="classes"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <slot>
      <FSDialogContent
        :title="$props.title"
        :subtitle="$props.subtitle"
        :width="$props.width"
        :modelValue="$props.modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
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
      </FSDialogContent>
    </slot>
  </v-dialog>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSDialogContent from "./FSDialogContent.vue";

export default defineComponent({
  name: "FSDialog",
  components: {
    FSDialogContent
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
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "fit-content"
    },
    cardClasses: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup() {
    const { isExtraSmall } = useBreakpoints();

    const classes = computed((): string[] => {
      const classNames: string[] = [];
      if (isExtraSmall.value) {
        classNames.push("fs-dialog-mobile");
      }
      else {
        classNames.push("fs-dialog");
      }
      return classNames;
    });

    return {
      classes
    };
  }
});
</script>