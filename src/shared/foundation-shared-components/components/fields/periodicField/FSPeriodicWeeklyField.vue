<template>
  <FSRadioGroup
    :values="availableConfigurations"
    v-model="selectedConfiguration"
    :editable="editable"
  >
    <template
      #label="{ item, font }"
    >
      <FSRow
        v-if="item.value === 'custom'"
        align="center-left"
      >
        <FSSpan
          :font="font"
        >
          {{ $tr('ui.periodicfield.weekly.every', 'Every') }}
        </FSSpan>
        <FSSelectDays
          :modelValue="day"
          :hideHeader="true"
          :useAllDays="false"
          :editable="editable"
          @update:modelValue="onUpdateDay($event)"
        />
        <FSSpan
          :font="font"
        >
          {{ $tr('ui.periodicfield.weekly.at', 'at') }}
        </FSSpan>
        <FSClock
          color="light"
          :modelValue="time"
          :hideHeader="true"
          :slider="false"
          :editable="editable"
          @update:modelValue="onUpdateHours($event)"
        />
      </FSRow>
    </template>
  </FSRadioGroup>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';

import FSRadioGroup from '../../FSRadioGroup.vue';
import FSRow from '../../FSRow.vue';
import FSSpan from '../../FSSpan.vue';
import FSClock from '../../FSClock.vue';
import FSSelectDays from '../../selects/FSSelectDays.vue';

export default defineComponent({
  name: 'FSPeriodicWeeklyField',
  components: {
    FSClock,
    FSSelectDays,
    FSRadioGroup,
    FSRow,
    FSSpan
  },
  props: {
    modelValue: {
      type: Array<string>,
      required: true
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {

    const selectedConfiguration = ref('custom');

    const availableConfigurations = [
      { value: 'custom', item: { value: 'custom' } }
    ]
    
    const day = computed(() => {
      return +props.modelValue[4] - 1;
    });
    const time = computed(() => {
      return (+props.modelValue[1] * 60 + +props.modelValue[0]) * 1000 * 60;
    });

    const onUpdateDay = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `*`, `*`, `${value + 1}`]);
    }

    const onUpdateHours = (value: number) => {
      const minutesAll = value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `*`, `*`, `${day.value + 1}`]);
    }

    return {
      onUpdateDay,
      onUpdateHours,
      availableConfigurations,
      day,
      selectedConfiguration,
      time
    }
  }
})
</script>