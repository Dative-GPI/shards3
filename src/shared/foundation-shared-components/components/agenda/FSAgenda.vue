<template>
  <FSCol
    :height="$props.height"
    :width="$props.width"
    gap="24px"
  >
    <FSAgendaHeader
      :mode="$props.mode"
      :begin="begin"
      :end="end"
      :now="now"
      @update:begin="($event) => $emit('update:begin', $event)"
      @update:end="($event) => $emit('update:end', $event)"
      @update:mode="($event) => $emit('update:mode', $event)"
    />
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
          :begin="begin"
          :end="end"
          :now="now"
          :nowIsInSelectedRange="nowIsInSelectedRange"
          :loading="$props.loading"
          @click:event-id="$emit('click:eventId', $event)"
        >
          <FSAgendaVerticalTimeLineMarker
            v-if="nowIsInSelectedRange"
            :modelValue="now"
          />
        </FSDayAgenda>
        <FSWeekAgenda
          :value="modeValues.week"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :begin="begin"
          :end="end"
          :now="now"
          :nowIsInSelectedRange="nowIsInSelectedRange"
          :loading="$props.loading"
          @click:event-id="$emit('click:eventId', $event)"
        >
          <FSAgendaHorizontalTimeLineMarker
            v-if="nowIsInSelectedRange"
            :modelValue="now"
          />
        </FSWeekAgenda>
        <FSMonthAgenda
          :value="modeValues.month"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :begin="begin"
          :end="end"
          :now="now"
          :nowIsInSelectedRange="nowIsInSelectedRange"
          :loading="$props.loading"
          @click:event-id="$emit('click:eventId', $event)"
        >
          <FSAgendaHorizontalTimeLineMarker
            v-if="nowIsInSelectedRange"
            :modelValue="now"
          />
        </FSMonthAgenda>
      </FSWindow>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref, onUnmounted, watch } from 'vue';

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import type { FSAgendaEvent } from "@dative-gpi/foundation-shared-components/models";

import FSAgendaVerticalTimeLineMarker from './FSAgendaVerticalTimeLineMarker.vue';
import FSAgendaDialogCalendar from './FSAgendaDialogCalendar.vue';
import FSMonthAgenda from './FSMonthAgenda.vue';
import FSWeekAgenda from './FSWeekAgenda.vue';
import FSDayAgenda from './FSDayAgenda.vue';
import FSSelectAgendaMode from './FSSelectAgendaMode.vue';
import FSAgendaHorizontalTimeLineMarker from './FSAgendaHorizontalTimeLineMarker.vue';
import FSAgendaHeader from './FSAgendaHeader.vue';

import FSWindow from '../FSWindow.vue';
import FSCol from '../FSCol.vue';
import FSButton from '../FSButton.vue';
import FSRow from '../FSRow.vue';

export default defineComponent({
  name: 'FSAgenda',
  components: {
    FSAgendaDialogCalendar,
    FSAgendaHeader,
    FSAgendaHorizontalTimeLineMarker,
    FSAgendaVerticalTimeLineMarker,
    FSButton,
    FSCol,
    FSDayAgenda,
    FSMonthAgenda,
    FSRow,
    FSSelectAgendaMode,    
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
      type: Array as PropType<FSAgendaEvent[]>,
      default: () => []
    },
    begin: {
      type: Number as PropType<number | null>,
      required: false
    },
    end: {
      type: Number as PropType<number | null>,
      required: false
    }
  },
  emits: ['update:mode', 'click:eventId', 'update:begin', 'update:end'],
  setup(props, { emit }) {
    const { todayToEpoch, epochToLocalDayBegin, epochToLocalDayEnd } = useDateFormat();
    const { isExtraSmall } = useBreakpoints();

    const dayColumnWidth = '46px';

    const now = ref(todayToEpoch());
    const defaultMode = ref(props.mode);

    const modeValues = {
      'day': 1,
      'week': 2,
      'month': 3,
    }

    const begin = computed<number>(() => {
      if (props.begin) {
        return props.begin;
      }else if (props.mode === 'week') {
        return epochToLocalDayBegin(now.value - (new Date(now.value).getDay() - 1) * 24 * 60 * 60 * 1000);
      } else if (props.mode === 'month') {
        return epochToLocalDayBegin(new Date(now.value).setDate(1));
      } else {
        return epochToLocalDayBegin(now.value);
      }
    });

    const end = computed<number>(() => {
      if (props.end) {
        return props.end;
      } else if (props.mode === 'week') {
        return epochToLocalDayEnd(now.value + (7 - new Date(now.value).getDay()) * 24 * 60 * 60 * 1000);
      } else if (props.mode === 'month') {
        const lastDayOfMonth = new Date(new Date(now.value).getFullYear(), new Date(now.value).getMonth() + 1, 0);
        return epochToLocalDayEnd(lastDayOfMonth.getTime());
      } else {
        return epochToLocalDayEnd(now.value);
      }
    });

    const nowIsInSelectedRange = computed(() => {
      return now.value >= begin.value && now.value <= end.value;
    });

    const nowInterval = setInterval(() => {
      now.value = todayToEpoch();
    }, 10000);

    onUnmounted(() => {
      clearInterval(nowInterval);
    });

    watch(isExtraSmall, (value) => {
      if (value && props.mode !== 'day') {
        emit('update:mode', 'day');
      } else if (!value && defaultMode.value !== 'day') {
        emit('update:mode', defaultMode.value);
      }
    }, {immediate: true});

    return {
      begin,
      dayColumnWidth,
      end,
      modeValues,
      now,
      nowIsInSelectedRange
    };
  }
});
</script>