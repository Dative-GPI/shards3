<template>
  <FSRow
    gap="32px"
  >
    <FSRow
      v-for="(item, index) in  items"
      :width="width"
      :key="index"
    >
      <FSCol
        gap="16px"
      >
        <FSText
          font="text-h3"
        >
          {{ item.categoryLabel }}
        </FSText>
        <FSGrid
          :items="item.items"
        >
          <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </FSGrid>
      </FSCol>
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { FSGridMosaic } from "@dative-gpi/foundation-shared-components/models";

import FSGrid from "./FSGrid.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSGridMosaic",
  components: {
    FSGrid,
    FSCol,
    FSRow
  },
  props: {
    items: {
      type: Array as PropType<FSGridMosaic[]>,
      default: [],
      required: false
    },
    cols: {
      type: Number as PropType<1 | 2>,
      required: false,
      default: 1
    }
  },
  setup(props) {
    const { isExtraSmall } = useBreakpoints();

    const width = computed(() => {
        return props.cols == 2 && !isExtraSmall.value ? "calc(50% - 16px)" : "100%";
    });

    return {
      width
    };
  }
});
</script>