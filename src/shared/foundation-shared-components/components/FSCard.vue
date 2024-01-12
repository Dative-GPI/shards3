<template>
  <div
    class="fs-card"
    :style="style"
  >
    <slot name="default">
      <FSCol>
        <FSRow v-if="$slots.header">
          <slot name="header" />
        </FSRow>
        <FSRow v-if="$slots.body">
          <slot name="body" />
        </FSRow>
        <FSRow v-if="$slots.footer">
          <slot name="footer" />
        </FSRow>
      </FSCol>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCard",
  components: {
    FSCol,
    FSRow
  },
  props: {
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Dark
    },
  },
  setup(props) {
    const { color } = toRefs(props);

    const colors = useColors().getColors(color.value);

    const backgrounds = useColors().getColors(ColorBase.Background);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-card-background-color": backgrounds.base,
        "--fs-card-border-color"    : colors.base
      };
    });

    return {
      style
    };
  }
});
</script>