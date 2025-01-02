<template>
  <div
    class="fs-fade-out"
    ref="fadeOutRef"
    :id="elementId"
    @scroll="$emit('scroll', $event); debounceMasks()"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, type PropType, ref, watch } from "vue";

import { useBreakpoints, useColors, useDebounce } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";
import { uuidv4 } from "@dative-gpi/bones-ui/tools/uuid";

export default defineComponent({
  name: "FSFadeOut",
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
    },
    maxHeight: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
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
    },
    scrollOutside: {
      type: Boolean,
      required: false,
      default: true
    },
    hideHorizontalOverflow: {
      type: Boolean,
      required: false,
      default: true
    },
    disableTopMask: {
      type: Boolean,
      required: false,
      default: false
    },
    disableBottomMask: {
      type: Boolean,
      required: false,
      default: false
    },
    style:{
      type: Object,
      required: false
    }
  },
  emits: ["scroll"],
  setup(props) {
    const { windowHeight, windowWidth, isTouchScreenEnabled } = useBreakpoints();
    const { debounce } = useDebounce();
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);

    const fadeOutRef = ref<HTMLElement | null>(null);
    const bottomMaskHeight = ref("0px");
    const topMaskHeight = ref("0px");
    const lastScroll = ref(0);

    const resizeObserver = ref<ResizeObserver | null>(null);

    const elementId = `id${uuidv4()}`;

    const showOutsideScrollbar = computed(() => props.scrollOutside && !isTouchScreenEnabled.value);

    const style = computed((): {[index: string]: string} => ({
      "--fs-fade-out-height"            : props.height ? sizeToVar(props.height) : "initial",
      "--fs-fade-out-max-height"        : props.maxHeight ? sizeToVar(props.maxHeight) : "initial",
      "--fs-fade-out-width"             : sizeToVar(props.width),
      "--fs-fade-out-padding"           : sizeToVar(props.padding),
      "--fs-fade-out-width-offset"      : showOutsideScrollbar.value ? '12px' : '0px',
      "--fs-fade-out-padding-offset"    : showOutsideScrollbar.value ? '4px' : '0px',
      "--fs-fade-out-margin-right"      : showOutsideScrollbar.value ? '-12px' : '0px',
      "--fs-fade-out-mask-color"        : backgrounds.base,
      "--fs-fade-out-top-mask-height"   : props.disableTopMask ? '0px' : topMaskHeight.value,
      "--fs-fade-out-bottom-mask-height": props.disableBottomMask ? '0px' : bottomMaskHeight.value,
      "--fs-fade-out-x-overflow"        : props.hideHorizontalOverflow ? 'hidden' : 'auto', 
      ...props.style
    }));

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
        
        lastScroll.value = (fadeOutRef.value as any).scrollTop;
      }
    };

    // Delay to wait for animations to end before computing masks
    const debounceMasks = (): void => debounce(handleMasks, 280);

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

    watch(() => [style.value, fadeOutRef.value], () => {
      if(!fadeOutRef.value || !style.value) {
        return;
      }
      for(const key in style.value){
        fadeOutRef.value.style.setProperty(key, style.value[key])
      }
    }, { immediate: true})

    return {
      fadeOutRef,
      elementId,
      style,
      debounceMasks
    };
  }
});
</script>