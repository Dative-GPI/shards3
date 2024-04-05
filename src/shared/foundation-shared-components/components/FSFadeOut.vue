<template>
  <div
    class="fs-fade-out"
    ref="fadeOutRef"
    :style="style"
    @scroll="onScroll"
  >
    <div class="fs-fade-out-top" />
    <slot />
    <div class="fs-fade-out-bottom" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref, watch } from "vue";

import { useBreakpoints, useColors, useDebounce } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSFadeOut",
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: true
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "100%"
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "0"
    },
    maskHeight: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "64px"
    }
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const { windowWidth } = useBreakpoints();
    const { debounce } = useDebounce();
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);

    const fadeOutRef = ref(null);
    const bottomMaskHeight = ref("0px");
    const topMaskHeight = ref("0px");

    const style = computed((): { [key: string] : string | undefined } => {
      return {
        "--fs-fade-out-height"             : sizeToVar(props.height),
        "--fs-fade-out-width"              : sizeToVar(props.width),
        "--fs-fade-out-padding"            : sizeToVar(props.padding),
        "--fs-fade-out-mask-color"         : backgrounds.base,
        "--fs-fade-out-top-mask-height"    : topMaskHeight.value,
        "--fs-fade-out-bottom-mask-height" : bottomMaskHeight.value,
      };
    });

    const onScroll = ({ target }): void => debounce(() => {
      const currentTopMaskHeight = target.children[0].clientHeight;
      const currentBottomMaskHeight = target.children[target.children.length - 1].clientHeight;
      const contentHeight = target.scrollHeight - currentTopMaskHeight - currentBottomMaskHeight;

      if (target.clientHeight >= contentHeight) {
        bottomMaskHeight.value = "0px";
        topMaskHeight.value = "0px";
        return;
      }
      if (target.scrollHeight - target.scrollTop - target.clientHeight < 1) {
        bottomMaskHeight.value = "0px";
      }
      else {
        bottomMaskHeight.value = sizeToVar(props.maskHeight);
      }
      if (target.scrollTop === 0) {
        topMaskHeight.value = "0px";
      }
      else {
        topMaskHeight.value = sizeToVar(props.maskHeight);
      }

      const event = {
        target,
        onTop: topMaskHeight.value === "0px",
        onBottom: bottomMaskHeight.value === "0px"
      };

      emit("scroll", event);
    }, 25);

    const onResize = (): void => debounce(() => {
      if (fadeOutRef.value) {
        const currentTopMaskHeight = (fadeOutRef.value as any).children[0].clientHeight;
        const currentBottomMaskHeight = (fadeOutRef.value as any).children[(fadeOutRef.value as any).children.length - 1].clientHeight;
        const contentHeight = (fadeOutRef.value as any).scrollHeight - currentTopMaskHeight - currentBottomMaskHeight;

        if ((fadeOutRef.value as any).clientHeight < contentHeight) {
          if ((fadeOutRef.value as any).scrollHeight - (fadeOutRef.value as any).scrollTop - (fadeOutRef.value as any).clientHeight > 0) {
            bottomMaskHeight.value = sizeToVar(props.maskHeight);
          }
          if ((fadeOutRef.value as any).scrollTop > 0) {
            topMaskHeight.value = sizeToVar(props.maskHeight);
          }
        }
        else {
          bottomMaskHeight.value = "0px";
          topMaskHeight.value = "0px";
        }
      }
    }, 200);

    onMounted((): void => {
      if (fadeOutRef.value) {
        if ((fadeOutRef.value as any).clientHeight < (fadeOutRef.value as any).scrollHeight) {
          bottomMaskHeight.value = sizeToVar(props.maskHeight);
        }
      }
    });

    watch(() => windowWidth.value, onResize);

    return {
      fadeOutRef,
      style,
      onScroll
    };
  }
});
</script>