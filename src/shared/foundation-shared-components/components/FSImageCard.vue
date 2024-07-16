<template>
  <FSClickable
    class="fs-image-card"
    :height="height"
    :width="width"
    :style="style"
    v-bind="$attrs"
  >
    <FSRow
      align="bottom-left"
      height="fill"
    >
      <FSRow
        class="fs-image-card-label"
        align="center-left"
        padding="8px"
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
import { computed, defineComponent, type PropType } from "vue";

import FSClickable from "./FSClickable.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSImageCard",
  components: {
    FSClickable,
    FSSpan,
    FSRow
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
    }
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