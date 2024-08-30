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
          @click="showCalendarDialog = true"
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
          v-if="$props.mode !== 'day'"
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
      <FSWindow
        v-if="$props.mode"
        :modelValue="modeValues[$props.mode]"
        width="100%"
        height="100%"
      >
        <FSDayAgenda
          :value="modeValues.day"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :selectedDate="selectedDate"
          :now="now"
          :loading="$props.loading"
          @click:event-id="$emit('click:eventId', $event)"
          @update:begin="beginWeekRangeDate = $event"
          @update:end="endWeekRangeDate = $event"
        >
        </FSDayAgenda>
        <FSWeekAgenda
          :value="modeValues.week"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :selectedDate="selectedDate"
          :now="now"
          :nowIsInSelectedRange="nowIsInSelectedRange"
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
          :nowIsInSelectedRange="nowIsInSelectedRange"
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
  <FSDialog
    :modelValue="showCalendarDialog"
  >
    <FSCard
      :elevation="true"
    >
      <FSCol
        gap="12px"
        padding="16px"
      >
        <FSCalendar
          v-model="selectedDialogDate"
        />
        <FSButton
          color="primary"
          width="100%"
          :label="$tr('ui.agenda.calendar.dialog.submit', 'Validate')"
          @click="onSubmitCalendarDialog"
        />
      </FSCol>
    </FSCard>
  </FSDialog>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref, onUnmounted } from 'vue';

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { useColors } from '../../composables';

import type { AgendaEvent } from '../../models/agendaEvent';

import FSMonthAgenda from './FSMonthAgenda.vue';
import FSWeekAgenda from './FSWeekAgenda.vue';
import FSDayAgenda from './FSDayAgenda.vue';
import FSSelectAgendaMode from './FSSelectAgendaMode.vue';
import FSWindow from '../FSWindow.vue';
import FSCol from '../FSCol.vue';
import FSButton from '../FSButton.vue';
import FSRow from '../FSRow.vue';
import FSTimeLineMarker from './FSTimeLineMarker.vue';
import FSDialog from '../FSDialog.vue';
import FSCard from '../FSCard.vue';
import FSCalendar from '../FSCalendar.vue';

export default defineComponent({
  name: 'FSAgenda',
  components: {
    FSButton,
    FSCalendar,
    FSCard,
    FSCol,
    FSDayAgenda,
    FSMonthAgenda,
    FSRow,
    FSSelectAgendaMode,
    FSDialog,
    FSTimeLineMarker,
    FSWeekAgenda,
    FSWindow
  },
  props: {
    mode: {
      type: String as PropType<'day' | 'week' | 'month'>,
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

    const beginMonthRangeDate = ref<Date>();
    const beginWeekRangeDate = ref<Date>();
    const endMonthRangeDate = ref<Date>();
    const endWeekRangeDate = ref<Date>();
    const now = ref(todayToEpoch());
    const selectedDate = ref(now.value);
    const selectedDialogDate = ref(selectedDate.value);
    const showCalendarDialog = ref(false);
    

    const buttonColor = getColors('primary').light;
    const modeValues = {
      'day': 1,
      'week': 2,
      'month': 3,
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

    const onSubmitCalendarDialog = () => {
      selectedDate.value = selectedDialogDate.value;
      showCalendarDialog.value = false;
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
      selectedDialogDate,
      showCalendarDialog,
      modeValues,
      now,
      nowIsInSelectedRange,
      onNext,
      onPrevious,
      onSubmitCalendarDialog,
      onToday
    };
  }
});
</script>