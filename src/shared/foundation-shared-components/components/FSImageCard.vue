<template>
  <FSClickable
    :height="height"
    :width="width"
    class="fs-image-card"
    v-bind="$attrs"
    :style="style"
  >
    <FSRow
      height="fill"
      align="bottom-left"
    >
      <FSRow align="center-left"
        padding="8px"
        class="fs-image-card-label"
      >
        <FSSpan
          font="text-overline"
        >
          {{ $props.label }}
        </FSSpan>
      </FSRow>

    </FSRow>
  </FSClickable>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from "vue";

import FSCard from "./FSCard.vue";
import FSClickable from "./FSClickable.vue";
import FSRow from "./FSRow.vue";
import FSSpan from "./FSSpan.vue";

export default defineComponent({
  name: "FSImageCard",
  components: {
    FSCard,
    FSClickable,
    FSRow,
    FSSpan
  },
  props: {
    src: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '110px'
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '200px'
    },
  },
  setup(props) {
    const style = computed(() => ({
      "--fs-image-card-background": `url(${props.src})`
    }));

    return {
      style
    };
  }
});

</script>