<template>
  <v-slide-group
    class="fs-wrap-group"
    :style="style"
    v-bind="$attrs"
  >
    <v-slide-group-item
      v-for="(component, index) in getChildren()"
      :key="index"
    >
      <component :is="component" />
    </v-slide-group-item>
  </v-slide-group>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSWrapGroup",
  props: {
    padding: {
      type: [String, Number],
      required: false,
      default: 0
    },
    gap: {
      type: Number,
      required: false,
      default: 8
    }
  },
  setup(props) {
    const { padding, gap } = toRefs(props);

    const { getChildren } = useSlots();

    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-group-padding"    : typeof(padding.value) === "string" ? padding.value : `${padding.value}px`,
        "--fs-group-gap"        : `${gap.value}px`,
        "--fs-group-color"      : darks.light,
        "--fs-group-hover-color": darks.dark
      }
    });

    return {
      style,
      getChildren
    };
  }
});
</script>