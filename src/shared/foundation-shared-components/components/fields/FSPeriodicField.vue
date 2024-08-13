<template>
  <FSRow>
    <FSRadioGroup
      :values="availablePeriod"
      v-model="selectedPeriod"
    />
    <FSDivider
      :vertical="true"
    />
    Test
  </FSRow>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

import { useTranslations } from '@dative-gpi/bones-ui';

import FSRow from './../FSRow.vue';
import FSRadioGroup from './../FSRadioGroup.vue';
import FSDivider from '../FSDivider.vue';

export default defineComponent({
  name: 'FSPeriodicField',
  components: {
    FSDivider,
    FSRadioGroup,
    FSRow
  },
  props: {
  },
  setup() {
    const { $tr } = useTranslations();

    const selectedPeriod = ref('daily');

    const availablePeriod = [
      { label: $tr('ui.periodicField.daily', 'Daily'), value: 'daily' },
      { label: $tr('ui.periodicField.weekly', 'Weekly'), value: 'weekly' },
      { label: $tr('ui.periodicField.monthly', 'Monthly'), value: 'monthly' },
      { label: $tr('ui.periodicField.yearly', 'Yearly'), value: 'yearly' }
    ]

    return {
      availablePeriod,
      selectedPeriod
    }
  }
})
</script>