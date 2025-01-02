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
        v-if="item.value === 'custom'"
        align="center-left"
      >
        <FSSpan
          :font="font"
        >
          {{ $tr("ui.common.every", "Every") }}
        </FSSpan>
        <FSSelectDays
          width="200px"
          :placeholder="$tr('ui.common.selected-days', '{0} selected day(s)', days.length)"
          :editable="$props.editable"
          :multiple="true"
          :useAllDays="false"
          :hideHeader="true"
          :modelValue="days"
          @update:modelValue="onUpdateDay($event)"
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
import { ref, defineComponent, computed } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSelectDays from "../../selects/FSSelectDays.vue";
import FSRadioGroup from "../../FSRadioGroup.vue";
import FSClock from "../../FSClock.vue";
import FSSpan from "../../FSSpan.vue";
import FSRow from "../../FSRow.vue";

export default defineComponent({
  name: "FSPeriodicWeeklyField",
  components: {
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
    const availableConfigurations = [
      { value: "custom", item: { value: "custom" } }
    ];

    const selectedConfiguration = ref("custom");

    const days = computed((): number[] => {
      try {
        return props.modelValue[4].split(",").map((day) => parseInt(day) - 1);
      } catch (error) {
        console.error("Error parsing days:", error);
        return [];
      }
    });

    const time = computed((): number => {
      if (isNaN(parseInt(props.modelValue[0])) || isNaN(parseInt(props.modelValue[1]))) {
        return 0;
      }
      return ((parseInt(props.modelValue[0])) + (parseInt(props.modelValue[1]) * 60)) * 60 * 1000;
    });

    const onUpdateDay = (value: number[]): void => {
      if(value.length === 0) {
        return;
      }
      const hours = Math.floor(time.value / (60 * 60 * 1000));
      const minutes = Math.floor(time.value / (60 * 1000) % 60);
      const daysCron = value.map((day) => day + 1).join(",");
      emit("update:modelValue", [`${minutes}`, `${hours}`, `*`, `*`, `${daysCron}`]);
    };

    const onUpdateHours = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      const daysCron = days.value.map((day) => day + 1).join(",");
      emit("update:modelValue", [`${minutes}`, `${hours}`, `*`, `*`, `${daysCron}`]);
    };

    return {
      availableConfigurations,
      selectedConfiguration,
      ColorEnum,
      time,
      days,
      onUpdateHours,
      onUpdateDay
    };
  }
});
</script>