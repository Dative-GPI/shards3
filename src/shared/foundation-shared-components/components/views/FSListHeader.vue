<template>
  <template
    v-if="isExtraSmall"
  >
    <FSCol
      gap="12px"
    >
      <FSText
        font="text-h3"
      >
        {{  $props.title }}
      </FSText>
      <FSBreadcrumbs
        :items="$props.breadcrumbs"
      />
    </FSCol>
  </template>
  <template
    v-else
  >
    <FSCol
      gap="16px"
    >
      <FSText
        font="text-h2"
      >
        {{  $props.title }}
      </FSText>
      <FSBreadcrumbs
        :items="$props.breadcrumbs"
      />
      <FSSlideGroup
        v-if="$slots['toolbar']"
        style="min-width: 100%;"
      >
        <slot
          name="toolbar"
        />
      </FSSlideGroup>
    </FSCol>
  </template>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type FSBreadcrumbItem } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSBreadcrumbs from "../FSBreadcrumbs.vue";
import FSSlideGroup from "../FSSlideGroup.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSListHeader",
  components: {
    FSBreadcrumbs,
    FSSlideGroup,
    FSText,
    FSCol
  },
  props: {
    title: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    breadcrumbs: {
      type: Array as PropType<Array<FSBreadcrumbItem>>,
      required: false,
      default: () => []
    },
  },
  setup() {
    const { isExtraSmall } = useBreakpoints();

    return {
      isExtraSmall
    };
  }
});
</script>