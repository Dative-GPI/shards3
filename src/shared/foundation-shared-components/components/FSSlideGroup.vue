<template>
  <v-slide-group
    class="fs-slide-group"
    ref="slideGroupRef"
    :showArrows="true"
    :style="style"
    v-bind="$attrs"
  >
    <template
      #prev
    >
      <FSButton
        v-if="$props.dash"
        icon="mdi-chevron-double-left"
        variant="icon"
        @click="goToStart"
      />
      <FSButtonPreviousIcon
        :color="ColorEnum.Dark"
        :disabled="false"
        @click="goToPrev"
      />
    </template>
    <template
      #default
    >
      <v-slide-group-item
        v-for="(component, index) in getChildren()"
        :key="index"
      >
        <component
          :is="component"
        />
      </v-slide-group-item>
    </template>
    <template
      #next
    >
      <FSButtonNextIcon
        :color="ColorEnum.Dark"
        :disabled="false"
        @click="goToNext"
      />
      <FSButton
        v-if="$props.dash"
        icon="mdi-chevron-double-right"
        variant="icon"
        @click="goToEnd"
      />
    </template>
  </v-slide-group>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, PropType, ref } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSButtonPreviousIcon from "./buttons/FSButtonPreviousIcon.vue";
import FSButtonNextIcon from "./buttons/FSButtonNextIcon.vue";
import FSButton from "./FSButton.vue";

export default defineComponent({
  name: "FSSlideGroup",
  components: {
    FSButtonPreviousIcon,
    FSButtonNextIcon,
    FSButton
  },
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
    },
    dash: {
      type: Boolean,
      required: false,
      default: false
    },
    speed: {
      type: Number,
      required: false,
      default: 250
    }
  },
  setup(props) {
    const { getChildren } = useSlots();
    const { getColors } = useColors();

    const darks = getColors(ColorEnum.Dark);

    const slideGroupRef = ref<HTMLElement | null>(null);
    const resizeObserver = ref<ResizeObserver | null>(null);

    const style = computed((): { [key: string] : string | null | undefined } => ({
      "--fs-group-arrows-width": props.dash ? "52px" : "32px",
      "--fs-group-padding"    : sizeToVar(props.padding),
      "--fs-group-gap"        : sizeToVar(props.gap),
      "--fs-group-color"      : darks.light,
      "--fs-group-hover-color": darks.dark
    }));

    const goToStart = () => {
      if (slideGroupRef.value) {
        (slideGroupRef.value as any).scrollTo("prev");
        (slideGroupRef.value as any).scrollTo("prev");
      }
    };

    const goToPrev = () => {
      if (slideGroupRef.value) {
        (slideGroupRef.value as any).scrollTo("prev");
      }
    };

    const goToEnd = () => {
      if (slideGroupRef.value) {
        (slideGroupRef.value as any).scrollTo("next");
        (slideGroupRef.value as any).scrollTo("next");
      }
    };

    const goToNext = () => {
      if (slideGroupRef.value) {
        (slideGroupRef.value as any).scrollTo("next");
      }
    };

    onMounted((): void => {
      resizeObserver.value = new ResizeObserver(entries => {
        entries.forEach(() => {
          (slideGroupRef.value as any).scrollTo("prev");
        });
      });
      if (document.querySelector(".fs-slide-group")) {
        resizeObserver.value.observe(document.querySelector(".fs-slide-group")!);
      }
    });

    onUnmounted((): void => {
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
      }
    });

    return {
      slideGroupRef,
      ColorEnum,
      style,
      getChildren,
      goToStart,
      goToPrev,
      goToNext,
      goToEnd
    };
  }
});
</script>