<template>
  <FSAgendaHorizontalEvent
    v-if="$props.variant === 'current'"
    :key="$props.id"
    variant="future"
    :now="$props.now"
    :dayBegin="$props.dayBegin"
    :label="$props.label"
    :start="$props.start"
    :end="$props.end"
    :icon="$props.icon"
    :iconBis="$props.iconBis"
    :id="$props.id"
    :color="$props.color"
    @click="$emit('click', $props.id)"
  >
    <template
      #default="{ label, icon, timeStart, timeEnd, iconBis, variant }"
    >
      <slot
        name="default"
        :label="label"
        :icon="icon"
        :iconBis="iconBis"
        :timeStart="timeStart"
        :timeEnd="timeEnd"
        :variant="variant"
      />
    </template>
  </FSAgendaHorizontalEvent>
  <FSClickable
    v-if="$props.variant !== 'current' || $props.dayBegin < $props.now"
    :class="`fs-agenda-event fs-agenda-event-${$props.variant}`"
    :variant="$props.variant === 'current' ? 'full' : 'standard'"
    :style="style"
    :color="$props.color"
    :width="`${width}%`"
    :border="false"
    @click="$emit('click', $props.id)"
  >
    <slot
      name="default"
      :label="label"
      :icon="icon"
      :iconBis="iconBis"
      :timeStart="timeStart"
      :timeEnd="timeEnd"
      :variant="$props.variant"
    />
  </FSClickable>
</template>

<script lang="ts">
import { defineComponent, computed, type StyleValue, type PropType } from 'vue';

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import FSClickable from '../FSClickable.vue';


export default defineComponent({
  name: 'FSAgendaHorizontalEvent',
  components: {
    FSClickable
  },
  emits: ['click'],
  props: {
    variant: {
      type: String as PropType<'past' | 'current' | 'future'>,
      default: 'future'
    },
    label: {
      type: String,
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
    icon: {
      type: String,
      required: false
    },
    iconBis: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    dayBegin: {
      type: Number,
      required: true
    },
    now: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const { dayToMillisecond, epochToShortTimeOnlyFormat, millisecondToDay } = useDateFormat();

    const dayEnd = props.dayBegin + dayToMillisecond(1);

    const timeStart = computed(() => {
      return epochToShortTimeOnlyFormat(props.start);
    });

    const timeEnd = computed(() => {
      return epochToShortTimeOnlyFormat(props.end);
    });

    const leftPosition = computed(() => {
      if (props.start < props.dayBegin) {
        return 0;
      }
      return millisecondToDay(props.start - props.dayBegin) * 100;
    });

    const width = computed(() => {
      let start = props.start;
      let end = props.end;
      if(props.variant === 'current') {
        end = props.now;
      } else if (props.end > dayEnd) {
        end = dayEnd;
      }
      if (props.start < props.dayBegin) {
        start = props.dayBegin;
      }
      
      const duration = millisecondToDay(end - start);
      return duration > 0 ? (duration * 100) : 0;
    });

    const style = computed((): StyleValue => {
      return {
        '--fs-agenda-event-left': `${leftPosition.value}%`,
      };
    });

    return {
      style,
      timeEnd,
      timeStart,
      width
    };
  }
});

</script>