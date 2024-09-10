<template>
  <div 
    class="fs-agenda-horizontal-time-line-marker"
    :style="style"
  >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type StyleValue } from 'vue';

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: 'FSAgendaHorizontalTimeLineMarker',
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
      "--fs-agenda-horizontal-time-line-marker-left": `${leftOffset.value}%`,
      "--fs-agenda-horizontal-time-line-marker-color": primaryColor.base
    }));

    return {
      style,
    };
  },
});
</script>