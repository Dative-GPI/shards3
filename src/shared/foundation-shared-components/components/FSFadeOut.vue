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
      type: [Array, String, Number] as PropType<string[] | number[] | string | number>,
      required: true
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number>,
      required: false,
      default: "100%"
    },
    padding: {
      type: [String, Number],
      required: false,
      default: "0"
    },
    maskHeight: {
      type: [String, Number],
      required: false,
      default: "64px"
    }
  },
  setup(props) {
    const { windowWidth } = useBreakpoints();
    const { debounce } = useDebounce();
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);

    const fadeOutRef = ref(null);
    const bottomMaskHeight = ref("0px");
    const topMaskHeight = ref("0px");

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-fade-out-height"             : sizeToVar(props.height),
        "--fs-fade-out-width"              : sizeToVar(props.width),
        "--fs-fade-out-padding"            : sizeToVar(props.padding),
        "--fs-fade-out-mask-color"         : backgrounds.base,
        "--fs-fade-out-top-mask-height"    : topMaskHeight.value,
        "--fs-fade-out-top-mask-top"       : topPadding.value,
        "--fs-fade-out-bottom-mask-height" : bottomMaskHeight.value,
        "--fs-fade-out-bottom-mask-bottom" : bottomPadding.value
      };
    });

    const topPadding = computed((): string => {
      switch (typeof props.padding) {
        case "number": return sizeToVar(props.padding);
        default: 
          const paddings = props.padding.split(" ");
          let tempPadding = "0px";
          switch (paddings.length) {
            case 0 :
              break;
            default:
              tempPadding = "-" + sizeToVar(paddings[0]);
              break;
          }
          if (tempPadding === "0px") {
            return "-1px";
          }
          return tempPadding;
      }
    });

    const bottomPadding = computed((): string => {
      switch (typeof props.padding) {
        case "number": return sizeToVar(props.padding);
        default: 
          const paddings = props.padding.split(" ");
          let tempPadding = "0px";
          switch (paddings.length) {
            case 0 :
              break;
            case 1 :
            case 2 :
              tempPadding = "-" + sizeToVar(paddings[0]);
              break;
            default:
              tempPadding = "-" + sizeToVar(paddings[2]);
              break;
          }
          if (tempPadding === "0px") {
            return "-1px";
          }
          return tempPadding;
      }
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
    }, 25);

    const onResize = (): void => debounce(() => {
      if (fadeOutRef.value) {
        const currentTopMaskHeight = fadeOutRef.value.children[0].clientHeight;
        const currentBottomMaskHeight = fadeOutRef.value.children[fadeOutRef.value.children.length - 1].clientHeight;
        const contentHeight = fadeOutRef.value.scrollHeight - currentTopMaskHeight - currentBottomMaskHeight;

        if (fadeOutRef.value.clientHeight < contentHeight) {
          if (fadeOutRef.value.scrollHeight - fadeOutRef.value.scrollTop - fadeOutRef.value.clientHeight > 0) {
            bottomMaskHeight.value = sizeToVar(props.maskHeight);
          }
          if (fadeOutRef.value.scrollTop > 0) {
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
        if (fadeOutRef.value.clientHeight < fadeOutRef.value.scrollHeight) {
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