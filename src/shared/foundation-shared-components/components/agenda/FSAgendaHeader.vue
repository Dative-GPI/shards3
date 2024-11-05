<template>
  <FSRow 
    align="center-center"
  >
    <template 
      v-if="$props.mode !== AgendaMode.Day"
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
          width="220px"
          color="primary"
          :border="false"
          @click="showCalendarDialog = true"
        >
          <FSSpan
            class="fs-agenda-header-text"
            font="text-button"
          >
            {{ epochToMonthYearOnlyFormat($props.start) }}
          </FSSpan>
        </FSButton>
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
    </template>
    <FSCol
      v-else
    >
      <FSButton
        prependIcon="mdi-calendar-today-outline"
        :label="$tr('ui.agenda.today', 'Today')"
        width="100%"
        @click="onToday"
      />
      <FSRow
        :wrap="false"
        align="center-center"
        padding="0 4px"
      >
        <FSButton
          variant="icon"
          icon="mdi-chevron-left"
          @click="onPrevious"
        />
        <FSButton
          width="100%"
          color="primary"
          :border="false"
          :label="epochToDayMonthLongOnly($props.start)"
          @click="showCalendarDialog = true"
        />
        <FSButton
          variant="icon"
          icon="mdi-chevron-right"
          @click="onNext"
        />
      </FSRow>
    </FSCol>
  </FSRow>
  <FSAgendaDialogCalendar
    v-model:dialog="showCalendarDialog"
    :modelValue="$props.start"
    @update:modelValue="updateDateRange($event)"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, watch } from 'vue';

import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables';

import { AgendaMode } from '@dative-gpi/foundation-shared-domain/enums/agendas';

import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSButton from '../FSButton.vue';
import FSSelectAgendaMode from './FSSelectAgendaMode.vue';
import FSAgendaDialogCalendar from './FSAgendaDialogCalendar.vue';
import FSSpan from '../FSSpan.vue';

export default defineComponent({
  name: 'FSAgendaHeader',
  components: {
    FSAgendaDialogCalendar,
    FSSelectAgendaMode,
    FSCol,
    FSButton,
    FSSpan,
    FSRow
  },
  props: {
    mode: {
      type: Number as PropType<AgendaMode>,
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
    now: {
      type: Number,
      required: true
    }
  },
  emits: ['update', 'update:start', 'update:end', 'update:mode'],
  setup(props, { emit }) {
    const { epochToMonthYearOnlyFormat, epochToDayMonthLongOnly, epochToLocalDayStart, epochToLocalDayEnd } = useDateFormat();

    const showCalendarDialog = ref(false);

    const updateDateRange = (dayStart: number) => {
      const newStart = epochToLocalDayStart(dayStart);
      if (props.mode === AgendaMode.Week) {
        const newEnd = epochToLocalDayEnd(newStart + (7 - new Date(newStart).getDay()) * 24 * 60 * 60 * 1000)
        emit('update:start', newStart);
        emit('update:end', newEnd);
        emit('update', { start: newStart, end: newEnd, mode: props.mode })
        return;
      }
      if (props.mode === AgendaMode.Month) {
        emit('update:start', newStart);
        const lastDayOfMonth = new Date(new Date(newStart).getFullYear(), new Date(newStart).getMonth() + 1, 0);
        const newEnd = epochToLocalDayEnd(lastDayOfMonth.getTime());
        emit('update:end', newEnd);
        emit('update', { start: newStart, end: newEnd, mode: props.mode })
        return;
      }
      const newEnd = epochToLocalDayEnd(newStart);
      emit('update:start', newStart);
      emit('update:end', newEnd);
      emit('update', { start: newStart, end: newEnd, mode: props.mode })
    }

    const onNext = () => {
      updateDateRange(props.end + 1000 * 60);
    }

    const onPrevious = () => {
      if (props.mode === AgendaMode.Week) {
        updateDateRange(props.start - 7 * 24 * 60 * 60 * 1000);
      } else if (props.mode === AgendaMode.Month) {
        updateDateRange(new Date(props.start).setMonth(new Date(props.start).getMonth() - 1));
      } else if (props.mode === AgendaMode.Day) {
        updateDateRange(props.start - 24 * 60 * 60 * 1000);
      }
    }

    const onToday = () => {
      if (props.mode === AgendaMode.Week) {
        updateDateRange(props.now - (new Date(props.now).getDay() - 1) * 24 * 60 * 60 * 1000);
      } else if (props.mode === AgendaMode.Month) {
        updateDateRange(new Date(props.now).setDate(1));
      } else if (props.mode === AgendaMode.Day) {
        updateDateRange(props.now);
      }
    }

    watch(() => props.mode, (newMode) => {
      const dayBtwStartAndEnd = props.start + (props.end - props.start) / 2;
      if (newMode === AgendaMode.Week) {
        updateDateRange(dayBtwStartAndEnd - (new Date(dayBtwStartAndEnd).getDay() - 1) * 24 * 60 * 60 * 1000);
      } else if (newMode === AgendaMode.Month) {
        updateDateRange(new Date(dayBtwStartAndEnd).setDate(1));
      } else if (newMode === AgendaMode.Day) {
        updateDateRange(dayBtwStartAndEnd);
      }
    });

    return {
      AgendaMode,
      showCalendarDialog,
      epochToDayMonthLongOnly,
      epochToMonthYearOnlyFormat,
      onNext,
      onPrevious,
      onToday,
      updateDateRange
    }
  }
});
</script>