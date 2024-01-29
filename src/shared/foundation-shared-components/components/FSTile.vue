<template>
  <FSCard
    class="fs-tile"
    padding="12px"
    :style="style"
    :width="width"
    :height="height"
  >
    <slot />
    <FSContainer
      v-if="$props.editable"
      class="fs-tile-checkbox"
      :border="false"
    >
      <FSCheckbox
        :color="ColorEnum.Dark"
        :modelValue="$props.modelValue"
        @update:modelValue="() => $emit('update:modelValue', !$props.modelValue)"
      />
    </FSContainer>
      <div
        class="fs-tile-bottom"
        :style="style"
      />
  </FSCard>  
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSContainer from "./FSContainer.vue";
import FSCheckbox from "./FSCheckbox.vue";
import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSTile",
  components: {
    FSContainer,
    FSCheckbox,
    FSCard
  },
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    bottomColor: {
      type: [String, Array] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const { bottomColor } = toRefs(props);

    const { isMobileSized } = useBreakpoints();

    const bottomColors = useColors().getGradients(bottomColor.value);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-tile-border-color": bottomColors.base
      };
    });

    const width = computed(() => {
      return isMobileSized.value ? 336 : 352;
    });

    const height = computed(() => {
      return isMobileSized.value ? 156 : 170;
    });

    return {
      ColorEnum,
      style,
      width,
      height
    };
  }
});
</script>