<template>
  <FSCol
    :height="$props.height"
    :width="$props.width"
    gap="24px"
  >
    <FSRow
      align="center-center"
    >
      <FSRow
        align="center-left"
        :wrap="false"
        width="hug"
      >
        <FSButton
          variant="icon"
          icon="mdi-chevron-left"
          @click="onPrevious"
        />
        <FSButton
          width="180px"
          :color="buttonColor"
          :label="selectedDateMonthYear"
          variant="full"
        />
        <FSButton
          variant="icon"
          icon="mdi-chevron-right"
          @click="onNext"
        />
      </FSRow>
      <FSRow
        align="center-right"
      >
        <FSRow
          width="hug"
          >
        <FSSelectAgendaMode
          :modelValue="$props.mode"
          :hideHeader="true"
          @update:modelValue="$emit('update:mode', $event)"
        />
        <FSButton
          prependIcon="mdi-calendar-today-outline"
          :label="$tr('ui.agenda.today', 'Today')"
          @click="onToday"
        />
      </FSRow>
      </FSRow>
    </FSRow>
    <FSCol
      class="fs-agenda-view"
      height="100%"
      gap="0"
    >
      <FSRow
        gap="0"
        :wrap="false"
      >
        <FSCol
          height="100%"
          :width="dayColumnWidth"
        >
        </FSCol>
        <FSAgendaHoursLine
          :displayNow="nowIsInSelectedRange"
          :modelValue="nowHour"
        />
      </FSRow>
      
      <FSWindow
        v-if="$props.mode"
        :modelValue="modeValues[$props.mode]"
        width="100%"
        height="100%"
      >
        <FSWeekAgenda
          :value="modeValues.week"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :selectedDate="selectedDate"
          :now="now"
          :loading="$props.loading"
          @click:event-id="$emit('click:eventId', $event)"
          @update:begin="beginWeekRangeDate = $event"
          @update:end="endWeekRangeDate = $event"
        >
          <FSTimeLineMarker
            v-if="nowIsInSelectedRange"
            :modelValue="now"
          />
        </FSWeekAgenda>
        <FSMonthAgenda
          :value="modeValues.month"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :selectedDate="selectedDate"
          :now="now"
          :loading="$props.loading"
          @click:event-id="$emit('click:eventId', $event)"
          @update:begin="beginMonthRangeDate = $event"
          @update:end="endMonthRangeDate = $event"
        >
          <FSTimeLineMarker
            v-if="nowIsInSelectedRange"
            :modelValue="now"
          />
        </FSMonthAgenda>
      </FSWindow>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref, onUnmounted } from 'vue';

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { useColors } from '../../composables';

import type { AgendaEvent } from '../../models/agendaEvent';

import FSMonthAgenda from './FSMonthAgenda.vue';
import FSWeekAgenda from './FSWeekAgenda.vue';
import FSSelectAgendaMode from './FSSelectAgendaMode.vue';
import FSWindow from '../FSWindow.vue';
import FSAgendaHoursLine from './FSAgendaHoursLine.vue';
import FSCol from '../FSCol.vue';
import FSButton from '../FSButton.vue';
import FSRow from '../FSRow.vue';
import FSTimeLineMarker from './FSTimeLineMarker.vue';

export default defineComponent({
  name: 'FSAgenda',
  components: {
    FSAgendaHoursLine,
    FSButton,
    FSCol,
    FSMonthAgenda,
    FSRow,
    FSSelectAgendaMode,
    FSTimeLineMarker,
    FSWeekAgenda,
    FSWindow
  },
  props: {
    mode: {
      type: String as PropType<'week' | 'month'>,
      default: 'week',
    },
    height: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "100%"
    },
    width: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "100%"
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
  emits: ['update:mode', 'click:eventId'],
  setup(props) {
    const { todayToEpoch, epochToMonthYearOnlyFormat } = useDateFormat();
    const { getColors } = useColors();

    const dayColumnWidth = '46px';

    const now = ref(todayToEpoch());
    const selectedDate = ref(now.value);
    const beginWeekRangeDate = ref<Date>();
    const endWeekRangeDate = ref<Date>();
    const beginMonthRangeDate = ref<Date>();
    const endMonthRangeDate = ref<Date>();

    const buttonColor = getColors('primary').light;
    const modeValues = {
      'week': 1,
      'month': 2,
    }

    const beginRangeDate = computed(() => {
      if(props.mode === 'week') {
        return beginWeekRangeDate.value;
      } else if(props.mode === 'month') {
        return beginMonthRangeDate.value;
      }
    });

    const endRangeDate = computed(() => {
      if(props.mode === 'week') {
        return endWeekRangeDate.value;
      } else if(props.mode === 'month') {
        return endMonthRangeDate.value;
      }
    });

    const nowHour = computed(() => new Date(now.value).getHours());
    const selectedDateMonthYear = computed(() => {
      if(!beginRangeDate.value) {return '';}
      return epochToMonthYearOnlyFormat(beginRangeDate.value.getTime());
    });

    const nowIsInSelectedRange = computed(() => {
      if(!beginRangeDate.value || !endRangeDate.value) {return false;}
      return now.value >= beginRangeDate.value.getTime() && now.value <= endRangeDate.value.getTime();
    });

    const onNext = () => {
      if(props.mode === 'week') {
        selectedDate.value += 7 * 24 * 60 * 60 * 1000;
      } else if(props.mode === 'month') {
        selectedDate.value = new Date(selectedDate.value).setMonth(new Date(selectedDate.value).getMonth() + 1);
      }
    }

    const onPrevious = () => {
      if(props.mode === 'week') {
        selectedDate.value -= 7 * 24 * 60 * 60 * 1000;
      } else if(props.mode === 'month') {
        selectedDate.value = new Date(selectedDate.value).setMonth(new Date(selectedDate.value).getMonth() - 1);
      }
    }

    const onToday = () => {
      selectedDate.value = now.value;
    }

    const nowInterval = setInterval(() => {
      now.value = todayToEpoch();
    }, 10000);

    onUnmounted(() => {
      clearInterval(nowInterval);
    });

    return {
      beginMonthRangeDate,
      beginWeekRangeDate,
      buttonColor,
      dayColumnWidth,
      endMonthRangeDate,
      endWeekRangeDate,
      selectedDate,
      selectedDateMonthYear,
      modeValues,
      now,
      nowHour,
      nowIsInSelectedRange,
      onNext,
      onPrevious,
      onToday
    };
  }
});
</script>