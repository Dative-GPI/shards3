<template>
  <div
    class="fs-fade-out"
    :style="style"
    @scroll="onScroll"
  >
    <div class="fs-fade-out-top" />
    <slot />
    <div class="fs-fade-out-bottom" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSFadeOut",
  components: {
    FSCol
  },
  props: {
    maskHeight: {
      type: Number,
      required: false,
      default: 64
    }
  },
  setup(props) {
    const backgrounds = useColors().getColors(ColorEnum.Background);

    const style: Ref<{ [code: string]: string } & Partial<CSSStyleDeclaration>> = ref({
      "--fs-fade-out-mask-color"        : backgrounds.base,
      "--fs-fade-out-top-mask-height"   : "0px",
      "--fs-fade-out-bottom-mask-height": `${props.maskHeight}px`
    });

    const onScroll = ({ target }): void => {
      if (target.scrollHeight - target.scrollTop - target.clientHeight < 1) {
        style.value["--fs-fade-out-bottom-mask-height"] = "0px";
      } else {
        style.value["--fs-fade-out-bottom-mask-height"] = `${props.maskHeight}px`;
      }
      if (target.scrollTop === 0) {
        style.value["--fs-fade-out-top-mask-height"] = "0px";
      }
      else {
        style.value["--fs-fade-out-top-mask-height"] = `${props.maskHeight}px`;
      }
    }

    return {
      style,
      onScroll
    };
  }
});
</script>