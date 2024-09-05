<template>
  <FSRow 
    align="center-center"
  >
    <template 
      v-if="$props.mode !== 'day'"
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
          :label="beginMonthYear"
          @click="showCalendarDialog = true"
        />
        <FSButton
          variant="icon"
          icon="mdi-chevron-right"
          @click="onNext"
        />
      </FSRow>
      <FSRow align="center-right">
        <FSRow width="hug">
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
    <FSCol v-else>
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
          :label="beginDayMonthYear"
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
    :modelValue="$props.begin"
    @update:modelValue="updateDateRange($event)"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref } from 'vue';

import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables';

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
      type: String as PropType<'day' | 'week' | 'month'>,
      default: 'week',
    },
    begin: {
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
  emits: ['update:begin', 'update:end', 'update:mode'],
  setup(props, { emit }) {
    const { epochToMonthYearOnlyFormat, epochToDayMonthLongOnly, epochToLocalDayBegin, epochToLocalDayEnd } = useDateFormat();


    const showCalendarDialog = ref(false);

    const beginMonthYear = computed(() => {
      if (!props.begin) { return ''; }
      return epochToMonthYearOnlyFormat(props.begin);
    });

    const beginDayMonthYear = computed(() => {
      if (!props.begin) { return ''; }
      return epochToDayMonthLongOnly(props.begin);
    });

    const updateDateRange = (dayBegin: number) => {
      const newBegin = epochToLocalDayBegin(dayBegin);
      if (props.mode === 'week') {
        emit('update:begin', newBegin);
        emit('update:end', epochToLocalDayEnd(newBegin + (7 - new Date(newBegin).getDay()) * 24 * 60 * 60 * 1000));
      } else if (props.mode === 'month') {
        emit('update:begin', newBegin);
        const lastDayOfMonth = new Date(new Date(newBegin).getFullYear(), new Date(newBegin).getMonth() + 1, 0);
        emit('update:end', epochToLocalDayEnd(lastDayOfMonth.getTime()));
      } else if (props.mode === 'day') {
        emit('update:begin', newBegin);
        emit('update:end', epochToLocalDayEnd(newBegin));
      }
    }

    const onNext = () => {
      updateDateRange(props.end + 1000 * 60);
    }

    const onPrevious = () => {
      if (props.mode === 'week') {
        updateDateRange(props.begin - 7 * 24 * 60 * 60 * 1000);
      } else if (props.mode === 'month') {
        updateDateRange(new Date(props.begin).setMonth(new Date(props.begin).getMonth() - 1));
      } else if (props.mode === 'day') {
        updateDateRange(props.begin - 24 * 60 * 60 * 1000);
      }
    }

    const onToday = () => {
      if (props.mode === 'week') {
        updateDateRange(props.now - (new Date(props.now).getDay() - 1) * 24 * 60 * 60 * 1000);
      } else if (props.mode === 'month') {
        updateDateRange(new Date(props.now).setDate(1));
      } else if (props.mode === 'day') {
        updateDateRange(props.now);
      }
    }

    return {
      beginDayMonthYear,
      beginMonthYear,
      showCalendarDialog,
      onNext,
      onPrevious,
      onToday,
      updateDateRange
    }
  }
});
</script>