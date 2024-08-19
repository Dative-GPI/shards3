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
          {{ $tr('ui.periodicfield.daily.every', 'Every') }}
        </FSSpan>
        <FSNumberField
          :modelValue="days"
          :hideHeader="true"
          :clearable="false"
          @update:modelValue="onUpdateDays($event)"
        />
        <FSSpan
          :font="font"
        >
          {{ $tr('ui.periodicfield.daily.daysat', 'day(s) at') }}
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

export default defineComponent({
  name: 'FSPeriodicDailyField',
  components: {
    FSClock,
    FSNumberField,
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
    const selectedConfiguration = ref('custom');

    const availableConfigurations = [
      { value: 'custom', item: { value: 'custom' } }
    ]

    const days = computed(() => {
      return +props.modelValue[2].replace('*/', '');
    });
    const time = computed(() => {
      return (+props.modelValue[1] * 60 + +props.modelValue[0]) * 1000 * 60;
    });

    const onUpdateDays = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `*/${value}`, '*', '*']);
    }

    const onUpdateHours = (value: number) => {
      const minutesAll = value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `*/${days.value}`, '*', '*']);
    }

    return {
      onUpdateDays,
      onUpdateHours,
      availableConfigurations,
      days,
      selectedConfiguration,
      time
    }
  }
})
</script>