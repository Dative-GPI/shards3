<template>
  <v-breadcrumbs
    class="fs-breadcrumbs"
    :items="items"
    :style="style"
    v-bind="$attrs"
  >
    <template
      #title="{ item }"
    >
      <FSSpan
        class="fs-breadcrumbs-label"
      >
        {{ item.title }}
      </FSSpan>
    </template>
    <template
      #divider
    >
      <FSIcon
        class="fs-breadcrumbs-divider"
        size="m"
      >
        mdi-chevron-right
      </FSIcon>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { ColorEnum, type FSBreadcrumbItem } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";

import { sizeToVar } from "../utils";

import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";

export default defineComponent({
  name: "FSBreadcrumbs",
  components: {
    FSSpan,
    FSIcon
  },
  props: {
    items: {
      type: Array as PropType<FSBreadcrumbItem[]>,
      required: false,
      default: () => []
    }
  },
  setup(props) {
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();

    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => ({
      "--fs-breadcrumbs-height"        : sizeToVar(["20px", "16px"]),
      "--fs-breadcrumbs-color"         : darks.dark,
      "--fs-breadcrumbs-active-color"  : darks.base,
      "--fs-breadcrumbs-disabled-color": darks.soft
    }));

    const items = computed((): FSBreadcrumbItem[] => {
      if (isExtraSmall.value && props.items.length > 3) {
        const mobileItems: FSBreadcrumbItem[] = [0, -2, -1].map((index) => props.items.at(index)!)
        mobileItems.splice(1, 0, {
          title    : "...",
          disabled : true
        });
        return mobileItems;
      }
      return props.items;
    });

    return {
      items,
      style
    };
  }
});
</script>