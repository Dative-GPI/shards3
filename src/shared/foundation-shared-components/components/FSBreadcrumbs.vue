<template>
  <v-breadcrumbs
    :style="style"
    :items="$props.items"
    v-bind="$attrs"
  >
    <template #title="{ item }">
      <FSSpan :class="classes(item)">
        {{ item.title }}
      </FSSpan>
    </template>
    <template #divider>
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
import { defineComponent, PropType, Ref, ref } from "vue";

import { ColorEnum, FSBreadcrumbItem } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

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
      required: true,
    }
  },
  setup() {
    const { getColors } = useColors();

    const darks = getColors(ColorEnum.Dark);

    const style: Ref<{ [key: string] : string }> = ref({
      "--fs-breadcrumbs-color": darks.dark,
      "--fs-breadcrumbs-active-color": darks.base,
      "--fs-breadcrumbs-disabled-color": darks.light
    });

    const classes = (item: FSBreadcrumbItem): string[] => {
      const classNames = ["fs-breadcrumbs-label"];
      if (item.disabled) {
        classNames.push("fs-breadcrumbs-label-disabled");
      }
      return classNames;
    };

    return {
      style,
      classes
    };
  }
});
</script>