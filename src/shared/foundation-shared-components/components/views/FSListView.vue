<template>
  <FSBaseView>
    <template
      #header
    >
      <FSListHeader
        ref="headerRef"
        :breadcrumbs="$props.breadcrumbs"
        :title="$props.title"
      >
        <template
          #toolbar
        >
          <slot
            name="toolbar"
          />
        </template>
      </FSListHeader>
    </template>
    <template
      #default
    >
      <FSFadeOut
        :height="height"
      >
        <slot
          name="default"
        />
      </FSFadeOut>
    </template>
  </FSBaseView>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { type FSBreadcrumbItem } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSBaseView from "./FSBaseView.vue";
import FSListHeader from "./FSListHeader.vue";
import FSFadeOut from "../FSFadeOut.vue";

export default defineComponent({
  name: "FSListView",
  components: {
    FSBaseView,
    FSListHeader,
    FSFadeOut
  },
  props: {
    title: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    breadcrumbs: {
      type: Array as PropType<FSBreadcrumbItem[]>,
      required: false,
      default: () => []
    }
  },
  setup() {
    const { isExtraSmall, windowHeight } = useBreakpoints();

    const headerRef = ref<HTMLElement | null>(null);

    const height = computed((): string => {
      let other = isExtraSmall.value ? 16 + 16 : 24 + 24 // Paddings
        + (headerRef.value?.clientHeight ?? 0);          // Header

      return `${windowHeight.value - other}px`;
    });

    return {
      headerRef,
      height
    };
  }
});
</script>