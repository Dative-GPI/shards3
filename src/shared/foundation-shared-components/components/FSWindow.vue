<template>
  <v-window
    class="fs-window"
    v-bind="$attrs"
  >
    <v-window-item
      v-for="(component, index) in getChildren()"
      :value="value(component, index)"
      :key="index"
    >
      <component
        :is="component"
      />
    </v-window-item>
  </v-window>
</template>

<script lang="ts">
import { defineComponent, VNode } from "vue";

import { useDefaultSlot } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSWindow",
  setup() {
    const { getChildren } = useDefaultSlot();

    const value = (component: VNode, index: number): any => {
      return component?.props?.value ?? index;
    };

    return {
      getChildren,
      value
    }
  }
});
</script>