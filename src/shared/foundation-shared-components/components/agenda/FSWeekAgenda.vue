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
        v-for="day in weekDays"
        class="fs-week-agenda-label-day"
        :key="day.dayNumber"
        padding="6px"
        height="100%"
        width="100%"
        align="center-left"
      >
        <FSText
          :color="day.isNowDay ? 'primary' : 'dark'"
          font="text-overline"
        >
          {{ day.dayName }}
        </FSText>
        <FSText
          :color="day.isNowDay ? 'primary' : 'dark'"
          font="text-h3"
        >
          {{ day.dayNumber }}
        </FSText>
      </FSCol>
    </FSCol>
    <FSCol
      class="fs-week-agenda-body"
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
          v-for="day in weekDays"
          :key="day.dayNumber"
          class="fs-week-agenda-row-day"
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
          />
        </FSRow>
      </template>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue';

import FSAgendaEvent from './FSAgendaEvent.vue';
import FSText from '../FSText.vue';
import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSLoader from '../FSLoader.vue';

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import type { AgendaEvent } from '../../models/agendaEvent';

export default defineComponent({
  name: 'FSWeekAgenda',
  components: {
    FSAgendaEvent,
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
    },
    events: {
      type: Array as PropType<AgendaEvent[]>,
      default: () => []
    }
  },
  emits: ['update:begin', 'update:end'],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();

    const weekDays = computed(() => {
      const daysOfWeek = [
        $tr('ui.agenda.day.monday.short', 'MON'),
        $tr('ui.agenda.day.tuesday.short', 'TUE'),
        $tr('ui.agenda.day.wednesday.short', 'WED'),
        $tr('ui.agenda.day.thursday.short', 'THU'),
        $tr('ui.agenda.day.friday.short', 'FRI'),
        $tr('ui.agenda.day.saturday.short', 'SAT'),
        $tr('ui.agenda.day.sunday.short', 'SUN')
      ];
      const weekDaysArray = [];
      const currentDate = new Date(props.selectedDate);
      const currentDayIndex = currentDate.getDay();
      const monday = new Date(currentDate);
      monday.setDate(currentDate.getDate() - (currentDayIndex === 0 ? 6 : currentDayIndex - 1));

      for (let i = 0; i < 7; i++) {
        const day = new Date(monday);
        day.setDate(monday.getDate() + i);
        day.setHours(0, 0, 0, 0);
        weekDaysArray.push({
          dayNumber: day.getDate(),
          dayName: daysOfWeek[i],
          dayBeginEpoch: day.getTime(),
          isNowDay: day.getDate() === new Date(props.now).getDate() && day.getMonth() === new Date(props.now).getMonth() && day.getFullYear() === new Date(props.now).getFullYear(),
        });
      }

      emit('update:begin', monday);
      const sundayEnd = new Date(monday);
      sundayEnd.setDate(monday.getDate() + 6);
      sundayEnd.setHours(23, 59, 59, 999);
      emit('update:end', sundayEnd);

      return weekDaysArray;
    });

    const getDayEvents = (dayBeginEpoch: number) => {
      return props.events.filter((event) => {
        const isStartingInDay = event.start >= dayBeginEpoch && event.start < (dayBeginEpoch + 1000 * 60 * 60 * 24);
        const isEndingInDay = event.end >= dayBeginEpoch && event.end < (dayBeginEpoch + 1000 * 60 * 60 * 24);
        return isStartingInDay || isEndingInDay;
      });
    };

    return {
      weekDays,
      getDayEvents,
    };
  },
});
</script>