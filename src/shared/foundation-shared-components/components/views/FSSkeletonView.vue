<template>
  <template
    v-if="isExtraSmall"
  >
    <FSCol
      padding="16px 4px 16px 12px"
      height="100%"
      gap="16px"
    >
      <slot
        name="header"
      >
        <slot
          name="title"
        >
          <FSRow
            gap="12px"
          >
            <slot
              name="title-image"
            />
            <slot
              name="title-texts"
            />
          </FSRow>
        </slot>
      </slot>
      <slot
        name="breadcrumbs"
      />
      <slot
        name="toolbar"
      />
      <slot
        name="title-append"
      />
      <slot
        name="default"
      />
    </FSCol>
  </template>
  <template
    v-else
  >
    <FSCol
      padding="24px 8px 24px 24px"
      height="100vh"
      gap="16px"
    >
      <slot
        name="header"
      >
        <slot
          name="title"
        >
          <FSRow
            gap="32px"
          >
            <slot
              name="title-image"
            />
            <slot
              name="title-texts"
            />
            <v-spacer />
            <slot
              name="title-append"
            />
          </FSRow>
        </slot>
      </slot>
      <slot
        name="breadcrumbs"
      />
      <slot
        name="toolbar"
      />
      <slot
        name="default"
      />
    </FSCol>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSSkeletonView",
  setup() {
    const { isExtraSmall } = useBreakpoints();

    return {
      isExtraSmall
    };
  }
});
</script>