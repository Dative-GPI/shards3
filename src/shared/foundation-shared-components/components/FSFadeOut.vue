<template>
  <div
    class="fs-fade-out"
    ref="fadeOutRef"
    :id="elementId"
    :style="style"
    @scroll="debounceMasks"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from "vue";

import { useBreakpoints, useColors, useDebounce } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";
import { uuidv4 } from "@dative-gpi/bones-ui/tools/uuid";

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
    const { windowHeight, windowWidth } = useBreakpoints();
    const { debounce } = useDebounce();
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);

    const fadeOutRef = ref(null);
    const bottomMaskHeight = ref("0px");
    const topMaskHeight = ref("0px");
    const lastScroll = ref(0);

    const resizeObserver = ref<ResizeObserver | null>(null);

    const elementId = `id${uuidv4()}`;

    const style = computed((): { [key: string] : string | null | undefined } => {
      return {
        "--fs-fade-out-height"             : sizeToVar(props.height),
        "--fs-fade-out-width"              : sizeToVar(props.width),
        "--fs-fade-out-padding"            : sizeToVar(props.padding),
        "--fs-fade-out-mask-color"         : backgrounds.base,
        "--fs-fade-out-top-mask-height"    : topMaskHeight.value,
        "--fs-fade-out-bottom-mask-height" : bottomMaskHeight.value,
      };
    });

    const handleMasks = () => {
      if (fadeOutRef.value) {
        if ((fadeOutRef.value as any).clientHeight >= (fadeOutRef.value as any).scrollHeight) {
          bottomMaskHeight.value = "0px";
          topMaskHeight.value = "0px";
          return;
        }
        if ((fadeOutRef.value as any).scrollHeight - (fadeOutRef.value as any).scrollTop - (fadeOutRef.value as any).clientHeight < 1.5) {
          bottomMaskHeight.value = "0px";
        }
        else {
          bottomMaskHeight.value = sizeToVar(props.maskHeight);
        }
        if ((fadeOutRef.value as any).scrollTop < 0.5) {
          topMaskHeight.value = "0px";
        }
        else {
          topMaskHeight.value = sizeToVar(props.maskHeight);
        }

        const event = {
          target: fadeOutRef.value,
          onTop: topMaskHeight.value === "0px",
          onBottom: bottomMaskHeight.value === "0px",
          goingUp: (fadeOutRef.value as any).scrollTop < lastScroll.value,
        };

        emit("scroll", event);
        lastScroll.value = (fadeOutRef.value as any).scrollTop;
      }
    };

    const debounceMasks = (): void => debounce(handleMasks, 50);

    onMounted((): void => {
      debounceMasks();

      resizeObserver.value = new ResizeObserver(entries => {
        entries.forEach(() => {
          debounceMasks();
        });
      });
      if (document.querySelector(`#${elementId}`)) {
        resizeObserver.value.observe(document.querySelector(`#${elementId}`)!);
      }
    });

    onUnmounted((): void => {
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
      }
    });

    watch([() => windowWidth.value, () => windowHeight.value], debounceMasks);

    return {
      fadeOutRef,
      elementId,
      style,
      debounceMasks
    };
  }
});
</script>