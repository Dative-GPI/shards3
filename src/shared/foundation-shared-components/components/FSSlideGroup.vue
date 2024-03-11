<template>
  <v-slide-group
    class="fs-slide-group"
    ref="slideGroupRef"
    :showArrows="true"
    :style="style"
    v-bind="$attrs"
  >
    <template #prev>
      <FSButton
        v-if="$props.dash"
        icon="mdi-chevron-double-left"
        variant="icon"
        @click="goToStart"
      />
      <FSButtonPreviousIcon
        :color="ColorEnum.Dark"
      />
    </template>
    <template #default>
      <v-slide-group-item
        v-for="(component, index) in getChildren()"
        :key="index"
      >
        <component :is="component" />
      </v-slide-group-item>
    </template>
    <template #next>
      <FSButtonNextIcon
        :color="ColorEnum.Dark"
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
import { computed, defineComponent, ref } from "vue";

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
      type: [String, Number],
      required: false,
      default: "0"
    },
    gap: {
      type: [String, Number],
      required: false,
      default: "8px"
    },
    dash: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { getChildren } = useSlots();
    const { getColors } = useColors();

    const darks = getColors(ColorEnum.Dark);

    const slideGroupRef = ref(null);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => ({
      "--fs-group-arrows-width": props.dash ? "52px" : "32px",
      "--fs-group-padding"    : sizeToVar(props.padding),
      "--fs-group-gap"        : sizeToVar(props.gap),
      "--fs-group-color"      : darks.light,
      "--fs-group-hover-color": darks.dark
    }));

    const goToStart = () => {
      if (slideGroupRef.value) {
        slideGroupRef.value.scrollOffset = 0;
      }
    };

    const goToEnd = () => {
      if (slideGroupRef.value) {
        const contentSize = slideGroupRef.value.$el.children[1].children[0].clientWidth;
        const containerSize = slideGroupRef.value.$el.clientWidth;
        const arrowsOffset = props.dash ? 104 : 64;
        slideGroupRef.value.scrollOffset = (contentSize - containerSize + arrowsOffset);
      }
    };

    return {
      slideGroupRef,
      ColorEnum,
      style,
      getChildren,
      goToStart,
      goToEnd
    };
  }
});
</script>