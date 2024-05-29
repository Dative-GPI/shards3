<template>
  <v-slide-group
    class="fs-wrap-group"
    ref="wrapGroupRef"
    :style="style"
    v-bind="$attrs"
  >
    <v-slide-group-item
      v-for="(component, index) in getChildren()"
      :key="index"
    >
      <component
        :is="component"
      />
    </v-slide-group-item>
  </v-slide-group>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, PropType, ref } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSWrapGroup",
  props: {
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "0"
    },
    gap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "8px"
    }
  },
  setup(props) {
    const { getChildren } = useSlots();
    const { getColors } = useColors();

    const darks = getColors(ColorEnum.Dark);

    const wrapGroupRef = ref<HTMLElement | null>(null);
    const resizeObserver = ref<ResizeObserver | null>(null);

    const style = computed((): { [key: string] : string | null | undefined } => ({
      "--fs-group-padding"    : sizeToVar(props.padding),
      "--fs-group-gap"        : sizeToVar(props.gap),
      "--fs-group-color"      : darks.light,
      "--fs-group-hover-color": darks.dark
    }));

    onMounted((): void => {
      resizeObserver.value = new ResizeObserver(entries => {
        entries.forEach(() => {
          (wrapGroupRef.value as any).scrollTo("prev");
        });
      });
      if (document.querySelector(".fs-wrap-group")) {
        resizeObserver.value.observe(document.querySelector(".fs-wrap-group")!);
      }
    });

    onUnmounted((): void => {
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
      }
    });

    return {
      wrapGroupRef,
      style,
      getChildren
    };
  }
});
</script>