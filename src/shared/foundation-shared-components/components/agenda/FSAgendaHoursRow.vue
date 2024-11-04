<template>
  <FSCol
    gap="0"
  >
    <FSRow
      :padding="`0 ${paddingRightHours} 0 ${paddingLeftHours}`"
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
      :padding="`0 ${paddingRightMarkers} 0 ${paddingLeftMarkers}`"
      class="fs-agenda-hours-row-markers"
      :wrap="false"
      gap="0"
    >
      <FSRow
        v-for="hour in 24"
        :key="hour-1"
        :style="getMarkerStyle(displayNow && hour-1 === modelValue)"
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

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
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
    firstColumnWidth: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { getColors } = useColors();
    const { isMobileSized } = useBreakpoints();

    const lightColors = getColors(ColorEnum.Light);
    const primaryColors = getColors(ColorEnum.Primary);
    const fontColor = lightColors.dark;

    const hoursToShow = computed(() => {
      if(isMobileSized.value) {
        return 12;
      }
      return 24;
    });

    const hours = computed(() => {
      return Array.from({ length: hoursToShow.value }, (_, i) => i * (24 / hoursToShow.value));
    });

    const paddingLeftHours = computed(() => {
      // ((100% - ${props.firstColumnWidth}) / ${hoursToShow.value}) is the width of each hour slot (2 hour if 12 hours are shown, 1 hour if 24 hours are shown)
      // 0.5 * ((100% - ${props.firstColumnWidth}) / ${hoursToShow.value}) is half of the width of each hour slot
      // So we have : ${props.firstColumnWidth} - Half of the width of each hour slot
      return `calc(${props.firstColumnWidth} - 0.5 * ((100% - ${props.firstColumnWidth}) / ${hoursToShow.value}))`;
    });

    const paddingRightHours = computed(() => {
      return `calc(0.5 * ((100% - ${props.firstColumnWidth}) / ${hoursToShow.value}))`;
    });

    const paddingLeftMarkers = computed(() => {
      return `calc(${props.firstColumnWidth} - 0.5 * ((100% - ${props.firstColumnWidth}) / 24))`;
    });

    const paddingRightMarkers = computed(() => {
      return `calc(0.5 * ((100% - ${props.firstColumnWidth}) / 24))`;
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
      hours,
      fontColor,
      hoursToShow,
      paddingLeftHours,
      paddingRightHours,
      paddingLeftMarkers,
      paddingRightMarkers,
      getMarkerStyle,
      to2Digits
    };
  },
});

</script>