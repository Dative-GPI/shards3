<template>
  <FSSimpleIconTileUI
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSSimpleIconTileUI from "./FSSimpleIconTileUI.vue";

export default defineComponent({
  name: "FSDashboardShallowTileUI",
  components: {
    FSSimpleIconTileUI
  }
});
</script>