<template>
  <FSRadioGroup
    :values="availableConfigurations"
    v-model="selectedConfiguration"
  >
    <template
      #label="{ item, font }"
    >
      <FSRow
        v-if="item.value === 'customDayNumber'"
        align="center-left"
      >
        <FSSpan
          :font="font"
        >
          {{ $tr('ui.periodicfield.monthly.day', 'Day') }}
        </FSSpan>
        <FSSelectField
          :modelValue="dayNumber"
          :clearable="false"
          :hideHeader="true"
          :items="dayNumbers"
          @update:modelValue="onUpdateDayNumber($event)"
        />
        <FSSpan
          :font="font"
        >
          {{ $tr('ui.periodicfield.monthly.every-month-at', 'every month at') }}
        </FSSpan>
        <FSClock
          color="light"
          :modelValue="time"
          :hideHeader="true"
          :slider="false"
          @update:modelValue="onUpdateHours($event)"
        />
      </FSRow>
      <FSRow
        v-else-if="item.value === 'customDayWeek'"
        align="center-left"
      >
        <FSSpan
          :font="font"
        >
          {{ $tr('ui.periodicfield.monthly.every', 'Every') }}
        </FSSpan>
        <FSSelectField
          :items="dayWeekNumbers"
          :modelValue="dayWeekNumber"
          :clearable="false"
          :hideHeader="true"
          @update:modelValue="onUpdateDayWeekNumber($event)"
        />
        <FSSelectDays
          :modelValue="dayWeek"
          :hideHeader="true"
          :useAllDays="false"
          @update:modelValue="onUpdateDayWeek($event)"
        />
        <FSSpan
          :font="font"
        >
          {{ $tr('ui.periodicfield.monthly.at', 'at') }}
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

import { useTranslations } from '@dative-gpi/bones-ui';

import FSRadioGroup from '../../FSRadioGroup.vue';
import FSRow from '../../FSRow.vue';
import FSSpan from '../../FSSpan.vue';
import FSClock from '../../FSClock.vue';
import FSSelectDays from '../../selects/FSSelectDays.vue';
import FSSelectField from '../../fields/FSSelectField.vue';

export default defineComponent({
  name: 'FSPeriodicMonthlyField',
  components: {
    FSClock,
    FSSelectField,
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
    const { $tr } = useTranslations();

    const dayNumber = ref(1);
    const dayWeek = ref(1);
    const dayWeekNumber = ref(1);
    const time = ref(0);
    const selectedConfiguration = ref('customDayNumber');

    const dayNumbers = Array.from({ length: 31 }, (_, index) => ({ id: index + 1, label: String(index + 1) }));
    const dayWeekNumbers = [
      { id: 1, label: $tr('ui.periodicfield.monthly.first', 'First') },
      { id: 2, label: $tr('ui.periodicfield.monthly.second', 'Second') },
      { id: 3, label: $tr('ui.periodicfield.monthly.third', 'Third') },
      { id: 4, label: $tr('ui.periodicfield.monthly.fourth', 'Fourth') },
    ]
    

    const availableConfigurations = [
      { value: 'customDayNumber', item: { value: 'customDayNumber' } },
      { value: 'customDayWeek', item: { value: 'customDayWeek' } }
    ]

    const onUpdateDayNumber = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${value}`, `*`, `*`]);
    }

    const onUpdateDayWeekNumber = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${(value - 1) * 7 + 1}-${value * 7}`, `*`, `${dayWeek.value + 1}`]);
    }

    const onUpdateDayWeek = (value: number) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      emit('update:modelValue', [`${minutes}`, `${hours}`, `${(dayWeekNumber.value - 1) * 7 + 1}-${dayWeekNumber.value * 7}`, `*`, `${value + 1}`]);
    }

    const onUpdateHours = (value: number) => {
      const minutesAll = value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);

      if (selectedConfiguration.value === 'customDayNumber') {
        emit('update:modelValue', [`${minutes}`, `${hours}`, `${dayNumber.value}`, `*`, `*`]);
      } else {
        emit('update:modelValue', [`${minutes}`, `${hours}`, `${(dayWeekNumber.value - 1) * 7 + 1}-${dayWeekNumber.value * 7}`, `*`, `${dayWeek.value + 1}`]);
      }
    }

    const formatModelValue = (value: Array<string>) => {
      if (value[1] !== '*' && value[0] !== '*') {
        time.value = (+value[1] * 60 + +value[0]) * 1000 * 60;
      }
      if(value[4] !== '*') {
        dayWeek.value = +value[4] - 1;
      }

      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);
      if (value[2] !== '*') {
        if (value[4] !== '*' && value[2].includes('-')) {
          const weekDayCount = +value[2].split('-')[1];
          dayWeekNumber.value = Math.floor(weekDayCount / 7);
          selectedConfiguration.value = 'customDayWeek';
          return [`${minutes}`, `${hours}`, `${(dayWeekNumber.value - 1) * 7 + 1}-${dayWeekNumber.value * 7}`, `*`, `${dayWeek.value + 1}`];
        } else {
          dayNumber.value = +value[2];
        }
      }
      return [`${minutes}`, `${hours}`, '*', '*', `${dayNumber.value + 1}`];
    }

    onMounted(() => {
      const formattedValue = formatModelValue(props.modelValue);
      if(JSON.stringify(formattedValue) !== JSON.stringify(props.modelValue)) {
        emit('update:modelValue', formattedValue);
      }
    })

    watch(() => props.modelValue, (value) => {
      formatModelValue(value);
    })

    watch(() => selectedConfiguration.value, (value: string) => {
      const minutesAll = time.value / 60 / 1000;
      const hours = Math.floor(minutesAll / 60);
      const minutes = Math.floor(minutesAll % 60);
      if(value === 'customDayNumber') {
        emit('update:modelValue', [`${minutes}`, `${hours}`, `${dayNumber.value}`, `*`, `*`]);
      } else {
        emit('update:modelValue', [`${minutes}`, `${hours}`, `${(dayWeekNumber.value - 1) * 7 + 1}-${dayWeekNumber.value * 7}`, `*`, `${dayWeek.value + 1}`]);
      }
    })

    return {
      onUpdateDayNumber,
      onUpdateDayWeek,
      onUpdateDayWeekNumber,
      onUpdateHours,
      availableConfigurations,
      dayNumber,
      dayNumbers,
      dayWeek,
      dayWeekNumber,
      dayWeekNumbers,
      selectedConfiguration,
      time
    }
  }
})
</script>