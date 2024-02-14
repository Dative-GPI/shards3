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
  </FSContainer>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

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
      type: Number,
      required: false,
      default: null
    },
    height: {
      type: Number,
      required: false,
      default: null
    },
    gap: {
      type: Number,
      required: false,
      default: 8
    }
  },
  setup(props) {
    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-card-width": props.width ? `${props.width}px` : "auto",
        "--fs-card-height": props.height ? `${props.height}px` : "auto"
      };
    });

    return {
      style
    };
  }
});
</script>