<template>
  <FSSelectField
    :items="items"
    :modelValue="$props.modelValue"
    :clearable="false"
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template
      #item-prepend="{ item }"
    >
      <FSIcon 
        :icon="item.icon"
      />
    </template>
  </FSSelectField>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSSelectField from '../fields/FSSelectField.vue';
import FSIcon from '../FSIcon.vue';

export default defineComponent({
  name: 'FSSelectAgendaMode',
  components: {
    FSIcon,
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
      { id: 'week', label: $tr('ui.agenda.week', 'Week'), icon: 'mdi-calendar-week' },
      { id: 'month', label: $tr('ui.agenda.month', 'Month'), icon: 'mdi-calendar-month' },
    ];

    return {
      items
    };
  }
});
</script>