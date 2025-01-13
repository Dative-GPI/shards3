<template>
  <FSBaseField
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :label="$props.label"
  >
    <FSRow
      align="bottom-center"
      gap="32px"
    >
      <FSTermField
        width="430px"
        :label="$tr('ui.instant-picker.analyze-period', 'Analyze Period')"
        :startDate="$props.startDate"
        :endDate="$props.endDate"
        @update:startDate="$emit('update:startDate', $event)"
        @update:endDate="$emit('update:endDate', $event)"
      />
      <FSRow
        padding="0 0 2px 0"
        align="center-center"
      >
        <FSCol
          width="fill"
        >
          <FSSlider
            minWidth='min(300px, 90vw)'
            :color="ColorEnum.Light"
            :thumbColor="ColorEnum.Primary"
            :thumbSize="18"
            :trackSize="8"
            thumb-label="always"
            :step="$props.stepTime"
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
                {{ epochToMonthShortTimeFormat(modelValue) }}
              </FSSpan>
            </template>
            <template
              #tick-label="{ tick, index }"
            >
              <FSRow
                v-if="index % Math.trunc(ticks.length / maximumTickToShow) === 0 || ticks.length < maximumTickToShow"
              >
                <FSText
                  :color="lightColors.dark"
                  font="text-overline"
                >
                  {{ intervalTime <= 3600000
                    ?
                      epochToShortTimeOnlyFormat(tick.value)
                    :
                      epochToDayMonthShortOnly(tick.value)
                  }}
                </FSText>
              </FSRow>
            </template>
          </FSSlider>
        </FSCol>
        <FSPlayButtons
          v-if="$props.playable"
          :modelValue="playing"
          @click:backward="onClickBackward"
          @click:forward="onClickForward"
          @update:modelValue="onPlayingChange"
        />
      </FSRow>
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

import { useDateFormat, useTermFieldDate } from "@dative-gpi/foundation-shared-services/composables";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints, useColors } from '@dative-gpi/foundation-shared-components/composables';

import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSSpan from '@dative-gpi/foundation-shared-components/components/FSSpan.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSSlider from '@dative-gpi/foundation-shared-components/components/FSSlider.vue';
import FSBaseField from '@dative-gpi/foundation-shared-components/components/fields/FSBaseField.vue';
import FSTermField from '@dative-gpi/foundation-shared-components/components/fields/FSTermField.vue';
import FSPlayButtons from '@dative-gpi/foundation-shared-components/components/FSPlayButtons.vue';

export default defineComponent({
  name: "FSInstantPicker",
  components: {
    FSCol,
    FSSpan,
    FSText,
    FSSlider,
    FSTermField,
    FSBaseField,
    FSPlayButtons
  },
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
    description: {
      type: String,
      required: false,
      default: null
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    playable: {
      type: Boolean,
      required: false,
      default: true
    },
    stepTime: {
      type: Number,
      required: false,
      default: 60000
    },
    playingStepDuration: {
      type: Number,
      required: false,
      default: 50
    }
  },
  emits: ['update:modelValue', 'update:startDate', 'update:endDate'],
  setup(props, { emit }) {
    const { epochToShortTimeOnlyFormat, epochToShortDateFormat, epochToDayMonthShortOnly, epochToISO, epochToMonthShortTimeFormat } = useDateFormat();
    const { convert : convertTermToEpoch } = useTermFieldDate();
    const { isMobileSized, isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);
    const playing = ref(false);
    const playingInterval = ref();

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
        return 5;
      }
      if (isExtraSmall.value) {
        return 4;
      }
      return 6;
    });

    const onPlayingChange = (value: boolean) => {
      playing.value = value;
    };

    const onClickBackward = () => {
      emit('update:modelValue', startTimestamp.value);
    };

    const onClickForward = () => {
      emit('update:modelValue', endTimestamp.value);
    };

    watch(() => [props.startDate, props.endDate], () => {
      if(props.modelValue < startTimestamp.value || props.modelValue > endTimestamp.value) {
        emit('update:modelValue', endTimestamp.value);
      }
    }, { immediate: true });

    watch(playing, (value) => {
      if(!value && playingInterval.value) {
        clearInterval(playingInterval.value);
      } else {
        playingInterval.value = setInterval(() => {
          if(props.modelValue + props.stepTime <= endTimestamp.value) {
            emit('update:modelValue', props.modelValue + props.stepTime);
          } else {
            emit('update:modelValue', endTimestamp.value);
            playing.value = false;
          }
        }, props.playingStepDuration);
      }
    });

    return {
      ticks,
      playing,
      ColorEnum,
      lightColors,
      intervalTime,
      endTimestamp,
      startTimestamp,
      maximumTickToShow,
      epochToISO,
      onPlayingChange,
      onClickForward,
      onClickBackward,
      epochToShortDateFormat,
      epochToShortTimeOnlyFormat,
      epochToDayMonthShortOnly,
      epochToMonthShortTimeFormat
    };
  },
});
</script>