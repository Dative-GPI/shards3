<template>
  <FSRow
    align="center-center"
    gap="32px"
  >
    <FSTermField
      width="430px"
      :label="$props.label"
      :startDate="$props.startDate"
      :endDate="$props.endDate"
      @update:startDate="$emit('update:startDate', $event)"
      @update:endDate="$emit('update:endDate', $event)"
    />
    <FSCol>
      <FSSlider
        :color="ColorEnum.Light"
        :thumb-color="ColorEnum.Primary"
        :thumb-size="18"
        thumb-label="always"
        :step="60000"
        :min="startTimestamp"
        :max="endTimestamp"
        :ticks="ticks"
        showTicks="always"
        :modelValue="$props.modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
      >
        <template
          #thumb-label="{ modelValue }"
        >
          <FSSpan
            font="text-overline"
          >
            {{ epochToShortTimeFormat(modelValue) }}
          </FSSpan>
        </template>
        <template
          #tick-label="{ tick, index }"
        >
          <FSRow
            v-if="index % Math.trunc(ticks.length / maximumTickToShow) === 0 || ticks.length < maximumTickToShow"
          >
            <FSText
              font="text-overline"
            >
              {{ intervalTime <= 3600000
                ?
                  epochToShortTimeOnlyFormat(tick.value)
                :
                  epochToShortDateFormat(tick.value)
              }}
            </FSText>
          </FSRow>
        </template>
      </FSSlider>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";

import { useDateFormat, useTermFieldDate } from "@dative-gpi/foundation-shared-services/composables";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from '@dative-gpi/foundation-shared-components/composables';

import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSSpan from '@dative-gpi/foundation-shared-components/components/FSSpan.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSSlider from '@dative-gpi/foundation-shared-components/components/FSSlider.vue';
import FSTermField from '@dative-gpi/foundation-shared-components/components/fields/FSTermField.vue';

export default defineComponent({
  name: "FSInstantPicker",
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Number,
      required: false,
      default: 0,
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
  },
  components: {
    FSCol,
    FSSpan,
    FSText,
    FSSlider,
    FSTermField,
  },
  emits: ['update:modelValue', 'update:startDate', 'update:endDate'],
  setup(props, { emit }) {
    const { epochToShortTimeOnlyFormat, epochToShortDateFormat, epochToShortTimeFormat, epochToISO } = useDateFormat();
    const { isMobileSized, isExtraSmall } = useBreakpoints();
    const { convert : convertTermToEpoch } = useTermFieldDate();

    const startTimestamp = computed(() => convertTermToEpoch(props.startDate));
    const endTimestamp = computed(() => convertTermToEpoch(props.endDate));

    const intervalTime = computed(() => {
      const possibleIntervals = [60000, 3600000, 86400000];

      const interval = possibleIntervals.find(interval => {
        return (endTimestamp.value - startTimestamp.value) / interval < 100;
      });

      if (interval) {
        return interval;
      }
      return 86400000;
    });

    const ticks = computed(() => {
      const ticks: number[] = [];

      const firstTick = Math.ceil(startTimestamp.value / intervalTime.value) * intervalTime.value;
      for (let i = firstTick; i <= endTimestamp.value; i += intervalTime.value) {
        ticks.push(i);
      }
      return ticks;
    });

    const maximumTickToShow = computed(() => {
      if (isMobileSized.value) {
        return 6;
      }
      if (isExtraSmall.value) {
        return 4;
      }
      return 8;
    });

    watch(() => [props.startDate, props.endDate], () => {
      if(props.modelValue < startTimestamp.value || props.modelValue > endTimestamp.value) {
        emit('update:modelValue', endTimestamp.value);
      }
    }, { immediate: true });

    return {
      ticks,
      ColorEnum,
      intervalTime,
      endTimestamp,
      startTimestamp,
      maximumTickToShow,
      epochToISO,
      epochToShortTimeFormat,
      epochToShortDateFormat,
      epochToShortTimeOnlyFormat
    };
  },
});
</script>