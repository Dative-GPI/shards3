<template>
  <FSCard
    class="fs-load-tile"
    padding="11px"
    :style="style"
    :width="width"
    :height="height"
  >
    <FSRow
      align="center-center"
      height="fill"
      :gap="24"
    >
      <v-skeleton-loader
        type="article"
      />
      <v-skeleton-loader
        type="image"
      />
    </FSRow>
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
import { computed, defineComponent } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSContainer from "./FSContainer.vue";
import FSCheckbox from "./FSCheckbox.vue";
import FSCard from "./FSCard.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSTile",
  components: {
    FSContainer,
    FSCheckbox,
    FSCard,
    FSCol,
    FSRow
  },
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup() {
    const { isMobileSized } = useBreakpoints();

    const backgroundColors = useColors().getColors(ColorEnum.Background);

    const width = computed(() => {
      return isMobileSized.value ? 336 : 352;
    });

    const height = computed(() => {
      return isMobileSized.value ? 156 : 170;
    });

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-load-tile-background-color": backgroundColors.base
      };
    });

    return {
      width,
      height,
      style
    };
  }
});
</script>