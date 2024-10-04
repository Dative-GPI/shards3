<template>
  <v-slide-group
    class="fs-slide-group"
    ref="slideGroupRef"
    :showArrows="true"
    :id="elementId"
    :style="style"
    v-bind="$attrs"
  >
    <template
      #prev
    >
      <FSButtonPreviousIcon
        :color="ColorEnum.Dark"
        @click.prevent.stop="goToPrev"
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
        :class="nextClasses"
        @click.prevent.stop="goToNext"
      />
    </template>
  </v-slide-group>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, type PropType, ref, type StyleValue } from "vue";

import { useBreakpoints, useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";
import { uuidv4 } from "@dative-gpi/bones-ui/tools/uuid";

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
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "fit-content"
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "fit-content"
    },
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
    speed: {
      type: Number,
      required: false,
      default: 250
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();
    const { getChildren } = useSlots();
    const { getColors } = useColors();

    const darks = getColors(ColorEnum.Dark);

    const forceActive = ref(false);

    const slideGroupRef = ref<HTMLElement | null>(null);
    const resizeObserver = ref<ResizeObserver | null>(null);
    
    const elementId = `id${uuidv4()}`;

    const style = computed((): StyleValue => ({
      "--fs-group-padding"    : sizeToVar(props.padding),
      "--fs-group-gap"        : sizeToVar(props.gap),
      "--fs-group-color"      : darks.soft,
      "--fs-group-hover-color": darks.dark,
      "--fs-group-width"      : sizeToVar(props.width),
      "--fs-group-height"     : sizeToVar(props.height),
      "--fs-group-icon-size"  : isMobileSized.value ? "20px" : "24px",
    }));

    const nextClasses = computed((): string[] => {
      const classes = ["fs-slide-group-next"];
      if (slideGroupRef.value) {
        if (forceActive.value) {
          classes.push("fs-slide-group-next-active");
        }
      }
      return classes;
    });

    const goToStart = () => {
      if (slideGroupRef.value) {
        const scrollElement = (slideGroupRef.value as any).$el.children[1];
        if (scrollElement && scrollElement.scrollTo) {
          scrollElement.scrollTo({ left: -scrollElement.scrollLeft, behavior: "smooth" });
        }
      }
    };

    const goToEnd = () => {
      if (slideGroupRef.value) {
        const scrollElement = (slideGroupRef.value as any).$el.children[1];
        if (scrollElement && scrollElement.scrollTo) {
          scrollElement.scrollTo({ left: scrollElement.scrollWidth - scrollElement.scrollLeft, behavior: "smooth" });
        }
      }
    };

    const goToPrev = () => {
      if (slideGroupRef.value && (slideGroupRef.value as any).scrollTo) {
        (slideGroupRef.value as any).scrollTo("prev");
      }
    };

    const goToNext = () => {
      if (slideGroupRef.value && (slideGroupRef.value as any).scrollTo) {
        (slideGroupRef.value as any).scrollTo("next");
        forceActive.value = false;
      }
    };

    onMounted((): void => {
      resizeObserver.value = new ResizeObserver(entries => {
        entries.forEach(() => {
          (slideGroupRef.value as any).scrollTo("prev");
          forceActive.value = true;
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
      slideGroupRef,
      nextClasses,
      ColorEnum,
      elementId,
      style,
      getChildren,
      goToStart,
      goToNext,
      goToPrev,
      goToEnd
    };
  }
});
</script>