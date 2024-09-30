<template>
  <FSRow>
    <FSMonthSelector 
      :year="$props.year"
      :month="$props.month"
      @update:year="$emit('update:year', $event)"
      @update:month="$emit('update:month', $event)"
    />
    <FSButton
      :label="$tr('ui.common.today', 'Today')"
      icon="mdi-calendar-today"
    />
  </FSRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSRow from "../FSRow.vue";
import FSButton from "../FSButton.vue";

import FSMonthSelector from "./FSMonthSelector.vue";

export default defineComponent({
  name: "FSCalendarHeader",
  components: {
    FSRow,
    FSButton,
    FSMonthSelector
  },
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    }
  },
  setup() {
    
  }
});
</script>