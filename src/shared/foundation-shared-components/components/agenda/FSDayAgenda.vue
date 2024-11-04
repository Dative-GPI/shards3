<template>
  <FSRow
    class="fs-day-agenda"
    height="100%"
    :wrap="false"
    gap="0px"
    :style="style"
  >
    <FSLoader
      v-if="$props.loading"
      width="100%"
      height="100%"
    />
    <FSRow
      v-else
      height="100%"
      gap="0"
      :wrap="false"
    >
      <FSAgendaHoursCol
        :displayNow="$props.nowIsInSelectedRange"
        :modelValue="nowHour"
      />
      <FSCol
        height="100%"
        width="fill"
        class="fs-agenda-body"
        gap="0"
      >
        <span
          v-for="hour in 24"
          class="fs-day-agenda-hour-line"
          :key="hour"
        />
        <FSCol
          style="position: absolute;"
          height="100%"
          padding="0 0 0 3px"
          width="calc(100% - 32px)"
        >
          <slot />
          <FSCol
            style="position: relative;"
            height="100%"
          >
            <FSAgendaVerticalEvent
              v-for="event in dayEvents"
              :key="event.id"
              :variant="event.end < now ? 'past' : event.start > now ? 'future' : 'current'"
              :now="now"
              :dayStart="$props.start"
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
                #default="{ label, icon, timeStart, timeEnd, iconBis }"
              >
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
                        <FSSpan
                          font="text-button"
                        >
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
        </FSCol>
      </FSCol>
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, type StyleValue } from 'vue';

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum, type FSAgendaEvent } from "@dative-gpi/foundation-shared-components/models";

import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSAgendaHoursCol from './FSAgendaHoursCol.vue';
import FSAgendaVerticalEvent from './FSAgendaVerticalEvent.vue';
import FSIcon from '../FSIcon.vue';
import FSSpan from '../FSSpan.vue';
import FSLoader from '../FSLoader.vue';

export default defineComponent({
  name: 'FSDayAgenda',
  components: {
    FSAgendaHoursCol,
    FSAgendaVerticalEvent,
    FSCol,
    FSIcon,
    FSLoader,
    FSRow,
    FSSpan
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
    },
    nowIsInSelectedRange: {
      type: Boolean,
      required: true
    },
  },
  emits: ['click:eventId'],
  setup(props) {
    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);

    const nowHour = computed(() => new Date(props.now).getHours());

    const dayEvents = computed(() => {
      return props.events.filter((event) => {
        return event.start < props.end && event.end > props.start;
      });
    });

    const style = computed((): StyleValue => {
      return {
        '--fs-day-agenda-hour-line-color': lightColors.light,
      };
    });

    return {
      dayEvents,
      nowHour,
      style
    };
  },
});
</script>
