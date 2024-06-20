<template>
  <FSCol
    class="fs-load-data-table"
    gap="16px"
    :style="style"
  >
    <FSRow
      align="bottom-center"
    >
      <FSLoader
        variant="input"
      />
      <FSLoader
        variant="button"
      />
      <v-spacer />
      <FSLoader
        variant="button"
      />
      <FSLoader
        variant="button"
      />
    </FSRow>
    <FSRow>
      <FSLoader
        variant="chip"
      />
      <FSLoader
        variant="chip"
      />
      <FSLoader
        variant="chip"
      />
    </FSRow>
    <v-skeleton-loader
      type="table-row-divider@10"
    />
    <FSRow
      align="center-right"
    >
      <FSLoader
        height="16px"
        width="100px"
      />
      <FSLoader
        width="120px"
        :height="['40px', '36px']"
      />
      <FSLoader
        variant="button"
      />
      <FSLoader
        variant="button"
      />
      <FSLoader
        variant="button"
      />
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSLoader from "../FSLoader.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSLoadDataTable",
  components: {
    FSLoader,
    FSCol,
    FSRow
  },
  setup() {
    const { getColors } = useColors();

    const backgroundColors = getColors(ColorEnum.Background);

    const style = computed((): { [key: string] : string | null | undefined } => {
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