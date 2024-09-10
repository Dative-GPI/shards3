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
          width="180px"
          color="primary"
          :border="false"
          :label="epochToMonthYearOnlyFormat($props.start)"
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
import { defineComponent, type PropType, ref } from 'vue';

import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables';

import { AgendaMode } from '@dative-gpi/foundation-shared-domain/enums/agendas';

import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSButton from '../FSButton.vue';
import FSSelectAgendaMode from './FSSelectAgendaMode.vue';
import FSAgendaDialogCalendar from './FSAgendaDialogCalendar.vue';

export default defineComponent({
  name: 'FSAgendaHeader',
  components: {
    FSAgendaDialogCalendar,
    FSSelectAgendaMode,
    FSCol,
    FSButton,
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
  emits: ['update:start', 'update:end', 'update:mode'],
  setup(props, { emit }) {
    const { epochToMonthYearOnlyFormat, epochToDayMonthLongOnly, epochToLocalDayStart, epochToLocalDayEnd } = useDateFormat();

    const showCalendarDialog = ref(false);

    const updateDateRange = (dayStart: number) => {
      const newStart = epochToLocalDayStart(dayStart);
      if (props.mode === AgendaMode.Week) {
        emit('update:start', newStart);
        emit('update:end', epochToLocalDayEnd(newStart + (7 - new Date(newStart).getDay()) * 24 * 60 * 60 * 1000));
        return;
      }
      if (props.mode === AgendaMode.Month) {
        emit('update:start', newStart);
        const lastDayOfMonth = new Date(new Date(newStart).getFullYear(), new Date(newStart).getMonth() + 1, 0);
        emit('update:end', epochToLocalDayEnd(lastDayOfMonth.getTime()));
        return;
      }
      emit('update:start', newStart);
      emit('update:end', epochToLocalDayEnd(newStart));
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