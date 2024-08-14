<template>
  <FSRadioGroup
    :values="availableConfigurations"
    v-model="selectedConfiguration"
  >
    <template #label="{ item, font }">
      <FSRow
        v-if="item.value === 'custom'"
        align="center-left"
      >
        <FSSpan :font="font">
          {{ $tr('ui.periodicfield.weekly.every', 'Every') }}
        </FSSpan>
        <FSSelectDays
          :modelValue="day"
          :hideHeader="true"
          :useAllDays="false"
          @update:modelValue="onUpdateDay($event)"
        />
        <FSSpan :font="font">
          {{ $tr('ui.periodicfield.weekly.at', 'at') }}
        </FSSpan>
        <FSClock
          :modelValue="time"
          :hideHeader="true"
          :slider="false"
          @update:modelValue="onUpdateHours($event)"
        />
      </FSRow>
    </template>
  </FSRadioGroup>
</template>

<script lang="ts">
import { ref, defineComponent, watch, onMounted } from 'vue';

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
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    
    const day = ref(0);
    const time = ref(0);
    const selectedConfiguration = ref('custom');

    const availableConfigurations = [
      { value: 'custom', item: { value: 'custom' } }
    ]

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

    const formatModelValue = (value: Array<string>) => {
      if (value[4] !== '*') {
        day.value = +value[4] - 1;
      }
      if (value[1] !== '*' && value[0] !== '*') {
        time.value = (+value[1] * 60 + +value[0]) * 1000 * 60;
      }

      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      return [`${minutes}`, `${hours}`, '*', '*', day.value + 1];
    }

    onMounted(() => {
      if(JSON.stringify(formatModelValue(props.modelValue)) !== JSON.stringify(props.modelValue)) {
        emit('update:modelValue', formatModelValue(props.modelValue));
      }
    })

    watch(() => props.modelValue, (value) => {
      formatModelValue(value);
    })

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