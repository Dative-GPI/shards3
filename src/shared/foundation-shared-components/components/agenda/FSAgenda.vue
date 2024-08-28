<template>
  <FSCol
    :height="$props.height"
    :width="$props.width"
  >
    <FSRow
      align="center-center"
    >
      <FSRow
        align="center-left"
      >
        <FSButton
          variant="icon"
          icon="mdi-chevron-left"
          @click="onPrevious"
        />
        <FSButton
          width="180px"
          color="primary"
          :label="selectedDateMonthYear"
          variant="full"
        />
        <FSButton
          variant="icon"
          icon="mdi-chevron-right"
          @click="onNext"
        />
      </FSRow>
      <v-spacer />
      <FSRow
        align="center-right"
      >
        <FSSelectAgendaMode
          :modelValue="$props.mode"
          :hideHeader="true"
          @update:modelValue="$emit('update:mode', $event)"
        />
        <FSButton
          prependIcon="mdi-calendar"
          :label="$tr('ui.agenda.today', 'Today')"
          @click="onToday"
        />
      </FSRow>
    </FSRow>
    <FSCol
      height="100%"
      gap="0">
      <FSRow
        gap="0"
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
          :firstColumnWidth="dayColumnWidth"
          :selectedDate="selectedDate"
          :now="now"
        >
          <FSTimeLineMarker
            v-if="nowIsInSelectedRange"
            :modelValue="now"
          />
        </FSWeekAgenda>
        <FSMonthAgenda
          :value="modeValues.month"
        >
        </FSMonthAgenda>
        
      </FSWindow>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref } from 'vue';

import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

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
      default: "500px"
    },
    width: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "100%"
    },
  },
  emits: ['update:mode'],
  setup(props) {
    const { todayToEpoch } = useAppTimeZone();

    const now = ref(todayToEpoch());
    const nowHour = computed(() => new Date(now.value).getHours());
    const selectedDate = ref(now.value);
    const selectedDateMonthYear = computed(() => new Date(selectedDate.value).toLocaleString('default', { month: 'long', year: 'numeric' }));

    const dayColumnWidth = '46px';

    const nowIsInSelectedMonth = computed(() => {
      return new Date(selectedDate.value).getMonth() === new Date(now.value).getMonth();
    });

    const nowIsInSelectedWeek = computed(() => {
      const monday = new Date(selectedDate.value).setDate(new Date(selectedDate.value).getDate() - new Date(selectedDate.value).getDay() + (new Date(selectedDate.value).getDay() === 0 ? -6 : 1));
      const sunday = new Date(monday).setDate(new Date(monday).getDate() + 6);
      return new Date(now.value) >= new Date(monday) && new Date(now.value) <= new Date(sunday);
    });

    const nowIsInSelectedRange = computed(() => {
      return props.mode === 'week' ? nowIsInSelectedWeek.value : nowIsInSelectedMonth.value;
    });

    const modeValues = {
      'week': 1,
      'month': 2,
    }

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

    setInterval(() => {
      now.value = todayToEpoch();
    }, 10000);

    return {
      dayColumnWidth,
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