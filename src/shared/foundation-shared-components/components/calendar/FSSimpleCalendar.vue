<template>
  <FSCol>
    <FSRow
      v-if="$props.showHeader"
      :wrap="false"
    >
      <FSCol
        v-for="i in 7"
        :key="i"
        :style="{
          minWidth: `calc((100% - 8px * 7) / 7)`, 
          maxWidth: `calc((100% - 8px * 7) / 7)`
        }"
        align="center-center"
      >
        {{ dayLabel(i - 1) }}
      </FSCol>
    </FSRow>
    <FSRow>
      <FSCol
        v-for="date in days"
        :key="$props.month + $props.year + date.date.toISOString()"
        :style="{
          minWidth: `calc((100% - 8px * 7) / 7)`, 
          maxWidth: `calc((100% - 8px * 7) / 7)`
        }"
        align="center-center"
        height="hug"
      >
        <slot
          name="day"
          v-bind="date"
        />
      </FSCol>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { startOfWeek, endOfWeek, endOfMonth, isSameDay, isBefore, isAfter, isSameMonth, addDays } from "date-fns";
import { defineComponent, computed } from "vue";

import { dayLabel } from "../../tools";

import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSCalendarHeader",
  components: {
    FSRow,
    FSCol
  },
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {

    const { getMachineOffset } = useAppTimeZone();

    const firstDayOfMonth = computed(() => {
      const date = new Date(props.year, props.month - 1, 1);
      const offset = getMachineOffset(date.getTime());

      date.setTime(date.getTime() + offset);

      return date;
    })

    const firstMonday = computed(() => {
      const day = new Date(firstDayOfMonth.value);
      
      const date = startOfWeek(day, { weekStartsOn: 1 });
      const offset = getMachineOffset(date.getTime());

      date.setTime(date.getTime() + offset);

      return date;
    });

    const endDayOfMonth = computed(() => {
      const day = new Date(firstDayOfMonth.value);

      const date = endOfMonth(day);
      const offset = getMachineOffset(date.getTime());

      date.setTime(date.getTime() + offset);

      return date;
    });

    const lastSunday = computed(() => {
      const day = new Date(endDayOfMonth.value);

      const date = endOfWeek(day, { weekStartsOn: 1 });
      const offset = getMachineOffset(date.getTime());

      date.setTime(date.getTime() + offset);

      return date;
    });

    const days = computed(() => {
      const result = [];

      let currentDay = new Date(firstMonday.value);
      const today = new Date();

      while (currentDay <= lastSunday.value) {
        result.push({
          date: new Date(currentDay),
          isToday: isSameDay(currentDay, today),
          isPast: isBefore(currentDay, today) && !isSameDay(currentDay, today),
          isFutur: isAfter(currentDay, today) && !isSameDay(currentDay, today),
          isPreviousMonth: isBefore(currentDay, firstDayOfMonth.value),
          isNextMonth: isAfter(currentDay, endDayOfMonth.value),
          isCurrentMonth: isSameMonth(currentDay, firstDayOfMonth.value)
        });

        currentDay = addDays(currentDay, 1);
      }

      return result;
    });

    return {
      dayLabel,
      days
    };
  }
});
</script>