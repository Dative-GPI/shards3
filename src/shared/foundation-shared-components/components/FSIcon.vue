<template>
  <v-icon
    :class="classes"
    :color="color"
    v-bind="$attrs"
  >
    <slot />
  </v-icon>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSIcon",
  props: {
    size: {
      type: String as PropType<"s" | "m" | "l">,
      required: false,
      default: "m"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"base" | "light" | "dark">,
      required: false,
      default: "base"
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const color = computed((): string | null => {
      if (props.color) {
        return getColors(props.color)[props.variant];
      }
      return null;
    });

    const classes = computed((): string[] => {
      return [`fs-icon-${props.size}`];
    });

    return {
      classes,
      color
    };
  }
});
</script>