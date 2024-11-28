<template>
  <FSRadioGroup
    :values="availableConfigurations"
    :editable="$props.editable"
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
          {{ $tr("ui.common.day", "Day") }}
        </FSSpan>
        <FSSelectField
          :editable="$props.editable"
          :items="dayNumbers"
          :hideHeader="true"
          :clearable="false"
          :modelValue="dayNumber"
          @update:modelValue="onUpdateDayNumber($event)"
        />
        <FSSpan
          :font="font"
        >
          {{ $tr("periodic-monthly-field.every-month-at", "every month at") }}
        </FSSpan>
        <FSClock
          :editable="$props.editable"
          :color="ColorEnum.Light"
          :hideHeader="true"
          :slider="false"
          :modelValue="time"
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
          {{ $tr("ui.common.every", "Every") }}
        </FSSpan>
        <FSSelectField
          :editable="$props.editable"
          :items="dayWeekNumbers"
          :hideHeader="true"
          :clearable="false"
          :modelValue="dayWeekNumber"
          @update:modelValue="onUpdateDayWeekNumber($event)"
        />
        <FSSelectDays
          :editable="$props.editable"
          :useAllDays="false"
          :hideHeader="true"
          :modelValue="dayWeek"
          @update:modelValue="onUpdateDayWeek($event)"
        />
        <FSSpan
          :font="font"
        >
          {{ $tr("ui.common.at", "at") }}
        </FSSpan>
        <FSClock
          :editable="$props.editable"
          :color="ColorEnum.Light"
          :hideHeader="true"
          :slider="false"
          :modelValue="time"
          @update:modelValue="onUpdateHours($event)"
        />
      </FSRow>
    </template>
  </FSRadioGroup>
</template>

<script lang="ts">
import { ref, defineComponent, watch, computed } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSelectField from "../../fields/FSSelectField.vue";
import FSSelectDays from "../../selects/FSSelectDays.vue";
import FSRadioGroup from "../../FSRadioGroup.vue";
import FSClock from "../../FSClock.vue";
import FSSpan from "../../FSSpan.vue";
import FSRow from "../../FSRow.vue";

export default defineComponent({
  name: "FSPeriodicMonthlyField",
  components: {
    FSSelectField,
    FSRadioGroup,
    FSSelectDays,
    FSClock,
    FSSpan,
    FSRow
  },
  props: {
    modelValue: {
      type: Array<string>,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();

    const dayWeekNumbers = [
      { id: 1, label: $tr("ui.common.first" , "First") },
      { id: 2, label: $tr("ui.common.second", "Second") },
      { id: 3, label: $tr("ui.common.third" , "Third") },
      { id: 4, label: $tr("ui.common.fourth", "Fourth") },
    ];

    const availableConfigurations = [
      { value: "customDayNumber", item: { value: "customDayNumber" } },
      { value: "customDayWeek"  , item: { value: "customDayWeek" } }
    ];

    const dayNumbers = Array.from({ length: 31 }, (_, index) => ({ id: index + 1, label: String(index + 1) }));

    const selectedConfiguration = ref(props.modelValue[4] !== "*" ? "customDayWeek" : "customDayNumber");

    const dayNumber = computed((): number => {
      if (props.modelValue[4] !== "*" || isNaN(parseInt(props.modelValue[2]))) {
        return 1;
      }
      return parseInt(props.modelValue[2]);
    });

    const dayWeek = computed((): number => {
      if (props.modelValue[4] !== "*" || isNaN(parseInt(props.modelValue[4]))) {
        return 0;
      }
      return parseInt(props.modelValue[4]) - 1;
    });

    const dayWeekNumber = computed((): number => {
      if (!props.modelValue[2].includes("-") || isNaN(parseInt(props.modelValue[2].split("-")[1]))) {
        return 1;
      }
      return Math.floor(parseInt(props.modelValue[2].split("-")[1]) / 7);
    });

    const time = computed((): number => {
      if (isNaN(parseInt(props.modelValue[0])) || isNaN(parseInt(props.modelValue[1]))) {
        return 0;
      }
      return ((parseInt(props.modelValue[0])) + (parseInt(props.modelValue[1]) * 60)) * 60 * 1000;
    });

    const onUpdateDayNumber = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      emit("update:modelValue", [`${minutes}`, `${hours}`, `${value}`, `*`, `*`]);
    };

    const onUpdateDayWeekNumber = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      emit("update:modelValue", [`${minutes}`, `${hours}`, `${(value - 1) * 7 + 1}-${value * 7}`, `*`, `${dayWeek.value + 1}`]);
    };

    const onUpdateDayWeek = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      emit("update:modelValue", [`${minutes}`, `${hours}`, `${(dayWeekNumber.value - 1) * 7 + 1}-${dayWeekNumber.value * 7}`, `*`, `${value + 1}`]);
    };

    const onUpdateHours = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      if (selectedConfiguration.value === "customDayNumber") {
        emit("update:modelValue", [`${minutes}`, `${hours}`, `${dayNumber.value}`, `*`, `*`]);
      }
      else {
        emit("update:modelValue", [`${minutes}`, `${hours}`, `${(dayWeekNumber.value - 1) * 7 + 1}-${dayWeekNumber.value * 7}`, `*`, `${dayWeek.value + 1}`]);
      }
    };

    watch(() => selectedConfiguration.value, (value: string): void => {
      const hours = Math.floor(time.value / (60 * 60 * 1000));
      const minutes = Math.floor(time.value / (60 * 1000) % 60);
      if(value === "customDayNumber") {
        emit("update:modelValue", [`${minutes}`, `${hours}`, `${dayNumber.value}`, `*`, `*`]);
      }
      else {
        emit("update:modelValue", [`${minutes}`, `${hours}`, `${(dayWeekNumber.value - 1) * 7 + 1}-${dayWeekNumber.value * 7}`, `*`, `${dayWeek.value + 1}`]);
      }
    });

    return {
      availableConfigurations,
      selectedConfiguration,
      dayWeekNumbers,
      dayWeekNumber,
      dayNumbers,
      ColorEnum,
      dayNumber,
      dayWeek,
      time,
      onUpdateDayWeekNumber,
      onUpdateDayNumber,
      onUpdateDayWeek,
      onUpdateHours
    };
  }
});
</script>