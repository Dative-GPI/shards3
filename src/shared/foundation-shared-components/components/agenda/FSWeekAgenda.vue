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
      height="100%"
      :style="style"
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
          class="fs-agenda-label-day"
          v-for="day in weekDays"
          :style="getDayLabelStyle(day.isNowDay)"
          :key="day.dayNumber"
          height="100%"
          width="100%"
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
              padding="6px"
              height="100%"
              width="100%"
              gap="2px"
              align="center-left"
            >
              <FSCol
                gap="0px"
              >
                <FSSpan
                  font="text-overline"
                >
                  {{ day.dayName }}
                </FSSpan>
                <FSSpan
                  font="text-h3"
                >
                  {{ to2Digits(day.dayNumber) }}
                </FSSpan>
              </FSCol>
              <FSText
                font="text-overline"
                class="fs-agenda-week-number-label"
                :color="weekTextColor"
              >
                {{ $tr('ui.common.agenda.week-short', 'W{0}',day.weekNumber) }}
              </FSText>
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
            v-for="day in weekDays"
            :key="day.dayNumber"
            class="fs-agenda-row-day"
            height="100%"
            width="fill"
            align="center-left"
          >
            <FSAgendaHorizontalEvent
              v-for="event in getDayEvents(day.dayStartEpoch)"
              :key="event.id"
              :variant="event.end < now ? 'past' : event.start > now ? 'future' : 'current'"
              :now="now"
              :dayStart="day.dayStartEpoch"
              :label="event.label"
              :start="event.start"
              :end="event.end"
              :icon="event.icon"
              :iconBis="event.iconBis"
              :id="event.id"
              :color="event.color"
              @click="() => $emit('click:eventId', event.id)"
            >
              <template
                #default="{ label, icon, timeStart, timeEnd, iconBis, variant }"
              >
                <FSRow
                  align="center-left"
                  gap="4px"
                  :wrap="false"
                >
                  <FSCol
                    height="100%"
                    width="fill"
                    align="center-left"
                    padding="8px 0 8px 8px"
                  >
                    <FSSpan>
                      {{ `${timeStart} - ${timeEnd}` }}
                    </FSSpan>
                    <FSRow
                      align="center-left"
                      :wrap="false"
                    >
                      <FSIcon
                        v-if="icon"
                        :icon="icon"
                        size="24px"
                      />
                      <FSSpan
                        font="text-button"
                      >
                        {{ label }}
                      </FSSpan>
                    </FSRow>
                  </FSCol>
                  <FSCol
                    v-if="iconBis && variant !== 'current'"
                    align="center-right"
                    padding="8px 8px 8px 0" 
                    width="hug"
                  >
                    <FSIcon
                      :icon="iconBis"
                      size="20px"
                    />
                  </FSCol>
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

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum, type FSAgendaEvent } from "@dative-gpi/foundation-shared-components/models";

import FSAgendaHorizontalEvent from './FSAgendaHorizontalEvent.vue';
import FSAgendaHoursRow from './FSAgendaHoursRow.vue';
import FSCard from '../FSCard.vue';
import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSLoader from '../FSLoader.vue';
import FSSpan from '../FSSpan.vue';
import FSIcon from '../FSIcon.vue';
import FSText from '../FSText.vue';

export default defineComponent({
  name: 'FSWeekAgenda',
  components: {
    FSAgendaHorizontalEvent,
    FSAgendaHoursRow,
    FSCard,
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
  emits: ['click:eventId'],
  setup(props) {
    const { $tr } = useTranslationsProvider();
    const { getColors } = useColors();
    const { epochToWeekNumber } = useDateFormat();

    const primaryColors = getColors(ColorEnum.Primary);
    const lightColors = getColors(ColorEnum.Light);

    const weekTextColor = lightColors.dark;

    const nowHour = computed(() => new Date(props.now).getHours());

    const weekDays = computed(() => {
      const daysOfWeek = [
        $tr('ui.common.sunday-short', 'SUN'),
        $tr('ui.common.monday-short', 'MON'),
        $tr('ui.common.tuesday-short', 'TUE'),
        $tr('ui.common.wednesday-short', 'WED'),
        $tr('uui.common.thursday-short', 'THU'),
        $tr('ui.common.friday-short', 'FRI'),
        $tr('ui.common.saturday-short', 'SAT')
      ];
      const weekDaysArray = [];
      const nowDate = new Date(props.now);

      let currentDay = new Date(props.start); 
      const endDate = new Date(props.end);

      while (currentDay <= endDate) {
        weekDaysArray.push({
          dayNumber: currentDay.getDate(),
          dayName: daysOfWeek[currentDay.getDay()],
          dayStartEpoch: currentDay.getTime(),
          weekNumber: epochToWeekNumber(currentDay.getTime()),
          isNowDay: currentDay.toDateString() === nowDate.toDateString(),
        });

        currentDay.setDate(currentDay.getDate() + 1);
      }

      return weekDaysArray;
    });

    const style = computed((): StyleValue => {
      return {
        '--fs-agenda-row-day-border-bottom-color': lightColors.base,
      };
    });

    const to2Digits = (value: number | string) => {
      return value.toString().padStart(2, '0');
    };

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
      style,
      nowHour,
      weekDays,
      weekTextColor,
      getDayEvents,
      getDayLabelStyle,
      to2Digits
    };
  },
});
</script>