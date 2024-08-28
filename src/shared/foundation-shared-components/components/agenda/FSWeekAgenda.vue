<template>
  <FSRow
    height="100%"
    :wrap="false"
    gap="0px"
  >
    <FSCol
      height="100%"
      :width="$props.firstColumnWidth"
      >
      <FSCol
        v-for="day in weekDays"
        :key="day.dayNumber"
        height="100%"
        width="100%"
        align="center-left"
        :style="{
          borderRight: '1px solid #E0E0E0',
          borderBottom: '1px solid #E0E0E0',
        }"
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
      height="100%"
      width="100%"
      >
      <slot />
      <FSRow
        v-for="day in weekDays"
        :key="day.dayNumber"
        class="fs-week-agenda-row-day"
        height="100%"
        width="fill"
        align="center-left"
      >
      </FSRow>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import FSText from '../FSText.vue';
import FSCol from '../FSCol.vue';

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import FSRow from '../FSRow.vue';

export default defineComponent({
  name: 'FSWeekAgenda',
  components: {
    FSCol,
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
    }
  },
  setup(props) {
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
        weekDaysArray.push({
          dayNumber: day.getDate(),
          dayName: daysOfWeek[i],
          isNowDay: day.getDate() === new Date(props.now).getDate() && day.getMonth() === new Date(props.now).getMonth() && day.getFullYear() === new Date(props.now).getFullYear(),
        });
      }

      return weekDaysArray;
    });

    return {
      weekDays,
    };
  },
});
</script>