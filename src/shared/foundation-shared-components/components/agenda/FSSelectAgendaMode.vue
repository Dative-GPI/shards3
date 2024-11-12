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
import { AgendaMode } from '@dative-gpi/foundation-shared-domain/enums/agendas';

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
      type: Number as PropType<AgendaMode>,
      default: AgendaMode.Week,
    },
  },
  emits: ['update:modelValue'],
  setup() {
    const { $tr } = useTranslationsProvider();

    const items = [
      { id: AgendaMode.Week, label: $tr('ui.common.week', 'Week'), icon: 'mdi-calendar-week' },
      { id: AgendaMode.Month, label: $tr('ui.common.month', 'Month'), icon: 'mdi-calendar-month' },
    ];

    return {
      items
    };
  }
});
</script>