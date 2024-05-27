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
import { computed, defineComponent, PropType, ref } from "vue";

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

    const style = computed((): { [key: string] : string | null | undefined } => ({
      "--fs-group-arrows-width": props.dash ? "52px" : "32px",
      "--fs-group-padding"    : sizeToVar(props.padding),
      "--fs-group-gap"        : sizeToVar(props.gap),
      "--fs-group-color"      : darks.light,
      "--fs-group-hover-color": darks.dark
    }));

    const goToStart = () => {
      if (slideGroupRef.value) {
        (slideGroupRef.value as any).scrollOffset = 0;
      }
    };

    const goToPrev = () => {
      if (slideGroupRef.value) {
        (slideGroupRef.value as any).scrollOffset = Math.max(0, (slideGroupRef.value as any).scrollOffset - props.speed);
      }
    };

    const goToEnd = () => {
      if (slideGroupRef.value) {
        const contentSize = (slideGroupRef.value as any).$el.children[1].children[0].clientWidth;
        const containerSize = (slideGroupRef.value as any).$el.clientWidth;
        const arrowsOffset = props.dash ? 104 : 64;
        (slideGroupRef.value as any).scrollOffset = (contentSize - containerSize + arrowsOffset);
      }
    };

    const goToNext = () => {
      if (slideGroupRef.value) {
        const contentSize = (slideGroupRef.value as any).$el.children[1].children[0].clientWidth;
        const containerSize = (slideGroupRef.value as any).$el.clientWidth;
        const arrowsOffset = props.dash ? 104 : 64;
        (slideGroupRef.value as any).scrollOffset = Math.min(contentSize - containerSize + arrowsOffset, (slideGroupRef.value as any).scrollOffset + props.speed);
      }
    };

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