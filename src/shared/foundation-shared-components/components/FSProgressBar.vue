<template>
  <FSRow
    align="center-center"
    :style="style"
  >
    <div
      class="fs-progress-bar-gradient"
    >
      <div></div>
    </div>
    <FSText
      v-if="$props.showValue"
      font="text-button"
    >
      {{ fixedRate }}%
    </FSText>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, type StyleValue } from "vue";

import { useColors } from '@dative-gpi/foundation-shared-components/composables';

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';

export default defineComponent({
  name: "FSProgressBar",
  components: {
    FSText,
    FSRow
  },
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    startColor: {
      type: String,
      required: false
    },
    endColor: {
      type: String,
      required: false
    },
    showValue: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);
    const successColors = getColors(ColorEnum.Success);
    const errorColors = getColors(ColorEnum.Error);
 
    const fixedRate = computed(() => {
      return (props.modelValue * 100).toFixed(0);
    });

    const relativeWidth = computed(() => {
      return props.modelValue ? 100 / props.modelValue : 0;
    });
    
    const startColor = computed(() => {
      return props.startColor ?? errorColors.base;
    });

    const endColor = computed(() => {
      return props.endColor ?? successColors.base;
    });

    const style = computed((): StyleValue => {
      return {
        '--progress-bar-background-color': lightColors.dark,
        '--progress-bar-gradient-start-color': startColor.value,
        '--progress-bar-gradient-end-color': endColor.value,
        '--progress-bar-gradient-width': `min(100%, ${fixedRate.value}%)`,
        '--progress-bar-total-relative-width': `${relativeWidth.value}%`
      };
    });

    return {
      style,
      fixedRate
    }
  },
});
</script>