<template>
  <FSRow
    class="fs-day-month"
    height="100%"
    :wrap="false"
    gap="0px"
  >
    Test
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import type { AgendaEvent } from '../../models/agendaEvent';

import FSRow from '../FSRow.vue';


export default defineComponent({
  name: 'FSDayAgenda',
  components: {
    FSRow,
  },
  props: {
    now: {
      type: Number,
      required: true
    },
    selectedDate: {
      type: Number,
      required: true
    },
    firstColumnWidth: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    events: {
      type: Array as PropType<AgendaEvent[]>,
      default: () => []
    }
  },
  emits: ['update:begin', 'update:end', 'click:eventId'],
  setup(props, { emit }) {

    return {
    };
  },
});
</script>
