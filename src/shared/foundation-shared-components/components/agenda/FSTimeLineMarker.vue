<template>
  <div 
    class="fs-time-line-marker"
    :style="style"
  >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type StyleValue } from 'vue';

import { useColors } from '../../composables';

import { ColorEnum } from '../../models';

export default defineComponent({
  name: 'FSTimeLineMarker',
  props: {
    modelValue: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const primaryColor = getColors(ColorEnum.Primary);

    const nowDate = computed(() => {
      return new Date(props.modelValue);
    });
    const leftOffset = computed(() => {
      return nowDate.value.getHours() * 100 / 24 + nowDate.value.getMinutes() * 100 / 24 / 60;
    });
    const style = computed((): StyleValue => ({
      "--fs-time-line-marker-left": `${leftOffset.value}%`,
      "--fs-time-line-marker-color": primaryColor.base
    }));

    return {
      style,
    };
  },
});
</script>