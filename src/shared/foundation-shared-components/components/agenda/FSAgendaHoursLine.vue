<template>
  <FSCol
    gap="0"
  >
    <FSRow
      class="fs-agenda-hours-line"
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
          class="fs-agenda-hours-line-now"
          color="primary"
          variant="full"
          v-if="displayNow && hour === modelValue"
        >
          <FSSpan
            class="fs-agenda-hours-line-text fs-agenda-hours-line-text-now"
          >
            {{ `${to2Digits(hour)}${$tr('ui.agenda-hour-line.hour.letter', 'h')}` }}
          </FSSpan>
        </FSCard>
        <FSText
          v-else
          class="fs-agenda-hours-line-text"
          :color="fontColor"
        >
          {{ `${to2Digits(hour)}${$tr('ui.agenda-hour-line.hour.letter', 'h')}` }}
        </FSText>
      </FSRow>
    </FSRow>
    <FSRow
      class="fs-agenda-hours-line"
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
          
          class="fs-agenda-hours-line-marker"
        />
      </FSRow>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, computed, type StyleValue } from 'vue';

import { useBreakpoints, useColors } from '../../composables';

import FSText from '../FSText.vue';
import FSRow from '../FSRow.vue';
import FSCard from '../FSCard.vue';
import FSSpan from '../FSSpan.vue';
import FSCol from '../FSCol.vue';
import { ColorEnum } from '../../models';

export default defineComponent({
  name: 'FSAgendaHoursLine',
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
    const { isExtraSmall } = useBreakpoints();

    const lightColors = getColors(ColorEnum.Light);
    const primaryColors = getColors(ColorEnum.Primary);
    const fontColor = lightColors.dark;

    const hours = computed(() => {
      if (isExtraSmall.value) {
        return Array.from({ length: 6 }, (_, i) => i * 4);
      }
      return Array.from({ length: 24 }, (_, i) => i);
    });

    const getMarkerStyle = (isNowHour: boolean): StyleValue => {
      if(isNowHour) {
        return {
          '--fs-agenda-hours-line-marker-color': primaryColors.base,
        }
      }
      return {
        '--fs-agenda-hours-line-marker-color': lightColors.base,
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