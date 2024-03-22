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
import { computed, defineComponent, onMounted, PropType, ref } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
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
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);

    const fadeOutRef = ref(null);
    const topMaskHeight = ref("0px");
    const bottomMaskHeight = ref("0px");

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-fade-out-height"            : sizeToVar(props.height),
        "--fs-fade-out-width"             : sizeToVar(props.width),
        "--fs-fade-out-padding"           : sizeToVar(props.padding),
        "--fs-fade-out-mask-color"        : backgrounds.base,
        "--fs-fade-out-top-mask-height"   : topMaskHeight.value,
        "--fs-fade-out-top-mask-top"      : topPadding.value,
        "--fs-fade-out-bottom-mask-height": bottomMaskHeight.value,
        "--fs-fade-out-bottom-mask-bottom": bottomPadding.value
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

    const onScroll = ({ target }): void => {
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
    }

    onMounted((): void => {
      if (fadeOutRef.value) {
        if (fadeOutRef.value.clientHeight < fadeOutRef.value.scrollHeight) {
          bottomMaskHeight.value = sizeToVar(props.maskHeight);
        }
      }
    });

    return {
      fadeOutRef,
      style,
      onScroll
    };
  }
});
</script>