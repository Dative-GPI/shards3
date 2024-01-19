<template>
  <FSCard
    class="fs-tile"
    :color="$props.color"
    :style="style"
    :padding="12"
  >
    <slot />
    <FSContainer
      v-if="$props.editable"
      class="fs-tile-checkbox"
      :border="false"
    >
      <FSCheckbox
        :modelValue="$props.modelValue"
        @update:modelValue="() => $emit('update:modelValue', !$props.modelValue)"
      />
    </FSContainer>
  </FSCard>  
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

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
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Dark
    },
    bottomColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const { bottomColor } = toRefs(props);

    const bottomColors = useColors().getColors(bottomColor.value);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-tile-border-color": bottomColors.base
      };
    });

    return {
      style
    };
  }
})

</script>