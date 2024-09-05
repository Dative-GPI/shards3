<template>
  <FSCol
    class="fs-agenda-month-container"
    height="100%"
    width="100%"
    gap="0"
  >
    <FSRow
      gap="0"
      :wrap="false"
    >
      <FSCol
        height="100%"
        :width="$props.firstColumnWidth"
      >
      </FSCol>
    
      <FSAgendaHoursRow
        :displayNow="$props.nowIsInSelectedRange"
        :modelValue="nowHour"
      />
    </FSRow>
    <FSRow
      class="fs-agenda-month"
      :style="style"
      height="100%"
      :wrap="false"
      gap="0px"
    >
      <FSCol
        class="fs-agenda-label-day-container"
        height="100%"
        gap="0"
        :width="$props.firstColumnWidth"
      >
        <FSCol
          v-for="day in monthDays"
          class="fs-agenda-label-day"
          :style="getDayLabelStyle(day.isNowDay)"
          :key="day.dayNumber"
          height="100%"
          width="100%"
          align="center-center"
        >
          <FSCard
            height="100%"
            width="100%"
            :borderRadius="0"
            :border="false"
            variant="standard"
            :color="day.isNowDay ? 'primary' : 'background'"
          >
            <FSCol
              align="center-center"
            >
              <FSSpan
                :color="day.isNowDay ? 'primary' : 'dark'"
                font="text-overline"
              >
                {{ day.dayNumber }}
              </FSSpan>
            </FSCol>
          </FSCard>
        </FSCol>
      </FSCol>
      <FSCol
        class="fs-agenda-body"
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
            class="fs-agenda-row-day"
            height="100%"
            width="fill"
            align="center-left"
          >
            <FSAgendaHorizontalEvent
              v-for="event in getDayEvents(day.dayStartEpoch)"
              :key="event.id"
              :now="$props.now"
              :variant="event.end < now ? 'past' : event.start > now ? 'future' : 'current'"
              :dayStart="day.dayStartEpoch"
              :label="event.label"
              :start="event.start"
              :end="event.end"
              :icon="event.icon"
              :id="event.id"
              :color="event.color"
              @click="() => $emit('click:eventId', event.id)"
            >
              <template
                #default="{ label, icon }"
              >
                <FSRow
                  align="center-left"
                  :wrap="false"
                  padding="0 0 0 4px"
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
              </template>
            </FSAgendaHorizontalEvent>
          </FSRow>
        </template>
      </FSCol>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType, type StyleValue } from 'vue';

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum, type FSAgendaEvent } from "@dative-gpi/foundation-shared-components/models";

import FSAgendaHorizontalEvent from './FSAgendaHorizontalEvent.vue';
import FSAgendaHoursRow from './FSAgendaHoursRow.vue';
import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSLoader from '../FSLoader.vue';
import FSIcon from '../FSIcon.vue';
import FSSpan from '../FSSpan.vue';
import FSCard from '../FSCard.vue';

export default defineComponent({
  name: 'FSMonthAgenda',
  components: {
    FSAgendaHorizontalEvent,
    FSAgendaHoursRow,
    FSCard,
    FSCol,
    FSIcon,
    FSLoader,
    FSRow,
    FSSpan
  },
  props: {
    now: {
      type: Number,
      required: true
    },
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    },
    nowIsInSelectedRange: {
      type: Boolean,
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
      type: Array as PropType<FSAgendaEvent[]>,
      default: () => []
    }
  },
  emits: ['update:start', 'update:end', 'click:eventId'],
  setup(props) {
    const { getColors } = useColors();

    const primaryColors = getColors(ColorEnum.Primary);
    const lightColors = getColors(ColorEnum.Light);

    const nowHour = computed(() => new Date(props.now).getHours());

    const monthDays = computed(() => {
      const monthDaysArray = [];
      const nowDate = new Date(props.now);

      let currentDay = new Date(props.start); 
      const endDate = new Date(props.end);

      while (currentDay <= endDate) {
        monthDaysArray.push({
          dayNumber: currentDay.getDate(),
          dayStartEpoch: currentDay.getTime(),
          isNowDay: currentDay.toDateString() === nowDate.toDateString(),
        });

        currentDay.setDate(currentDay.getDate() + 1);
      }

      return monthDaysArray;
    });

    const style = computed((): StyleValue => {
      return {
        '--fs-agenda-row-day-border-bottom-color': lightColors.base,
      };
    });

    const getDayLabelStyle = (isNowDay: boolean = false) => {
      if (isNowDay) {
        return {
          '--fs-agenda-label-day-border-bottom-color': primaryColors.base,
          '--fs-agenda-label-day-border-right-color': lightColors.base,
        };
      }
      return {
        '--fs-agenda-label-day-border-bottom-color': lightColors.base,
        '--fs-agenda-label-day-border-right-color': lightColors.base,
      };
    };

    const getDayEvents = (dayStartEpoch: number) => {
      return props.events.filter((event) => {
        const isStartingInDay = event.start >= dayStartEpoch && event.start < (dayStartEpoch + 1000 * 60 * 60 * 24);
        const isEndingInDay = event.end >= dayStartEpoch && event.end < (dayStartEpoch + 1000 * 60 * 60 * 24);
        return isStartingInDay || isEndingInDay;
      });
    };

    return {
      nowHour,
      monthDays,
      style,
      getDayEvents,
      getDayLabelStyle
    };
  },
});
</script>
