<template>
  <FSRow
    gap="12px"
    :wrap="false"
  >
    <FSRadioGroup
      :values="availablePeriod"
      v-model="selectedPeriod"
    />
    <FSRow
      :wrap="false"
      gap="12px"
      height="fill"
      align="center-left"
    >
      <FSDivider
        :vertical="true"
      />
      <FSPeriodicDailyField
        v-if="selectedPeriod === 'daily'"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicWeeklyField
        v-else-if="selectedPeriod === 'weekly'"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicMonthlyField
        v-else-if="selectedPeriod === 'monthly'"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
      <FSPeriodicYearlyField
        v-else-if="selectedPeriod === 'yearly'"
        :modelValue="$props.modelValue.split(' ')"
        @update:modelValue="$emit('update:modelValue', $event.join(' '))"
      />
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue';

import { useTranslations } from '@dative-gpi/bones-ui';

import FSRow from '../../FSRow.vue';
import FSRadioGroup from '../../FSRadioGroup.vue';
import FSDivider from '../../FSDivider.vue';
import FSPeriodicDailyField from './FSPeriodicDailyField.vue';
import FSPeriodicWeeklyField from './FSPeriodicWeeklyField.vue';
import FSPeriodicMonthlyField from './FSPeriodicMonthlyField.vue';
import FSPeriodicYearlyField from './FSPeriodicYearlyField.vue';

export default defineComponent({
  name: 'FSPeriodicField',
  components: {
    FSDivider,
    FSPeriodicDailyField,
    FSPeriodicMonthlyField,
    FSPeriodicWeeklyField,
    FSPeriodicYearlyField,
    FSRadioGroup,
    FSRow
  },
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { $tr } = useTranslations();

    const getPeriod = (value: string) => {
      const cronArray = value.split(' ');
      if (cronArray[2].includes('*/')) {
        return 'daily';
      } else if (cronArray[4] !== '*' && !cronArray[2].includes('-')) {
        return 'weekly';
      } else if (cronArray[2] !== '*') {
        return 'monthly';
      } else if (cronArray[3] !== '*') {
        return 'yearly';
      }
      return 'daily';
    }
    const selectedPeriod = ref(getPeriod(props.modelValue));

    const availablePeriod = [
      { label: $tr('ui.periodicField.daily', 'Daily'), value: 'daily', item: { default : '0 12 */1 * *'} },
      { label: $tr('ui.periodicField.weekly', 'Weekly'), value: 'weekly', item: { default : '0 12 * * 1'} },
      { label: $tr('ui.periodicField.monthly', 'Monthly'), value: 'monthly', item: { default : '0 12 1 * *'} },
      { label: $tr('ui.periodicField.yearly', 'Yearly'), value: 'yearly', item: { default : '0 12 1 1 *'} }
    ]

    watch(() => selectedPeriod.value, (newValue) => {
      if (getPeriod(props.modelValue) === newValue) {
        return;
      }
      const period = availablePeriod.find((item) => item.value === newValue);
      if (!period) {
        return;
      }
      emit('update:modelValue', period.item.default);
    })

    return {
      availablePeriod,
      selectedPeriod
    }
  }
})
</script>