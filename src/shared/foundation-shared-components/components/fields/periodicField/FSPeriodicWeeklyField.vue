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
          {{ $tr("ui.periodicfield.weekly.every", "Every") }}
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
          {{ $tr("ui.periodicfield.weekly.at", "at") }}
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

import { ColorEnum } from "@/shared/foundation-shared-components/models";

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
    
    const day = computed(() => {
      return +props.modelValue[4] - 1;
    });

    const time = computed(() => {
      return (+props.modelValue[1] * 60 + +props.modelValue[0]) * 1000 * 60;
    });

    const onUpdateDay = (value: number) => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      emit("update:modelValue", [`${minutes}`, `${hours}`, `*`, `*`, `${value + 1}`]);
    };

    const onUpdateHours = (value: number) => {
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