<template>
  <FSRow
    padding="0 0 0 4px"
    gap="0"
    width="hug"
    height="100%"
  >
    <FSCol
      class="fs-agenda-hours-col"
      :wrap="false"
      gap="0"
      height="100%"
      align="center-center"
    >
      <FSRow
        v-for="hour in hours"
        :key="hour"
        width="100%"
        height="100%"
        align="center-center"
      >
        <FSCard
          class="fs-agenda-hours-col-now"
          color="primary"
          variant="full"
          width="100%"
          v-if="displayNow && hour === modelValue"
        >
          <FSCol
            align="center-center"
          >
            <FSSpan
              class="fs-agenda-hours-col-text fs-agenda-hours-col-text-now"
            >
              {{ $tr('ui.common.hours-only', '{0}h', to2Digits(hour)) }}
            </FSSpan>
          </FSCol>
        </FSCard>
        <FSText
          v-else
          class="fs-agenda-hours-col-text"
          :color="fontColor"
        >
          {{ $tr('ui.common.hours-only', '{0}h', to2Digits(hour)) }}
        </FSText>
      </FSRow>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSText from '../FSText.vue';
import FSRow from '../FSRow.vue';
import FSCard from '../FSCard.vue';
import FSSpan from '../FSSpan.vue';
import FSCol from '../FSCol.vue';

export default defineComponent({
  name: 'FSAgendaHoursCol',
  components: {
    FSCard,
    FSCol,
    FSSpan,
    FSText,
    FSRow,
  },
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    displayNow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);
    const fontColor = lightColors.dark;

    const hours = computed(() => {
      return Array.from({ length: 24 }, (_, i) => i);
    });

    const to2Digits = (value: number) => value.toString().padStart(2, '0');

    return {
      fontColor,
      hours,
      to2Digits
    };
  },
});

</script>