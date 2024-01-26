<template>
  <div
    class="fs-divider"
    :style="style"
  />
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSDivider",
  components: {
      
  },
  props: {
    width: {
      type: String,
      required: false,
      default: "100%"
    }
  },
  setup(props) {
    const { width } = toRefs(props);

    const lights = useColors().getColors(ColorEnum.Light);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
        return {
            "--fs-divider-width": width.value,
            "--fs-divider-color": lights.dark
        }
    });

    return {
      style
    }
  }
});
</script>