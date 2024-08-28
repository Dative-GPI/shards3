<template>
  <FSRow>
    <FSRow
      v-for="hour in hours"
      :key="hour"
      align="center-left"
    >
      <FSText
        v-if="displayNow && hour === modelValue"
        color="primary"
      >
        {{ `${hour}` }}
      </FSText>
      <FSText
        v-else
      >
        {{ `${hour}` }}
      </FSText>
      <v-spacer />
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import FSText from '../FSText.vue';
import FSRow from '../FSRow.vue';
import FSChip from '../FSChip.vue';

export default defineComponent({
  name: 'FSAgendaHoursLine',
  components: {
    FSChip,
    FSText,
    FSRow,
  },
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    displayNow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {

    const hours = Array.from({ length: 24 }, (_, i) => i);

    return {
      hours,
    };
  },
});

</script>