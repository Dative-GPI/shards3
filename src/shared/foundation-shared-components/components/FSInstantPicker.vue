<template>
  <FSRow
    align="center-center"
    gap="32px"
  >
    <!-- <FSTermField
      width="430px"
      :label="$props.label"
      v-model:startDate="startDate"
      v-model:endDate="endDate"
    /> -->
    <FSDateTimeRangeField
      width="430px"
      :label="$props.label"
      :modelValue="[$props.startDate, $props.endDate]"
      @update:modelValue="updateDate"
    />
    <FSCol>
      <FSSlider
        :color="ColorEnum.Light"
        :thumb-color="ColorEnum.Primary"
        :thumb-size="18"
        thumb-label="always"
        :step="60000"
        :min="$props.startDate"
        :max="$props.endDate"
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
import { computed, defineComponent, onMounted, watch } from "vue";

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from '@dative-gpi/foundation-shared-components/composables';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSTermField from '@dative-gpi/foundation-shared-components/components/fields/FSTermField.vue';
import FSSlider from '@dative-gpi/foundation-shared-components/components/FSSlider.vue';
import FSSpan from '@dative-gpi/foundation-shared-components/components/FSSpan.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSDateTimeRangeField from '@dative-gpi/foundation-shared-components/components/fields/FSDateTimeRangeField.vue';

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
      type: Number,
      required: false,
      default: 0,
    },
    endDate: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  components: {
    FSCol,
    FSTermField,
    FSDateTimeRangeField,
    FSSlider,
    FSSpan,
    FSText
  },
  emits: ['update:modelValue', 'update:startDate', 'update:endDate'],
  setup(props, { emit }) {
    const { todayToEpoch, epochToShortTimeOnlyFormat, epochToShortDateFormat, epochToShortTimeFormat, epochToISO } = useDateFormat();
    const { isMobileSized, isExtraSmall } = useBreakpoints();

    const intervalTime = computed(() => {
      const possibleIntervals = [60000, 3600000, 86400000];

      const interval = possibleIntervals.find(interval => {
        return (props.endDate - props.startDate) / interval < 100;
      });

      if (interval) {
        return interval;
      }
      return 86400000;
    });

    const ticks = computed(() => {
      const ticks: number[] = [];

      const firstTick = Math.ceil(props.startDate / intervalTime.value) * intervalTime.value;
      for (let i = firstTick; i <= props.endDate; i += intervalTime.value) {
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
    })

    const updateDate = (dates: [number, number]) => {
      if (dates[0] > dates[1]) {
        emit('update:startDate', dates[1]);
        emit("update:endDate", dates[0]);
        emit('update:modelValue', dates[0]);
      }
      else {
        emit('update:startDate', dates[0]);
        emit('update:endDate', dates[1]);
        emit('update:modelValue', dates[1]);
      }
    }

    onMounted(() => {
      const defaultStart = todayToEpoch() - 86400000 * 2;
      const defaultEnd = todayToEpoch();

      if (!props.startDate && !props.endDate) {
        emit('update:startDate', defaultStart);
        emit('update:endDate', defaultEnd);
      }

      if (!props.modelValue) {
        emit('update:modelValue', defaultEnd);
      }
    });

    watch(() => [props.startDate, props.endDate], () => {
      if(props.modelValue < props.startDate || props.modelValue > props.endDate) {
        emit('update:modelValue', props.endDate);
      }
    }, { immediate: true });

    return {
      ticks,
      ColorEnum,
      intervalTime,
      maximumTickToShow,
      updateDate,
      epochToISO,
      epochToShortTimeFormat,
      epochToShortDateFormat,
      epochToShortTimeOnlyFormat
    };
  },
});
</script>