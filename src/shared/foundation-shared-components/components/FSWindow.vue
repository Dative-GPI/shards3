<template>
  <v-window
    class="fs-window"
    :style="style"
    :touch="false"
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
import { computed, defineComponent, PropType, VNode } from "vue";

import { useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSWindow",
  props: {
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    }
  },
  setup(props) {
    const { getChildren } = useSlots();

    const style = computed((): { [key: string] : string | undefined } => ({
      "--fs-window-width": sizeToVar(props.width)
    }));

    const value = (component: VNode, index: number): any => {
      return component?.props?.value ?? index;
    };

    return {
      style,
      getChildren,
      value
    }
  }
});
</script>