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
import { computed, defineComponent, PropType, ref } from "vue";

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

    const topMaskHeight = ref("0px");
    const bottomMaskHeight = ref(sizeToVar(props.maskHeight));

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-fade-out-height"            : sizeToVar(props.height),
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
          switch (paddings.length) {
            case 0 : return "0px";
            default: return "-" + sizeToVar(paddings[0]);
          }
      }
    });

    const bottomPadding = computed((): string => {
      switch (typeof props.padding) {
        case "number": return sizeToVar(props.padding);
        default: 
          const paddings = props.padding.split(" ");
          switch (paddings.length) {
            case 0 : return "0px";
            case 1 :
            case 2 : return "-" + sizeToVar(paddings[0]);
            default: return "-" + sizeToVar(paddings[2]);
          }
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

    return {
      style,
      onScroll
    };
  }
});
</script>