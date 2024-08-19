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
import { ref, defineComponent, watch, onMounted } from 'vue';

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
    
    const day = ref(1);
    const month = ref(1);
    const time = ref(0);
    const selectedConfiguration = ref('custom');

    const availableConfigurations = [
      { value: 'custom', item: { value: 'custom' } }
    ]

    const onUpdateDay = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${value}`, `${month.value}`, '*']);
    }

    const onUpdateHours = (value: number) => {
      const minutesAll = value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${day.value}`, `${month.value}`, '*']);
    }

    const onUpdateMonth = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${day.value}`, `${value}`, '*']);
    }

    const formatModelValue = (value: Array<string>) => {
      if (value[2] !== '*' && !value[2].includes('*/')) {
        day.value = +value[2];
      }
      if (value[1] !== '*' && value[0] !== '*') {
        time.value = (+value[1] * 60 + +value[0]) * 1000 * 60;
      }
      if (value[3] !== '*' && !value[3].includes('*/')) {
        month.value = +value[3];
      }

      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      return [`${minutes}`, `${hours}`, `${day.value}`, `${month.value}`, '*'];
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