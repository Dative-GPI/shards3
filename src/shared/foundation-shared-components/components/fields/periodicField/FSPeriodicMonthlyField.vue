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
          :editable="editable"
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
          :editable="editable"
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
          :editable="editable"
          @update:modelValue="onUpdateDayWeekNumber($event)"
        />
        <FSSelectDays
          :modelValue="dayWeek"
          :hideHeader="true"
          :useAllDays="false"
          :editable="editable"
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
          :editable="editable"
          @update:modelValue="onUpdateHours($event)"
        />
      </FSRow>
    </template>
  </FSRadioGroup>
</template>

<script lang="ts">
import { ref, defineComponent, watch, computed } from 'vue';

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
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { $tr } = useTranslations();

    const selectedConfiguration = ref(props.modelValue[4] !== '*' ? 'customDayWeek' : 'customDayNumber');

    const dayNumbers = Array.from({ length: 31 }, (_, index) => ({ id: index + 1, label: String(index + 1) }));
    const dayWeekNumbers = [
      { id: 1, label: $tr('ui.periodicfield.monthly.first', 'First') },
      { id: 2, label: $tr('ui.periodicfield.monthly.second', 'Second') },
      { id: 3, label: $tr('ui.periodicfield.monthly.third', 'Third') },
      { id: 4, label: $tr('ui.periodicfield.monthly.fourth', 'Fourth') },
    ];
    const availableConfigurations = [
      { value: 'customDayNumber', item: { value: 'customDayNumber' } },
      { value: 'customDayWeek', item: { value: 'customDayWeek' } }
    ];

    const dayNumber = computed(() => 
      props.modelValue[4] !== '*' ? 1 : +props.modelValue[2]
    );
    const dayWeek = computed(() => 
      props.modelValue[4] === '*' ? 0 : +props.modelValue[4] - 1
    );
    const dayWeekNumber = computed(() => 
      props.modelValue[2].includes('-') ? Math.floor(+props.modelValue[2].split('-')[1] / 7) : 1
    );
    const time = computed(() => (+props.modelValue[1] * 60 + +props.modelValue[0]) * 1000 * 60);

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