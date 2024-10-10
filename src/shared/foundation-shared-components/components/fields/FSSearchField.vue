<template>
  <FSTextField
    class="fs-search-field"
    :placeholder="placeholder"
    :modelValue="$props.modelValue"
    prependInnerIcon="mdi-magnify"
    @update:modelValue="$emit('update:modelValue', $event)"
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
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import FSTextField from "./FSTextField.vue";

export default defineComponent({
  name: "FSSearchField",
  components: {
    FSTextField
  },
  props: {
    placeholder: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const placeholder = computed(() => {
      return props.placeholder ?? $tr('ui.search.placeholder', 'Search...');
    });

    return {
      placeholder,
    };
  }
});
</script>