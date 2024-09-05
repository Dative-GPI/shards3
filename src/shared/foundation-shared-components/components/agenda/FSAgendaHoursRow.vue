<template>
  <FSCol
    gap="0"
  >
    <FSRow
      class="fs-agenda-hours-row"
      :wrap="false"
      gap="0"
      align="center-center"
    >
      <FSRow
        v-for="hour in hours"
        :key="hour"
        width="100%"
        align="center-center"
      >
        <FSCard
          class="fs-agenda-hours-row-now"
          color="primary"
          variant="full"
          v-if="displayNow && hour === modelValue"
        >
          <FSSpan
            class="fs-agenda-hours-row-text fs-agenda-hours-row-text-now"
          >
            {{ $tr('ui.common.hours-only', '{0}h', to2Digits(hour)) }}
          </FSSpan>
        </FSCard>
        <FSText
          v-else
          class="fs-agenda-hours-row-text"
          :color="fontColor"
        >
          {{ $tr('ui.common.hours-only', '{0}h', to2Digits(hour)) }}
        </FSText>
      </FSRow>
    </FSRow>
    <FSRow
      class="fs-agenda-hours-row"
      :wrap="false"
      gap="0"
    >
      <FSRow
        v-for="hour in hours"
        :key="hour"
        :style="getMarkerStyle(displayNow && hour === modelValue)"
        width="100%"
        height="0"
        align="center-center"
      >
        <span 
          class="fs-agenda-hours-row-marker"
        />
      </FSRow>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, computed, type StyleValue } from 'vue';

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSText from '../FSText.vue';
import FSRow from '../FSRow.vue';
import FSCard from '../FSCard.vue';
import FSSpan from '../FSSpan.vue';
import FSCol from '../FSCol.vue';

export default defineComponent({
  name: 'FSAgendaHoursRow',
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
    const primaryColors = getColors(ColorEnum.Primary);
    const fontColor = lightColors.dark;

    const hours = computed(() => {
      return Array.from({ length: 24 }, (_, i) => i);
    });

    const getMarkerStyle = (isNowHour: boolean): StyleValue => {
      if(isNowHour) {
        return {
          '--fs-agenda-hours-row-marker-color': primaryColors.base,
        }
      }
      return {
        '--fs-agenda-hours-row-marker-color': lightColors.base,
      }
    };

    const to2Digits = (value: number) => value.toString().padStart(2, '0');

    return {
      fontColor,
      hours,
      getMarkerStyle,
      to2Digits
    };
  },
});

</script>