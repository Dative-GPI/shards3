<template>
  <FSCard
    class="fs-tile"
    padding="12px"
    :style="style"
    :width="width"
    :height="height"
  >
    <slot />
    <FSCard
      v-if="$props.editable"
      class="fs-tile-checkbox"
      :border="false"
    >
      <FSCheckbox
        :color="ColorEnum.Dark"
        :modelValue="$props.modelValue"
        @update:modelValue="() => $emit('update:modelValue', !$props.modelValue)"
      />
    </FSCard>
    <div
      class="fs-tile-bottom"
      :style="style"
    />
  </FSCard>  
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCheckbox from "../FSCheckbox.vue";
import FSCard from "../FSCard.vue";

export default defineComponent({
  name: "FSTile",
  components: {
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
      type: [Array, String] as PropType<ColorBase[] | ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { isMobileSized } = useBreakpoints();
    const { getGradients } = useColors();

    const bottomColors = computed(() => getGradients(props.bottomColor));

    const style = computed((): { [key: string] : string | undefined } => {
      return {
        "--fs-tile-border-color": bottomColors.value.base
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