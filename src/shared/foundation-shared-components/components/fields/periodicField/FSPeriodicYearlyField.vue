<template>
  <FSRadioGroup
    :values="availableConfigurations"
    v-model="selectedConfiguration"
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
          {{ $tr('ui.periodicfield.yearly.everyyear', 'Every year') }}
        </FSSpan>
        <FSSelectMonths
          :modelValue="month"
          :useAllMonths="false"
          :hideHeader="true"
          @update:modelValue="onUpdateMonth($event)"
        />
        <FSNumberField
          :modelValue="day"
          :hideHeader="true"
          :clearable="false"
          @update:modelValue="onUpdateDay($event)"
        />
        <FSSpan
          :font="font"
        >
          {{ $tr('ui.periodicfield.yearly.at', 'at') }}
        </FSSpan>
        <FSClock
          color="light"
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
import { ref, defineComponent, computed } from 'vue';

import FSRadioGroup from '../../FSRadioGroup.vue';
import FSRow from '../../FSRow.vue';
import FSSpan from '../../FSSpan.vue';
import FSNumberField from '../FSNumberField.vue';
import FSClock from '../../FSClock.vue';
import FSSelectMonths from '../../selects/FSSelectMonths.vue';

export default defineComponent({
  name: 'FSPeriodicDailyField',
  components: {
    FSClock,
    FSNumberField,
    FSRadioGroup,
    FSRow,
    FSSelectMonths,
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
    const selectedConfiguration = ref('custom');

    const availableConfigurations = [
      { value: 'custom', item: { value: 'custom' } }
    ]
    
    const day = computed(() => {
      return +props.modelValue[2];
    });
    const month = computed(() => {
      return +props.modelValue[3] - 1;
    });
    const time = computed(() => {
      return (+props.modelValue[1] * 60 + +props.modelValue[0]) * 1000 * 60;
    });

    const onUpdateDay = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${value}`, `${month.value + 1}`, '*']);
    }

    const onUpdateHours = (value: number) => {
      const minutesAll = value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${day.value}`, `${month.value + 1}`, '*']);
    }

    const onUpdateMonth = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${day.value}`, `${value + 1}`, '*']);
    }

    return {
      onUpdateDay,
      onUpdateHours,
      onUpdateMonth,
      availableConfigurations,
      day,
      month,
      selectedConfiguration,
      time
    }
  }
})
</script>