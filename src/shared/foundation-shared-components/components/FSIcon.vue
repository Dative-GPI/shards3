<template>
  <v-icon
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </v-icon>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "FSIcon",
  props: {
    size: {
      type: String as PropType<"s" | "m" | "l">,
      required: false,
      default: "m"
    }
  },
  setup(props) {
    const classes = computed((): string[] => {
      return [`fs-icon-${props.size}`];
    });

    return {
      classes
    };
  }
});
</script>