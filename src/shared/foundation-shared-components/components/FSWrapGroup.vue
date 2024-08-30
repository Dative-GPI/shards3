<template>
  <v-slide-group
    class="fs-wrap-group"
    ref="wrapGroupRef"
    :showArrows="false"
    :id="elementId"
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
import { computed, defineComponent, onMounted, onUnmounted, type PropType, type StyleValue, ref } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";
import { uuidv4 } from "@dative-gpi/bones-ui/tools/uuid";

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

    const elementId = `id${uuidv4()}`;

    const style = computed((): StyleValue => ({
      "--fs-group-padding"    : sizeToVar(props.padding),
      "--fs-group-gap"        : sizeToVar(props.gap),
      "--fs-group-color"      : darks.soft,
      "--fs-group-hover-color": darks.dark
    }));

    onMounted((): void => {
      resizeObserver.value = new ResizeObserver(entries => {
        entries.forEach(() => {
          (wrapGroupRef.value as any).scrollTo("prev");
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

    return {
      wrapGroupRef,
      elementId,
      style,
      getChildren
    };
  }
});
</script>