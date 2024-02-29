<template>
  <FSCol
    class="fs-load-data-table"
    gap="16px"
    :style="style"
  >
    <FSRow
      align="bottom-center"
    >
      <v-skeleton-loader
        type="button"
      />
      <v-skeleton-loader
        type="button"
      />
      <v-spacer />
      <v-skeleton-loader
        type="button"
      />
      <v-skeleton-loader
        type="button"
      />
    </FSRow>
    <FSRow>
      <v-skeleton-loader
        type="chip"
      />
      <v-skeleton-loader
        type="chip"
      />
      <v-skeleton-loader
        type="chip"
      />
    </FSRow>
    <v-skeleton-loader
      type="table-row-divider@10"
    />
    <FSRow
      align="bottom-right"
    >
      <v-skeleton-loader
        type="button"
      />
      <v-skeleton-loader
        type="button"
      />
      <v-skeleton-loader
        type="button"
      />
      <v-skeleton-loader
        type="button"
      />
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSLoadDataTable",
  components: {
    FSCol,
    FSRow
  },
  setup() {
    const { isMobileSized } = useBreakpoints();

    const backgroundColors = useColors().getColors(ColorEnum.Background);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-load-data-table-background-color": backgroundColors.base
      };
    });

    return {
      style
    };
  }
});
</script>