<template>
  <FSContainer
    class="fs-card"
    :style="style"
    v-bind="$attrs"
  >
    <slot>
      <FSCol
        :gap="$props.gap"
      >
        <FSRow
          v-if="$slots.header"
        >
          <slot name="header" />
        </FSRow>
        <FSRow
          v-if="$slots.body"
        >
          <slot name="body" />
        </FSRow>
        <FSRow
          v-if="$slots.footer"
        >
          <slot name="footer" />
        </FSRow>
      </FSCol>
    </slot>
  </FSContainer>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSContainer from "./FSContainer.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCard",
  components: {
    FSContainer,
    FSCol,
    FSRow
  },
  props: {
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number>,
      required: false,
      default: null
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number>,
      required: false,
      default: null
    },
    gap: {
      type: [String, Number],
      required: false,
      default: "8px"
    }
  },
  setup(props) {
    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-card-width" : sizeToVar(props.width),
        "--fs-card-height": sizeToVar(props.height)
      };
    });

    return {
      style
    };
  }
});
</script>