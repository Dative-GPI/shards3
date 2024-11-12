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
          {{ $tr('periodic-field.every', 'Every') }}
        </FSSpan>
        <FSNumberField
          :editable="$props.editable"
          :modelValue="days"
          :hideHeader="true"
          :clearable="false"
          @update:modelValue="onUpdateDays($event)"
        />
        <FSSpan
          :font="font"
        >
          {{ $tr('periodic-field.daysat', 'day(s) at') }}
        </FSSpan>
        <FSClock
          :editable="$props.editable"
          :color="ColorEnum.Light"
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
import { ref, defineComponent, computed } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRadioGroup from "../../FSRadioGroup.vue";
import FSNumberField from "../FSNumberField.vue";
import FSClock from "../../FSClock.vue";
import FSSpan from "../../FSSpan.vue";
import FSRow from "../../FSRow.vue";

export default defineComponent({
  name: "FSPeriodicDailyField",
  components: {
    FSNumberField,
    FSRadioGroup,
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

    const days = computed((): number => {
      if (isNaN(parseInt(props.modelValue[2].replace("*/", "")))) {
        return 0
      }
      return parseInt(props.modelValue[2].replace("*/", ""));
    });

    const time = computed((): number => {
      if (isNaN(parseInt(props.modelValue[0])) || isNaN(parseInt(props.modelValue[1]))) {
        return 0;
      }
      return ((parseInt(props.modelValue[0])) + (parseInt(props.modelValue[1]) * 60)) * 60 * 1000;
    });

    const onUpdateDays = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      emit("update:modelValue", [`${minutes}`, `${hours}`, `*/${value}`, "*", "*"]);
    };

    const onUpdateHours = (value: number): void => {
      const hours = Math.floor(value / (60 * 60 * 1000));
      const minutes = Math.floor(value / (60 * 1000) % 60);
      emit("update:modelValue", [`${minutes}`, `${hours}`, `*/${days.value}`, "*", "*"]);
    };

    return {
      availableConfigurations,
      selectedConfiguration,
      ColorEnum,
      days,
      time,
      onUpdateHours,
      onUpdateDays
    };
  }
});
</script>