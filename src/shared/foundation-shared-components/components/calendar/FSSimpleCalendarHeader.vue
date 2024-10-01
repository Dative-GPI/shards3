<template>
  <FSRow>
    <FSSimpleMonthSelector 
      width="hug"
      :year="$props.year"
      :month="$props.month"
      @update:year="$emit('update:year', $event)"
      @update:month="$emit('update:month', $event)"
      @update="$emit('update', $event)"
    />
    <FSButton
      :label="$tr('ui.common.today', 'Today')"
      icon="mdi-calendar-today"
      @click="onToday"
    />
  </FSRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSRow from "../FSRow.vue";
import FSButton from "../FSButton.vue";

import FSSimpleMonthSelector from "./FSSimpleMonthSelector.vue";

export default defineComponent({
  name: "FSCalendarHeader",
  components: {
    FSRow,
    FSButton,
    FSSimpleMonthSelector
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
  setup(_props, { emit }) {
    const onToday = () => {
      const now = new Date();
      emit("update:year", now.getFullYear());
      emit("update:month", now.getMonth() + 1);
      emit("update", {
        year: now.getFullYear(),
        month: now.getMonth() + 1
      });
    };

    return {
      onToday
    };
  }
});
</script>