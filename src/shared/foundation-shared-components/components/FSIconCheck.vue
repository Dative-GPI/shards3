<template>
  <FSIcon
    :color="color"
  >
    {{ icon }}
  </FSIcon>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "./FSIcon.vue";

export default defineComponent({
  name: "FSIconCheck",
  components: {
    FSIcon
  },
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false
    },
    withColor: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const icon = computed((): string => {
      return props.value ? "mdi-check-circle-outline" : "mdi-close-circle-outline";
    });

    const color = computed((): ColorBase | null => {
      if (!props.withColor) {
        return null;
      }
      return props.value ? ColorEnum.Success : ColorEnum.Error;
    });

    return {
      color,
      icon
    };
  }
});
</script>