<template>
  <v-carousel
    :hideDelimiters="true"
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    <template v-for="(_, name) in slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <v-carousel-item
      v-for="(component, index) in getChildren('default')"
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
import { computed, defineComponent, PropType, VNode } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSCarousel",
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number>,
      required: false,
      default: "100%"
    }
  },
  setup(props) {
    const { slots, getChildren } = useSlots();
    const { getColors } = useColors();
    
    delete slots.default;

    const backgrounds = getColors(ColorEnum.Background);

    const style = computed((): { [key: string] : string | undefined } => {
      return {
        "--fs-carousel-height"          : sizeToVar(props.height),
        "--fs-carousel-background-color": backgrounds.base
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-carousel", "fs-background"];
      return classNames;
    });

    const value = (component: VNode, index: number): any => {
      return component?.props?.value ?? index;
    };

    return {
      classes,
      slots,
      style,
      getChildren,
      value
    };
  }
})
</script>