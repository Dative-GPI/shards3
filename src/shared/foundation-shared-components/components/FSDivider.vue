<template>
  <div v-if="isEmpty"
    class="fs-divider"
    :style="style" />

  <FSRow v-else align="center-center" :gap="24">
    <FSCol class="fs-divider-around"
      :style="style" />

    <FSText variant="light" font="text-h4">
      <slot>
        {{ label }}
      </slot>
    </FSText>

    <FSCol class="fs-divider-around"
      :style="style" />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSText from "./FSText.vue";

export default defineComponent({
  name: "FSDivider",
  components: {
    FSText
  },
  props: {
    width: {
      type: [String, Number],
      required: false,
      default: "100%"
    },
    label: {
      type: String,
      required: false,
      default: null
    },
  },
  setup(props) {
    const { getColors } = useColors();
    const { slots } = useSlots();

    const lights = getColors(ColorEnum.Light);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-divider-width": sizeToVar(props.width),
        "--fs-divider-color": lights.dark
      }
    });

    const isEmpty = computed(() => {
      return !slots.default && !props.label;
    });

    return {
      style,
      isEmpty
    }
  }
});
</script>