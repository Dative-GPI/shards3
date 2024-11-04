<template>
  <FSAgendaHorizontalEvent
    v-if="$props.variant === 'current'"
    :key="$props.id"
    variant="future"
    :now="$props.now"
    :dayStart="$props.dayStart"
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
      #default="{ label, icon, timeStart, timeEnd, iconBis, variant, width }"
    >
      <slot
        name="default"
        :label="label"
        :icon="icon"
        :iconBis="iconBis"
        :timeStart="timeStart"
        :timeEnd="timeEnd"
        :variant="variant"
        :width="width"
      />
    </template>
  </FSAgendaHorizontalEvent>
  <FSClickable
    v-if="$props.variant !== 'current' || $props.dayStart < $props.now"
    :class="`fs-agenda-event fs-agenda-event-${$props.variant}`"
    :variant="$props.variant === 'current' ? 'full' : 'standard'"
    :style="style"
    :color="$props.color"
    :width="`${width}%`"
    height="calc(100% - 4px)"
    :border="false"
    @click="$emit('click', $props.id)"
  >
    <slot
      name="default"
      :label="label"
      :icon="icon"
      :iconBis="iconBis"
      :timeStart="epochToShortTimeOnlyFormat($props.start)"
      :timeEnd="epochToShortTimeOnlyFormat($props.end)"
      :variant="$props.variant"
      :width="width"
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
    dayStart: {
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

    const dayEnd = computed(() => {
      return new Date(props.dayStart).setHours(23, 59, 59, 999);
    });

    const dayDuration = computed(() => {
      return dayEnd.value - props.dayStart;
    });

    const dayDurationOffset = computed(() => {
      return dayDuration.value - dayToMillisecond(1);
    });

    const leftPosition = computed(() => {
      if (props.start < props.dayStart) {
        return 0;
      }
      return millisecondToDay(props.start - props.dayStart - dayDurationOffset.value) * 100;
    });

    const width = computed(() => {
      let start = props.start - dayDurationOffset.value;
      let end = props.end - dayDurationOffset.value;
      if(props.variant === 'current' && dayEnd.value > props.now) {
        end = props.now;
      } else if (props.end > dayEnd.value) {
        end = dayEnd.value - dayDurationOffset.value;
      }
      if (props.start < props.dayStart) {
        start = props.dayStart;
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
      width,
      epochToShortTimeOnlyFormat
    };
  }
});

</script>