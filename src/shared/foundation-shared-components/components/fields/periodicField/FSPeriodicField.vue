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
import { ref, defineComponent } from 'vue';

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
    },
    defaultSelectedPeriod: {
      type: String,
      required: false,
      default: 'daily'
    }
  },
  emits: ['update:modelValue'],
  setup(props) {
    const { $tr } = useTranslations();

    const selectedPeriod = ref(props.defaultSelectedPeriod);

    const availablePeriod = [
      { label: $tr('ui.periodicField.daily', 'Daily'), value: 'daily', item: null },
      { label: $tr('ui.periodicField.weekly', 'Weekly'), value: 'weekly', item: null },
      { label: $tr('ui.periodicField.monthly', 'Monthly'), value: 'monthly', item: null },
      { label: $tr('ui.periodicField.yearly', 'Yearly'), value: 'yearly', item: null }
    ]

    return {
      availablePeriod,
      selectedPeriod
    }
  }
})
</script>