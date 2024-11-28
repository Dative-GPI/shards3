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
          :editable="$props.editable"
          :useAllDays="false"
          :hideHeader="true"
          :modelValue="day"
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

    const day = computed((): number => {
      if (isNaN(parseInt(props.modelValue[4]))) {
        return 0;
      }
      return parseInt(props.modelValue[4]) - 1;
    });

    const time = computed((): number => {
      if (isNaN(parseInt(props.modelValue[0])) || isNaN(parseInt(props.modelValue[1]))) {
        return 0;
      }
      return ((parseInt(props.modelValue[0])) + (parseInt(props.modelValue[1]) * 60)) * 60 * 1000;
    });

    const onUpdateDay = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      emit("update:modelValue", [`${minutes}`, `${hours}`, `*`, `*`, `${value + 1}`]);
    };

    const onUpdateHours = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      emit("update:modelValue", [`${minutes}`, `${hours}`, `*`, `*`, `${day.value + 1}`]);
    };

    return {
      availableConfigurations,
      selectedConfiguration,
      ColorEnum,
      time,
      day,
      onUpdateHours,
      onUpdateDay
    };
  }
});
</script>