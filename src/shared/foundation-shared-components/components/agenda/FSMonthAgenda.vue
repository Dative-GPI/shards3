<template>
  <FSRow
    height="100%"
    :wrap="false"
    gap="0px"
  >
    <FSCol
      height="100%"
      gap="0"
      :width="$props.firstColumnWidth"
    >
      <FSCol
        v-for="day in monthDays"
        class="fs-month-agenda-label-day"
        :key="day.dayNumber"
        height="100%"
        width="100%"
        align="center-center"
      >
        <FSText
          :color="day.isNowDay ? 'primary' : 'dark'"
          font="text-overline"
        >
          {{ day.dayNumber }}
        </FSText>
      </FSCol>
    </FSCol>
    <FSCol

      class="fs-month-agenda-body"
      gap="0"
      height="100%"
      width="100%"
    >
      <slot />
      <template
        v-if="loading"
      >
        <FSLoader
          height="100%"
          width="100%"
          padding="2px"
        />
      </template>
      <template
        v-else
      >
        <FSRow
          v-for="day in monthDays"
          :key="day.dayNumber"
          class="fs-month-agenda-row-day"
          height="100%"
          width="fill"
          align="center-left"
        >
        </FSRow>
      </template>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import FSText from '../FSText.vue';
import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSLoader from '../FSLoader.vue';

export default defineComponent({
  name: 'FSMonthAgenda',
  components: {
    FSCol,
    FSLoader,
    FSRow,
    FSText
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
    }
  },
  emits: ['update:begin', 'update:end'],
  setup(props, { emit }) {
    const monthDays = computed(() => {
      const monthDaysArray = [];
      const selectedDate = new Date(props.selectedDate);
      
      const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

      for (let day = firstDayOfMonth.getDate(); day <= lastDayOfMonth.getDate(); day++) {
        const currentDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
        
        monthDaysArray.push({
          dayNumber: currentDay.getDate(),
          isNowDay: currentDay.getDate() === new Date(props.now).getDate() && 
                    currentDay.getMonth() === new Date(props.now).getMonth() && 
                    currentDay.getFullYear() === new Date(props.now).getFullYear(),
        });
      }

      emit('update:begin', firstDayOfMonth);
      lastDayOfMonth.setHours(23, 59, 59, 999);
      emit('update:end', lastDayOfMonth);

      return monthDaysArray;
    });

    return {
      monthDays,
    };
  },
});
</script>
