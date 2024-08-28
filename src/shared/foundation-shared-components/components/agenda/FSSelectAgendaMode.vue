<template>
  <FSSelectField
    :items="items"
    :modelValue="$props.modelValue"
    :clearable="false"
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSSelectField from '../fields/FSSelectField.vue';

export default defineComponent({
  name: 'FSSelectAgendaMode',
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: String as PropType<'week' | 'month'>,
      default: 'week',
    },
  },
  emits: ['update:modelValue'],
  setup() {
    const { $tr } = useTranslationsProvider();

    const items = [
      { id: 'week', label: $tr('ui.agenda.week', 'Week') },
      { id: 'month', label: $tr('ui.agenda.month', 'Month') },
    ];

    return {
      items
    };
  }
});
</script>