<template>
  <FSWrapGroup v-bind="$attrs">
    <FSTag
      v-for="(tag, index) in $props.tags"
      :key="index"
      :label="tag"
      :variant="$props.variant"
      :color="$props.color"
      :editable="$props.editable"
      @remove="() => $emit('remove', tag)"
    />
    <slot />
  </FSWrapGroup>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSWrapGroup from "./FSWrapGroup.vue";
import FSTag from "./FSTag.vue";

export default defineComponent({
  name: "FSTagGroup",
  components: {
    FSWrapGroup,
    FSTag
  },
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  }
});
</script>