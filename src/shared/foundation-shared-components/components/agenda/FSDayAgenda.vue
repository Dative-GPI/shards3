<template>
  <FSRow
    class="fs-day-agenda"
    height="100%"
    :wrap="false"
    gap="0px"
  >
    <FSRow height="100%">
      <FSAgendaHoursCol
        :displayNow="$props.nowIsInSelectedRange"
        :modelValue="nowHour"
      />
      <FSCol>
        <FSAgendaVerticalEvent
          v-for="event in dayEvents"
          :key="event.id"
          :variant="event.end < now ? 'past' : event.start > now ? 'future' : 'current'"
          :now="now"
          :dayBegin="dayBegin"
          :label="event.label"
          :start="event.start"
          :end="event.end"
          :icon="event.icon"
          :iconBis="event.iconBis"
          :id="event.id"
          :color="event.color"
          @click="() => $emit('click:eventId', event.id)"
        >
          <template #default="{ label, icon, timeStart, timeEnd, iconBis, variant }">
            <FSCol>
              <FSRow
                class="fs-agenda-event-day-label-container"
                align="center-left"
                gap="4px"
                :wrap="false"
              >
                <FSCol
                  height="hug"
                  width="fill"
                  align="center-left"
                  padding="8px 8px 0 8px"
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
                    />
                    <FSSpan font="text-button">
                      {{ label }}
                    </FSSpan>
                  </FSRow>
                </FSCol>
                <FSCol
                  v-if="iconBis"
                  align="center-right"
                  padding="8px 8px 8px 0"
                  width="hug"
                >
                  <FSIcon
                    v-if="iconBis"
                    :icon="iconBis"
                  />
                </FSCol>
              </FSRow>
            </FSCol>
          </template>
        </FSAgendaVerticalEvent>
      </FSCol>
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, watch } from 'vue';

import type { AgendaEvent } from '../../models/agendaEvent';

import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSAgendaHoursCol from './FSAgendaHoursCol.vue';
import FSAgendaVerticalEvent from './FSAgendaVerticalEvent.vue';
import FSIcon from '../FSIcon.vue';
import FSSpan from '../FSSpan.vue';

export default defineComponent({
  name: 'FSDayAgenda',
  components: {
    FSAgendaHoursCol,
    FSAgendaVerticalEvent,
    FSCol,
    FSIcon,
    FSRow,
    FSSpan
  },
  props: {
    now: {
      type: Number,
      required: true
    },
    selectedDate: {
      type: Number,
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
      type: Array as PropType<AgendaEvent[]>,
      default: () => []
    },
    nowIsInSelectedRange: {
      type: Boolean,
      required: true
    },
  },
  emits: ['update:begin', 'update:end', 'click:eventId'],
  setup(props, { emit }) {

    const nowHour = computed(() => new Date(props.now).getHours());

    const dayBegin = computed(() => {
      const dayBeginDate = new Date(props.selectedDate);
      dayBeginDate.setHours(0, 0, 0, 0);
      emit('update:begin', dayBeginDate);
      return dayBeginDate.getTime();
    });

    const dayEnd = computed(() => {
      const dayEndDate = new Date(props.selectedDate);
      dayEndDate.setHours(23, 59, 59, 999);
      emit('update:end', dayEndDate);
      return dayEndDate.getTime();
    });

    const dayEvents = computed(() => {
      return props.events.filter((event) => {
        return event.start <= dayEnd.value && event.end >= dayBegin.value;
      });
    });

    return {
      dayBegin,
      dayEvents,
      nowHour,
    };
  },
});
</script>
