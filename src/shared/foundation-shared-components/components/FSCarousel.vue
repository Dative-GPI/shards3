<template>
  <v-carousel
    class="fs-carousel"
    :hideDelimiters="true"
    :style="style"
    v-bind="$attrs"
  >
    <template v-for="(_, name) in slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <v-carousel-item
      v-for="(component, index) in getChildren()"
      :value="value(component, index)"
      :key="index"
    >
      <component
        :is="component"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { computed, defineComponent, useSlots, VNode } from "vue";

import { useColors, useDefaultSlot } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSCarousel",
  setup() {
    const slots = { ...useSlots() };
    delete slots.default;

    const { getChildren } = useDefaultSlot();

    const backgrounds = useColors().getColors(ColorEnum.Background);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-carousel-background-color": backgrounds.base
      };
    });

    const value = (component: VNode, index: number): any => {
      return component?.props?.value ?? index;
    };

    return {
      getChildren,
      slots,
      style,
      value
    };
  }
})
</script>