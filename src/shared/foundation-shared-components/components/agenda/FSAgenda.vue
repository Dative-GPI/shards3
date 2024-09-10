<template>
  <FSCol
    :height="$props.height"
    :width="$props.width"
    gap="24px"
  >
    <FSAgendaHeader
      :mode="$props.mode!"
      :start="start"
      :end="end"
      :now="now"
      @update:start="($event) => $emit('update:start', $event)"
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
        :modelValue="$props.mode"
        width="100%"
        height="100%"
      >
        <FSDayAgenda
          :value="AgendaMode.Day"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :start="start"
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
          :value="AgendaMode.Week"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :start="start"
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
          :value="AgendaMode.Month"
          :events="$props.events"
          :firstColumnWidth="dayColumnWidth"
          :start="start"
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
import { AgendaMode } from '@dative-gpi/foundation-shared-domain/enums/agendas';

import FSAgendaVerticalTimeLineMarker from './FSAgendaVerticalTimeLineMarker.vue';
import FSMonthAgenda from './FSMonthAgenda.vue';
import FSWeekAgenda from './FSWeekAgenda.vue';
import FSDayAgenda from './FSDayAgenda.vue';
import FSAgendaHorizontalTimeLineMarker from './FSAgendaHorizontalTimeLineMarker.vue';
import FSAgendaHeader from './FSAgendaHeader.vue';
import FSWindow from '../FSWindow.vue';
import FSCol from '../FSCol.vue';


export default defineComponent({
  name: 'FSAgenda',
  components: {
    FSAgendaHeader,
    FSAgendaHorizontalTimeLineMarker,
    FSAgendaVerticalTimeLineMarker,
    FSCol,
    FSDayAgenda,
    FSMonthAgenda,  
    FSWeekAgenda,
    FSWindow
  },
  props: {
    mode: {
      type: Number as PropType<AgendaMode>,
      default: AgendaMode.Week
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
    start: {
      type: Number as PropType<number | null>,
      required: false
    },
    end: {
      type: Number as PropType<number | null>,
      required: false
    }
  },
  emits: ['update:mode', 'click:eventId', 'update:start', 'update:end'],
  setup(props, { emit }) {
    const { todayToEpoch, epochToLocalDayStart, epochToLocalDayEnd } = useDateFormat();
    const { isExtraSmall } = useBreakpoints();

    const dayColumnWidth = '46px';

    const now = ref(todayToEpoch());
    const defaultMode = ref(props.mode);

    const start = computed<number>(() => {
      if (props.start) {
        return props.start;
      }
      if (props.mode === AgendaMode.Week) {
        return epochToLocalDayStart(now.value - (new Date(now.value).getDay() - 1) * 24 * 60 * 60 * 1000);
      }
      if (props.mode === AgendaMode.Month) {
        return epochToLocalDayStart(new Date(now.value).setDate(1));
      }
      return epochToLocalDayStart(now.value);
    });

    const end = computed<number>(() => {
      if (props.end) {
        return props.end;
      }
      if (props.mode === AgendaMode.Week) {
        return epochToLocalDayEnd(now.value + (7 - new Date(now.value).getDay()) * 24 * 60 * 60 * 1000);
      }
      if (props.mode === AgendaMode.Month) {
        const lastDayOfMonth = new Date(new Date(now.value).getFullYear(), new Date(now.value).getMonth() + 1, 0);
        return epochToLocalDayEnd(lastDayOfMonth.getTime());
      }
      return epochToLocalDayEnd(now.value);
    });

    const nowIsInSelectedRange = computed(() => {
      return now.value >= start.value && now.value <= end.value;
    });

    const nowInterval = setInterval(() => {
      now.value = todayToEpoch();
    }, 10000);

    onUnmounted(() => {
      clearInterval(nowInterval);
    });

    watch(isExtraSmall, (value) => {
      if (value && props.mode !== AgendaMode.Day) {
        emit('update:mode', AgendaMode.Day);
      } else if (!value && defaultMode.value !== AgendaMode.Day) {
        emit('update:mode', defaultMode.value);
      }
    }, {immediate: true});

    return {
      AgendaMode,
      start,
      dayColumnWidth,
      end,
      now,
      nowIsInSelectedRange
    };
  }
});
</script>