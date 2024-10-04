<template>
  <FSCard
    class="fs-load-tile"
    padding="11px"
    :height="heights.card"
    :width="widths.card"
    :style="style"
  >
    <FSRow
      align="center-center"
      height="fill"
      width="fill"
      gap="24px"
    >
      <FSCol
        :height="heights.col"
        :width="widths.col"
        gap="24px"
      >
        <FSCol>
          <FSLoader
            variant="text-button"
          />
          <FSLoader
            variant="text-overline"
          />
        </FSCol>
        <FSCol>
          <FSLoader
            variant="text-overline"
          />
          <FSLoader
            variant="text-overline"
          />
        </FSCol>
      </FSCol>
      <FSLoader
        :height="heights.image"
        :width="widths.image"
      />
    </FSRow>
    <FSCard
      v-if="$props.editable"
      class="fs-tile-checkbox"
      :height="['40px', '32px']"
      :width="['40px', '32px']"
      :border="false"
    >
      <FSCheckbox
        :modelValue="$props.modelValue"
        @update:modelValue="() => $emit('update:modelValue', !$props.modelValue)"
      />
    </FSCard>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, type StyleValue } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCheckbox from "../FSCheckbox.vue";
import FSLoader from "../FSLoader.vue";
import FSCard from "../FSCard.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSLoadTile",
  components: {
    FSCheckbox,
    FSLoader,
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
  emits: ["update:modelValue"],
  setup() {
    const { isMobileSized } = useBreakpoints();
    const { getColors } = useColors();

    const backgroundColors = getColors(ColorEnum.Background);

    const style = computed((): StyleValue => ({
      "--fs-load-tile-background-color": backgroundColors.base
    }));

    const heights = computed(() => {
      return {
        image: isMobileSized.value ? "90px" : "100px",
        card:  isMobileSized.value ? "156px" : "170px",
        col:   isMobileSized.value ? "90px" : "100px"
      }
    });

    const widths = computed(() => {
      return {
        image: isMobileSized.value ? "90px" : "100px",
        card:  isMobileSized.value ? "336px" : "352px",
        col:   isMobileSized.value ? "198px" : "204px"
      }
    });

    return {
      heights,
      widths,
      style
    };
  }
});
</script>