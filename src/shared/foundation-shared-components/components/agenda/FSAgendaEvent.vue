<template>
  <FSClickable
    class="fs-agenda-event"
    :style="style"
    :color="$props.color"
    :width="`${width}%`"
    :border="false"
  >
    <FSCol
      height="100%"
      align="center-left"
      padding="8px"
    >
      <FSSpan>
        {{ timeStart }}
      </FSSpan>
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSIcon
          v-if="$props.icon"
          :icon="$props.icon"
          size="32px"
        />
        <FSSpan
          font="text-button"
        >
          {{ $props.label }}
        </FSSpan>
      </FSRow>
    </FSCol>
  </FSClickable>
</template>

<script lang="ts">
import { defineComponent, computed, type StyleValue } from 'vue';

import { useAppTimeZone } from '@/shared/foundation-shared-services/composables';

import FSClickable from '../FSClickable.vue';
import FSSpan from '../FSSpan.vue';
import FSIcon from '../FSIcon.vue';
import FSRow from '../FSRow.vue';
import FSCol from '../FSCol.vue';


export default defineComponent({
  name: 'FSAgendaEvent',
  components: {
    FSClickable,
    FSCol,
    FSIcon,
    FSRow,
    FSSpan
  },
  props: {
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
  },
  setup(props) {
    //const { epochToTimeOnlyFormat } = useAppTimeZone();

    const dayEnd = props.dayBegin + 1000 * 60 * 60 * 24;

    const timeStart = computed(() => {
      //return epochToTimeOnlyFormat(props.start);
      return new Date(props.start).toLocaleTimeString();
    });

    const leftPosition = computed(() => {
      if (props.start < props.dayBegin) {
        return 0;
      }
      return (props.start - props.dayBegin) / 1000 / 60 / 60 / 24 * 100;
    });

    const width = computed(() => {
      if(props.end > dayEnd) {
        return (dayEnd - props.start) / 1000 / 60 / 60 / 24 * 100
      }
      console.log(props.end, props.start, ((props.end - props.start) / 1000 / 60 / 60 / 24 * 100))
      return (props.end - props.start) / 1000 / 60 / 60 / 24 * 100;
    });

    const style = computed(():StyleValue => {
      return {
        '--fs-agenda-event-left': `${leftPosition.value}%`,
      };
    });

    return {
      style,
      timeStart,
      width
    };
  }
});

</script>