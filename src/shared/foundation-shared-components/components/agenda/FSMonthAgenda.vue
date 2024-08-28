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
          <FSAgendaEvent
            v-for="event in getDayEvents(day.dayBeginEpoch)"
            :key="event.id"
            :variant="event.end < now ? 'past' : event.start > now ? 'future' : 'current'"
            :dayBegin="day.dayBeginEpoch"
            :label="event.label"
            :start="event.start"
            :end="event.end"
            :icon="event.icon"
            :id="event.id"
            :color="event.color"
          >
            <template
              #default="{ label, icon }"
            >
              <FSCol
                height="100%"
                align="center-left"
                padding="8px"
              >
                <FSRow
                  align="center-left"
                  :wrap="false"
                  gap="4px"
                >
                  <FSIcon
                    v-if="icon"
                    :icon="icon"
                    size="16px"
                  />
                  <FSSpan
                    font="text-overline"
                  >
                    {{ label }}
                  </FSSpan>
                </FSRow>
              </FSCol>
            </template>
          </FSAgendaEvent>
        </FSRow>
      </template>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue';

import FSText from '../FSText.vue';
import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSLoader from '../FSLoader.vue';
import type { AgendaEvent } from '../../models/agendaEvent';
import FSAgendaEvent from './FSAgendaEvent.vue';
import FSIcon from '../FSIcon.vue';
import FSSpan from '../FSSpan.vue';

export default defineComponent({
  name: 'FSMonthAgenda',
  components: {
    FSAgendaEvent,
    FSCol,
    FSIcon,
    FSLoader,
    FSRow,
    FSSpan,
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
    },
    events: {
      type: Array as PropType<AgendaEvent[]>,
      default: () => []
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
        currentDay.setHours(0, 0, 0, 0);

        monthDaysArray.push({
          dayNumber: currentDay.getDate(),
          dayBeginEpoch: currentDay.getTime(),
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

    const getDayEvents = (dayBeginEpoch: number) => {
      return props.events.filter((event) => {
        const isStartingInDay = event.start >= dayBeginEpoch && event.start < (dayBeginEpoch + 1000 * 60 * 60 * 24);
        const isEndingInDay = event.end >= dayBeginEpoch && event.end < (dayBeginEpoch + 1000 * 60 * 60 * 24);
        return isStartingInDay || isEndingInDay;
      });
    };

    return {
      monthDays,
      getDayEvents,
    };
  },
});
</script>
