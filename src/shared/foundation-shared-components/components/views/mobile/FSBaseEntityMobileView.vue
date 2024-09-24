<template>
  <FSCol
    padding="16px"
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FSBaseDefaultMobileView"
});
</script>