<template>
  <v-badge
    v-if="$props.content"
    :content="$props.content"
    :color="$props.color"
    :bordered="true"
  >
    <template
      v-slot:default
    >
      <slot />
    </template>
  </v-badge>
  <slot
    v-else
    name="default"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSBadge",
  props: {
    content: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }, 
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  }
});
</script>